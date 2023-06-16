import React, { useEffect, useState} from "react";
import "../TextSlider/TextSlider2.css";

export default function TextSlider2(){
    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
<div 
className="text-slider2"
 >
    <div className="marquee2">
  <ul className="marquee-content2">
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>
   <li>SYNETIC </li>

   
  
  
   
  </ul>
  </div>
</div>


    )
}