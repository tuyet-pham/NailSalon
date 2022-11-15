import React, { useState } from 'react';
import './css/promotion.css';
import { useEffect } from 'react';
import promotions from './json/promo.json'

function PromoImg (props) {
    const caption = props.caption;
    const expired = props.expired;

    return (
        <div className='promo'>
            <img src={props.src} className="promo-img" alt="5 Star Nail Spa Promotion"/>
            {expired ? <h4 className='expired'>{caption}</h4> : <h4>{caption}</h4>}
            <div className='terms'>
                <u>Terms & Conditions</u>
                <br/>
                {props.terms}
            </div>
        </div>
    )
}


// const PromoForm = ()=> {
//     return (
//         <iframe 
//             src="https://docs.google.com/forms/d/e/1FAIpQLSdS9MnGgwpnOszV1UbLC0gRJ190QbUzTWSAZEv2p5WrpPCD5Q/viewform?embedded=true" 
//             width="640" 
//             height="1076"
//             title="i"
//             frameborder="0" 
//             marginheight="0" 
//             marginwidth="0">
//                 Loading…
//         </iframe>
//     )
// }


function Promotion() {
    const [promoList, setPromoList] = useState([]);
    const promoform="https://forms.gle/NAjYm93gygA4xKoq5";
    
    useEffect(() => {

        window.scrollTo(0, 0);
        window.top.document.title = "5 Star Nail Spa | Promo"
        setPromoList(promotions);

    });


    return (
        <div className='promo-body'>
            {promoList.slice(1,2).map((promo) => <PromoImg key={promo.id} caption={promo.caption} src={promo.src} terms={promo.terms} expired={promo.expired}/>)}
            {promoList.slice(0,1).map((promo) => <PromoImg key={promo.id} caption={promo.caption} src={promo.src} terms={promo.terms} expired={promo.expired}/>)}
            {/* <a href={promoform}>Click</a> */}
        </div>
    );
}

export default Promotion;