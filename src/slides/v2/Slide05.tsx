"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const STAGES = [
  "models",
  "models + harnesses",
  "models + self-evolving harnesses",
  "self-evolving agents",
  "world models",
  "agents from world models",
];

export default function Slide05() {
  return (
    <SlideShell align="left">
      <Sub>look at the evolution · AI only</Sub>
      <Title>The curve.</Title>
      <ol className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {STAGES.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.18, duration: 0.45 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-4 text-right">{i + 1}</span>
            <span>{s}</span>
          </motion.li>
        ))}
      </ol>
      <p className="mt-5 text-sm md:text-base text-ink/65 max-w-md">
        We&rsquo;re at step 2. Drop into a real world model and the curve goes exponential.
      </p>
    </SlideShell>
  );
}
