import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getMBTIAnalysis(type: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional MBTI psychological analyst. Please provide a refined and inspiring English analysis report for the MBTI personality type "${type}".
      
      Please generate content based on the following structure:
      1. **Deep Personality Insight**: Describe the inner dynamics of this personality with a warm and professional touch.
      2. **Strengths and Talents**: List 3 core strengths.
      3. **Growth Suggestions**: Provide 2 practical self-improvement suggestions.
      4. **Workplace Guide**: Suggest environments where they can best leverage their strengths.
      
      Please note:
      - Use standard MBTI terminology.
      - The tone should be professional, encouraging, and warm.
      - Please use concise Markdown for the output format, and do not include the main title (as the frontend already has one).`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, we are currently unable to generate a detailed analysis. Please refer to general MBTI descriptions.";
  }
}
