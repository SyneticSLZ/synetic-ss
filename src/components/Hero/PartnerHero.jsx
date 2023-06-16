import React, { useEffect, useState } from "react";
import "../Hero/PartnerHero.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function PartnerHero(){
    const style1 = useSpring({
        from: {
           opacity:0, marginTop: -100 },
        to: {  
            opacity:1, marginTop: 0   },
        config: { duration:1500 }
    
    });
    
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <animated.div id="about-main" 
        className="about"
        >
        
         <div className="row">
        

        <div className="about-text"
        >
            <div className="hhu"><h1>Your BRAND ON SYNETIC</h1></div> 
            <p className="highlight-text"> Join our growing ecosystem of<br></br> buisnesses in the digital realm of retail</p>
            {/* A new open world multi-planetary system created with endless possibilities for escape, on the blockchain. */}
            <div className="about_body-text reveal">
            <p><b >EXPLORE</b>  A whole new world</p>
            <p><b >REACH</b>   A whole new untapped market</p>
            <p>EXPLORE. BUILD. OWN. CREATE.</p>
            {/* <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p> */}
            </div>
            <br />

            {/* <div className="about_body-text about_body-text_highlight">
            <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p>
            </div> */}
       
        <button className="about-btn">LEARN MORE</button>
        </div>
        <div className="about-image">
        
        <img className="reveal"
        width="600" 
        height="400" 
        src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        </div>
        </div>
        </animated.div>
    )
}