import React, {useEffect} from 'react';
import './css/lashes.css'


function Lashes() {
    useEffect(() => {
        /*Listening to window changes*/
        window.top.document.title = "5 Star Nail Spa | Lashes"
        window.scrollTo(0, 0);
    
    });
    return (
        <div className='lashes-body'>
            <div>
                <h1>Coming Soon!</h1>
            </div>
        </div>
    );
}

export default Lashes;