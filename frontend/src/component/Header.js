import React from 'react';
import './banner.css';
import Background from './OverPage-0.png';



function Header(){
  return (
  <div className="">
    <div className="header"> 
      <img className="img-header" alt={"Loading failed"} src={Background}></img>
    </div>
  </div>
    );
}

export default Header;