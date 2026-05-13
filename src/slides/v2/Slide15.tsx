"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const PARTS = [
  ["base",        "Forge — SOTA on Terminal-Bench"],
  ["+ store",     "trajectory store · fitness vectors per spawn"],
  ["+ fan-out",   "multi-model · agents collaborate in parallel"],
  ["+ selector",  "loop fed by DevSwarm telemetry"],
];

export default function Slide15() {
  return (
    <SlideShell pos="top-left">
      <Sub>the harness</Sub>
      <Title>CodeGraff.</Title>
      <p className="mt-3 text-base md:text-lg text-ink/85 max-w-md">
        <span className="text-ink font-semibold">The harness IS the fitness function.</span>
      </p>
      <ul className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {PARTS.map(([k, v], i) => (
          <motion.li
            key={k}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-24">{k}</span>
            <span>{v}</span>
          </motion.li>
        ))}
      </ul>
    </SlideShell>
  );
}
