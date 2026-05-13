"use client";
import { motion } from "motion/react";

// Real-ish benchmark progression 2018 -> 2026, rounded for slide legibility.
// Overlays the codex-painted stage bg (slide-benchmarks.png) — viewBox
// matches the bg's 1792x1024 canvas and padding aligns with the painted
// cliff (y-axis) and fence-posts (x-axis).
type Point = { year: number; v: number | null };
type Series = { key: string; label: string; color: string; data: Point[]; labelDx?: number; labelDy?: number };

const X_MIN = 2018;
const X_MAX = 2026;
const Y_MIN = 0;
const Y_MAX = 100;

const SERIES: Series[] = [
  {
    key: "mmlu",
    label: "MMLU",
    color: "#8ECBEA",
    data: [
      { year: 2018, v: 25 },
      { year: 2019, v: 37 },
      { year: 2020, v: 44 },
      { year: 2022, v: 70 },
      { year: 2023, v: 86 },
      { year: 2024, v: 89 },
      { year: 2025, v: 92 },
      { year: 2026, v: 93 },
    ],
    labelDy: -10,
  },
  {
    key: "humaneval",
    label: "HumanEval",
    color: "#E5A848",
    data: [
      { year: 2020, v: 0 },
      { year: 2021, v: 29 },
      { year: 2022, v: 48 },
      { year: 2023, v: 67 },
      { year: 2024, v: 92 },
      { year: 2025, v: 95 },
      { year: 2026, v: 96 },
    ],
    labelDy: 26,
  },
  {
    key: "swebench",
    label: "SWE-bench Verified",
    color: "#9B3A32",
    data: [
      { year: 2023, v: 2 },
      { year: 2024, v: 49 },
      { year: 2025, v: 72 },
      { year: 2026, v: 82 },
    ],
    labelDy: 6,
  },
  {
    key: "terminal",
    label: "Terminal-Bench",
    color: "#52765A",
    data: [
      { year: 2024, v: 30 },  // Claude 3.5 Sonnet, launch baseline
      { year: 2025, v: 55 },  // Forge / mid-year harness era
      { year: 2026, v: 82 },  // Codex CLI / GPT-5.5 SOTA, 2026-04-23 per harbor leaderboard
    ],
    labelDy: 6,
  },
];

// PAD aligns roughly with codex bg's painted cliff + fence posts.
const W = 1792;
const H = 1024;
const PAD = { l: 230, r: 320, t: 170, b: 220 };
const plotW = W - PAD.l - PAD.r;
const plotH = H - PAD.t - PAD.b;

const xScale = (year: number) => PAD.l + ((year - X_MIN) / (X_MAX - X_MIN)) * plotW;
const yScale = (v: number) => PAD.t + (1 - (v - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;

function linePath(series: Series): string {
  const pts = series.data.filter((p): p is { year: number; v: number } => p.v !== null);
  if (pts.length === 0) return "";
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.year).toFixed(1)} ${yScale(p.v).toFixed(1)}`)
    .join(" ");
}

export default function BenchmarkChart() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        {/* Faint gridlines (decorative, codex bg has painted ticks) */}
        {[25, 50, 75].map((t) => (
          <line
            key={`g-${t}`}
            x1={PAD.l}
            x2={W - PAD.r + 40}
            y1={yScale(t)}
            y2={yScale(t)}
            stroke="rgba(17,17,15,0.10)"
            strokeWidth={1}
            strokeDasharray="6 8"
          />
        ))}

        {/* data lines */}
        {SERIES.map((s, idx) => {
          const path = linePath(s);
          const lastPt = [...s.data].reverse().find((p) => p.v !== null);
          return (
            <g key={s.key}>
              <motion.path
                d={path}
                fill="none"
                stroke={s.color}
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: `drop-shadow(0 2px 8px ${s.color}66)` }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.4 + idx * 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              {s.data
                .filter((p): p is { year: number; v: number } => p.v !== null)
                .map((p, i) => (
                  <motion.circle
                    key={`${s.key}-${p.year}`}
                    cx={xScale(p.year)}
                    cy={yScale(p.v)}
                    r={9}
                    fill={s.color}
                    stroke="#F8F4EA"
                    strokeWidth={3}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.3 + i * 0.08 }}
                  />
                ))}
              {lastPt && lastPt.v !== null && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 + idx * 0.3 }}
                >
                  <text
                    x={xScale(lastPt.year) + 18}
                    y={yScale(lastPt.v) + (s.labelDy ?? 0)}
                    fontFamily="JetBrains Mono, monospace"
                    fontSize={28}
                    fontWeight={700}
                    fill={s.color}
                    style={{ paintOrder: "stroke", stroke: "rgba(248,244,234,0.85)", strokeWidth: 4 }}
                  >
                    {s.label}
                  </text>
                  <text
                    x={xScale(lastPt.year) + 18}
                    y={yScale(lastPt.v) + (s.labelDy ?? 0) + 28}
                    fontFamily="JetBrains Mono, monospace"
                    fontSize={22}
                    fontWeight={600}
                    fill={s.color}
                    style={{ paintOrder: "stroke", stroke: "rgba(248,244,234,0.85)", strokeWidth: 4 }}
                  >
                    {lastPt.v}%
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
