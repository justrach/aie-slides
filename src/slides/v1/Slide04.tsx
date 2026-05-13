"use client";
import { SlideShell, Sub } from "./SlideShell";
import { motion } from "motion/react";
const points = [
  { n: "01", t: "Hand-crafted is the bottleneck." },
  { n: "02", t: "There’s a way to make them evolve themselves." },
  { n: "03", t: "I built the substrate that makes it possible." },
];
export default function Slide04() {
  return (
    <SlideShell align="right">
      <Sub>three things</Sub>
      <div className="mt-4 space-y-5">
        {points.map((p, i) => (
          <motion.div key={p.n}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.3, duration: 0.5 }}
            className="flex items-baseline gap-5">
            <span className="font-mono text-sm text-gold">{p.n}</span>
            <span className="slide-title text-3xl md:text-4xl text-ink/90">{p.t}</span>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
