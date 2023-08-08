const express = require('express');
const app = express();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

app.use(express.json());

app.post('/create-payment-session', async (req, res) => {
  try {
    const { cartItems } = req.body;

    // Calculate the total cost and other necessary details from cartItems
    const totalCost = cartItems.reduce((acc, item) => acc + item.Price, 0);

    // Create line items for each product in cartItems
    const lineItems = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.itemName,
            metadata: {
                shop_id: item.ShopID, // Include the shop ID in the metadata of each product
              },
          },
          unit_amount: item.Price * 100, // Stripe takes amount in cents
        },
        quantity: 1,
      };
    });

    // Create a payment session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'YOUR_SUCCESS_URL',
      cancel_url: 'YOUR_CANCEL_URL',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/create-transfers', async (req, res) => {
  try {
    const { sessionId, cartItems } = req.body;

    // Retrieve the payment session to verify its status and amount
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verify that the payment session is successful and has the correct amount
    if (
      session.payment_status !== 'paid' ||
      session.amount_total !== cartItems.reduce((acc, item) => acc + item.Price, 0) * 100
    ) {
      throw new Error('Payment session is invalid.');
    }

    // Create transfers for each store using their connected Stripe account IDs
    const shopTransfers = {};
    for (const item of cartItems) {
      const { ShopID, Price } = item;
      if (!shopTransfers[ShopID]) {
        shopTransfers[ShopID] = 0;
      }
      shopTransfers[ShopID] += Price * 100; // Convert the amount to cents for Stripe
    }

    const transferGroup = 'ORDER_' + session.id;
    const transfers = [];
    for (const [shopID, amount] of Object.entries(shopTransfers)) {
      const transfer = await stripe.transfers.create({
        amount,
        currency: 'usd',
        destination: shopID, // Use the connected Stripe account ID for the shop
        transfer_group: transferGroup, // Link the transfer to the payment session using the transfer group
      });
      transfers.push(transfer);
    }

    res.json({ shopTransfers: transfers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start your server
app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
