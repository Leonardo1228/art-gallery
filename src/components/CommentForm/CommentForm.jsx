import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './CommentForm.css';  // Importamos los estilos específicos para este componente

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment); // Llamamos a la función para añadir el comentario
      setComment(''); // Limpiamos el campo de texto
    }
  };

  return (
    <div className="comment-form-container">
      <Typography variant="h6">Deja un comentario:</Typography>
      <form onSubmit={handleSubmit} className="comment-form">
        <TextField
          label="Comentario"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Enviar Comentario
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
