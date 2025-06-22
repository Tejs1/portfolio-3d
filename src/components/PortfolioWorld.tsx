import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { useState } from 'react';
import { SectionPanel } from './SectionPanels3D';
import type { SectionName } from './SectionPanels3D';

const sectionObjects: { section: SectionName; position: [number, number, number]; color: string }[] = [
  { section: 'about', position: [-5, 0.5, 0], color: '#6ee7b7' },
  { section: 'experience', position: [0, 0.5, -5], color: '#fca5a5' },
  { section: 'projects', position: [5, 0.5, 0], color: '#93c5fd' },
  { section: 'contact', position: [0, 0.5, 5], color: '#fcd34d' },
];

const SectionObject = ({ section, position, color, onClick }: { section: SectionName; position: [number, number, number]; color: string; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <group position={position}>
      <mesh
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        scale={hovered ? 1.25 : 1}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={hovered ? '#fff' : color} opacity={0.95} transparent />
      </mesh>
      {/* Floating label */}
      <Environment preset="sunset" />
      {hovered && (
        <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
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
};

const PortfolioWorld = () => {
  const [openSection, setOpenSection] = useState<SectionName | null>(null);
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }} style={{ height: '100vh', width: '100vw' }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[100, 0.1, 100]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Section objects as interactive 3D boxes */}
      {sectionObjects.map((obj) => (
        <SectionObject key={obj.section} {...obj} onClick={() => setOpenSection(obj.section)} />
      ))}
      {/* Show section panel if open */}
      {openSection && <SectionPanel section={openSection} onClose={() => setOpenSection(null)} />}
      <OrbitControls />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default PortfolioWorld;
