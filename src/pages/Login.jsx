import React from 'react';

function Login() {
    return (
        <div>
            <div>
                <form>
                    <input type='text' id='username' name='username' placeholder='username'/>
                    <input id='password' name='password' type='password' placeholder='password'/>
                    <input type='submit' formtarget="_blank" value='Login'/>
                </form>
            </div>
        </div>
    );
}

export default Login;