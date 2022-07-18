import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/navbar.css';

import ico from '../images/LOGO.svg'



const NavBar = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const breakpoint = 620;

  const showNav = () => {
    const ham = document.getElementById("hamburger");
    setShow(!show);
    show ? ham.style.display = "inline" : ham.style.display = "none";
  }


  useEffect(() => {
    /*Listening to window changes*/
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  

  return width > breakpoint ? 
      <div className="NS-nav">
          <img style={{width:"40px",marginLeft:"20px"}} src={ico} alt=""/> 
          <span>
            5 Star Nail Spa
          </span>
          <nav className="NS-nav-desktop">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/service-menu">Service Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/lashes">Lashes By Holly</Link>
              </li>
              <li className="nav-item">
                <Link to="/look-book">Look Book</Link>
              </li>
            </ul>
          </nav>
      </div>
    :
      <div className="NS-nav" id="navy">
          <nav className="NS-nav-mobile">
            <button  onClick={()=> showNav()} className="ham-button" htmlFor="#hamburger" >&#9776;</button>

            <ul id="hamburger">
              <img style={{width:"40px",marginLeft:"",}} src={ico} alt=""/> 

              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/service-menu">Service Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/lashes">Lashes By Holly</Link>
              </li>
              <li className="nav-item">
                <Link to="/look-book">Look Book</Link>
              </li>
            </ul>
          </nav>
      </div>
    ;
}

export default NavBar;