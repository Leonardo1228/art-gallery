import React from 'react';
import { CircularProgress } from '@mui/material';
import './Loading.css';  // Importamos los estilos específicos para este componente

const Loading = () => {
  return (
    <div className="loading-container">
      <CircularProgress color="primary" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
