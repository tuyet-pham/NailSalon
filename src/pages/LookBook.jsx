import React, {useEffect} from "react";
import { useState } from "react";
import '../pages/css/lookbook.css'

function LBImages (props) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <img 
                className="lb-images" 
                src={props.src} 
                alt="alt-book"
                onClick={()=>setShow(!show)}
            />            
            
            
            {/* Modal Images */}
            <div className="overlay" style={{display: show ? "inline-block" : "none"}}>
                <div className="img-modal">
                    <img className="lb-images-modal" src={props.src} alt="alt-book"/>
                    
                    <div className="bottom">
                        
                       <span style={{display: props.artist === ''? 'none':'unset'}} className="artist">
                            Artist: {props.artist}
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


function LookBook (props) {
    const [showheight, setShowHeight] = useState(0);

    useEffect(() => {
        window.top.document.title = "5 Star Nail Spa | Look Book"
        window.addEventListener("scroll", () => {
            const winheight = window.scrollY;
            setShowHeight(winheight);
        });
    });
      
    const gallery = [
        {id: 1, src: require('../images/1.png'), artist:'Kavin'} ,
        {id: 2, src: require('../images/2.png'), artist:'Silva'},
        {id: 3, src: require('../images/3.png'), artist:'Silva'},
        {id: 4, src: require('../images/4.png'), artist:'Silva'},
        {id: 5, src: require('../images/5.png'), artist:''},
        {id: 6, src: require('../images/6.png'), artist:'Holly'},
        {id: 7, src: require('../images/7.png'), artist:'Vivian'},
        {id: 8, src: require('../images/8.png'), artist:''},
        {id: 9, src: require('../images/9.png'), artist:'Judy'},
        {id: 10, src: require('../images/10.png'), artist:''},
        {id: 11, src: require('../images/11.png'), artist:''},
        {id: 12, src: require('../images/12.png'), artist:''},
        {id: 13, src: require('../images/13.png'), artist:''},
        {id: 14, src: require('../images/14.png'), artist:''},
        {id: 15, src: require('../images/15.png'), artist:''},
        {id: 16, src: require('../images/16.png'), artist:''},
        {id: 17, src: require('../images/17.png'), artist:'Silva'},
        {id: 18, src: require('../images/18.png'), artist:'Judy'},
        {id: 19, src: require('../images/19.png'), artist:'Judy'},
        {id: 20, src: require('../images/20.png'), artist:'Silva'},
        {id: 21, src: require('../images/21.png'), artist:'Judy'},
        {id: 22, src: require('../images/22.png'), artist:'Silva'},
        {id: 23, src: require('../images/23.png'), artist:''},
        {id: 24, src: require('../images/24.png'), artist:''},
        {id: 25, src: require('../images/25.png'), artist:''},
        {id: 26, src: require('../images/26.png'), artist:''},
        {id: 27, src: require('../images/27.png'), artist:''},
        {id: 28, src: require('../images/28.png'), artist:''},
        {id: 29, src: require('../images/29.png'), artist:'Holly'},
        {id: 30, src: require('../images/30.png'), artist:''},
        {id: 31, src: require('../images/31.png'), artist:''},
        {id: 32, src: require('../images/32.png'), artist:''},
        {id: 33, src: require('../images/33.png'), artist:''},
        {id: 34, src: require('../images/34.png'), artist:'Judy'},
        {id: 35, src: require('../images/35.png'), artist:''},
        {id: 36, src: require('../images/36.png'), artist:''},
        {id: 37, src: require('../images/37.png'), artist:''},
        {id: 38, src: require('../images/38.png'), artist:'Amy'},
        {id: 39, src: require('../images/39.png'), artist:''},
        {id: 40, src: require('../images/40.png'), artist:''},
        {id: 41, src: require('../images/41.png'), artist:'Vivian'},
        {id: 42, src: require('../images/42.png'), artist:''},
        {id: 43, src: require('../images/43.png'), artist:''},
        {id: 44, src: require('../images/44.png'), artist:'Tony'},
        {id: 45, src: require('../images/45.png'), artist:'Holly'},

    ];

    
    return (

        <div onLoad={()=>{window.scrollTo(0, 0)}} className="lb">
            <div className="lb-body">

                <div className="lb-main-gallery">
                    <p style={{width:"100%", textAlign:'center'}}>{'Click image to expand 👆🏻'}</p>
                    {gallery.map((image) => <LBImages key={image.id} src={image.src} artist={image.artist}/>)}               
                </div>

                <button style={{opacity: showheight > 900 ? '1' : '0',marginRight: showheight > 900 ? '0px' : '-60px'}} className="button-up" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    <i className="fa-solid fa-caret-up"></i>
                </button>
                
            </div>
        </div>
    );
}

export default LookBook;