import "../Oasis/Oasis.css";
import React, { useState, useEffect } from "react";



export default function Oasis(){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);

    return(
<>
        <section className="about-oasis" id="about"
        >
           <h2 
           className="section__title section__title--about"
            >ESCAPE</h2>

           <p 
           className="section__subtitle section__subtitle--about"
           >Photorealistic, 
        virtual  reality. </p>
           
        <div className="about-oasis__body">
           
            
             {/* <p className="highlight">  <span id="circle"> </span><span id="circle"> </span>Built on the blockchain. </p>  */}
            
             
             <p className="highlight"> <span id="circle"> </span><span id="circle"> </span>
            {/* /* Build, own and monetise your experiences
            through real-estate ownership. */}
             Synetic Offers an escape from the Confines of modern society. </p> 
            <p className="highlight-body">On Synetic, you can be anyone or anything with a whole new medium for self expression</p>
        </div>
           
           <img src="https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1dHVyaXN0aWMlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="architecture in the game" 
            className="about-oasis__img reveal"
            />


<p className="highlight strong"> <span id="circle"> </span><span id="circle"> </span>We believe that everyone is unique and should have the opportunity to show of thier individuality and creativity, that has been so much suppressed by out day to day lives. </p>
 <p className="reveal sub-text"> Build, own and rent out your own real estate 
 </p>
<p className="reveal sub-text">  Join virtual meetings with co-workers 
 </p>
<p className="reveal sub-text ">Walk into a vegas style casino.
 </p>
<p className="reveal sub-text"> All from the comfort of your own home !
 </p>
<p className="reveal sub-text">Fly a fighter-jet.
 </p>

</section>
</>
     
       
    )}