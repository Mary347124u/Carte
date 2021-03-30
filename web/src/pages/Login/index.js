import React from 'react';
import './styles.css';
import LoginImage from '../../assets/Login.png';
export default function Login(){
    return(
        <div className="login">
            <img src={LoginImage}></img>
           <form>
               <h1>ENTRE EM SEU RESTAURANTE</h1>
               <input placeholder="Email"></input>
               <input placeholder="Senha"></input>
               <button>Login</button>
           </form>
        </div>
    )
}