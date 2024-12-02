import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ArtModel = ({ url }) => {
  const { scene } = useGLTF(url); // Carga el modelo desde la URL
  const modelRef = useRef();

  // Rotación interactiva
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotación continua
    }
  });

  // Manejo de eventos
  const handlePointerDown = () => {
    if (modelRef.current) {
      modelRef.current.rotation.y += Math.PI / 8; // Rotación al hacer clic
    }
  };

  const handlePointerMove = (event) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = event.clientX * 0.001; // Rotación al mover el mouse
    }
  };

  return (
    <primitive
      object={scene}
      scale={[1.5, 1.5, 1.5]}
      ref={modelRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    />
  );
};

export default ArtModel;

