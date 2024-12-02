import React, { useState } from 'react';
import { TextField, Button, Typography, Snackbar, Grid, IconButton } from '@mui/material';
import { LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="contact-container">
      <Typography variant="h4" className="contact-title">Contáctanos</Typography>
      <Grid container spacing={4} className="contact-grid">
        {/* Formulario de Contacto */}
        <Grid item xs={12} md={6}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              margin="normal"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Enviar Mensaje
            </Button>
          </form>
        </Grid>
        {/* Información Adicional */}
        <Grid item xs={12} md={6} className="contact-info">
          <div className="location">
            <LocationOn fontSize="large" />
            <Typography variant="body1">321870 3695, Torre Zoaty 104, Tunja, Colombia</Typography>
          </div>
          <div className="social-icons">
            <IconButton href="https://facebook.com" target="_blank" rel="noopener">
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" rel="noopener">
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" rel="noopener">
              <Instagram fontSize="large" />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="Mensaje enviado con éxito"
      />
    </div>
  );
};

export default Contact;
