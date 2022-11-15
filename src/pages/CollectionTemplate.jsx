import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/css/lookbook.css'
import Loading from "./Loading";



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


const CollectionTemplate = ({collections}) => {
    
    const { collectionId } = useParams();
    const [ idContent, setIdContent ] = useState([]); 
    const [ title, setTitle ] = useState();
    const [loading, setLoading] = useState(true)


    const show_ = () => {
        if (collectionId === '0'){
            setTitle(collections[collectionId].collectionName)
        }
        else if ( collectionId === '1' ){
            setTitle(collections[collectionId].collectionName)
        }
        else if ( collectionId === '2' ){
            setTitle(collections[collectionId].collectionName)

        }
        else if ( collectionId === '3' ){
            setTitle(collections[collectionId].collectionName)
        }
        else if ( collectionId === '4' ){
            setTitle(collections[collectionId].collectionName)
        }
    }

    useEffect(()=>{
        show_();

        setIdContent(collections[[collectionId]].content);
        setTimeout(()=>{
            setLoading(false)
        }, 1500);
        

    },[show_]);

    return (
        <div className="look-section" onLoad={()=>setLoading(true)}>
            <Loading show={loading} src="/images/loading.svg"/>

            <p style={{width:"100%", textAlign:'center'}}>
                <h3>Collection: {title}</h3>
                {'✨ Click image to expand & for artist name 💅🏼 ✨'}
            </p>

            <div className="lb-main-gallery">
                {idContent.map((image) => <LBImages key={image.id} src={image.src} caption={image.caption}/>)}               
            </div>
        </div>

    );
}

export default CollectionTemplate;