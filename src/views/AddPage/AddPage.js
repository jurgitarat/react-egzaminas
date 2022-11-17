import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./AddPage.css";
export const AddPage = (user) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Status, setStatus] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.token) {
            navigate("/login");
        }
    }
    );
    const sendToServer = (e) => {
        e.preventDefault();
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify({
                'title': title,
                'description': description
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    setStatus(data.err);
                }
                else {
                    setStatus(data.msg);
                }
            })
            .catch()

            ;
    }
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    return (
        <div>
            <h1>Add Form</h1>
            <form onSubmit={sendToServer}>
                <input type="text" placeholder='title' onChange={handleTitleChange} />
                <textarea placeholder='description' onChange={handleDescriptionChange} />
                <button>Send to Server</button>
            </form>
            {Status && <p className='notification'>{Status}</p>}
        </div>
    )
}
export default AddPage;