"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";
import { QRCodeSVG } from "qrcode.react";

export default function Slide10() {
  return (
    <SlideShell align="left">
      <Sub>tool · multi-agent</Sub>
      <Title>DevSwarm.</Title>
      <Body>Sequential orchestration is weak. A swarm on one task. Telemetry feeds the selector.</Body>
      <p className="mt-4 font-mono text-sm text-ink/65">github.com/justrach/devswarm</p>
      <div className="mt-4 flex items-center gap-3 pointer-events-auto">
        <div className="rounded-md bg-white p-2 shadow-sm">
          <QRCodeSVG
            value="https://github.com/justrach/devswarm"
            size={88}
            level="M"
            bgColor="#FFFFFF"
            fgColor="#11110F"
          />
        </div>
        <span className="font-mono text-xs text-ink/55">scan to star</span>
      </div>
    </SlideShell>
  );
}
