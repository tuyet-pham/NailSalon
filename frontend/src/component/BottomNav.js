import React from 'react';
import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";
import './banner.css';


function BottomNav(){
  return (
    <div className="bottom-nav">
      <div className="logo">
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><i></i> <FaFacebook className="icon-s"/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><i></i> <FaInstagram className="icon-s"/></a>
      </div>
      <p>
        Powered by <a href="https://progphamtuyet.com/" target="_blank" rel="noreferrer noopener">Grey Tech</a>
        <br/>
        Fort Worth,TX
      </p>
    </div>
    );
}

export default BottomNav;