import type { Metadata } from "next";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ascayaGuide, ascayaMetadata } from "@/lib/ascaya-guides";

const guide = ascayaGuide("sellers");

export const metadata: Metadata = ascayaMetadata(guide);

export default function SellAscayaPage() {
  return <AscayaGuidePage guide={guide} />;
}
