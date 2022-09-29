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
        </div>
    )
}


function Promotion() {
    const [promoList, setPromoList] = useState([]);
    
    
    useEffect(() => {

        window.scrollTo(0, 0);
        window.top.document.title = "5 Star Nail Spa | Promo"
        setPromoList(promotions);

    });


    return (
        <div className='promo-body'>
            <h4>No new promotions at this time</h4>
            <hr/>
            {promoList.slice(0,2).map((promo) => <PromoImg key={promo.id} caption={promo.caption} src={promo.src} expired={promo.expired}/>)}
            
        </div>
    );
}

export default Promotion;