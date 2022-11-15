import React from 'react';
import {useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    
  const [Username, setUsername] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        //alert("Petras yra balvonas");

       // useEffect(() => {
            fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify({
   
                    username: Username,
                    password: "blablabla",
                })
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch()
              
              ;
        //  }, []);
        }

        const handleUsernameChange = (e) => setUsername(e.target.value);
/*  */

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={submitForm}>
                <input placeholder="Username"  onChange={handleUsernameChange}  />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}


export default RegisterPage;