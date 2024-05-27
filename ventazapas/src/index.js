import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Inicio from './Inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Inicio />
    </App>
  </React.StrictMode>
);


