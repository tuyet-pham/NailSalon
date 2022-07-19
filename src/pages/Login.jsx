import React from 'react';
import { Link } from "react-router-dom";




function Login() {

    return (
        <div className='login-body'>
            <div className='login-div'>
                <form className='login-form'>
                    <input type='text' id='username' name='username' placeholder='username'/>
                    <input id='password' name='password' type='password' placeholder='password'/>
                    <input type='submit' formTarget="_blank" value='Login'/>
                </form>
                <Link style={{color:'rosybrown'}} to="/recovery">Forgot Password</Link>
            </div>
        </div>
    );
}

export default Login;