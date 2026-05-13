"use client";
import { SlideShell, Sub } from "./SlideShell";
import { motion } from "motion/react";

export default function Slide09() {
  return (
    <SlideShell align="right">
      <Sub>DGM · arxiv:2505.22954</Sub>
      <div className="slide-title leading-none mt-4 whitespace-nowrap">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-7xl md:text-9xl text-ink/35"
        >20%</motion.span>
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-7xl md:text-9xl text-gold mx-3"
        >→</motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="text-8xl md:text-[10rem] text-ink"
        >50%</motion.span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="mt-8 text-base md:text-lg text-ink/65 max-w-md leading-snug"
      >
        SWE-bench Verified. The model didn&rsquo;t change. The scaffold rewrote itself for two weeks.
      </motion.p>
    </SlideShell>
  );
}
