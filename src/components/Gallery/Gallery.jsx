import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import ArtModel from './ArtModel'; // Asegúrate de que la ruta sea correcta
import './Gallery.css';

const Gallery = ({ onSelectArt }) => {
  const artworks = [
    {
      id: 1,
      name: 'Un jarra',
      description: 'Esta jarra guarda galletas. No dejes que el monstruo de las galletas se la lleve. ;)',
      modelUrl: '/models/arte1.glb',
    },
    {
      id: 2,
      name: 'Piramide',
      description: 'Esta es una piramide estilizada de negro.',
      modelUrl: '/models/arte2.glb',
    },
    {
      id: 3,
      name: 'Cubo Rubix',
      description: 'Es un cubo rubix. Que pena que no puedas jugar con el. :(',
      modelUrl: '/models/arte3.glb',
    },
  ];

  return (
    <div className="gallery-container">
      <Typography variant="h4" className="gallery-title">Galería de Arte</Typography>
      <Grid container spacing={4}>
        {artworks.map((art) => (
          <Grid item xs={12} sm={4} key={art.id}>
            <div className="art-item">
              <Typography variant="h6">{art.name}</Typography>
              <div className="art-3d">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  {/* Configuración de la luz */}
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <directionalLight position={[-2, 5, 2]} />
                  {/* Modelo 3D */}
                  <ArtModel url={art.modelUrl} />
                </Canvas>
              </div>
              <Typography variant="body2">{art.description}</Typography>
              <Button variant="contained" onClick={() => onSelectArt(art)}>
                Ver Detalles
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;



