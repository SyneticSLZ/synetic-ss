import React, { useEffect, useState} from "react";
import "../Hero/Hero.css"
import {  animated, useSpring } from 'react-spring';


export default function Home123(){

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
        
        <animated.div id="hero" className="hero hbody" style={ style1 }>
               <script src="https://app.vagon.io/vagonsdk.js"></script> 
                {/* <iframe src="https://cdn.htmlgames.com/President/" frameborder="0" loading="lazy" allow="fullscreen"></iframe>  */}
                {/* <div style={{ width: '100%', overflow: 'hidden' }}> */}
  {/* <div style={{ position: 'relative', padding: '56.25% 0 0 0', overflow: 'hidden' }}> */}
    {/* <iframe
      src="https://cdn.htmlgames.com/President/"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      style={{ position: 'absolute', top: '110px', left: '0', width: '100%', height: '100%' }}
    ></iframe> */}

<iframe class="hvideo" id="vagonFrame" allow="microphone  *; clipboard-read *; clipboard-write *; encrypted-media *;accelerometer; autoplay; gyroscope;" src="https://streams.vagon.io/streams/805c2d1b-87b4-4c36-9922-454ad49f74ff"
      style={{ position: 'absolute', top: '100px', left: '0', width: '100%', height: '100%' }}/>
  {/* </div> */}
{/* </div>     */}
                </animated.div>
    )
}