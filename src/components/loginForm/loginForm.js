import React from 'react';
export const LoginForm = ({ submit }, { handleUChange }, handlePChange) => {

    return (
        <div>
            <form onSubmit={submit} >
                <input placeholder="Username" name="Username" onChange={handleUChange} />
                <input type="password" placeholder="Password" name="Password" onChange={handlePChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

