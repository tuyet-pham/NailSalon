import React from 'react';
import './banner.css';
import Background from './OverPage-0.svg';



function About(){
  return (
    <div className="banner">
      
    </div>
  );
}


function Header(){
  return (
    <div>
      <About/>
      <img className="img-header" alt={"Loading failed"} src={Background}></img>
    </div>
  );
}

export default Header;