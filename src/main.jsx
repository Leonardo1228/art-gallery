import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Componente raíz de la aplicación
import './index.css';  // Estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />  {/* Montamos el componente raíz aquí */}
  </React.StrictMode>
);
