/**
 * Runtime configuration for env vars set on the Ascaya Vercel project.
 * Secrets stay server-only. Public values are allow-listed before use.
 *
 * Vercel security dashboard (checked 2026-10-08) marks readable credentials
 * as "Needs Attention". These names must stay Secret, not Config:
 * CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, AI_GATEWAY_API_KEY,
 * CEREBRAS_API_KEY, CLOUDFLARE_API_TOKEN, NOTION_TOKEN.
 */

const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/;
const CLOUDINARY_NAME = /^[a-z0-9][a-z0-9_-]{0,62}$/i;
const CLOUDINARY_FOLDER = /^[a-z0-9][a-z0-9/_-]{0,120}$/i;

const AI_GATEWAY_BASE_URL = "https://ai-gateway.vercel.sh";

function trimmed(name: string): string {
  return (process.env[name] ?? "").trim();
}

/** GA4 measurement id. Empty when missing or malformed so it cannot inject script. */
export function gaMeasurementId(): string | null {
  const id = trimmed("NEXT_PUBLIC_GA_MEASUREMENT_ID");
  return GA_MEASUREMENT_ID.test(id) ? id : null;
}

/** Fire GA only on the production deployment, even if the id is set everywhere. */
export function gaEnabled(): boolean {
  return gaMeasurementId() !== null && process.env.VERCEL_ENV === "production";
}

export function cloudinaryCloudName(): string | null {
  const name = trimmed("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
  return CLOUDINARY_NAME.test(name) ? name : null;
}

export function cloudinaryFolder(): string {
  const folder = trimmed("CLOUDINARY_FOLDER").replace(/^\/+|\/+$/g, "");
  return CLOUDINARY_FOLDER.test(folder) ? folder : "";
}

/**
 * Optimized delivery URL. Does not replace Cloudflare Images for files that
 * are not already stored in this cloud.
 */
export function cloudinaryDeliveryUrl(
  publicId: string,
  width: number,
): string | null {
  const cloud = cloudinaryCloudName();
  const id = publicId.replace(/^\/+/, "");
  if (!cloud || !id || !Number.isFinite(width) || width < 1) return null;
  const folder = cloudinaryFolder();
  const path = [folder, id].filter(Boolean).join("/");
  const safeWidth = Math.min(Math.round(width), 3840);
  return `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto,c_limit,w_${safeWidth}/${path}`;
}

/** True when upload credentials exist. Values are never returned. */
export function cloudinaryUploadConfigured(): boolean {
  return (
    cloudinaryCloudName() !== null &&
    trimmed("CLOUDINARY_API_KEY").length > 0 &&
    trimmed("CLOUDINARY_API_SECRET").length > 0
  );
}

const MAP_EMBED_HOSTS = new Set(["www.google.com", "maps.google.com"]);

/** Google Maps embed URL only. Rejects other hosts so the iframe cannot be retargeted. */
export function openHousesMapEmbedUrl(): string | null {
  const raw = trimmed("NEXT_PUBLIC_OPEN_HOUSES_MAP_EMBED_URL");
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (!MAP_EMBED_HOSTS.has(url.hostname)) return null;
    if (
      url.hostname === "www.google.com" &&
      !url.pathname.startsWith("/maps")
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

export type ClaudeAuth = {
  apiKey: string;
  baseURL?: string;
};

/**
 * Prefer the Vercel AI Gateway key. Direct Anthropic remains the fallback.
 * Cerebras is not used for client-facing copy.
 */
export function resolveClaudeAuth(): ClaudeAuth | null {
  const gatewayKey = trimmed("AI_GATEWAY_API_KEY");
  if (gatewayKey) {
    return { apiKey: gatewayKey, baseURL: AI_GATEWAY_BASE_URL };
  }
  const anthropicKey = trimmed("ANTHROPIC_API_KEY");
  if (anthropicKey) return { apiKey: anthropicKey };
  return null;
}

export function smsAutoReplyEnabled(): boolean {
  const value = trimmed("SMS_AUTO_REPLY_ENABLED").toLowerCase();
  return value === "1" || value === "true" || value === "yes";
}

export function smsAutoReplyMessage(): string | null {
  const message = trimmed("SMS_AUTO_REPLY_MESSAGE");
  if (!message) return null;
  return message.slice(0, 640);
}

export function smsPhoneConfigured(): boolean {
  return trimmed("SMS_PHONE_NUMBER").length > 0;
}

export function notionConfigured(): boolean {
  return trimmed("NOTION_TOKEN").length > 0;
}

export function cloudflareTokenConfigured(): boolean {
  return trimmed("CLOUDFLARE_API_TOKEN").length > 0;
}
