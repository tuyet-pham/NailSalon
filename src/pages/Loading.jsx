import React from 'react';
import './css/loading.css'


function Loading(props) {
    return (
        <div className='loading' style={{display: props.show ? "flex" : "none"}}> 
            <div className='layer1'/>
            <img className="loading-icon" src={props.src} alt="img"/>
        </div>
    );
}

export default Loading;