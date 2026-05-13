import { notFound } from "next/navigation";
import { slides } from "@/slides/v1/manifest";
import DeckClientV1 from "@/components/DeckClientV1";

export function generateStaticParams() {
  return slides.map((s) => ({ index: String(s.index) }));
}

export default async function SlidePage({ params }: { params: Promise<{ index: string }> }) {
  const { index } = await params;
  const i = Number(index);
  const slide = slides.find((s) => s.index === i);
  if (!slide) notFound();
  return <DeckClientV1 current={i} />;
}
