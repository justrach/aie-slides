"use client";
import { SlideShell, Title, Sub } from "./SlideShell";

export default function Slide01() {
  return (
    <SlideShell align="right">
      <Sub>v2 · AI Engineer Singapore</Sub>
      <Title>Evolving<br/>agents.</Title>
      <p className="mt-8 font-mono text-xs text-ink/55">Rach Pradhan · May 2026</p>
      <p className="mt-1 font-mono text-xs text-ink/40">CodeGraff</p>
    </SlideShell>
  );
}
