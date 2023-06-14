import React, { useEffect, useState } from "react";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import DeleteIcon from '@mui/icons-material/Delete';

import "../Contact/Contact.css"

export default function BuisnessContact (){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
    

    return(
        <div id="row">
        <div id="Offer">
            <h1>WHAT WE OFFER</h1>
             <h3 className="h3"> working closely to build your £D virtul store</h3>
            <h3 className="h3"> working closely to build your £D virtul store</h3>
            <h3 className="h3"> working closely to build your £D virtul store</h3>
            <h3 className="h3"> working closely to build your £D virtul store</h3>
        </div>
        <div id="contact">
            
            <h1>CONTACT US</h1>
            <form className="reveal">
                <input type="text"
                placeholder="Full Name" required/>
                <input type="email" placeholder="Your Email here please" required/>
                <textarea placeholder="Details here" name="message"></textarea>
                <input type="submit" value="send"/>
            </form>
        </div>
        </div>
    )
}