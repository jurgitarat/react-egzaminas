import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export const LoginPage = ({ onLogin }) => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Status, setStatus] = useState("");
    const navigate = useNavigate();
    const doLogin = (e) => {
        e.preventDefault();
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: Username,
                password: Password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    setStatus(data.err);
                }
                else {
                    setStatus(data.msg);
                    onLogin(data.token);
                    navigate('/');
                }
            })
            .catch()

            ;
    }

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={doLogin}>
                <input placeholder="Username" onChange={handleUsernameChange} />
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button>Login</button>
            </form>
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default LoginPage;