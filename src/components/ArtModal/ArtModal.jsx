import React, { useState } from 'react';
import { Modal, Typography } from '@mui/material';
import CommentForm from '../CommentForm/CommentForm';  // Importamos el formulario de comentarios
import './ArtModal.css';  // Estilos específicos para este componente

const ArtModal = ({ art, onClose }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Modal open onClose={onClose}>
      <div className="modal-content">
        <Typography variant="h5">{art.name}</Typography>
        <p>{art.description}</p>
        
        {/* Renderizamos el formulario de comentarios */}
        <CommentForm onAddComment={handleAddComment} />
        
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default ArtModal;
