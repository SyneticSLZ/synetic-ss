import React, { useEffect, useState, useRef} from "react";
import "../Hero/Hero.css"
import {  animated, useSpring } from 'react-spring';
import video from './VarityShopAccFinal_(73).mp4'
export default function Hero(){


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
const videoRef = useRef(null);

useEffect(() => {
  // Autoplay the video when the component mounts
  videoRef.current.play().catch((error) => {
    // Autoplay was prevented by the browser
    console.log('Autoplay was prevented:', error);
  });
}, []);
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


    return(           
        <animated.div  style={ style1 } id="a100">
                
                {/* <div  className="hero-text" >
                    <h1>SYNETIC</h1>
                    <h3 className="reveal"> Welcome to the future.</h3>
                
                    <button className="hero-btn">CONNECT WALLET</button>
                </div> */}

            {/* <video src=""></video> */}
                {/* <div className="hero-image reveal">
                <video id="myVideo" autoplay muted loop>
  <source src="https://player.vimeo.com/video/76979871?autopause=0&autoplay=1&byline=0&controls=0&muted=1&playsinline=0&portrait=0&title=0" type="video/mp4"></source>
</video> */}
{/* <iframe id="myVideo" src="WEBSITE_VIDEO_v3_20cdd22818.mp4" frameborder="0" width="100%" height={"100vh"} autoplay muted loop></iframe> */}
{/* <iframe id="myVideo" src="https://assets.codepen.io/6093409/river.mp4" title="YouTube video player" frameborder="0" allow="autoplay; muted; picture-in-picture" allowfullscreen> </iframe> */}
                {/* </div> */}
                {/* <div >
                    <iframe id="myVideo" src="https://player.vimeo.com/video/76979871?autopause=0&autoplay=1&byline=0&controls=0&muted=1&playsinline=0&portrait=0&title=0"
                     frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;"  
                     style="width: 100%; height: 100vh;"></iframe></div> */}
{/* 
<div style={{ width: '100%', overflow: 'hidden' }}>
  <div style={{ position: 'relative', padding: '56.25% 0 0 0', overflow: 'hidden' }}>
    <iframe
      src="WEBSITE_VIDEO_v3_20cdd22818.mp4"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
    ></iframe>
  </div>
</div> */}

<div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', padding: '56.25% 0 0 0', overflow: 'hidden' }}>
        <video ref={videoRef} autoPlay muted playsInline style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', padding: '56.25% 0 0 0', overflow: 'hidden' }}>
        <iframe frameborder="0" src="https://itch.io/embed-upload/8627911?color=333333" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <a href="https://syneticslz.itch.io/jstest">Play jstesuit on itch.io</a>
        </iframe>
      </div>

    </div>


     </animated.div>
    )
}
