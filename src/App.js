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
