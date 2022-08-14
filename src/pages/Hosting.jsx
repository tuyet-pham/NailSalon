import React from 'react';
import { useEffect } from 'react';
import './css/hosting.css'



function Hosting() {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.top.document.title = "5 Star Nail Spa | Events"
    });


    return (
        <div className='hosting'>
            <div className='hosting-header'>
                <h1>Coming Soon!</h1>
                {/* <h3>But in the meanwhile, please call for further explanation.</h3> */}
                {/* <img src={require('../images/l-hosting.svg')} alt="party" className="h-img"/>
                <img src={require('../images/l-hosting-square.svg')} alt="party" className="h-s-img"/> */}
            </div>
            {/* <div className='hosting-body'>
                
            </div> */}
        </div>
    );
}

export default Hosting;