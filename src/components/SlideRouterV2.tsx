"use client";
import Slide01 from "@/slides/v2/Slide01";
import Slide02 from "@/slides/v2/Slide02";
import Slide03 from "@/slides/v2/Slide03";
import Slide04 from "@/slides/v2/Slide04";
import Slide05 from "@/slides/v2/Slide05";
import Slide06 from "@/slides/v2/Slide06";
import Slide07 from "@/slides/v2/Slide07";
import Slide08 from "@/slides/v2/Slide08";
import Slide09 from "@/slides/v2/Slide09";
import Slide10 from "@/slides/v2/Slide10";
import Slide11 from "@/slides/v2/Slide11";
import Slide12 from "@/slides/v2/Slide12";

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
];

export default function SlideRouterV2({ index }: { index: number }) {
  const Slide = slides[index - 1];
  if (!Slide) return null;
  return <Slide />;
}
