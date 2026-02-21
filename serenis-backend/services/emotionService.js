const fetch = require("node-fetch");

const HF_URL = "https://router.huggingface.co/hf-inference/models/google/flan-t5-small";
const HEADERS = {
  Authorization: `Bearer ${process.env.HF_API_KEY}`,
  "Content-Type": "application/json",
};

// ------------------ EMOTION DETECTION ------------------
async function detectEmotion(text) {
  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/j-hartmann/emotion-english-distilroberta-base",
      {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ inputs: text }),
      }
    );

    const data = await response.json();

    console.log("HF EMOTION RESPONSE:", data);

    if (!Array.isArray(data) || !Array.isArray(data[0])) {
      return { emotion: "calm", mood_score: 5 };
    }

    // Find highest scoring emotion
    const sorted = data[0].sort((a, b) => b.score - a.score);
    const topEmotion = sorted[0].label.toLowerCase();

    // Map to your app categories
    const map = {
      sadness: "sad",
      joy: "calm",
      anger: "overwhelmed",
      fear: "anxious",
      disgust: "overwhelmed",
      surprise: "overwhelmed"
    };

    const emotion = map[topEmotion] || "calm";

    // Convert confidence score (0-1) to mood scale 1-10
    const mood_score = Math.round(sorted[0].score * 10);

    return { emotion, mood_score };

  } catch (error) {
    console.error("Emotion Error:", error);
    return { emotion: "calm", mood_score: 5 };
  }
}

// ------------------ ANXIETY ATTACK DETECTION ------------------
function detectAnxietyAttack(text) {
  const triggers = [
    "panic attack",
    "anxiety attack",
    "can't breathe",
    "cannot breathe",
    "heart racing",
    "i feel like i'm dying",
    "losing control",
    "chest tight",
    "overwhelming fear"
  ];

  const lowerText = text.toLowerCase();
  return triggers.some(trigger => lowerText.includes(trigger));
}

// ------------------ CHAT RESPONSE ------------------
async function chatWithAI(text, mode = "advice") {
  const isAnxietyAttack = detectAnxietyAttack(text);

  if (isAnxietyAttack) {
    return {
      mode: "grounding_protocol",
      steps: [
        "You are safe right now.",
        "Take a slow breath in for 4 seconds.",
        "Hold it for 4 seconds.",
        "Slowly exhale for 6 seconds.",
        "Look around and name 5 things you can see.",
        "Name 4 things you can touch.",
        "Name 3 things you can hear."
      ]
    };
  }
  try {
    const prompt = `
You are Serenis, a calm emotional support companion.

Rules:
- Never diagnose.
- Always be supportive.
- Start with: "It sounds like you're feeling ___ right now."
- If mode is "vent": empathy only.
- If mode is "advice": gentle CBT guidance.

User: ${text}
Mode: ${mode}
    `;

    const response = await fetch(HF_URL, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_new_tokens: 120 },
      }),
    });

    const data = await response.json();

    return data[0]?.generated_text || "I’m here with you.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm here with you. Let's try again.";
  }
}

module.exports = {
  detectEmotion,
  detectAnxietyAttack
};