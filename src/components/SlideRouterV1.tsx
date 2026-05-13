"use client";
import Slide01 from "@/slides/v1/Slide01";
import Slide02 from "@/slides/v1/Slide02";
import Slide03 from "@/slides/v1/Slide03";
import Slide04 from "@/slides/v1/Slide04";
import Slide05 from "@/slides/v1/Slide05";
import Slide06 from "@/slides/v1/Slide06";
import Slide07 from "@/slides/v1/Slide07";
import Slide08 from "@/slides/v1/Slide08";
import Slide09 from "@/slides/v1/Slide09";
import Slide10 from "@/slides/v1/Slide10";
import Slide11 from "@/slides/v1/Slide11";
import Slide12 from "@/slides/v1/Slide12";
import Slide13 from "@/slides/v1/Slide13";
import Slide14 from "@/slides/v1/Slide14";
import Slide15 from "@/slides/v1/Slide15";
import Slide16 from "@/slides/v1/Slide16";
import Slide17 from "@/slides/v1/Slide17";
import Slide18 from "@/slides/v1/Slide18";
import Slide19 from "@/slides/v1/Slide19";

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07,
  Slide08, Slide09, Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18, Slide19,
];

export default function SlideRouterV1({ index }: { index: number }) {
  const Slide = slides[index - 1];
  if (!Slide) return null;
  return <Slide />;
}
