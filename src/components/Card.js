import React from 'react';

const Card = ({title, item1, item2, item3, backgroundcolor}) => {
    return (
        <div className={'Card ' + backgroundcolor}>
            <h2 className='center'>{title}</h2>
            <ul className='ul'>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>
    );
};

export default Card;