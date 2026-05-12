"use client";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradientCanvas),
  { ssr: false },
);
const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradient),
  { ssr: false },
);

const PRESETS = {
  // primordial mutation field — slide 5
  soup: {
    type: "waterPlane" as const,
    color1: "#9BAE78",
    color2: "#E5A848",
    color3: "#8ECBEA",
    uSpeed: 0.18,
    uStrength: 1.8,
    uFrequency: 5,
    rotationX: 50,
    rotationY: 20,
    rotationZ: 90,
    cameraZoom: 14,
  },
  // dreamy future haze — slide 11
  haze: {
    type: "plane" as const,
    color1: "#20293A",
    color2: "#9B3A32",
    color3: "#E5A848",
    uSpeed: 0.08,
    uStrength: 2.4,
    uFrequency: 4,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    cameraZoom: 12,
  },
} as const;

export type ShaderPreset = keyof typeof PRESETS;

export default function ShaderAtmosphere({
  preset = "soup",
  opacity = 0.55,
  blend = "screen",
}: {
  preset?: ShaderPreset;
  opacity?: number;
  blend?: CSSProperties["mixBlendMode"];
}) {
  const p = PRESETS[preset];
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity, mixBlendMode: blend }}
      aria-hidden
    >
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
      >
        <ShaderGradient
          control="props"
          animate="on"
          type={p.type}
          color1={p.color1}
          color2={p.color2}
          color3={p.color3}
          uSpeed={p.uSpeed}
          uStrength={p.uStrength}
          uFrequency={p.uFrequency}
          rotationX={p.rotationX}
          rotationY={p.rotationY}
          rotationZ={p.rotationZ}
          cameraZoom={p.cameraZoom}
          grain="off"
          lightType="3d"
          brightness={1.1}
          envPreset="city"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
