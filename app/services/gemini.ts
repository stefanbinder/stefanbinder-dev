import { GoogleGenAI } from "@google/genai";
import type { Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// For Cloudflare Workers, we'll pass the API key from the loader
// For client-side usage, this will need to be coordinated differently
let apiKeyCache: string = '';

export const initializeGeminiClient = (apiKey: string) => {
  apiKeyCache = apiKey;
};

const getApiKey = (): string => {
  return apiKeyCache;
};

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  const apiKey = getApiKey();
  if (!chatSession && apiKey) {
    const ai = new GoogleGenAI({ apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession!;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const apiKey = getApiKey();
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
