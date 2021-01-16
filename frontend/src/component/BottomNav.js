import React from 'react';
import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

function BottomNav(){
  return (
    <div className="bottom-nav">
      <div className="logo">
        <a href="https://facebook.com" rel="noreferrer" target="_blank"><i></i> <FaFacebook className="icon-s"/></a>
        <a href="https://instagram.com" rel="noreferrer" target="_blank"><i></i> <FaInstagram className="icon-s"/></a>
      </div>
      <p>
        Powered by <a href="https://progphamtuyet.com/" rel="noreferrer" target="_blank">Grey Tech</a>
        <br/>
        Fort Worth,TX
      </p>
    </div>
    );
}

export default BottomNav;