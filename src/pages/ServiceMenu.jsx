import React from 'react';
import sp1 from '../images/menu-1.png';
import sp2 from '../images/menu-2.png';
import './css/service-menu.css';
import { useEffect } from 'react';



function ServiceMenu() {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.top.document.title = "5 Star Nail Spa | Service Menu"
    });


    return (
        <>
            <h4 style={{padding:"10px"}}>Please Call for exact estimates</h4>
            <div className='service-menu-body'>
                <img src={sp1} alt="page-service-1"/>
                <img src={sp2} alt="page-service-2"/>
            </div>
        </>
    );
}

export default ServiceMenu;