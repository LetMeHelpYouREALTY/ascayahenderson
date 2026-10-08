import { afterEach, describe, expect, it } from "vitest";
import { POST } from "./route";

const KEYS = [
  "SMS_AUTO_REPLY_ENABLED",
  "SMS_AUTO_REPLY_MESSAGE",
  "SMS_PHONE_NUMBER",
] as const;

describe("POST /api/sms/reply", () => {
  const previous = new Map<string, string | undefined>();

  afterEach(() => {
    for (const key of KEYS) {
      const value = previous.get(key);
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    previous.clear();
  });

  function setEnv(key: (typeof KEYS)[number], value: string) {
    if (!previous.has(key)) previous.set(key, process.env[key]);
    process.env[key] = value;
  }

  it("stays off until the flag, message, and phone are set", async () => {
    const response = await POST();
    expect(response.status).toBe(404);
  });

  it("returns escaped TwiML when auto-reply is enabled", async () => {
    setEnv("SMS_AUTO_REPLY_ENABLED", "true");
    setEnv("SMS_AUTO_REPLY_MESSAGE", "Call Dr. Jan at (702) 222-1964 & ask.");
    setEnv("SMS_PHONE_NUMBER", "+17022221964");
    const response = await POST();
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/xml");
    const body = await response.text();
    expect(body).toContain("Call Dr. Jan at (702) 222-1964 &amp; ask.");
    expect(body).not.toContain("+17022221964");
  });
});
