import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import { useScroll } from 'framer-motion'; // For scroll-based animations

const Drone = () => {
  const { scene } = useGLTF('./public/models/white_drone.glb');  // Adjust the path to your model
  const [scrollY, setScrollY] = useState(0);

  const { scrollY: scroll } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const positionY = (scrollY / 100) - 5;  // Adjust this based on scroll behavior

  return (
    <mesh position={[0, positionY, 0]} scale={0.5}>
      <primitive object={scene} />
    </mesh>
  );
};

const DroneFlyer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} />
      <Drone />
      <Text fontSize={1} position={[0, 5, 0]} color="black">
        Scroll to fly the drone!
      </Text>
    </Canvas>
  );
};

export default DroneFlyer;
