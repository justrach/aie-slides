"use client";
import { motion } from "motion/react";
import { SlideShell, Title, Sub } from "./SlideShell";

export default function Slide01() {
  return (
    <SlideShell align="right">
      <div className="flex items-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          className="shrink-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me.png"
            alt="Rach Pradhan"
            className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-2 ring-ink/15"
            style={{ filter: "drop-shadow(0 4px 14px rgba(17,17,15,0.25))" }}
          />
        </motion.div>
        <div>
          <Sub>v2 · AI Engineer Singapore</Sub>
          <Title>Evolving<br/>agents.</Title>
        </div>
      </div>
      <p className="mt-6 font-mono text-xs text-ink/55">Rach Pradhan · May 2026</p>
      <p className="mt-1 font-mono text-xs text-ink/40">CodeGraff</p>
    </SlideShell>
  );
}
