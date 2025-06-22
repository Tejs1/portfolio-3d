import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Computer from "./Computer";

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canvasError, setCanvasError] = useState(false);

  useEffect(() => {
    try {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);

      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };

      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);

      // Remove the listener when the component is unmounted
      return () => {
        try {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        } catch (error) {
          console.error("Error removing media query listener:", error);
        }
      };
    } catch (error) {
      console.error("Error setting up media query:", error);
      setCanvasError(true);
    }
  }, []);

  if (canvasError) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="text-white bg-tertiary p-5 rounded-lg">
          <h3 className="text-xl font-bold">3D Model Unavailable</h3>
          <p>We're having trouble displaying the 3D computer model.</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => {
        console.error("Canvas error:", error);
        setCanvasError(true);
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
