"use client";
import { motion } from "motion/react";
export default function CatSilhouette() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute bottom-[8%] left-[6%] w-[7vw] aspect-square pointer-events-none"
      style={{ viewTransitionName: "trilok-cat" } as React.CSSProperties}
      aria-hidden
    >
      <svg viewBox="0 0 64 80" className="w-full h-full drop-shadow-2xl">
        <path
          d="M22 14 L18 4 L26 10 L38 10 L46 4 L42 14 C50 20 52 32 50 44 C54 50 56 60 52 72 L12 72 C8 60 10 50 14 44 C12 32 14 20 22 14 Z"
          fill="#11110F"
        />
      </svg>
    </motion.div>
  );
}
