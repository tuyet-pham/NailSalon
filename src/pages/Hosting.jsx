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
                {/* <h1>Coming Soon!</h1> */}
                <img src={require('../images/l-hosting.svg')} alt="party" className="h-img"/>
                <img src={require('../images/l-hosting-square.svg')} alt="party" className="h-s-img"/>
            </div>
            <div className='hosting-body'>
                <form className='hosting-form' onSubmit={(e) => e.preventDefault}>
                    <label htmlFor='email'>Email Address <span style={{color:"red"}}>*</span></label>
                    <input id="email" type="email" name="email"required></input>
                    
                    <label htmlFor='name'>Full Name <span style={{color:"red"}}>*</span></label>
                    <input id="name" type="text" name="name"required></input>
                    
                    <label htmlFor='size'>Party Size <span style={{color:"red"}}>*</span></label>
                    <input id="size"  min="5" max="10" type="number" name="size"></input>
                    
                    <label htmlFor='datetime'>What date & time is your event? <span style={{color:"red"}}>*</span></label>
                    <input id="datetime" type="datetime-local" name="datetime"required></input>
                    
                    <textarea type="text" rows="10"></textarea>

                    <input type="reset"/>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        </div>
    );
}

export default Hosting;