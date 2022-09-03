import React from 'react';
import './css/loading.css'


function Loading() {
    return (
        <div className='loading'> 
            <div className='layer1'/>
            <img className="loading-icon" src="/images/loading.svg" alt="img"/>
        </div>
    );
}

export default Loading;