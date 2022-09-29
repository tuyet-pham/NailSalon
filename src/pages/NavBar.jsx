import React from "react";
import { useEffect, useState } from "react";
import './css/navbar.css';
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;
    const [show, setShow] = useState(false);
    

    useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth))
    });

    return width > breakpoint ? (
        <div className="nav-body">
        <nav>
            <ul className="nav">
                <img className="logo left" src="/images/LOGO.svg" alt="logo"/>
                <NavLink
                        to="/"
                        className="nav-item">
                        Home
                </NavLink>
                
                <NavLink 
                        to="/service-menu" 
                        className="nav-item">
                        Service Menu
                </NavLink>
                <NavLink 
                        to="/look-book" 
                        className="nav-item">
                        Look Book
                </NavLink>
                <NavLink 
                        to="/lashes" 
                        className="nav-item">
                        Lashes By Holly
                </NavLink>
                <NavLink 
                        to="/promo" 
                        className="nav-item">
                        Promotions
                </NavLink>
            </ul>
          </nav>
        </div>
    )
    :
    (
      <div className="nav-body">
        <nav>
            <button onClick={()=> setShow(!show)} id="ham-button" className="ham-btn">&#9776;</button>
            <img className="logo" src="images/LOGO.svg" alt="logo"/>
            <ul id="hamburger" className="nav" style={{maxHeight: show ? "500px" : "0px" }}>
                <NavLink
                        to="/"
                        className="nav-item">
                        Home
                </NavLink>
                
                <NavLink 
                        to="/service-menu" 
                        className="nav-item">
                        Service Menu
                </NavLink>
                <NavLink 
                        to="/look-book" 
                        className="nav-item">
                        Look Book
                </NavLink>
                <NavLink 
                        to="/lashes" 
                        className="nav-item ">
                        Lashes By Holly
                </NavLink>
                <NavLink 
                        to="/promo" 
                        className="nav-item">
                        Promotions
                </NavLink>
            </ul>
          </nav>
        </div>
    );
}

export default NavBar;