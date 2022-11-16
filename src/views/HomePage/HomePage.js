import React from 'react';
import {useEffect, useState } from "react";
export const HomePage = (user) => {
    const [results, setResults] = useState("");
    const [Status, setStatus] = useState("");

    
  useEffect(() => {

    console.log(results);
    setStatus("Error: no results loaded yet")
    fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+user.token
          },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err){
            setStatus(data.err);
        }
        else if (data.length===0){
            setStatus("There are no records")
        }
        else {
        setResults(data.map((result, i) => (
              <div className="card" key={result.id}>
                <h2>{result.title}</h2>
                <p>{result.description}</p>
              </div>
            )));
            setStatus("");
        
        }
      })
      .catch()
      
      ;
  }, []);
    return (
        <div>
        
        {results && <div classname='wrapper'>{results}</div>}
        {Status && <p classname='notification'>{Status}</p>}
        </div>
    
    )
    }
export default HomePage;