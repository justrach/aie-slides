"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SlideShell({ children, align = "right" }: { children: ReactNode; align?: "left" | "right" | "center" }) {
  const pos =
    align === "left" ? "items-end justify-start pl-16" :
    align === "center" ? "items-center justify-center" :
    "items-end justify-end pr-16";
  return (
    <div className={`absolute inset-0 flex ${pos} pb-24 pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        className="max-w-[44rem] text-ink"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="slide-title text-5xl md:text-7xl leading-[1.05]">{children}</h1>;
}
export function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-ink/60">{children}</p>;
}
export function Body({ children }: { children: ReactNode }) {
  return <p className="mt-6 text-xl md:text-2xl leading-snug text-ink/80">{children}</p>;
}
