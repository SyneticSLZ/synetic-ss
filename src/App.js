import React, { useState, useContext, useRef } from "react";
import {BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom'
import { MouseContext } from "./context/mouse-context";
import { useStateContext } from "./context/contextProvider";
// import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import  Home from "./pages/Home"
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import Register from "./pages/Register"
import Partner from "./pages/Partner"
import Dashboard from "./pages/Dashboard";

import { Navbar, Footer, Sidebar, ThemeSettings } from './Dash-Components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './Dashboard-pages';
// import Checkout from "./pages/Checkout"
export default function App() {
    const { activeMenu } = useStateContext();
  
  
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
          <Route path="/synetic-ss/Dashboard" element={<Dashboard />} >
                {/* Dashboard */}
                <Route path="/synetic-ss/Dashboard" element={(<Ecommerce />)} />
                {/* pages  */}
                <Route path="/synetic-ss/Dashboard/orders" element={<Orders />} />
                <Route path="/synetic-ss/Dashboard/employees" element={<Employees />} />
                <Route path="/synetic-ss/Dashboard/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/synetic-ss/Dashboard/kanban" element={<Kanban />} />
                <Route path="/synetic-ss/Dashboard/editor" element={<Editor />} />
                <Route path="/synetic-ss/Dashboard/calendar" element={<Calendar />} />
                <Route path="/synetic-ss/Dashboard/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/synetic-ss/Dashboard/line" element={<Line />} />
                <Route path="/synetic-ss/Dashboard/area" element={<Area />} />
                <Route path="/synetic-ss/Dashboard/bar" element={<Bar />} />
                <Route path="/synetic-ss/Dashboard/pie" element={<Pie />} />
                <Route path="/synetic-ss/Dashboard/financial" element={<Financial />} />
                <Route path="/synetic-ss/Dashboard/color-mapping" element={<ColorMapping />} />
                <Route path="/synetic-ss/Dashboard/pyramid" element={<Pyramid />} />
                <Route path="/synetic-ss/Dashboard/stacked" element={<Stacked />} />
          </Route>
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
