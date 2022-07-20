import React from 'react';
import { Link } from "react-router-dom";
import './css/login.css';



function Login() {

    return (
        <div className='login-body'>
            <div className='login-div'>
                <div>
                    <h2>Login</h2>
                </div>
                <form className='login-form'>
                    <input className="login-input" type='text' id='username' name='username' placeholder='username'/>
                    <input className="login-input" id='password' name='password' type='password' placeholder='password'/>
                    <input type='submit' formTarget="_blank" value='Login'/>
                </form>
                <p>
                    <Link className='forget-pass-link' to="/recovery">Forgot Password</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;