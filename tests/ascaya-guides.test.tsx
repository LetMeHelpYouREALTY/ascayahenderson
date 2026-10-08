import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import AscayaGuidePage from "@/components/sections/AscayaGuidePage";
import { ASCAYA_GUIDES, ascayaGuide } from "@/lib/ascaya-guides";

const BANNED = [
  "exclusive",
  "prestigious",
  "family-friendly",
  "safe neighborhood",
  "good schools",
  "established community",
  "janet",
];

describe("Ascaya guide pages", () => {
  it("publishes eight distinct Ascaya intents", () => {
    expect(ASCAYA_GUIDES).toHaveLength(8);
    const paths = ASCAYA_GUIDES.map((guide) => guide.path);
    expect(new Set(paths).size).toBe(8);
    for (const guide of ASCAYA_GUIDES) {
      expect(guide.h1.toLowerCase()).toContain("ascaya");
      expect(guide.sections.length).toBeGreaterThanOrEqual(3);
      expect(guide.faqs.length).toBeGreaterThanOrEqual(3);
      const text = JSON.stringify(guide).toLowerCase();
      for (const phrase of BANNED) {
        expect(text).not.toContain(phrase);
      }
    }
  });

  it("renders a direct answer, FAQ schema, NAP, and the CTA phone", () => {
    const guide = ascayaGuide("community");
    const html = renderToStaticMarkup(<AscayaGuidePage guide={guide} />);
    expect(html).toContain(guide.h1);
    expect(html).toContain("Where is Ascaya in Henderson?");
    expect(html).toContain("FAQPage");
    expect(html).toContain("(702) 222-1964");
    expect(html).toContain("9406 W Lake Mead Blvd, Suite 100");
    expect(html).toContain("1 Ascaya Blvd");
    expect(html).toContain("realscout-office-listings");
    expect(html).toContain("Greater Las Vegas Association");
    expect(html.toLowerCase()).not.toContain("janet");
  });
});
