import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'


function TopNav(){
  return (
    <div className="bg-white sticky-top">
      <div className="navbar navbar-expand-md justify-content-center navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="justify-content-center collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav my-2">
            <NavLink className="navLink nav-item col" activeClassName="navLink-active" to="/home">Home</NavLink>
            {}
            <NavLink className="navLink nav-item col" activeClassName="navLink-active" to="/contact">Contact</NavLink>
            <NavLink className="navLink nav-item col" activeClassName="navLink-active" to="/services">Services</NavLink>
            <NavLink className="navLink nav-item col" activeClassName="navLink-active" to="/gallery">Gallery</NavLink>
          </ul>
        </div>
      </div>
    </div>
    );
}

export default TopNav;