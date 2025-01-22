import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const DroneModel = () => {
  const { scene } = useThree();
  const droneRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/drone_model.glb', (gltf) => {
      droneRef.current = gltf.scene;
      scene.add(droneRef.current);
    });
  }, [scene]);

  return <mesh ref={droneRef} />;
};

const DroneCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <DroneModel />
      <OrbitControls />
    </Canvas>
  );
};


export default DroneCanvas;
