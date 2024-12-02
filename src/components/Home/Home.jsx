import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';  // Importamos los estilos específicos para este componente

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Bienvenido a la Galería Virtual!
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explora arte como nunca antes.
      </motion.p>
    </div>
  );
};

export default Home;
