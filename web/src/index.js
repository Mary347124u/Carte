import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
  <div>
    <Header></Header>
    <Cadastro></Cadastro>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);
