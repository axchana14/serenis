const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAIResponse(prompt) {
    try {
        console.log("--- STARTING GEMINI AI REQUEST ---");
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("GEMINI RESPONSE SUCCESSFUL");
        return text.trim();
    } catch (error) {
        console.error("GEMINI API ERROR:", error);
        if (error.status === 429) {
            return "We're talking a little fast! Let's take a deep breath and try again in a moment.";
        }
        return "I'm here with you, but I'm having a little trouble thinking. Let's just sit in silence for a second.";
    }
}

module.exports = generateAIResponse;
