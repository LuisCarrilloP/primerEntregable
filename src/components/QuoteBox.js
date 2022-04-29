import React from 'react';
import quotes from "../quotes.json"
import { useState } from 'react';

const colorsArray = ["red", "lightcoral", "lightgreen", "lightblue", "lightsalmon", "lightseagreen", "lightskyblue", "lightgray"]

const QuoteBox = () => {

    /* set random quote */
    const [ newQuote, setNewQuote ] = useState( Math.floor(Math.random() * quotes.length) )
    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setNewQuote( randomIndex )

    }

    /* random color generator */
    const randomColor = Math.floor(Math.random () * colorsArray.length)


    /* compact  var */
    const quoteRandom = quotes[newQuote]

    document.body.style = `background: ${colorsArray[randomColor]}`


    /* check json */
    /* console.log(quotes); */
    return (
        <div className='Box' /* style={{backgroundColor:colorsArray[randomColor]}} */>
            <ul className='ul'>
                <li>
                        <i className="fa-solid fa-quote-left" style={{color:colorsArray[randomColor]}}>
                        </i>
                        <p className='quote' style={{color:colorsArray[randomColor]}}>
                        {quoteRandom.quote}
                    </p>
                </li>
                <li className='author' style={{color:colorsArray[randomColor]}}>
                    <span className='span'>-{quoteRandom.author}</span>
                </li>
                <li className='nextQuote'>
                    <button onClick={changeQuote} style={{backgroundColor:colorsArray[randomColor]}} className="nextQuoteButton">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default QuoteBox;