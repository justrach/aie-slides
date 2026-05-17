"use client";
import { QRCodeSVG } from "qrcode.react";
import { SlideShell, Title, Sub } from "./SlideShell";

export default function Slide16() {
  return (
    <SlideShell pos="center">
      <div className="text-center">
        <Title>Thanks.</Title>
        <Sub>all OSS · github.com/justrach</Sub>
        <p className="mt-5 text-xl md:text-2xl leading-snug text-ink/85 mx-auto max-w-2xl">
          2026 is another year that everything handcrafted gets replaced by everything learnt.
        </p>
      </div>
      <div className="mt-8 flex items-start justify-center gap-12 pointer-events-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-white p-3 shadow-md">
            <QRCodeSVG
              value="https://github.com/justrach"
              size={148}
              level="M"
              bgColor="#FFFFFF"
              fgColor="#11110F"
            />
          </div>
          <span className="font-mono text-xs text-ink/65">github.com/justrach</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-lg bg-white p-3 shadow-md">
            <QRCodeSVG
              value="https://x.com/rachpradhan"
              size={148}
              level="M"
              bgColor="#FFFFFF"
              fgColor="#11110F"
            />
          </div>
          <span className="font-mono text-xs text-ink/65">x.com/rachpradhan</span>
        </div>
      </div>
    </SlideShell>
  );
}
