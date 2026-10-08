import type { Metadata } from "next";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ascayaGuide, ascayaMetadata } from "@/lib/ascaya-guides";

const guide = ascayaGuide("homesites");

export const metadata: Metadata = ascayaMetadata(guide);

export default function AscayaHomesitesPage() {
  return <AscayaGuidePage guide={guide} />;
}
