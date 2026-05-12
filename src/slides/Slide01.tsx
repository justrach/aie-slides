"use client";
import { SlideShell, Title, Sub } from "./SlideShell";
export default function Slide01() {
  return (
    <SlideShell align="right">
      <Sub>Evolving Agents</Sub>
      <Title>How tooling<br/>shapes agent<br/>behavior.</Title>
      <p className="mt-10 font-mono text-sm text-ink/50">AI Engineer Singapore · May 2026</p>
      <p className="mt-2 font-mono text-sm text-ink/40">Rach Pradhan</p>
    </SlideShell>
  );
}
