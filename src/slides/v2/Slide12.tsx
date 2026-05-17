"use client";
import { SlideShell, Title, Sub, Body } from "./SlideShell";
import { QRCodeSVG } from "qrcode.react";

export default function Slide09() {
  return (
    <SlideShell align="right">
      <Sub>tool · sandbox</Sub>
      <Title>Nanobrew.</Title>
      <Body>When I sleep, my agents work. apt-get inside the sandbox was the slow part — so I wrote a drop-in Homebrew/apt replacement in Zig. 13× faster warm.</Body>
      <p className="mt-4 font-mono text-sm text-ink/65">nanobrew.trilok.ai  ·  <span className="text-gold">1.1k★+</span></p>
      <div className="mt-4 flex items-center gap-3 pointer-events-auto">
        <div className="rounded-md bg-white p-2 shadow-sm">
          <QRCodeSVG
            value="https://github.com/justrach/nanobrew"
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
