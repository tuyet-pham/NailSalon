import React from 'react';
import Background from './OverPage-0.svg';
import './banner.css';


function Header(){
  return (
    <div className="banner">
      <img className="img-header" alt={"Loading failed"} src={Background}></img>
    </div>
  );
}

export default Header;