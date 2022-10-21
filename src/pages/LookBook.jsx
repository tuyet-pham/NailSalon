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
                alt="5 Star Nail Spa Nails Look"
                onClick={()=>setShow(!show)}
            />            
            
            
            {/* Modal Images */}
            <div className="overlay" onClick={()=>setShow(false)} style={{display: show ? "inline-block" : "none"}}>
                <div className="img-modal-lb">
                    <img className="lb-images-modal" src={props.src} alt="5 Star Nail Spa Nails Look"/>
                    
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


function Looks(props) {
    const jsonImg = props.imglist;

    return (
        <div className="look-section">
            <div className="lb-title" style={{backgroundImage:"url("+ props.bgImg +")"}}>
                {props.title}
            </div>
            <div className="lb-main-gallery">
                {jsonImg.map((image) => <LBImages key={image.id} src={image.src} caption={image.caption}/>)}               
            </div>

        </div>
    )
}



function LookBook () {
    const [showheight, setShowHeight] = useState(0);
    const [loading, setLoading] = useState(true)
    const [jsonImg, setJsonImg] = useState([]);



    useEffect(() => {
        setJsonImg(lookbookJson);

        setTimeout(()=>{
            setLoading(false)
        }, 3000);

        window.top.document.title = "5 Star Nail Spa | Look Book"
        window.addEventListener("scroll", () => {
            const winheight = window.scrollY;
            setShowHeight(winheight);
        });
    },[]);
    
    return (
        <div onLoad={()=>{window.scrollTo(0, 0)}} className="lb">
            <Loading show={loading} src="/images/loading.svg"/>
            <div className="lb-body">
                    <p style={{width:"100%", textAlign:'center'}}>
                        {'✨ Click image to expand & for artist name 💅🏼 ✨'}
                        <br/>    
                    </p>
                    <Looks title="Spooky Collections" bgImg={'/images/title-1.png'} imglist={jsonImg.slice(0,9)}/>
                    <Looks title="Past Collections" bgImg={'/images/title-2.png'} imglist={jsonImg.slice(9,63)}/>

                <button style={{opacity: showheight > 900 ? '1' : '0',marginRight: showheight > 900 ? '0px' : '-60px'}} className="button-up" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    <i className="fa-solid fa-caret-up"></i>
                </button>
                
            </div>
        </div>
    )
}

export default LookBook;