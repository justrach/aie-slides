"use client";
import { SlideShell, Sub } from "./SlideShell";
import { DarwinianDiagram } from "@/components/diagrams";
export default function Slide07() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[68vw] max-w-5xl diagram-frame"><DarwinianDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>Darwinian algorithm</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">Pool. Score.<br/>Mutate. Repeat.</p>
      </SlideShell>
    </>
  );
}
