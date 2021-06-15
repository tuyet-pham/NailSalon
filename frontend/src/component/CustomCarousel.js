import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './banner.css';

function Slide(props){
    const legend = props.legend;
    const src = props.src;
    const message = props.message;

    return (
        <div className="slide-card-item">
            <img className="img-slide" src={src} alt="404" height="50%" width="100%"/>  
            <p className="slide-font">{legend}</p>
            <p className="slide-font-2">{message}</p>
        </div>
    );
}


function Gallery(props){
    const src= props.src

    return (
        <div className="gallery-card">
            <img className="gallery-pic" alt="404" src={src}/>  
        </div>
    );
} 


function CustomCarousel(props){
    return (
        props.type === "1" ? 
        (
            <div className="container pt-3 pb-1">
                <div id="custom-carousel1" className="carousel slide carousel-fade" autoPlay="true" data-ride="carousel" interval="500" swipeable="true" data-pause="hover">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <span className="row">
                                <Gallery src="https://315gqf1cb88e2qagu3f9xz91-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Honey_Storefront_2017-4-1024x768-768x576.jpg"/>
                                <Gallery src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/01/aer-nail-bar.jpg"/>
                                <Gallery src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sQTNHANdsjni4DNgpKslvy2c_tlQ3t8pBA&usqp=CAU"/>
                                <Gallery src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzBDBT8lKclOxQelT6JJeiKL6_RWAHJPW9Q&usqp=CAU"/>
                            </span>
                        </div>
                        <div className="carousel-item">
                            <span className="row">
                                <Gallery src="https://static.giggster.com/images/location/752e1ba1-9863-495b-87e0-3ffc1cc20aba/d51f727c-c1b7-4c33-b505-6f7a939bebd6/full_hd_retina.jpeg"/>
                                <Gallery src="https://media.timeout.com/images/103679265/630/472/image.jpg"/>
                                <Gallery src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRY2e7g-zCZYOzy0rDwGUEHXWI4n3iSPVtyRUVZZSX6u81EOTs2&usqp=CAU"/>
                                <Gallery src="https://www.smchealth.org/sites/main/files/imagecache/lightbox/main-images/seven_sisters_certification_visit_048.jpg"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
        : 
        (
            <div className="container pt-3 pb-1">
                <div id="custom-carousel" className="carousel slide mx-auto" data-ride="carousel" interval="2000" swipeable="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <span className="row">
                                <Slide legend="Manicure" message="Service description" src="https://pyxis.nymag.com/v1/imgs/7dd/a62/a13fbed6cb8d64f92e8ddaaee5d5d9a8b1-24-basic-manicure.rsquare.w700.jpg"/>
                                <Slide legend="Pedicure" message="Service description" src="https://cdn.spafinder.com/2015/10/pedicure.jpg"/>
                                <Slide legend="Kids" message="Services description" src="https://img.grouponcdn.com/bynder/2QAadescQt4P43Czsh4fhnPHMzwp/2Q-2048x1229/v1/sc600x600.jpg"/>
                            </span>
                        </div>
                        <div className="carousel-item">
                            <span className="row">
                                <Slide legend="Waxing" message="Services description" src="https://media1.popsugar-assets.com/files/thumbor/T4QDBI4Bx5zjoqzhpjH7PBYpfkk/1339x0:5355x4016/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/13/648/n/1922153/501015105e6b99d9649f39.67261053_/i/what-to-know-about-waxing-legs.jpg"/>
                                <Slide legend="Threading" message="Services description" src="https://www.thelashlounge.com/wp-content/uploads/2020/01/threading-1-e1579893468485.png"/>
                                <Slide legend="Lashes" message="Services description" src="https://www.envoguedayspa.com/images/lash-extension-new.jpg"/>
                            </span>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#custom-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#custom-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        )
    );
}

export default CustomCarousel;