import { useState } from "react";
import React from 'react';

const Bulb = ({ isOn, toggle }) => {

    /* const [ state, setState ] = useState(true)

    const changeState = () => setState (!state) */
    
    return (
        <div className="App">
            <div className="bulb" style={{background: isOn ? "#ffff00" : "gray"}}></div>
            <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
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