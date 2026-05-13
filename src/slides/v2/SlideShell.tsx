"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Pos = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

// v2 shell: card sits TOP-LEFT by default (natural reading position).
// Per-slide override via `pos` for compositions where the painting
// occupies a different corner.
export function SlideShell({ children, pos = "top-left", align }: { children: ReactNode; pos?: Pos; align?: "left" | "right" | "center" }) {
  // Backwards compat: if old `align` is passed, map it onto pos.
  const effectivePos: Pos =
    align === "right"  ? "top-right" :
    align === "center" ? "center" :
    align === "left"   ? "top-left"  :
    pos;

  const cls =
    effectivePos === "top-right"    ? "items-start justify-end   pt-20 md:pt-24 pr-10 md:pr-16" :
    effectivePos === "bottom-left"  ? "items-end   justify-start pb-20 md:pb-24 pl-10 md:pl-16" :
    effectivePos === "bottom-right" ? "items-end   justify-end   pb-20 md:pb-24 pr-10 md:pr-16" :
    effectivePos === "center"       ? "items-center justify-center px-8" :
                                      "items-start justify-start pt-20 md:pt-24 pl-10 md:pl-16";

  return (
    <div className={`absolute inset-0 flex ${cls} pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, y: effectivePos.startsWith("bottom") ? 12 : -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        className="relative max-w-[42rem] text-ink px-8 py-7 rounded-xl"
        style={{
          background: "rgba(248, 244, 234, 0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 40px rgba(17,17,15,0.12)",
          border: "1px solid rgba(17,17,15,0.06)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="slide-title text-4xl md:text-6xl leading-[1.05]">{children}</h1>;
}
export function Sub({ children }: { children: ReactNode }) {
  return <p className="mt-3 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-ink/65">{children}</p>;
}
export function Body({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-lg md:text-xl leading-snug text-ink/85">{children}</p>;
}
