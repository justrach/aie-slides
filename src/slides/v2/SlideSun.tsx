"use client";
import { SlideShell, Title, Sub } from "./SlideShell";

export default function SlideSun() {
  return (
    <SlideShell pos="top-left">
      <Sub>before we go on · the engine</Sub>
      <Title>The sun pays for everything.</Title>
      <p className="mt-5 text-2xl md:text-3xl leading-snug text-ink/85">
        Low-entropy photons in from a 5800&nbsp;K sun. Higher-entropy infrared
        out to 3&nbsp;K space. That gradient is what three billion years of
        evolution surfed to get from single cells to brains writing code.
        Agents need their own gradient. That&rsquo;s the rest of this talk.
      </p>
      <p className="mt-4 font-mono text-base md:text-lg text-gold">
        same algorithm, different substrate.
      </p>
    </SlideShell>
  );
}
