import { NextRequest, NextResponse } from "next/server";
import {
  CLAUDE_CHAT_MODEL,
  getSharedClaudeClient,
  type ClaudeMessage,
} from "@/lib/claude/client";
import { realEstateAgentTemplate } from "@/lib/claude/prompt-templates";

function toClaudeMessages(
  conversation: unknown,
  prompt: string,
): ClaudeMessage[] {
  const prior: ClaudeMessage[] = [];
  if (Array.isArray(conversation)) {
    for (const turn of conversation) {
      if (!turn || typeof turn !== "object") continue;
      const role = (turn as { role?: unknown }).role;
      const content = (turn as { content?: unknown }).content;
      if (
        (role === "user" || role === "assistant") &&
        typeof content === "string" &&
        content.trim()
      ) {
        prior.push({ role, content: content.slice(0, 4000) });
      }
    }
  }
  while (prior.length > 0 && prior[0]?.role === "assistant") {
    prior.shift();
  }
  prior.push({ role: "user", content: prompt.slice(0, 4000) });
  return prior;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      prompt?: unknown;
      conversation?: unknown;
    };
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
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

    const response = await claude.sendMessage({
      messages: toClaudeMessages(body.conversation, prompt),
      systemPrompt: realEstateAgentTemplate.system,
      model: CLAUDE_CHAT_MODEL,
      maxTokens: 1024,
      enableCache: true,
    });

    return NextResponse.json({ reply: response.content });
  } catch (error) {
    console.error("Claude API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
