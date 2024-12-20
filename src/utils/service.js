import { GoogleGenerativeAI } from "@google/generative-ai";
import { Converter } from "showdown";

export const generateAIResponse = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(
      `${import.meta.env.VITE_GEMINI_APIKEY}`
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const generationConfig = {
      temperature: 0.5,
      topP: 0.9,
      topK: 10,
      maxOutputTokens: 10, // Adjust this value to control length
    };

    const modifiedPrompt = `"How to do" - ${prompt.title}, ${prompt.description} - (in 20-30 words)`;

    const result = await model.generateContent(
      modifiedPrompt,
      generationConfig
    );

    const text = result.response.text();
    return text;

    return html;
  } catch (err) {
    console.log(err);
  }
};
