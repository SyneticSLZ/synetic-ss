import React, { useEffect, useState} from "react";
// import "../Hero/Hero.css"
import { loadStripe } from "@stripe/stripe-js";
import {  animated, useSpring } from 'react-spring';
// import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";



let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise =  loadStripe("pk_test_51MNx4UKJeZAyw8f4z0YJFRQozQsqzwCBKOuzaSScWRXgDDG8GW9YH3qyrI9UZlUW1V8RXkieoHgqoaMOtIbxlLSm00QDD02K7W");
  }

  return stripePromise;
};
export default function Home123(){

  useEffect(() => {
    // Add event listener to receive messages from Unity
    window.addEventListener('message', receiveUnityMessage);

    // Clean up the event listener on component unmount
 
  }, []);


  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const receiveUnityMessage = (e) => {
    if (e.data && e.data.type === 'BUY_ITEM') {
      // Handle the data received from Unity
      const itemData = JSON.parse(e.data.data);

      // Now you have the item data, open the Stripe payment modal
      console.log(itemData.quantity, itemData.price);
      const item = {
        price: itemData.price,
        quantity: itemData.quantity
      };
      const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      };
      redirectToCheckout(checkoutOptions)
    }
  };

  const openStripeModal = (itemName, itemPrice) => {
    // Use the Stripe API to open the payment modal and handle the payment process
    // For simplicity, you can use a library like `react-stripe-checkout`
    // Here's an example using react-stripe-checkout:
    // import StripeCheckout from 'react-stripe-checkout';
    // ...
    // <StripeCheckout
    //   token={handleStripeToken}
    //   amount={itemPrice * 100} // Stripe expects the price in cents
    //   currency="USD"
    //   stripeKey="your_stripe_publishable_key"
    // />
  };
  
  

  

  const redirectToCheckout = async (checkoutOptions) => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

    const [hideScrollbar, setHideScrollbar] = useState(true);

const style1 = useSpring({
    from: {
       opacity:0, marginTop: -100 },
    to: {  
        opacity:1, marginTop: 0   },
    config: { duration:1500 }

});

// const style2 = useSpring({
//     from: { marginLeft: -400 },
//      to:  {  marginLeft: 400 },
//       config: { duration:1500 }

// });

    return(
        
        <animated.div id="hero" className={`container ${hideScrollbar ? 'no-scrollbar' : ''}`} style={ style1 }>
               {/* <script src="https://app.vagon.io/vagonsdk.js"></script>  */}
               <div style={{ overflow: 'hidden' }}>
  <iframe
    class="hvideo"
    // id="vagonFrame"
    allow="microphone *; clipboard-read *; clipboard-write *; encrypted-media *;accelerometer; autoplay; gyroscope; controls;"
    src={`http://localhost:3000/synetic-ss/unity-build/index1.html`}
    style={{
      position: 'absolute',
      top: '100px',
      width: '100%',
      left: '0',
      height: '89vh',
      border: 'none', // Add this line to remove iframe border
    }}
  />
</div></animated.div>
 
    )
}