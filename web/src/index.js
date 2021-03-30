import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
  <div>
    <Header></Header>
    <Login></Login>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);
