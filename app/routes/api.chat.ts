import type { Route } from "./+types/api.chat";
import { sendMessageToGemini, initializeGeminiClient } from "../services/gemini";

const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function action({ request, context }: Route.ActionArgs) {
  const apiKey = context.cloudflare.env.API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  // Per-IP rate limiting
  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const now = Date.now();
  const rateEntry = rateLimitMap.get(ip);

  if (rateEntry && now < rateEntry.resetAt) {
    if (rateEntry.count >= RATE_LIMIT_MAX) {
      return Response.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }
    rateEntry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  initializeGeminiClient(apiKey);

  const formData = await request.formData();
  const message = formData.get("message");

  if (!message || typeof message !== "string") {
    return Response.json(
      { error: "Message is required" },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Message too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    );
  }

  try {
    const response = await sendMessageToGemini(message);
    return Response.json({ response });
  } catch (error) {
    console.error("Chat error:", error);
    return Response.json(
      { error: "Failed to get response" },
      { status: 500 }
    );
  }
}
