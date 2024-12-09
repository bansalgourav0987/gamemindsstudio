import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';

export function GameController() {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      // Gentle rotation
      groupRef.current.rotation.y += 0.005;
    }

    if (bodyRef.current) {
      // Subtle pulsing effect
      bodyRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      bodyRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
      {/* Main body */}
      <Box
        ref={bodyRef}
        args={[3, 1, 1.5]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#4338ca"
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* Left grip */}
      <Cylinder
        args={[0.4, 0.5, 1.2, 32]}
        position={[-1.8, -0.2, 0]}
        rotation={[0, 0, Math.PI * 0.15]}
      >
        <meshStandardMaterial
          color="#312e81"
          roughness={0.4}
          metalness={0.6}
        />
      </Cylinder>

      {/* Right grip */}
      <Cylinder
        args={[0.4, 0.5, 1.2, 32]}
        position={[1.8, -0.2, 0]}
        rotation={[0, 0, -Math.PI * 0.15]}
      >
        <meshStandardMaterial
          color="#312e81"
          roughness={0.4}
          metalness={0.6}
        />
      </Cylinder>

      {/* Buttons */}
      <Sphere args={[0.15]} position={[0.8, 0.2, 0.4]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
      <Sphere args={[0.15]} position={[1.1, 0.2, 0.2]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>
      <Sphere args={[0.15]} position={[1.4, 0.2, 0]}>
        <meshStandardMaterial color="#22c55e" />
      </Sphere>

      {/* D-pad */}
      <Box args={[0.6, 0.1, 0.6]} position={[-1, 0.2, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
    </group>
  );
}