import { afterEach, describe, expect, it } from "vitest";
import {
  ASCAYA_HENDERSON_CANONICAL,
  HEYBERKSHIRE_CANONICAL,
  HOST_CANONICAL_ORIGINS,
  resolveSiteUrl,
} from "@/lib/contact";

describe("resolveSiteUrl", () => {
  const prev = process.env.NEXT_PUBLIC_SITE_URL;

  afterEach(() => {
    if (prev === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = prev;
    }
  });

  it("prefers NEXT_PUBLIC_SITE_URL over request host", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.heyberkshire.com";
    expect(resolveSiteUrl("www.heyberkshire.com")).toBe(
      "https://www.heyberkshire.com",
    );
    expect(resolveSiteUrl("heyberkshire.com")).toBe(
      "https://www.heyberkshire.com",
    );
  });

  it("maps heyberkshire host to www when env is unset", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(resolveSiteUrl("www.heyberkshire.com")).toBe(HEYBERKSHIRE_CANONICAL);
    expect(resolveSiteUrl("heyberkshire.com")).toBe(HEYBERKSHIRE_CANONICAL);
    expect(HOST_CANONICAL_ORIGINS["heyberkshire.com"]).toBe(
      HEYBERKSHIRE_CANONICAL,
    );
  });

  it("uses bare https host for other mapped domains", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(resolveSiteUrl("drjanduffy.com")).toBe("https://drjanduffy.com");
  });

  it("keeps www.ascayahenderson.com as the Ascaya canonical", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://www.heyberkshire.com";
    expect(resolveSiteUrl("www.ascayahenderson.com")).toBe(
      ASCAYA_HENDERSON_CANONICAL,
    );
    expect(resolveSiteUrl("ascayahenderson.com")).toBe(
      ASCAYA_HENDERSON_CANONICAL,
    );
    expect(HOST_CANONICAL_ORIGINS["ascayahenderson.com"]).toBe(
      ASCAYA_HENDERSON_CANONICAL,
    );
  });

  it("falls back to www.ascayahenderson.com with no env and no host", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(resolveSiteUrl()).toBe(ASCAYA_HENDERSON_CANONICAL);
    expect(resolveSiteUrl(null)).toBe(ASCAYA_HENDERSON_CANONICAL);
  });
});
