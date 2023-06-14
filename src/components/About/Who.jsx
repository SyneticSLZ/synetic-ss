import React, { useEffect, useState } from "react";
import "../About/Who.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Who(){
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
        <animated.div id="about-main" className="about">
        <div className="quote1"><h1>" EMBRACE THE FUTURE"</h1></div> 

        <div className="row2">
        <div className="story">
            <div className="storytitle">OUR STORY</div>
            <div className="storytext">
                <ul>
                    <li className="Text">London Based, Few friends trying to make the world a better place</li>
                    <li className="Text">Felt like web shopping was borning and lacked the exitement of actually getting up and browsing in a store.</li>
                    <li className="Text">We didnt like having to juggle tabs and apps when buying diferent things, such as dog treats and an outfit for friday night.</li>
                    <li className="Text">We wanted to create a space with it all in one place, and that created the same immersive feelings of excitement of shopping in real life.  </li>
                    <li className="Text">A platform for the Future</li>
                </ul>
            </div>
        </div>
        {/* <div className="storyimg">
            <img src="" alt="" />
        </div> */}
        <div className="stotyimg">
        
        <img className="reveal"
        width="600" 
        height="400" 
        src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        </div>

        </div>
        </animated.div>
    )
}