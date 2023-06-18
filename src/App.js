import React, { useState, useContext, useRef } from "react";
import {BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom'
import { MouseContext } from "./context/mouse-context";
// import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import  Home from "./pages/Home"
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Register from "./pages/Register"
import Partner from "./pages/Partner"
// import Checkout from "./pages/Checkout"
export default function App() {

  
  
    let Parallax;
    const { cursorChangeHandler } = useContext(MouseContext);
    const [open, setOpen] = useState(false);
  
  
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));
  
  function reveal(){
    let reveals = document.querySelectorAll(".reveal");
  
    for (var i=0; i < reveals.length; i++)  {
      let windowHeight = window.innerHeight;
      let elementTop =
      reveals[i].getBoundingClientRect().top;
      let elementVisible = 2;
  
      if (elementTop < windowHeight - elementVisible)
      {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    
    <div>
      {/* <Aboutpage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/synetic-ss" element={<Home />} />
          <Route path='/synetic-ss/contact' element={<Contactpage />} />
          <Route path='/synetic-ss/home' element={<Home />} />
          <Route path="/synetic-ss/about" element={<Aboutpage />} />
          <Route path="/synetic-ss/Register" element={<Register />} />
          <Route path="/synetic-ss/Partner" element={<Partner/>} />
          {/* <Route path="/synetic-ss/stripe" element={<Checkout/>} /> */}
          </Routes>      
      </BrowserRouter>
      {/* <Checkout /> */}
    </div>
         );
}
