"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const STEPS = ["GENERATE", "EXECUTE", "EVALUATE", "SELECT", "MUTATE"];
const COLORS = ["#8ECBEA", "#9BAE78", "#E5A848", "#9B3A32", "#52765A"];

function Ring() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.12; });
  const R = 1.6;
  return (
    <group ref={ref}>
      {STEPS.map((_, i) => {
        const a = (i / STEPS.length) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * R, 0, Math.sin(a) * R]}>
            <sphereGeometry args={[0.08, 24, 24]} />
            <meshStandardMaterial color={COLORS[i]} emissive={COLORS[i]} emissiveIntensity={0.35} />
          </mesh>
        );
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[R, 0.006, 16, 96]} />
        <meshBasicMaterial color="#E5A848" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function Loop3D() {
  return (
    <div className="absolute right-[5%] top-[12%] w-[28vw] h-[28vw] max-w-[360px] max-h-[360px] pointer-events-none opacity-90">
      <Canvas camera={{ position: [0, 1.2, 3.6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 4, 3]} intensity={0.8} color="#E5A848" />
        <Ring />
      </Canvas>
    </div>
  );
}
