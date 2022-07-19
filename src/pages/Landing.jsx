import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './css/pages.css';
import './css/components.css';

/* HEADER IMG */
import himg11 from '../images/h-11.png'
import himg8 from '../images/h-8.png'
import himg23 from '../images/h-23.png'
import himg15 from '../images/h-15.png'
import himg9 from '../images/h-9.png'
import himg4 from '../images/h-4.png'



/* GALLERY IMG */
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import img11 from '../images/11.png'
import img12 from '../images/12.png'
import img13 from '../images/13.png'
import img14 from '../images/14.png'
import img15 from '../images/15.png'
import img16 from '../images/16.png'
import img17 from '../images/17.png'
import img18 from '../images/18.png'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img22 from '../images/22.png'
import img23 from '../images/23.png'
import img24 from '../images/24.png'
import img25 from '../images/25.png'
import img26 from '../images/26.png'
import img27 from '../images/27.png'



/* LOGO */
import ico from '../images/LOGO.svg'

function Gallery() {
    const [width, setWidth] = useState(window.innerWidth);

    function next() {
        
        const elem = document.getElementsByClassName('gallery-sec');

        for ( var i = 0 ; i <= elem.length-1; ++i){
            if(elem[i].classList.contains('active')) 
            {   
                if (elem[i].nextSibling === null){
                    elem[0].classList.add("active")
                    elem[i].classList.remove("active")
                    break;
                }
                else {
                    elem[i].nextSibling.classList.add("active")
                    elem[i].classList.remove("active")
                    break;
                }
                
            }
            
        }
    }

    function prev() {
        const elem = document.getElementsByClassName('gallery-sec');

        for ( var i = 0 ; i <= elem.length-1; ++i){
            if(elem[i].classList.contains('active')) 
            {   
                if (elem[i].previousSibling === null){
                    elem[elem.length-1].classList.add("active")
                    elem[i].classList.remove("active")
                    break;
                }
                else {
                    elem[i].previousSibling.classList.add("active")
                    elem[i].classList.remove("active")
                    break;
                }
                
            }
            
        }
    }

    
    useEffect(() => {
      /*Listening to window changes*/
      
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
    });

    const breakpoint = 450;

    return width > breakpoint ? 
    (
        <div className='gallery-body'>
          <h2 style={{color:"#fff"}} >Gallery</h2>
          <div id='gallery'>
            <img src={img1} alt="i-1"/>
            <img src={img2} alt="i-2"/>
            <img src={img3} alt="i-3"/>
            <img src={img4} alt="i-4"/>
            <img src={img5} alt="i-5"/>
            <img src={img6} alt="i-6"/>
            <img src={img7} alt="i-7"/>
            <img src={img8} alt="i-8"/>
            <img src={img9} alt="i-9"/>
            <img src={img10} alt="i-10"/>
            <img src={img11} alt="i-11"/>
            <img src={img12} alt="i-12"/>
            <img src={img13} alt="i-13"/>
            <img src={img14} alt="i-14"/>
            <img src={img15} alt="i-15"/>
            <img src={img16} alt="i-16"/>
            <img src={img17} alt="i-17"/>
            <img src={img18} alt="i-18"/>
            <img src={img19} alt="i-19"/>
            <img src={img20} alt="i-20"/>
            <img src={img21} alt="i-21"/>
            <img src={img22} alt="i-22"/>
            <img src={img23} alt="i-23"/>
            <img src={img24} alt="i-24"/>
            <img src={img25} alt="i-25"/>
            <img src={img26} alt="i-25"/>
            <img src={img27} alt="i-25"/>
          </div>
        </div>
    )
    :
    (
        <div className='gallery-body'>
          <h2 style={{color:"#fff"}} >Gallery</h2>
            <button onClick={prev} className='gallery-btn left'><i className="fa-solid fa-angles-left"></i></button>
            <button onClick={next} className='gallery-btn right'><i className="fa-solid fa-angles-right"></i></button>
          <div id='gallery'>
            <span className='gallery-sec active'>
                <img src={img1} alt="i-1"/>
                <img src={img2} alt="i-2"/>
                <img src={img3} alt="i-3"/>
            </span>
            <span className='gallery-sec' >
                <img src={img4} alt="i-4"/>
                <img src={img5} alt="i-5"/>
                <img src={img6} alt="i-6"/>
            </span>
            <span className='gallery-sec'>
                <img src={img7} alt="i-7"/>
                <img src={img8} alt="i-8"/>
                <img src={img9} alt="i-9"/>
            </span>
            <span className='gallery-sec'>
                <img src={img10} alt="i-10"/>
                <img src={img11} alt="i-11"/>
                <img src={img12} alt="i-12"/>
            </span>
            <span className='gallery-sec'>
                <img src={img13} alt="i-13"/>
                <img src={img14} alt="i-14"/>
                <img src={img15} alt="i-15"/>
            </span>
            <span className='gallery-sec'>
                <img src={img16} alt="i-16"/>
                <img src={img17} alt="i-17"/>
                <img src={img18} alt="i-18"/>
            </span>
            <span className='gallery-sec'>
                <img src={img19} alt="i-19"/>
                <img src={img20} alt="i-20"/>
                <img src={img21} alt="i-21"/>
            </span>
            <span className='gallery-sec'>
                <img src={img22} alt="i-22"/>
                <img src={img23} alt="i-23"/>
                <img src={img24} alt="i-24"/>
            </span>
            <span className='gallery-sec'>
                <img src={img25} alt="i-25"/>
                <img src={img26} alt="i-26"/>
                <img src={img27} alt="i-27"/>
            </span>
          </div>
          

        </div>
    )
}





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
                    <h3>Contact info.</h3>
                    <hr/>
                    <p className='contact-p'>
                        <i className="fa-solid fa-phone"/><a href="tel:+16822557055">(682)255-7055</a>
                        <br/>
                        <i className="fa-solid fa-at"></i><a href="mailto:contact@5starnailspa-wc.com">contact@5starnailspa-wc.com</a>
                        <br/>
                        <i className="fa-solid fa-location-dot"></i>2730 Western Center Blvd Ste 420, Fort Worth, TX 76131
                    </p>
                    <h3>Hours</h3>
                    <hr/>
                    <p className="contact-p">
                        <i className="fa-solid fa-clock"></i>Mon - Sat : 9:30am - 7:00pm
                        <br/>
                        <i className="fa-solid fa-clock"></i>Sun : 11:00am - 5:00pm
                    </p>
                    <p style={{fontSize:"30px"}}>
                        <a href="https://www.facebook.com/5starnailsandspa.wc/"><i style={{color:"#2159ff"}} className="fa-brands fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/fivestarnailandspa/"><i style={{color:"#9e868c"}} className="fa-brands fa-instagram-square"></i></a>
                        <a href="https://goo.gl/maps/o3J95F1EDyTPjwJV9"><i style={{color:"#a1bcc7"}} className="fa-brands fa-google-plus-square"></i></a>
                    </p>
                    
                </div>
                <Map />
            </div>
           
        </div>
    );
}

function AboutUs() {

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
                    Our clients are <i style={{margin:"unset" }}>vital</i> to the growth of our business, thus we take great pride in ensuring 100% satisfaction from beginning to end. We are not perfect, but we definitely try to be! 
                    <br/>
                    <br/>
                    It is important to us that our space welcomes all, and encourages the uniqueness in each client. 
                    We thank you for your business and we hope to see you soon!
                    <br/>
                    <br/>
                    <img className='ico' src={ico} alt="ico"/>
                </div>
            </div>
        </div>
    );
}


function Services() {
    return (
        <div className='services-body'>
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
            <img className='header-img' src={himg11} alt="i-11"/>
            <img className='header-img' src={himg8} alt="i-8"/>
            <img className='header-img' src={himg23} alt="i-23"/>
            <img className='header-img' src={himg15} alt="i-15"/>
            <img className='header-img' src={himg9} alt="i-9"/>
            <img className='header-img' src={himg4} alt="i-4"/>
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