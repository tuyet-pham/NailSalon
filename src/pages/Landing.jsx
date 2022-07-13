import React from 'react';
import { Link } from "react-router-dom";
import './css/pages.css';
import './css/components.css';
import img11 from '../images/11.png'
import img8 from '../images/8.png'
import img6 from '../images/23.png'
import img15 from '../images/15.png'
import img9 from '../images/9.png'
import img4 from '../images/4.png'
import ico from '../images/LOGO.svg'

function Contact() {
    const Map = () => {
        return ( 
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=2730%20Western%20center%20blvd%20ste%20420&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        );
    };
    return (
        <div className='contact'>
            <div className='contact-info-div-bg'>
                <div className='contact-info-div-sm'>
                    <h4>Contact info.</h4>
                    <hr/>
                    <p className='contact-p'>
                        <i className="fa-solid fa-square-phone"/><a href="tel:+16822557055">(682)255-7055</a>
                        <br/>
                        <i className="fa-solid fa-at"></i><a href="mailto:contact@5starnailspa-wc.com">contact@5starnailspa-wc.com</a>
                        <br/>
                        <i className="fa-solid fa-location-dot"></i>2730 Western Center Blvd Ste 420, Fort Worth, TX 76131
                    </p>
                    <h4>Hours</h4>
                    <hr/>
                    <p className="contact-p">
                        <i className="fa-solid fa-clock"></i>Mon - Sat : 9:30am - 7:00pm
                        <br/>
                        <i className="fa-solid fa-clock"></i>Sun : 11:00am - 5:00pm
                    </p>
                    <a href="https://www.facebook.com/5starnailsandspa.wc/"><i style={{color:"#2159ff"}} className="fa-brands fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/fivestarnailandspa/"><i style={{color:"#9e868c"}} className="fa-brands fa-instagram-square"></i></a>
                    <a href="https://goo.gl/maps/o3J95F1EDyTPjwJV9"><i style={{color:"#a1bcc7"}} className="fa-brands fa-google-plus-square"></i></a>
                </div>
                <Map />
            </div>
           
            <fieldset disabled="disable" className='contact-form'>
                <div className="info-float">
                    <h3><u>Coming soon</u></h3>
                </div>
                
                <form className="EmailForm" action="mailto:contact@5starnailspa-wc.com" encType="multipart/form-data">
                    <h4>Sign up for our news letter!</h4>
                    <input type="text" required placeholder='Name' />
                    <input type="email" required placeholder='Email Address' />
                    <input type="submit" value="Send"/>
                </form>
            </fieldset>
        </div>
    );
}

function Gallery() {
    return (
        <div className='gallery-body'>
          <h2 style={{color:"#fff"}} >Gallery</h2>
          <div id='foo'>
            COMING SOON!
          </div>
        </div>
    );
}

function AboutUs() {
    // function setReadMore(){
    //     const content = document.getElementById("contenth");
    //     const readx = document.getElementById("readx")
        
    //     if (content.style.display === "none"){
    //         content.style.display = "inline";
    //         readx.innerText = "read less . . .";
    //     }
    //     else{
    //         content.style.display = "none";
    //         document.getElementById("readx").innerText = "read more . . .";
    //     }
        
    // }

    return (
        <div className='about-us-body'>
            <div className='about-us'>
                <h2 style={{color:"#ab866f"}}>About us</h2>
                <div id='contentv'>

                    
                    At <strong>5 Star Nail Spa</strong> we believe only by enriching the lives of those around us will we enrich our own.
                    All of our amazing professional technicians proudly carry 10+ years of various expertise. We are  
                    are strongly <strong>committed</strong> to providing the best professional services 
                    from <strong style={{color:"#ab866f"}}>pedicures</strong>, <strong style={{color:"#ab866f"}}>manicures</strong>, <strong style={{color:"#ab866f"}}>waxing</strong>, and <strong style={{color:"#ab866f"}}>lash enhancements</strong>
                    in a comfortable and relaxing enviroment.
                    
                    <br/>
                    <br/>
                </div>
                <div id='contenth'>
                    Our clients are <i style={{margin:"unset" }}>vital</i> to the growth of our business, thus we take great pride in ensuring 100% satisfaction from beginning to end. We are not perfect, but we definitely try to be! 
                    <br/>
                    <br/>
                    It is important to us that our space welcomes all, and encourages the uniqueness in each client. 
                    We thank you for your business and we hope to see you soon!
                    <br/>
                    <br/>
                    <img className='ico' src={ico} alt="ico"/>
                </div>
                {/* <button onClick={setReadMore} id="readx" className='NS-btn'>read more . . .</button> */}
            </div>
        </div>
    );
}


function Services() {
    return (
        <div className='services-body1'>
            <h2 style={{color:"#ab866f"}} >Services</h2>

            <div className='services-body2' >

                <div className='services-div'>
                    <span>
                        <h4>Manicure</h4>
                        <hr/>
                        $20 ~ $36+
                    </span>
                    <span>
                        <h4>Pedicure</h4>
                        <hr/>
                        $30 ~ $65+
                    </span>
                    <span>
                        <h4>Wax</h4>
                        <hr/>
                        Please call for better estimates
                    </span>
                    <span>
                        <h4>Lash enhancement</h4>
                        <hr/>
                        Please call for better estimates
                    </span>
                    <span>
                        <h4>Artificial nails</h4>
                        <hr/>
                        Dip, Acrylic, Gel, Chrome, Designs & More! 
                        Please call for better estimates
                    </span>
                    <span>
                        <h4>Kids Mani & Pedicure</h4>
                        <hr/>
                        $10 ~ $35
                    </span>
                    <br/>
                </div>

                <a href="tel:+16822557055" ><button style={{marginTop:"20px"}} className="NS-btn1">Call for more information!</button></a>
                <Link to="/service-menu"><button  style={{backgroundColor:"#ab866f"}} className="NS-btn1">Our Menu</button></Link>
            </div>
        </div>
    );
}

function Header () {
    return (
        <div className='NS-header'>
            <img className='header-img' src={img11} alt="i-1"/>
            <img className='header-img' src={img8} alt="i-2"/>
            <img className='header-img' src={img6} alt="i-3"/>
            <img className='header-img' src={img15} alt="i-4"/>
            <img className='header-img' src={img9} alt="i-5"/>
            <img className='header-img' src={img4} alt="i-6"/>
        </div>
    )
}


function Landing() {
    return (
        <div className="landing-body">
            <Header />
            <AboutUs />      
            <Services />
            <Gallery />
            <Contact />
        </div>
    );
}

export default Landing;