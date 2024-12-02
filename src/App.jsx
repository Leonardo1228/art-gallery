import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';  // Componente Navbar
import Home from './components/Home/Home';  // Componente Home
import Gallery from './components/Gallery/Gallery';  // Componente Gallery
import Contact from './components/Contact/Contact';  // Componente Contact
import ArtModal from './components/ArtModal/ArtModal';  // Componente ArtModal
import './App.css';  // Estilos globales

const App = () => {
  const [selectedArt, setSelectedArt] = useState(null);  // Estado para la obra de arte seleccionada

  // Función para manejar la selección de una obra de arte
  const handleSelectArt = (art) => {
    setSelectedArt(art);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedArt(null);
  };

  return (
    <Router>
      <Navbar />  {/* Barra de navegación */}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery onSelectArt={handleSelectArt} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Modal para mostrar los detalles de la obra seleccionada */}
      {selectedArt && (
        <ArtModal art={selectedArt} onClose={handleCloseModal} />
      )}
    </Router>
  );
};

export default App;

