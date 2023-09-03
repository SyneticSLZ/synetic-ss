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
 // Replace 'YOUR_BACKEND_URL' with the actual URL where your backend is hosted
 const backendUrl = '../StripeBackend.js';

 // Function to receive cart items data from Unity and send it to the backend
 const receiveUnityMessage = (e) => {
   try {
     const jsonData = JSON.parse(e.data);
     // Assuming your Unity app sends cart items data as a JSON string

     // Call the function to send cartItems data to the backend
     createPaymentSession(jsonData.cartItems);
   } catch (error) {
     console.error('Error parsing JSON data:', error);
   }
 };

 // Attach the event listener to receive messages from Unity
 window.addEventListener('message', receiveUnityMessage);

 // Function to send cartItems data to the backend
 async function createPaymentSession(cartItemsFromUnity) {
   try {
     const response = await fetch(`${backendUrl}/create-payment-session`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ cartItems: cartItemsFromUnity }),
     });

     const data = await response.json();
     const { sessionId } = data;

     // Handle the response, e.g., redirect to Stripe checkout page
     handleStripeCheckout(sessionId);
   } catch (error) {
     console.error('Error creating payment session:', error);
   }
 }

 // Function to handle the Stripe checkout
 function handleStripeCheckout(sessionId) {
   // Replace 'YOUR_STRIPE_PUBLIC_KEY' with your actual Stripe public key
   const stripePublicKey = 'pk_live_51MNx4UKJeZAyw8f4Lec7u9jtEoGifaJPvGAsW5OOUP3v943UwPN07TloLoOKJPJm85dpGPhGaufUXAU10IepmPVp00Z98Rt01D';                                   

   // Create a Stripe instance with your public key
   const stripe = stripe(stripePublicKey);

   // Redirect to the Stripe checkout page using the sessionId
   stripe.redirectToCheckout({ sessionId })
     .then((result) => {
       // Handle any result or error from the Stripe checkout
       if (result.error) {
         console.error('Stripe checkout error:', result.error.message);
       }
     });
 }










    // Add event listener to receive messages from Unity
    // window.addEventListener('message', receiveUnityMessage);

    // Clean up the event listener on component unmount
 
  }, []);


  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // const receiveUnityMessage = (e) => {
    // if (e.data && e.data.type === 'BUY_ITEM') {
    //   // Handle the data received from Unity
    //   const itemData = JSON.parse(e.data.data);

    //   // Now you have the item data, open the Stripe payment modal
    //   console.log(itemData.quantity, itemData.price);
    //   const item = {
    //     price: itemData.price,
    //     quantity: itemData.quantity
    //   };
    //   const checkoutOptions = {
    //     lineItems: [item],
    //     mode: "payment",
    //     successUrl: `${window.location.origin}/success`,
    //     cancelUrl: `${window.location.origin}/cancel`
    //   };
    //   redirectToCheckout(checkoutOptions).then(() => {
    //     // Send success message to Unity
    //     sendMessageToUnity('PAYMENT_SUCCESS');
    //   })
    //   .catch(() => {
    //     // Send error message to Unity
    //     sendMessageToUnity('PAYMENT_ERROR');
    //   });
    // }
  // };

  // const sendMessageToUnity = (messageType) => {
  //   // Replace 'unityObject' with the appropriate reference to your Unity object
  //   const unityObject = document.getElementById('unity-object');
  //   if (unityObject) {
  //     unityObject.postMessage(messageType, '*');
  //   }
  // };
  // const redirectToCheckout = async (checkoutOptions) => {
  //   setLoading(true);
  //   console.log("redirectToCheckout");

  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout(checkoutOptions);
  //   console.log("Stripe checkout error", error);

  //   if (error) setStripeError(error.message);
  //   setLoading(false);
  // };

  if (stripeError) alert(stripeError);

    const [hideScrollbar, setHideScrollbar] = useState(true);

    // Send a message to the parent frame (Unity)
function sendMessageToUnity(message) {
  // Check if the parent frame (Unity) is available
  if (window.parent) {
      // Replace 'https://your-unity-game-url.com' with the actual URL of your Unity WebGL game
      window.parent.postMessage(message, 'https://syneticslz.github.io/ttttttttt/');
  } else {
      console.warn('Parent frame (Unity) not found.');
  }
}
    // Add an event listener to listen for messages from Unity
    window.addEventListener("message", function (event) {
          receiveMessageFromUnity(event.data);
  });
  function receiveMessageFromUnity(message) {
    console.log("Message from Unitydwadwqidqwdoqwj:", message);
  }
// Example: Sending a message to Unity
var messageToSend = 'Hello fromreafsadasd!';
sendMessageToUnity(messageToSend);

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
        
        <animated.div style={ style1 } id="a100">
               {/* <script src="https://app.vagon.io/vagonsdk.js"></script>  */}
               {/* <div style={{ overflow: 'hidden' }}>
  <iframe
    class="hvideo"
    id="unityFrame"
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
</div> */}
<div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', padding: '56.25% 0 0 0', overflow: 'hidden' }}>
        <iframe frameborder="0" src="https://itch.io/embed-upload/8627911?color=333333" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <a href="https://syneticslz.itch.io/jstest">Play jstest on itch.io</a>
        </iframe>
      </div>

    </div>

</animated.div>
 
    )
}

