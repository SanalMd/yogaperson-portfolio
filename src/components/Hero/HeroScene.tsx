"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const points = useRef<THREE.Points>(null!);
  
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7b8c79"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const texture = useTexture("/images/hero.png");
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const targetX = mouse.x * 0.2;
    const targetY = mouse.y * 0.2;
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05);
    
    // Subtle zoom effect
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 4 - Math.abs(mouse.x * mouse.y) * 0.5, 0.05);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <planeGeometry args={[7, 4.5]} />
          <meshBasicMaterial map={texture} transparent opacity={0.6} />
        </mesh>
      </Float>

      <Particles count={2000} />
    </>
  );
}

export default function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <div className="absolute inset-0 z-0 bg-brand-bg h-screen w-full overflow-hidden" onMouseMove={handleMouseMove}>
      <Canvas>
        <Scene mouse={mouse} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/20 to-brand-bg z-10 pointer-events-none" />
    </div>
  );
}
