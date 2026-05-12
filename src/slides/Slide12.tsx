"use client";
import { SlideShell, Sub } from "./SlideShell";
import { WebsocketDiagram } from "@/components/diagrams";
export default function Slide12() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
        <div className="w-[72vw] max-w-5xl diagram-frame"><WebsocketDiagram /></div>
      </div>
      <SlideShell align="right">
        <Sub>WebSocket transport</Sub>
        <p className="slide-title text-2xl md:text-3xl mt-2 text-ink/80 leading-tight">Speed is<br/>selection pressure.</p>
      </SlideShell>
    </>
  );
}
