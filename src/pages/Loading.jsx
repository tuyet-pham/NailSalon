import React from 'react';
import './css/loading.css'
import loadimage from '../images/load1.svg'


function Loading() {
    return (
        <div className='loading'>
            <div className='layer1' style={{backgroundImage:"url("+loadimage+")"}}/>
            <i className="fa-solid fa-circle-notch"></i>        
        </div>
    );
}

export default Loading;