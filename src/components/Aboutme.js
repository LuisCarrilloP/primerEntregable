import React from 'react';

const AboutMe = ({userName}) => {

    const me = {
        name: "José Luis Carrillo",
        edad: 27,
        movie: "Matrix",
        music: "Electrónica"
      }
    

    return (
        <div className='card'>
            <ul>
                <li>
                    <b>Nombre: </b>{userName}
                </li>
                <li>
                    <b>Edad: </b>{me.edad}
                </li>
                <li>
                    <b>Película favorita: </b>{me.movie}
                </li>
                <li>
                    <b>Género musical favorito: </b>{me.music}
                </li>
            </ul>
        </div>
    );
};

export default AboutMe;