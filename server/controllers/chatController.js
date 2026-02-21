const { detectEmotion, detectAnxietyAttack } = require("../services/emotionService");
const generateAIResponse = require("../services/chatService");
const detectCognitiveDistortion = require("../utils/thoughtReframe");

exports.handleChat = async (req, res) => {
    console.log("CHAT ROUTE HANDLED BY CHAT CONTROLLER");
    try {
        const { text, mode } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }

        const isAcuteAnxiety = detectAnxietyAttack(text);
        const { emotion, mood_score } = await detectEmotion(text);
        const distortion = detectCognitiveDistortion(text);

        let systemBlock = `
You are SERENIS, a supportive same-age friend.
Never diagnose.
Never replace therapy.
Encourage real support if distress is extreme.

Start responses naturally.
Sometimes reflect the user's emotion.
Do NOT repeat the same sentence every reply.

Use short, calm sentences.
`;

        if (isAcuteAnxiety) {
            systemBlock += `
The user is likely experiencing a panic attack.
You MUST immediately:
1. Guide them through 4-4 breathing (inhale 4, hold 4, exhale 4).
2. Start a 5-4-3-2-1 grounding exercise.
Be very calm.
Use very short sentences.
No long explanations.
`;
        }

        if (mode === "vent") {
            systemBlock += `
Respond with empathy only.
Do NOT give advice.
`;
        } else {
            systemBlock += `
Give gentle CBT-inspired guidance.
`;
        }

        const hour = new Date().getHours();
        if (hour >= 23) {
            systemBlock += `
Naturally include this sentence:
"Nights can make thoughts feel heavier."
`;
        }

        let prompt = `
<|system|>
${systemBlock}
<|user|>
${text}
<|assistant|>
`;

        const aiReply = await generateAIResponse(prompt);
        const finalReply = distortion ? distortion + "\n\n" + aiReply : aiReply;

        res.json({
            emotion,
            mood_score,
            reply: finalReply,
            isAcuteAnxiety: isAcuteAnxiety
        });

    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ error: "Chat failed" });
    }
};

exports.testEmotion = async (req, res) => {
    const { text } = req.body;
    const result = await detectEmotion(text);
    res.json(result);
};

exports.hello = (req, res) => {
    res.json({ message: "Hello route works" });
};
