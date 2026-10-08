import { NextResponse } from "next/server";
import {
  smsAutoReplyEnabled,
  smsAutoReplyMessage,
  smsPhoneConfigured,
} from "@/lib/runtime-config";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Twilio-style inbound webhook. Returns TwiML and does not place an outbound
 * SMS. The reply text comes from SMS_AUTO_REPLY_MESSAGE.
 */
export async function POST() {
  if (!smsAutoReplyEnabled() || !smsPhoneConfigured()) {
    return new NextResponse("SMS auto-reply is off", { status: 404 });
  }

  const message = smsAutoReplyMessage();
  if (!message) {
    return new NextResponse("SMS auto-reply message is empty", { status: 503 });
  }

  const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${xmlEscape(message)}</Message></Response>`;
  return new NextResponse(twiml, {
    status: 200,
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
