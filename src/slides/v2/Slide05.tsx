"use client";
import { motion } from "motion/react";
import { SlideShell, Sub } from "./SlideShell";

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
    <SlideShell pos="left-middle">
      <Sub>look at the evolution · AI only</Sub>
      <h1 className="slide-title text-5xl md:text-7xl lg:text-8xl leading-[1.02]">The curve.</h1>
      <ol className="mt-6 space-y-2.5 font-mono text-xl md:text-2xl lg:text-3xl text-ink/85">
        {STAGES.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.18, duration: 0.45 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-7 text-right">{i + 1}</span>
            <span>{s}</span>
          </motion.li>
        ))}
      </ol>
      <p className="mt-6 text-lg md:text-2xl leading-snug text-ink/70 max-w-xl">
        We&rsquo;re at step 2. Drop into a real world model and the curve goes exponential.
      </p>
    </SlideShell>
  );
}

