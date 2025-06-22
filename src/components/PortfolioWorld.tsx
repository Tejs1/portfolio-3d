import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useTexture } from '@react-three/drei';
import { useState, useRef } from 'react';
import { SectionPanel } from './SectionPanels3D';
import type { SectionName } from './SectionPanels3D';
import * as THREE from 'three';

const sectionObjects: { section: SectionName; position: [number, number, number]; color: string; icon: string }[] = [
  { section: 'about', position: [-5, 0.5, 0], color: '#6ee7b7', icon: '/src/assets/icons/user.svg' },
  { section: 'experience', position: [0, 0.5, -5], color: '#fca5a5', icon: '/src/assets/icons/creator.svg' },
  { section: 'projects', position: [5, 0.5, 0], color: '#93c5fd', icon: '/src/assets/icons/web.svg' },
  { section: 'contact', position: [0, 0.5, 5], color: '#fcd34d', icon: '/src/assets/icons/github.png' },
];

function AnimatedSectionObject({ section, position, color, icon, onClick }: { section: SectionName; position: [number, number, number]; color: string; icon: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      // Floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.25;
      // Pulsing scale
      const scale = hovered ? 1.3 : 1 + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.05;
      ref.current.scale.set(scale, scale, scale);
      // Slow rotation
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <group position={[position[0], 0, position[2]]}>
      <mesh
        ref={ref}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhysicalMaterial color={hovered ? '#fff' : color} transmission={0.7} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      {/* Icon overlay */}
      <Html center distanceFactor={8} style={{ pointerEvents: 'none', transform: 'translateY(-40px)' }}>
        <img src={icon} alt={section} style={{ width: 48, height: 48, filter: hovered ? 'drop-shadow(0 0 8px #fff)' : 'drop-shadow(0 0 4px #000)' }} />
      </Html>
      {/* Floating label */}
      {hovered && (
        <Html center distanceFactor={8} style={{ pointerEvents: 'none', transform: 'translateY(40px)' }}>
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            whiteSpace: 'nowrap',
          }}>{section.charAt(0).toUpperCase() + section.slice(1)}</div>
        </Html>
      )}
    </group>
  );
}

const PortfolioWorld = () => {
  const [openSection, setOpenSection] = useState<SectionName | null>(null);
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }} style={{ height: '100vh', width: '100vw' }} shadows>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={0.5} intensity={0.7} castShadow />
      {/* Reflective ground */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[100, 0.1, 100]} />
        <meshPhysicalMaterial color="#222" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Animated section objects with icons */}
      {sectionObjects.map((obj) => (
        <AnimatedSectionObject key={obj.section} {...obj} onClick={() => setOpenSection(obj.section)} />
      ))}
      {/* Show section panel if open */}
      {openSection && <SectionPanel section={openSection} onClose={() => setOpenSection(null)} />}
      <OrbitControls />
      <Environment preset="sunset" background />
    </Canvas>
  );
};

export default PortfolioWorld;
