import { describe, expect, it } from "vitest";
import { photoForHeading } from "@/lib/heading-photos";
import { h2PhotoForPath, h3PhotoForPath, photoForPath } from "@/lib/media";
import { uniqueInteriors } from "@/lib/unique-interiors";

describe("heading photos", () => {
  const paths = Object.keys(uniqueInteriors);

  it("keeps H1, H2, and H3 stills distinct on every interior path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const h1 = photoForPath(path).src;
      const h2 = h2PhotoForPath(path).src;
      const h3 = h3PhotoForPath(path).src;
      if (h1 === h2 || h1 === h3 || h2 === h3) {
        collisions.push(`${path}: H1=${h1} H2=${h2} H3=${h3}`);
      }
    }
    expect(collisions).toEqual([]);
  });
});

describe("photoForHeading", () => {
  it("uses the heading as alt text and a matching still", () => {
    const ascaya = photoForHeading(
      "Where is Ascaya in Henderson?",
      "/neighborhoods/ascaya",
    );
    expect(ascaya.alt).toBe("Where is Ascaya in Henderson?");
    expect(ascaya.src).toContain("ascaya-hillside-gate");

    const canyon = photoForHeading(
      "What are the Canyon Residences?",
      "/ascaya/canyon-residences",
    );
    expect(canyon.src).toContain("canyon-terrace-condos");

    const homesite = photoForHeading(
      "What homesites does Ascaya offer?",
      "/ascaya/homesites",
    );
    expect(homesite.src).toContain("desert-homesite-view");

    const clubhouse = photoForHeading(
      "What is in the Ascaya clubhouse?",
      "/ascaya/amenities",
    );
    expect(clubhouse.src).toContain("clubhouse-lap-pool");

    const summerlin = photoForHeading(
      "Berkshire Hathaway HomeServices Summerlin",
      "/neighborhoods/summerlin",
    );
    expect(summerlin.src).toMatch(/summerlin|red-rock/);

    const valuation = photoForHeading(
      "What's Your Las Vegas Home Worth?",
      "/home-valuation",
    );
    expect(valuation.src).toContain("valuation-desk");

    const showing = photoForHeading(
      "Schedule a Showing for This Las Vegas Listing",
      "/listings/123",
    );
    expect(showing.src).toMatch(/front-door-keys|buyers-keys/);
  });

  it("keeps the same heading on the same still", () => {
    const a = photoForHeading("Sun City Summerlin", "/55-plus-communities");
    const b = photoForHeading("Sun City Summerlin", "/55-plus-communities");
    expect(a.src).toBe(b.src);
  });
});
