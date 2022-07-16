import React from 'react';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <div>
                <form>
                    <input type='text' id='username' name='username' placeholder='username'/>
                    <input id='password' name='password' type='password' placeholder='password'/>
                    <input type='submit' formtarget="_blank" value='Login'/>
                </form>
                <Link to="/recovery">Forgot Password</Link>
            </div>
        </div>
    );
}

export default Login;