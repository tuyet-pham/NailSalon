import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import './css/landing.css';
import lookbookJson from './json/lookbook.json'


/* LOGO */
import ico from '../images/LOGO.svg'


const Images = (props) => {
    return (
        <>
         <img className={props.classname} src={props.src} alt="imgNS"/>
        </>
    );
}


function AboutUs() {

    return (
        <div className='about-us-body'>
            <div className='about-us'>
                <div id="contentz">
                    <h1>5 Star Nail Spa</h1>
                </div>
                
                <div id='contentv'>
                    We believe only by enriching the lives of those around us will we enrich our own.
                    All of our amazing professional technicians proudly carry 10+ years of various expertise. We 
                    are strongly <strong>committed</strong> to providing the best professional services 
                    from <strong >pedicures</strong>, <strong >manicures</strong>, <strong>waxing</strong>, and <strong>lash enhancements </strong>
                    in a comfortable and relaxing enviroment. 
                    <br/>
                    <br/>
                    Our clients are <i style={{margin:"unset"}}>vital</i> to the growth of our business, thus we take great pride in ensuring 100% satisfaction from beginning to end. We are not perfect, but we definitely try to be! 
                    <br/>
                    <br/>
                    It is important to us that our space welcomes all, and encourages the uniqueness in each client. 
                    We thank you for your business and we hope to see you soon!
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
}


function Header () {
    const headerImageList = [
        {id: 1, src: '/images/h-1.png'},
        {id: 2, src: '/images/h-2.png'},
        {id: 3, src: '/images/h-3.png'},
        {id: 4, src: '/images/h-4.png'},
        {id: 5, src: '/images/h-5.png'},
        {id: 6, src: '/images/h-6.png'},
    ];

    return (
        <div>
            <div className='NS-header'>
                {headerImageList.map((image) => <Images key={image.id} classname='header-img' src={image.src}/>)}
            </div>
        </div>
    )
}



const Card = (props) => {
    return (
        <div className='card'>
            <img className={props.classname} src={props.imgSrc} alt="s-*"/>
            <h4>{props.title}</h4>
            <div className='card-body'>
                {props.desc}
            </div>
            <div className='card-footer' style={{margin:"20px"}}>
                {props.price}
                BOOK TODAY
                <a href="tel:+16822557055" ><button className='call-btn-card'><i className="fa-solid fa-phone-flip"/></button></a>
            </div>
        </div>
    )
}


function Services() {

    const servicelist = [
        {id: 1, title:"Manicure", desc:"Invest in the health of your hands by showing it some love. Manicures includes nail shapping/trimming, cuticle grooming, exfoliation, lotioning and polish of your choice. ", price:"", imgSrc:'/images/s-2.png' },
        {id: 2, title:"Pedicure", desc:"Improve the natural texture and look of your legs. Pedicures includes nail shapping, cuticle grooming, exfoliation, and polish of your choice.", price:"", imgSrc: '/images/s-3.png'},
        {id: 3, title:"Waxing", desc:"Delay hair regrowth, prevent ingrown hairs, and help exfoliate the skin. Check out our Service Menu to see what we have available.", price:"", imgSrc: '/images/s-4.png'},
        {id: 4, title:"Lash Enchancement", desc:"Lash extension naturally define your eyes to make them look bolder, fuller and sexier without any . Call to book with Holly today! ", price:"", imgSrc: '/images/s-1.png'},
        {id: 5, title:"Artificial nails", desc:"Dip, Acrylic, Gel, Chrome, Designs & More! ", price:"", imgSrc: '/images/s-5.png'},
        {id: 6, title:"Children", desc:"Treat your little(s) with a fun and special spa day out.", price:"", imgSrc:'/images/s-6.png'},
    ];

    return (
        <div className='services-body'>
            <h2 style={{color:"#ab866f"}} >Services</h2>


            <div className='services-body2' >
                
                <div className='services-div'>
                    {servicelist.map((service) => <Card key={service.id} classname="card-img" title={service.title} desc={service.desc} price={service.price} imgSrc={service.imgSrc}/>)}
                </div>

                <a href="tel:+16822557055" ><button style={{marginTop:"20px"}} className="NS-btn1">Call for better estimates</button></a>
                <Link to="/service-menu"><button  style={{backgroundColor:"#ab866f", color:"white"}} className="NS-btn1">Service Menu</button></Link>
            </div>
        </div>
    );
}


function Gallery() {
    const galleryList = lookbookJson.slice(0,12);
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

    const breakpoint = 600;

    return width > breakpoint ? 
    (
        <div className='gallery-body'>
          <h2 style={{color:"#fff"}} >Gallery</h2>
          <div style={{textAlign:"center"}}>
            <div id='gallery'>
                {galleryList.map((image) => <Images key={image.id} classname="gallery-img" src={image.src}/>)}
            </div>
            <Link to="/look-book/"><button style={{marginTop:"20px"}} className="NS-btn">View more on our Look Book!</button></Link>
          </div>
          
        </div>
    )
    :
    (
        <div className='gallery-body'>
          <h2 style={{color:"#fff"}} >Gallery</h2>
            <button onClick={prev} className='gallery-btn left'><i className="fa-solid fa-angles-left"></i></button>
            <button onClick={next} className='gallery-btn right'><i className="fa-solid fa-angles-right"></i></button>
          <div style={{textAlign:"center"}}>
            <div id='gallery'>
                
                <span className='gallery-sec active'>
                    <Images classname="gallery-img" src={'/images/1.png'}/>
                    <Images classname="gallery-img" src={'/images/2.png'}/>
                    <Images classname="gallery-img" src={'/images/3.png'}/>
                </span>
                <span className='gallery-sec' >
                    <Images classname="gallery-img" src={'/images/4.png'}/>
                    <Images classname="gallery-img" src={'/images/5.png'}/>
                    <Images classname="gallery-img" src={'/images/6.png'}/>
                </span>
                <span className='gallery-sec'>
                    <Images classname="gallery-img" src={'/images/7.png'}/>
                    <Images classname="gallery-img" src={'/images/8.png'}/>
                    <Images classname="gallery-img" src={'/images/9.png'}/>
                </span>
                <span className='gallery-sec'>
                    <Images classname="gallery-img" src={'/images/10.png'}/>
                    <Images classname="gallery-img" src={'/images/11.png'}/>
                    <Images classname="gallery-img" src={'/images/12.png'}/>
                </span>
            </div>
            <Link to="/look-book/"><button className="NS-btn" style={{marginTop:"20px"}}>View more on our Look Book!</button></Link>

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
                    <img className='ico' src={ico} alt="ico"/>
 
                    
                </div>
                <Map />
            </div>
           
        </div>
    );
}


const Carousel = () => {
    const host = useRef(null);
    const drinks = useRef(null)
    const myRef = useRef(null)
    const vol = useRef(null)
    const col = useRef(null)

   const scroll1 = () => myRef.current.scrollIntoView({ block:'center',  behavior: 'smooth' })
   const scroll2 = () => vol.current.scrollIntoView({ block: 'center',  behavior: 'smooth' })   
   const scroll3 = () => col.current.scrollIntoView({ block: 'center',  behavior: 'smooth' })   
   const scroll4 = () => drinks.current.scrollIntoView({ block: 'center',  behavior: 'smooth' })   
   const scroll5 = () => host.current.scrollIntoView({ block: 'center',  behavior: 'smooth' })   


    return (
        <div className='carousel'>
            <div className='carousel-container'>
                <div ref={myRef} className='carousel-item'>
                    <img src={'/images/l-school.svg'} alt="carousel" className="host-img"/>
                    <img src={'/images/l-school-square.svg'} alt="carousel" className="host-s-img"/>
                </div>
                <div ref={vol} className='carousel-item'>
                    <img src={'/images/l-volcano.svg'} alt="carousel" className="host-img"/>
                    <img src={'/images/l-volcano-square.svg'} alt="carousel" className="host-s-img"/>
                </div>
                <div ref={col} className='carousel-item'>
                    <img src={'/images/l-collagen.svg'} alt="carousel" className="host-img"/>
                    <img src={'/images/l-collagen-square.svg'} alt="carousel" className="host-s-img"/>
                </div>
                <div ref={drinks} className='carousel-item'>
                    <img src={'/images/l-drinks.svg'} alt="carousel" className="host-img"/>
                    <img src={'/images/l-drinks-square.svg'} alt="carousel" className="host-s-img"/>
                </div>
                <div ref={host} className='carousel-item'>
                    <img src={'/images/l-hosting.svg'} alt="carousel" className="host-img"/>
                    <img src={'/images/l-hosting-square.svg'} alt="carousel" className="host-s-img"/>
                    {/* <div  className='host-btn-container'>
                        <Link to="/hosting"><button className='host-btn'>Click here for more information</button></Link>
                    </div> */}
                </div>
                
                       
            
            </div>
            
            <div className='dot-container'>
                <div className='dot' id="dot-1" onClick={scroll1}/>
                <div className='dot' id="dot-2" onClick={scroll2}/>
                <div className='dot' id="dot-3" onClick={scroll3}/>
                <div className='dot' id="dot-4" onClick={scroll4}/>
                <div className='dot' id="dot-5" onClick={scroll5}/>
            </div>
        </div>
    )
}


function Landing() {
    useEffect(() => {
        /*Listening to window changes*/
        window.top.document.title = "5 Star Nail Spa"
        window.scrollTo(0, 0);
    
    });
      
    return (
        <div className="landing-body">
            <AboutUs/>
            <Header />
            <Carousel/>
            <Services />
            <Gallery />
            <Contact />
        </div>
    );
}

export default Landing;