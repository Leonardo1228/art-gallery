import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';  // Importamos los estilos específicos para este componente

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Galería Virtual
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/gallery">Galería</Button>
        <Button color="inherit" component={Link} to="/contact">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
