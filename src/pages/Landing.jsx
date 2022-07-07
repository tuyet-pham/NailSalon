import React from 'react';
import './pages.css'
import img1 from '../images/img1.jpg'

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
                        <i className="fa-solid fa-square-phone"/><a href="tel:+6822557055">(682)255-7055</a>
                        <br/>
                        <i className="fa-solid fa-at"></i> <a href="mailto:contact@5starnailspa-wc.com">contact@5starnailspa-wc.com</a>
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
          <h2 style={{color:"#ab866f"}} >Gallery</h2>
          <div id='foo'>
            COMING SOON!
          </div>
        </div>
    );
}

function AboutUs() {
    function setReadMore(){
        const content = document.getElementById("contenth");
        const readx = document.getElementById("readx")
        
        if (content.style.display === "none"){
            content.style.display = "inline";
            readx.innerText = "read less . . .";
        }
        else{
            content.style.display = "none";
            document.getElementById("readx").innerText = "read more . . .";
        }
        
    }

    return (
        <div className='about-us-body'>
            <div className='about-us'>
                <div id='contentv'>
                    <h2 style={{color:"#ab866f"}}>About us</h2>
                    
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
                </div>
                <button onClick={setReadMore} id="readx" className='NS-btn'>read more . . .</button>
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
                        <h5>Manicure</h5>
                    </span>
                    <span>
                        <h5>Pedicure</h5>

                    </span>
                    <span>
                        <h5>Wax</h5>
                    </span>
                    <span>
                        <h5>Lash enhancement</h5>
                    </span>
                    <span>
                        <h5>Artificial nails</h5>
                    </span>
                    <span>
                        <h5>Eyebrow tinting</h5>
                    </span>
                    <br/>
                </div>
                <button style={{width:"50%"}} className="NS-btn1"><a href="tel:+6822557055" >Call for more information!</a></button>
            </div>
        </div>
    );
}

function Header () {
    return (
        <div>

            <header>

            </header>
        </div>
        
    )
}


function Landing() {
    return (
        <div className="landing-body">
            <Header />
            <AboutUs />
            <hr/>
            <Services />
            <hr/>
            <Gallery />
            <hr/>
            <Contact />
            <hr/>
        </div>
    );
}

export default Landing;