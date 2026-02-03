
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateMotionIdea(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a world-class motion graphics director. Provide a detailed, creative motion concept based on this request: "${prompt}". 
        Focus on:
        - Visual Style
        - Motion Principles (easing, timing)
        - After Effects expression ideas or logic
        - Color palette suggestions
        Format as clear, inspiring Markdown.`,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Unable to generate motion concept at this time.";
    }
  }
}

export const geminiService = new GeminiService();
