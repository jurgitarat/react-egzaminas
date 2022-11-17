import React from 'react';
import { useState } from "react";
import { BASE_URL } from '../../constants/global';
import { LoginForm } from '../../components/loginForm/loginForm';
//import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {

    const [Status, setStatus] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        fetch(BASE_URL + 'v1/auth/register', {
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
                else if (data.error) {
                    setStatus(data.error);
                }
                else {
                    if (data.lastID) {
                        setStatus("User created succesfully. ID: " + data.lastID);
                    }
                    else {
                        setStatus("Unexpected response from server");
                    }
                }
            })
            .catch((error) => {
                setStatus(error);
            })
            ;
        //  }, []);
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <LoginForm submit={submitForm} />
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}

export default RegisterPage;