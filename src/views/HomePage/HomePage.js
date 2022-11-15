import React from 'react';
export const HomePage = (user) => {
    console.log("token");
    console.log(user);
    fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.token
          },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch()
      
      ;
    return (
    
        <p>ERROR</p>
    )
    }
export default HomePage;