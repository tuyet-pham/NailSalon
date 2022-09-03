import React, {useEffect} from "react";
import { useState } from "react";
import '../pages/css/lookbook.css'
import Loading from "./Loading";
import lookbookJson from './json/lookbook.json'


function LBImages (props) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <img 
                className="lb-images" 
                src={props.src} 
                alt="5-star-nail-spa-nails-look"
                onClick={()=>setShow(!show)}
            />            
            
            
            {/* Modal Images */}
            <div className="overlay" onClick={()=>setShow(false)} style={{display: show ? "inline-block" : "none"}}>
                <div className="img-modal-lb">
                    <img className="lb-images-modal" src={props.src} alt="5-star-nail-spa-nails-look"/>
                    
                    <div className="bottom">
                        
                       <span style={{display: props.caption === ''? 'none':'unset'}} className="artist">
                            Artist: {props.caption}
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
    const [loading, setLoading] = useState(true)
    const [jsonImg, setJsonImg] = useState([]);



    useEffect(() => {
        setJsonImg(lookbookJson);

        setTimeout(()=>{
            setLoading(false)
        }, 2700);

        window.top.document.title = "5 Star Nail Spa | Look Book"
        window.addEventListener("scroll", () => {
            const winheight = window.scrollY;
            setShowHeight(winheight);
        });
    },[]);
    
    return (
        <div onLoad={()=>{window.scrollTo(0, 0)}} className="lb">
            <Loading show={loading}/>
            <div className="lb-body">
                <div className="lb-main-gallery">
                    <p style={{width:"100%", textAlign:'center'}}>
                        {'✨ Click image to expand & for artist name 💅🏼 ✨'}
                        <br/>
                        
                    </p>
                    {jsonImg.map((image) => <LBImages key={image.id} src={image.src} caption={image.caption}/>)}               
                </div>

                <button style={{opacity: showheight > 900 ? '1' : '0',marginRight: showheight > 900 ? '0px' : '-60px'}} className="button-up" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    <i className="fa-solid fa-caret-up"></i>
                </button>
                
            </div>
        </div>
    )
}

export default LookBook;