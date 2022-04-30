import React, { useState } from 'react';



const Button = ({changeQuote, colorsArray, randomColor}) => {
   
    
    return (
        <div>
           <button onClick={changeQuote} style={{backgroundColor:colorsArray[randomColor]}} className="nextQuoteButton">
            <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;