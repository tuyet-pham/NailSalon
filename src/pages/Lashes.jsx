import React, {useEffect, useState} from 'react';
import './css/lashes.css'


function LSImage (props) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <img 
                className="lash-image" 
                src={props.src} 
                alt="alt-holly"
                onClick={()=>setShow(!show)}
            />            
            
            
            {/* Modal Images */}
            <div className="overlay" style={{display: show ? "inline-block" : "none"}}>
                <div className="img-modal">
                    <img className="lash-image-modal" src={props.src} alt="alt-holly"/>
                    
                    <div className="bottom">
                        
                       <span style={{display: props.caption === ''? 'none':'unset'}} className="artist">
                            {props.caption}
                        </span>

                       <button className="close right" onClick={()=>setShow(!show)}>
                            close <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}


function Lashes() {

    const gallery = [
        {id: 1, src: require('../images/holly-1.png'), caption:''} ,
        {id: 2, src: require('../images/holly-3.png'), caption:''},
        {id: 3, src: require('../images/holly-4.png'), caption:''},
        {id: 4, src: require('../images/holly-2.png'), caption:''},
        {id: 5, src: require('../images/holly-5.png'), caption:''},
        {id: 6, src: require('../images/holly-6.png'), caption:''},
        {id: 7, src: require('../images/holly-7.png'), caption:''},
    ]

    function next() {
        
        const elem = document.getElementsByClassName('carsousel-lash');

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
        const elem = document.getElementsByClassName('carsousel-lash');

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
        window.top.document.title = "5 Star Nail Spa | Lashes"
        
    });

    return (
        <div onLoad={()=>{window.scrollTo(0, 0)}} className='lashes'>
            <div className='lash-header'>
                <div className='h-carsousel'>
                    <div className='carsousel-lash-container'>
                        <img className="carsousel-lash active carsousel-img" src={require('../images/holly-logo.svg')} alt='holly'></img>
                        <img className="carsousel-lash carsousel-img" src={require('../images/holly-1-1.svg')} alt='holly'></img>
                        <img className="carsousel-lash carsousel-img" src={require('../images/holly-1-2.svg')} alt='holly'></img>
                    </div>
                        
                    <div style={{width:'70%'}}>
                        <button onClick={prev} className="carsousel-btn left"><i className="fa-solid fa-angles-left"></i></button>
                        <button onClick={next} className="carsousel-btn right"><i className="fa-solid fa-angles-right"></i></button>
                    </div>
                </div>
                
                    
                <div className='h-text'>
                    <h4>Holly & her lashes</h4>
                    {`Holly is a Certified Lash Technician with 17+ years of experience in the beauty industry and 5+ 
                    of which doing lashes. Holly was prior licensed in permanent cosmetic tattoos(2010), microblading (2013) 
                    and lashes(2017-Now). And although Holly is certified in other many other areas, lashes are her true passion!
                    Holly is in love with providing her local hardworking clients with the best quality of service, because 
                    she know more than anyone, they deserve it. Call to book your first appointment with her today!
                    `}
                    
                    <br/>
                    <h4>What are eyelash extensions?</h4>
                    {`Eyelash extensions are made of natural or artificial fibers in different sizes, 
                        lengths, and curls to match your natural eyelash. They are applied to your original 
                        lashes using eyelash extension glue, either individually or in sections. The main 3 types are 
                        classic, volume, or hybrid types. During application, each individual fiber is glued onto your 
                        natural hair by hand. This makes the overall look highly customized and natural.
                    `}
                    <h4>Why get them?</h4>
                    {`If you love the way mascara looks but find putting them on every other day/time tedious, 
                     eyelash extensions will be a game changer. Are they a bit pricier? Yes, but the time you save 
                     very day is priceless. Lash extensions, done correctly, are also seemless and can offer a natural
                     and customized look.  
                    `}
                    <br/>
                    <div className="lash-btn">
                        Call for an estimate today
                        <a href="tel:+16822557055" ><button className='call-btn-card right'><i className="fa-solid fa-phone-flip"/></button></a>
                    </div>
                </div>
            </div>
            <div className="lash-body">
                {gallery.map((image) => <LSImage key={image.id} src={image.src} caption={image.caption}/>)}
            </div>
        </div>
    );
}

export default Lashes;