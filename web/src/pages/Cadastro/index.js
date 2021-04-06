import React, { useState } from 'react';
import './styles.css';
import CadastroImage from '../../assets/Cadastro.png';
import api from '../../services/api';
export default function Cadastro(){
    const [formulario, setFormulario]= useState({})
    async function enviar(e){
        e.preventDefault();
        const usuario = await api.post('users', {
            nome: formulario.nome,
            email: formulario.email,
            senha: formulario.senha
        })
        const id_usuario = usuario.data.id
        await api.post('restaurantes', {
            nome:formulario.nomeDoRestaurante,
            endereco:formulario.endereco,
            id_usuario
        })
    }
    return(
        <div className="cadastro">
            <img src={CadastroImage}></img>
           <form>
               <h1>CADASTRE SEU RESTAURANTE</h1>
               <input placeholder="Nome" value={formulario.nome} onChange={(e)=>setFormulario({...formulario, nome:e.target.value})}></input>
               <input placeholder="Email" type="email"value={formulario.email} onChange={(e)=>setFormulario({...formulario, email:e.target.value})}></input>
               <input placeholder="Senha" type="password"value={formulario.senha} onChange={(e)=>setFormulario({...formulario, senha:e.target.value})}></input>
               <input placeholder="Nome do restaurante"value={formulario.nomeDoRestaurante} onChange={(e)=>setFormulario({...formulario, nomeDoRestaurante:e.target.value})} ></input>
               <input placeholder="Endereço"value={formulario.endereco} onChange={(e)=>setFormulario({...formulario, endereco:e.target.value})} ></input>
               <button onClick={enviar}>Cadastro</button>
           </form>
        </div>
    )
}