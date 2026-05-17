"use client";
import { motion } from "motion/react";
import { SlideShell, Sub, Title } from "./SlideShell";
import { QRCodeSVG } from "qrcode.react";

const PARTS = [
  ["base",        "Forge — SOTA on Terminal-Bench"],
  ["+ store",     "trajectory store · fitness vectors per spawn"],
  ["+ fan-out",   "multi-model · agents collaborate in parallel"],
  ["+ selector",  "loop fed by DevSwarm telemetry"],
];

export default function Slide15() {
  return (
    <SlideShell pos="bottom-right">
      <Sub>the harness</Sub>
      <Title>CodeGraff.</Title>
      <p className="mt-3 text-base md:text-lg text-ink/85 max-w-md">
        <span className="text-ink font-semibold">The harness IS the fitness function.</span>
      </p>
      <ul className="mt-5 space-y-1.5 font-mono text-sm md:text-base text-ink/85">
        {PARTS.map(([k, v], i) => (
          <motion.li
            key={k}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
            className="flex items-baseline gap-3"
          >
            <span className="text-gold w-24">{k}</span>
            <span>{v}</span>
          </motion.li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-sm text-ink/65">github.com/justrach/codegraff</p>
      <div className="mt-4 flex items-center gap-3 pointer-events-auto">
        <div className="rounded-md bg-white p-2 shadow-sm">
          <QRCodeSVG
            value="https://github.com/justrach/codegraff"
            size={88}
            level="M"
            bgColor="#FFFFFF"
            fgColor="#11110F"
          />
        </div>
        <span className="font-mono text-xs text-ink/55">scan to star</span>
      </div>
      <p className="mt-4 font-mono text-xs text-ink/55 max-w-md">
        receipts: Zhang et al. 2025  —  Darwin G&ouml;del Machine (arXiv:2505.22954)
      </p>
    </SlideShell>
  );
}
