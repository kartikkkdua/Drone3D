// DroneScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Drone from './Drone'; // Import Drone component

const DroneScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Drone /> {/* Add Drone component */}
      <OrbitControls /> {/* Allow mouse control over the camera */}
    </Canvas>
  );
};

export default DroneScene;
