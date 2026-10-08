import { describe, expect, it } from "vitest";
import { getDomainConfig } from "@/lib/domain-config";
import { POST as chatPost } from "@/app/api/chat/route";
import { POST as descriptionPost } from "@/app/api/generate-property-description/route";

describe("Ascaya Henderson domain", () => {
  it("maps www and apex to the Ascaya config", () => {
    const fromWww = getDomainConfig("www.ascayahenderson.com");
    const fromApex = getDomainConfig("ascayahenderson.com");
    expect(fromWww.neighborhood).toBe("Ascaya");
    expect(fromWww.domain).toBe("ascayahenderson.com");
    expect(fromApex.heroHeadline).toBe("Ascaya Henderson Homes for Sale");
    expect(fromWww.heroSubheadline).toContain("(702) 222-1964");
    expect(getDomainConfig("").domain).toBe("ascayahenderson.com");
    expect(getDomainConfig("ascayahenderson.vercel.app").neighborhood).toBe(
      "Ascaya",
    );
  });
});

describe("Claude routes do not require OpenAI", () => {
  const prevAnthropic = process.env.ANTHROPIC_API_KEY;
  const prevOpenAi = process.env.OPENAI_API_KEY;

  it("chat returns a Claude configuration error without a key", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.OPENAI_API_KEY;
    const response = await chatPost(
      new Request("http://localhost/api/chat", {
        method: "POST",
        body: JSON.stringify({ prompt: "Ascaya homes" }),
      }) as never,
    );
    expect(response.status).toBe(500);
    const json = (await response.json()) as { error: string };
    expect(json.error).toMatch(/Claude/);
    if (prevAnthropic === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = prevAnthropic;
    if (prevOpenAi === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevOpenAi;
  });

  it("property descriptions return a Claude configuration error without a key", async () => {
    delete process.env.ANTHROPIC_API_KEY;
    const response = await descriptionPost(
      new Request("http://localhost/api/generate-property-description", {
        method: "POST",
        body: JSON.stringify({
          propertyDetails: { location: "One Ascaya Blvd" },
        }),
      }) as never,
    );
    expect(response.status).toBe(500);
    const json = (await response.json()) as { error: string };
    expect(json.error).toMatch(/Claude/);
    if (prevAnthropic === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = prevAnthropic;
  });
});
