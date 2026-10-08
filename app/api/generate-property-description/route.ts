import { NextRequest, NextResponse } from "next/server";
import {
  CLAUDE_CHAT_MODEL,
  getSharedClaudeClient,
} from "@/lib/claude/client";

const PROPERTY_DESCRIPTION_SYSTEM = `You are an expert real estate copywriter for Dr. Jan Duffy, REALTOR® S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. You write listing descriptions for Las Vegas and Henderson, Nevada, including Ascaya at One Ascaya Blvd, Henderson.

Write 2-3 paragraphs, 150-250 words. Describe square footage, amenities, named places, and commute times. Never use protected-class references or proxies such as safe neighborhood, good schools, family-friendly, or established community. Do not invent prices, HOA dues, or ratings. If a fact was not provided, omit it.`;

function field(value: unknown): string {
  if (typeof value === "string" && value.trim()) {
    return value.trim().slice(0, 300);
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return "Not specified";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { propertyDetails?: unknown };
    const propertyDetails = body.propertyDetails;

    if (!propertyDetails || typeof propertyDetails !== "object") {
      return NextResponse.json(
        { error: "Property details are required" },
        { status: 400 },
      );
    }

    const claude = getSharedClaudeClient();
    if (!claude) {
      return NextResponse.json(
        { error: "Claude API key not configured" },
        { status: 500 },
      );
    }

    const details = propertyDetails as Record<string, unknown>;
    const prompt = `Generate a compelling, SEO-friendly property description for a real estate listing in Las Vegas or Henderson, Nevada.

Property Details:
- Address/Location: ${field(details.location)}
- Bedrooms: ${field(details.bedrooms)}
- Bathrooms: ${field(details.bathrooms)}
- Square Feet: ${field(details.squareFeet)}
- Price: ${field(details.price)}
- Year Built: ${field(details.yearBuilt)}
- Additional Features: ${field(details.features)}`;

    const response = await claude.sendMessage({
      messages: [{ role: "user", content: prompt }],
      systemPrompt: PROPERTY_DESCRIPTION_SYSTEM,
      model: CLAUDE_CHAT_MODEL,
      maxTokens: 1024,
      enableCache: true,
    });

    return NextResponse.json({ description: response.content });
  } catch (error) {
    console.error("Claude API error:", error);
    return NextResponse.json(
      { error: "Failed to generate property description" },
      { status: 500 },
    );
  }
}
