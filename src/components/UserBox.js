import React from 'react';
import users from "../users.json"
import { useState } from 'react';

const colors = ["lightcoral", "lightblue", "yellow", "lightgreen", "lightpink"]


const UserBox = () => {
                                            /* al cargar la pagina inicia con aleatorio */
    const [newUser, setNewUser] = useState(Math.floor(Math.random () * (users.length -1)) + 1);

    const cambiarUsuario = () => {
        setNewUser(Math.floor(Math.random () * (users.length -1)) + 1)
        /* const randomIndex = Math.floor(Math.random() * users.length)
        setNewUser(randomIndex) */
    }


    const randomColor = Math.floor(Math.random () * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
    
    
    const userChange = users[newUser] /* variable para lo que se repite */

    

    return (


        <div className='Card' style={{color:colors[randomColor]}}>
            <h1>
            {users[newUser].name.title}  {users[newUser].name.first} {users[newUser].name.last}
            </h1>
            
            <img src={users[newUser].picture.large} alt=""  className='img'/>

            <ul className='ul'>
                <li>
                    <i className="fa-solid fa-envelope"></i>  {users[newUser].email}
                </li>
                <li>
                    <i className="fa-solid fa-house"></i> {users[newUser].location.street.number}, {users[newUser].location.street.name}
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i> {users[newUser].phone}
                </li>
            </ul>
            <button onClick={cambiarUsuario} className="randomButton" style={{backgroundColor:colors[randomColor]}}>
                <i className="fa-solid fa-shuffle"></i> {/* Cambiar Usuario */}
            </button>
            
        </div>
    );
}

export default UserBox;