import React from "react";
import './css/dialog.css'

function Dialog (props){
    const style=props.style+ " btn";


    return props.show ?  (
        <div className="overlay">
            <dialog open className="dialog">
                <h3>{props.title}</h3>
                
                <div className="dialog_content">
                    {props.description}
                </div>
                <div className="dialog_foot">
                    <button className={style} onClick={props.confirm}>{props.confirmMessage}</button>
                    <button className="okay btn" onClick={props.cancel}>{props.cancelMessage}</button>
                </div>
            </dialog>
        </div>
    )
    :
    (
    <></>
    )
}

export default Dialog;