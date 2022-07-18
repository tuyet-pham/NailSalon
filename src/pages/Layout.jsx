import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../pages/NavBar";
import './css/components.css'


const Sideclicker = () => {
  return (
    <div className="side-click-body">
        <a href="tel:+16822557055" className="side-click-icon"><i className="fa-solid fa-phone"/></a>
        <a href="mailto:contact@5starnailspa-wc.com" className="side-click-icon"><i className="fa-solid fa-at"/></a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=2730+western+center+blvd+ste+420+fort+worth" className="side-click-icon"><i className="fa-solid fa-location-arrow"/></a>
    </div>
  );
}


const SalonFooter = () => {
  return (
    <footer className="my-footer">
      <div className="socialMedia-div">
        Join Our Social Media!
        <br/>
        <a href="https://www.facebook.com/5starnailsandspa.wc/"><i style={{color:"#2159ff"}} className="fa-brands fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/fivestarnailandspa/"><i style={{color:"#9e868c"}} className="fa-brands fa-instagram-square"></i></a>
        <a href="https://goo.gl/maps/o3J95F1EDyTPjwJV9"><i style={{color:"#a1bcc7"}} className="fa-brands fa-google-plus-square"></i></a>
      </div>
      <div>
        Powered by AWS
        <br/>
        Author : Tuyet Pham
        <br/>
        Deviit Inc. ™
      </div>
      
    </footer>
  );
}


const Layout = () => {
  
  return (
    <div>
      <NavBar />
      <Sideclicker/>
      <Outlet /> 
      <SalonFooter />
    </div>
  );
};

export default Layout;