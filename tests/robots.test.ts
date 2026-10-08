import { describe, expect, it } from "vitest";
import robots from "@/app/robots";

describe("robots.txt", () => {
  it("points the sitemap at Ascaya and allows answer-engine crawlers", () => {
    const result = robots();
    expect(result.sitemap).toBe("https://www.ascayahenderson.com/sitemap.xml");
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const agents = rules.flatMap((rule) =>
      Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent],
    );
    expect(agents).toContain("*");
    expect(agents).toContain("GPTBot");
    expect(agents).toContain("PerplexityBot");
    expect(agents).toContain("Google-Extended");
    expect(agents).toContain("ClaudeBot");
  });
});
