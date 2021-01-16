import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';


function CustomButton(props){
    const link = props.link;
    const message = props.message;

    return (
        <div>
            <NavLink className="custom-button" to={link}>{message}</NavLink>
        </div>
    )
}

export default CustomButton;