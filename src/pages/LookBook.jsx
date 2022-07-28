import React, {useEffect} from "react";
import '../pages/css/lookbook.css'



function LBImages (props) {
    return (
        <>
            <img className="lb-images" src={props.src} alt="s"/>
        </>
    );
}


function Techsection (props) {

    return (
        <div className="lb-body">
            <span className="lb-header">
                Looks By {props.techname}
            </span>
            <div className="lb-tech-gallery">
                {props.images.map((imagelist) => <LBImages key={imagelist.id} src={imagelist.src}/>)}
            </div>
            
        </div>
    );
}



function LookBook (props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
      
    const gallery = [
        {id: 1, src: require('../images/1.png')} ,
        {id: 2, src: require('../images/2.png')},
        {id: 3, src: require('../images/3.png')},
        {id: 4, src: require('../images/4.png')},
        {id: 5, src: require('../images/5.png')},
        {id: 6, src: require('../images/6.png')},
        {id: 7, src: require('../images/7.png')},
        {id: 8, src: require('../images/8.png')},
        {id: 9, src: require('../images/9.png')},
        {id: 10, src: require('../images/10.png')},
        {id: 11, src: require('../images/11.png')},
        {id: 12, src: require('../images/12.png')},
        {id: 13, src: require('../images/13.png')},
        {id: 14, src: require('../images/14.png')},
        {id: 15, src: require('../images/15.png')},
        {id: 16, src: require('../images/16.png')},
        {id: 17, src: require('../images/17.png')},
        {id: 18, src: require('../images/18.png')},
        {id: 19, src: require('../images/19.png')},
        {id: 20, src: require('../images/20.png')},
        {id: 21, src: require('../images/21.png')},
        {id: 22, src: require('../images/22.png')},
        {id: 23, src: require('../images/23.png')},
        {id: 24, src: require('../images/24.png')},
        {id: 25, src: require('../images/25.png')},
        {id: 26, src: require('../images/26.png')},
        {id: 27, src: require('../images/27.png')},
        {id: 28, src: require('../images/28.png')},
        {id: 29, src: require('../images/29.png')},
        {id: 30, src: require('../images/30.png')},
        {id: 31, src: require('../images/31.png')},
        {id: 32, src: require('../images/32.png')},
        {id: 33, src: require('../images/33.png')},
        {id: 34, src: require('../images/34.png')},
        {id: 35, src: require('../images/35.png')},
        {id: 36, src: require('../images/36.png')},
        {id: 37, src: require('../images/37.png')},
        {id: 38, src: require('../images/38.png')},
        {id: 39, src: require('../images/39.png')},
        {id: 40, src: require('../images/40.png')},

    ];


    const silva = [
        {id: 1, src: require('../images/33.png')} ,
        {id: 2, src: require('../images/31.png')},
        {id: 2, src: require('../images/2.png')},
        {id: 2, src: require('../images/20.png')},
        {id: 2, src: require('../images/4.png')},
    ]

    const mimi = [
        // {id: 1, src: require('../images/8.png')} ,
    ]

    const judy = [
        {id: 1, src: require('../images/17.png')} ,
    ]

    const list = [
        {id: 1, techname: 'Silva', images: silva},
        {id: 2, techname: 'Mimi', images: mimi},
        {id: 3, techname: 'Judy', images: judy},
    ];
    
    return (

        <div className="lb">
            <div className="lb-body">
                {/* {list.map((list) => <Techsection key={list.id} techname={list.techname} images={list.images}/>)}
                <span className="lb-header">
                    Our Look Book & Gallery
                </span> */}
                <div className="lb-main-gallery">
                    {gallery.map((image) => <LBImages key={image.id} src={image.src}/>)}
                </div>
            </div>
        </div>
    );
}

export default LookBook;