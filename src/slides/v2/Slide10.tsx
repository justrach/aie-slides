"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";

const STATS = [
  ["40×",    "leaner file tools"],
  ["0.7ms",  "per op · daemon"],
  ["7ms",    "for 10 reads · batched"],
  ["~2 MB",  "static binary · zero runtime deps"],
];

export default function Slide10() {
  return (
    <SlideShell pos="top-left">
      <Sub>tool · written in zig</Sub>
      <Title>Muonry.</Title>
      <p className="mt-3 text-sm md:text-base text-ink/75 max-w-md">
        47-token outline vs the 2,103-token full read every agent defaults to. Same answer, 40× cheaper.
      </p>
      <ul className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {STATS.map(([n, label], i) => (
          <motion.li
            key={n}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.15, duration: 0.4 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-16">{n}</span>
            <span>{label}</span>
          </motion.li>
        ))}
      </ul>
    </SlideShell>
  );
}
