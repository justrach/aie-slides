"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Camera() {
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.1;
    state.camera.position.x = Math.sin(t) * 4;
    state.camera.position.z = Math.cos(t) * 6;
    state.camera.lookAt(0, 0.5, 0);
  });
  return null;
}

function Realm({ y, color, count }: { y: number; color: string; count: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.05; });
  return (
    <group ref={ref} position={[0, y, 0]}>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        const r = 1.2 + Math.random() * 0.4;
        const h = 0.2 + Math.random() * 0.4;
        return (
          <mesh key={i} position={[Math.cos(a) * r, h / 2, Math.sin(a) * r]}>
            <boxGeometry args={[0.18, h, 0.18]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function City3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 8, 5]} intensity={1} color="#E5A848" />
        <Camera />
        <Realm y={1.5} color="#8ECBEA" count={14} />
        <Realm y={0} color="#52765A" count={22} />
        <Realm y={-1.5} color="#9B3A32" count={18} />
      </Canvas>
    </div>
  );
}
