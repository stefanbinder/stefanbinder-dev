import type { Route } from "./+types/api.chat";
import { sendMessageToGemini, initializeGeminiClient } from "../services/gemini";

export async function action({ request, context }: Route.ActionArgs) {
  const apiKey = context.cloudflare.env.API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "API key not configured" },
      { status: 500 }
    );
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
