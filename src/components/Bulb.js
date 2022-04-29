import { useState } from "react";
import React from 'react';

const Bulb = () => {

    const [ state, setState ] = useState(true)

    const changeState = () => setState (!state)
    
    return (
        <div className="App">
            <div className={`bulb ${state ? "on" : "off"}`}></div>
            <button onClick={changeState}>{state ? "ON" : "OFF"}</button>
        </div>
    );
};

export default Bulb;

/* .bulb{
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
  }
  
  .on{
    background-color: yellow;
  }
  
  .off{
    background-color: gray
  } */