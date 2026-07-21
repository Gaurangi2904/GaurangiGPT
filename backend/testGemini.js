import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

try {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Hello",
  });

  console.log(response.text);
} catch (err) {
  console.error(err);
}