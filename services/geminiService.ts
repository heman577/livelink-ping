import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { UserPersona } from '../types';

const getAiClient = () => {
  // Safe check for environment variable
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.warn("API_KEY is missing. Gemini features will likely fail.");
  }
  return new GoogleGenAI({ apiKey });
};

export const getGeminiSuggestion = async (
  persona: UserPersona,
  interests: string[],
  currentTab: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    const model = 'gemini-2.5-flash';

    const prompt = `
      You are a local expert guide for Linköping, Sweden. 
      The user is a ${persona} interested in ${interests.join(', ')}.
      They are currently looking at the "${currentTab}" section of the city app.
      
      Provide a single, short, punchy, and exciting suggestion (max 2 sentences) for them.
      
      If tab is 'discover': Suggest a specific hidden gem or activity in Linköping.
      If tab is 'connect': Suggest a type of community or meet-up to join in Linköping (e.g., at Linköping Science Park or a student union).
      If tab is 'grow': Suggest a career move or a local company (like Saab, Ericsson, Sectra) to look into.
      If tab is 'stay': Suggest a neighborhood or a weekend getaway nearby.

      Tone: Viral, friendly, Gen Z/Millennial appropriate. No hashtags.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Explore the Stångån river walk—it's beautiful this time of year!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Check out the view from Gamla Linköping this weekend!";
  }
};
