const fetch = require("node-fetch");

const HF_URL = "https://router.huggingface.co/hf-inference/models/google/flan-t5-small";
const HEADERS = {
    Authorization: `Bearer ${process.env.HF_API_KEY}`,
    "Content-Type": "application/json",
};

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

        const sorted = data[0].sort((a, b) => b.score - a.score);
        const topEmotion = sorted[0].label.toLowerCase();

        const map = {
            sadness: "sad",
            joy: "calm",
            anger: "overwhelmed",
            fear: "anxious",
            disgust: "overwhelmed",
            surprise: "overwhelmed"
        };

        const emotion = map[topEmotion] || "calm";
        const mood_score = Math.round(sorted[0].score * 10);

        return { emotion, mood_score };
    } catch (error) {
        console.error("Emotion Error:", error);
        return { emotion: "calm", mood_score: 5 };
    }
}

function detectAnxietyAttack(text) {
    const triggers = [
        "panic attack", "anxiety attack", "can't breathe", "cannot breathe",
        "heart racing", "i feel like i'm dying", "losing control", "chest tight",
        "overwhelming fear"
    ];
    const lowerText = text.toLowerCase();
    return triggers.some(trigger => lowerText.includes(trigger));
}

module.exports = {
    detectEmotion,
    detectAnxietyAttack
};
