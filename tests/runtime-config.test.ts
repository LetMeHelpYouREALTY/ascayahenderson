import { afterEach, describe, expect, it } from "vitest";
import {
  cloudinaryDeliveryUrl,
  gaEnabled,
  gaMeasurementId,
  openHousesMapEmbedUrl,
  resolveClaudeAuth,
  smsAutoReplyEnabled,
} from "@/lib/runtime-config";

const KEYS = [
  "NEXT_PUBLIC_GA_MEASUREMENT_ID",
  "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_FOLDER",
  "NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL",
  "AI_GATEWAY_API_KEY",
  "ANTHROPIC_API_KEY",
  "SMS_AUTO_REPLY_ENABLED",
  "VERCEL_ENV",
] as const;

describe("runtime config", () => {
  const previous = new Map<string, string | undefined>();

  afterEach(() => {
    for (const key of KEYS) {
      const value = previous.get(key);
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    previous.clear();
  });

  function setEnv(key: (typeof KEYS)[number], value: string | undefined) {
    if (!previous.has(key)) previous.set(key, process.env[key]);
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }

  it("accepts a GA4 measurement id and ignores anything else", () => {
    setEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "G-ABC123");
    expect(gaMeasurementId()).toBe("G-ABC123");
    setEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "UA-1");
    expect(gaMeasurementId()).toBeNull();
  });

  it("loads GA only when the production env and a valid id are both set", () => {
    setEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "G-ABC123");
    setEnv("VERCEL_ENV", "preview");
    expect(gaEnabled()).toBe(false);
    setEnv("VERCEL_ENV", "production");
    expect(gaEnabled()).toBe(true);
  });

  it("builds an auto-format Cloudinary URL and rejects a bad cloud name", () => {
    setEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME", "ascaya");
    setEnv("CLOUDINARY_FOLDER", "ascaya/henderson");
    expect(cloudinaryDeliveryUrl("hero.jpg", 1200)).toBe(
      "https://res.cloudinary.com/ascaya/image/upload/f_auto,q_auto,c_limit,w_1200/ascaya/henderson/hero.jpg",
    );
    setEnv("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME", "not a cloud");
    expect(cloudinaryDeliveryUrl("hero.jpg", 1200)).toBeNull();
  });

  it("allows Google Maps embed URLs only", () => {
    setEnv(
      "NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL",
      "https://www.google.com/maps/embed?pb=ascaya",
    );
    expect(openHousesMapEmbedUrl()).toContain("google.com/maps/embed");
    setEnv(
      "NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL",
      "https://evil.example/maps",
    );
    expect(openHousesMapEmbedUrl()).toBeNull();
  });

  it("prefers the AI Gateway key over a direct Anthropic key", () => {
    setEnv("ANTHROPIC_API_KEY", "sk-ant-test");
    setEnv("AI_GATEWAY_API_KEY", "gateway-test");
    expect(resolveClaudeAuth()).toEqual({
      apiKey: "gateway-test",
      baseURL: "https://ai-gateway.vercel.sh",
    });
    setEnv("AI_GATEWAY_API_KEY", undefined);
    expect(resolveClaudeAuth()).toEqual({ apiKey: "sk-ant-test" });
  });

  it("treats only explicit true values as SMS auto-reply on", () => {
    setEnv("SMS_AUTO_REPLY_ENABLED", "yes");
    expect(smsAutoReplyEnabled()).toBe(true);
    setEnv("SMS_AUTO_REPLY_ENABLED", "false");
    expect(smsAutoReplyEnabled()).toBe(false);
  });
});
