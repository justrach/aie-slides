"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 220;

function Swarm() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(() => Array.from({ length: COUNT }, () => ({
    x: (Math.random() - 0.5) * 8,
    y: (Math.random() - 0.3) * 3,
    z: (Math.random() - 0.5) * 8,
    s: 0.05 + Math.random() * 0.15,
    phase: Math.random() * Math.PI * 2,
    alive: Math.random() > 0.25,
  })), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      dummy.position.set(
        d.x + Math.sin(t * 0.3 + d.phase) * 0.2,
        d.y + Math.cos(t * 0.4 + d.phase) * 0.15,
        d.z + Math.cos(t * 0.3 + d.phase) * 0.2,
      );
      const scale = d.alive ? d.s : d.s * 0.4;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial color="#11110F" emissive="#E5A848" emissiveIntensity={0.15} />
    </instancedMesh>
  );
}

export default function Swarm3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 5, 3]} intensity={1.2} color="#E5A848" />
        <Swarm />
      </Canvas>
    </div>
  );
}
