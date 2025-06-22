import { Canvas } from '@react-three/fiber';
import { Stars, FirstPersonControls, Text } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const stations: { name: string; position: [number, number, number]; color: string }[] = [
  { name: 'About', position: [-6, 1, 0], color: '#ffb347' },
  { name: 'Experience', position: [0, 1, -6], color: '#b4ff47' },
  { name: 'Works', position: [6, 1, 0], color: '#47b4ff' },
  { name: 'Tech', position: [0, 1, 6], color: '#ff47b4' },
  { name: 'Contact', position: [0, 1, 0], color: '#fff' },
];

function Station({ name, position, color }: { name: string; position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);
  const handlePointerDown = () => {
    alert(`Go to ${name} section!`); // Replace with modal or overlay later
  };
  return (
    <group position={position}>
      <mesh ref={meshRef} onPointerDown={handlePointerDown} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.7}
        color="#222"
        anchorX="center"
        anchorY="middle"
        outlineColor="white"
        outlineWidth={0.03}
      >
        {name}
      </Text>
    </group>
  );
}

export default function World() {
  return (
    <Canvas camera={{ position: [0, 2, 15], fov: 60 }} style={{ height: '100vh', width: '100vw' }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      {stations.map((station) => (
        <Station key={station.name} name={station.name} position={station.position} color={station.color} />
      ))}
      <FirstPersonControls lookSpeed={0.1} movementSpeed={5} />
    </Canvas>
  );
}
