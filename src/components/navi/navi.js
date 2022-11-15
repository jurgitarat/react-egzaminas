import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='navigacija'>
            {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/Add">Add</Link>
        </div>
    )
}