import { useState } from "react";
import React from 'react';
import './css/modal.css';

function Modal (props) {
    const [show, setShow] = useState(true);

    return (
        <div>
            {/* Modal Image */}
            <div className="overlay" onClick={()=>setShow(false)} style={{display: show ? "inline-block" : "none"}}>
                <div className="modal-container">
                    <div>
                        <button className="close-modal" onClick={()=>setShow(!show)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <img className="modal-img" src={props.src} alt="5 Star Nail Spa Promotion"/>
                </div>
            </div>
        </div>
    );
}

export default Modal;