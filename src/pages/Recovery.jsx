import React from "react";
import Dialog from "./Dialog";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './css/recovery.css'


function Recovery () {
    const [showRecoveryDialog, setShowRecoveryDialog] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function confirm (e) {
        console.log('confirm');
        setShowRecoveryDialog(false);
        navigate("/login", { replace: true });
    }

    const cancel = () =>{
        console.log('cancel');
        setShowRecoveryDialog(false);
    }

    const handleform = (event) => {
        event.preventDefault();
        console.log(email);
        setEmail("")
        setShowRecoveryDialog(true);
        return false;
    }


    return (
        <div className="recovery-body">
            <div className="recovery-div">
                <div>
                    <h3>Please enter email on file</h3>
                </div>
                <form className="recovery-form" onSubmit={handleform}>
                    <input 
                        className="recovery-input"
                        name="email-rec" 
                        type="email"
                        value={email}
                        placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    <input type="submit" value='Submit'/>
                </form>
                <Dialog 
                    show={showRecoveryDialog}
                    title="Password Recovery"
                    description="Please allow a couple of minutes to pass then check your email before trying again"
                    confirmMessage="Okay"
                    cancelMessage="Exit"
                    confirm={confirm}
                    cancel={cancel}
                    classTypeConfirm="okay btn"
                    classTypeCancel="okay btn"
                />
            </div>
        </div>
        
    );
}

export default Recovery;