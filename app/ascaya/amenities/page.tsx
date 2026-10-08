import type { Metadata } from "next";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ascayaGuide, ascayaMetadata } from "@/lib/ascaya-guides";

const guide = ascayaGuide("amenities");

export const metadata: Metadata = ascayaMetadata(guide);

export default function AscayaAmenitiesPage() {
  return <AscayaGuidePage guide={guide} />;
}
