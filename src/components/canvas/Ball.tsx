import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Create a texture loader
    const textureLoader = new THREE.TextureLoader();

    // Load the texture
    textureLoader.load(
      imgUrl,
      (loadedTexture) => {
        setDecal(loadedTexture);
        setLoading(false);
      },
      undefined, // Progress callback (not used)
      (err) => {
        console.error("Error loading texture:", err);
        setError(true);
        setLoading(false);
      }
    );
  }, [imgUrl]);

  if (loading) return null;
  if (error) return null;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // Check if icon is a valid URL or path
  if (!icon) {
    return <div className="w-full h-full bg-tertiary rounded-full"></div>;
  }

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
