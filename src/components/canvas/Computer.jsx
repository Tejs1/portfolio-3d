import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Computer = ({ isMobile }) => {
  const computer = useRef();
  
  // Rotation animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    computer.current.rotation.y = Math.sin(t / 4) / 8;
    computer.current.position.y = Math.sin(t / 1.5) / 10;
  });

  // Create a simple 3D computer model since we don't have a GLTF file
  return (
    <mesh ref={computer} position={[0, -2.25, 0]} scale={isMobile ? 0.5 : 0.75}>
      {/* Monitor Base */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[1.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 2, 0.15]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.5, 0.08]}>
        <boxGeometry args={[2.8, 1.8, 0.01]} />
        <meshStandardMaterial 
          color="#3d85c6" 
          emissive="#3d85c6"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.7, 1]}>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
    </mesh>
  );
};

export default Computer;
