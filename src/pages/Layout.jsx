import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../pages/NavBar";
import './pages.css'

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
      {/* <NavBar /> */}
      <Outlet />
      <SalonFooter />
    </div>
  );
};

export default Layout;