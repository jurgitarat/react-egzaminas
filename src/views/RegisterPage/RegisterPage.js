import React from 'react';
import {useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Status, setStatus] = useState("");
    const submitForm = (e) => {
        e.preventDefault();

       // useEffect(() => {
            fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
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
                if (data.err){
                    setStatus(data.err);
                }
                else{
                    setStatus("User has been registered successfully");
                }
              })
              .catch()
              ;
        //  }, []);
        }

        const handleUsernameChange = (e) => setUsername(e.target.value);
        const handlePasswordChange = (e) => setPassword(e.target.value);
/*  */

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={submitForm}>
                <input placeholder="Username"  onChange={handleUsernameChange}  />
                <input type="password" placeholder="Password"  onChange={handlePasswordChange} />
                <button>Login</button>
            </form>
            {Status && <p class='notification'>{Status}</p>}
        </div>
    )
}


export default RegisterPage;