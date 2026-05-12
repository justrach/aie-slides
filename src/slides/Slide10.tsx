"use client";
import { SlideShell, Title, Sub } from "./SlideShell";
export default function Slide10() {
  return (
    <SlideShell align="right">
      <Sub>03 / 03</Sub>
      <Title>How I<br/>built this.</Title>
      <p className="mt-6 font-mono text-sm text-ink/50">Project: <span className="text-gold">graff</span> — terminal-first agent stack.</p>
    </SlideShell>
  );
}
