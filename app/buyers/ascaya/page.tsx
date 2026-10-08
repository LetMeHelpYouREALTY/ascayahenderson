import type { Metadata } from "next";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ascayaGuide, ascayaMetadata } from "@/lib/ascaya-guides";

const guide = ascayaGuide("buyers");

export const metadata: Metadata = ascayaMetadata(guide);

export default function BuyAscayaPage() {
  return <AscayaGuidePage guide={guide} />;
}
