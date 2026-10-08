import type { Metadata } from "next";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ascayaGuide, ascayaMetadata } from "@/lib/ascaya-guides";

const guide = ascayaGuide("desert-design");

export const metadata: Metadata = ascayaMetadata(guide);

export default function AscayaDesertDesignPage() {
  return <AscayaGuidePage guide={guide} />;
}
