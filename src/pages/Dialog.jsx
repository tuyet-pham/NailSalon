import React from "react";
import './css/dialog.css'

function Dialog (props){

    return props.show ?  (
        <div className="overlay">
            <dialog open className="dialog">
                <h3>{props.title}</h3>
                
                <div className="dialog_content">
                    {props.description}
                </div>
                <div className="dialog_foot">
                    <button className={props.classTypeConfirm} onClick={props.confirm}>{props.confirmMessage}</button>
                    <button className={props.classTypeCancel} onClick={props.cancel}>{props.cancelMessage}</button>
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