import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Placeholder for your 3D world. Add more objects and interactivity here.
export default function World() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }} style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      {/* Example: A floating cube as a placeholder */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#61dafb'} />
      </mesh>
      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
}
