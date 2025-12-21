import { GoogleGenAI } from "@google/genai";
import type { Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this client-side demo we use the env var directly as per instructions.
// We default to an empty string if undefined to prevent initialization crashes in static builds without env vars.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I am currently running in offline mode (API Key missing). Please configure the environment variables to enable the AI assistant.";
  }

  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "An error occurred while connecting to the AI assistant.";
  }
};
