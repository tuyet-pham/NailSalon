import React from 'react';
import './css/loading.css'


function Loading() {
    return (
        <div className='loading'>
            <div className='layer1' style={{backgroundImage:"url(\"/images/load1.svg\")"}}/>
            <i className="fa-solid fa-circle-notch"></i>        
        </div>
    );
}

export default Loading;