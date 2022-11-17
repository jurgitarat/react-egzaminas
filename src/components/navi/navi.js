import React from 'react';
import { Link } from 'react-router-dom';
import './navi.css';

export const Navigation = (user) => {

    //const location = useLocation();
    if (!user.token) {
        return (
            <div className='navigacija'>

                <img src="https://app.outboundsales.io/api/logo/acme.com" alt="logo" />
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
            </div>)
    }
    return (
        <div className='navigacija'>

            <img src="https://app.outboundsales.io/api/logo/acme.com" alt="logo" />
            {<Link to="/">Home</Link>}
            <Link to="/Add">Add</Link>
        </div>
    )
}

