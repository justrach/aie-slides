"use client";
import { SlideShell } from "./SlideShell";
import { motion } from "motion/react";
const lines = [
  "Tools create the environment.",
  "Traces become genomes.",
  "Better agents emerge.",
];
export default function Slide19() {
  return (
    <SlideShell align="right">
      <div className="slide-title text-4xl md:text-6xl space-y-3 leading-tight">
        {lines.map((l, i) => (
          <motion.div key={l}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.4, duration: 0.6 }}
          >{l}</motion.div>
        ))}
      </div>
      <p className="mt-10 font-mono text-sm text-ink/50">github.com/justrach · codegraff.com · @rachpradhan</p>
    </SlideShell>
  );
}
