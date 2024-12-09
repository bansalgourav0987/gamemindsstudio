import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

function GamepadModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef}>
        {/* Main body */}
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial color="#6b46c1" metalness={0.8} roughness={0.2} />

        {/* Left grip */}
        <mesh position={[-1.2, -0.3, 0]} rotation={[0, 0, Math.PI * 0.15]}>
          <cylinderGeometry args={[0.2, 0.3, 0.8, 16]} />
          <meshStandardMaterial color="#4c1d95" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Right grip */}
        <mesh position={[1.2, -0.3, 0]} rotation={[0, 0, -Math.PI * 0.15]}>
          <cylinderGeometry args={[0.2, 0.3, 0.8, 16]} />
          <meshStandardMaterial color="#4c1d95" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Buttons */}
        <mesh position={[0.6, 0.2, 0.3]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.9, 0.2, 0.3]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.3} />
        </mesh>
      </mesh>
    </Float>
  );
}

export const Logo3D: React.FC = () => {
  return (
    <div className="w-12 h-12">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <GamepadModel />
      </Canvas>
    </div>
  );
};