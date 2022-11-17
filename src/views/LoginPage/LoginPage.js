import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/global';
import { LoginForm } from '../../components/loginForm/loginForm';
export const LoginPage = ({ onLogin }) => {

    const [Status, setStatus] = useState("");
    const navigate = useNavigate();
    const doLogin = (e) => {
        e.preventDefault();
        fetch(BASE_URL + 'v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: e.target.Username.value,
                password: e.target.Password.value,
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
            .catch();
    }
    return (
        <div>
            <h1>Login Form</h1>
            <LoginForm submit={doLogin} />
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default LoginPage;