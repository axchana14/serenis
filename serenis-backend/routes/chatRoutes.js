const express = require("express");
const router = express.Router();
const db = require("../db");

const { detectEmotion, detectAnxietyAttack } = require("../services/emotionService");
const generateAIResponse = require("../services/chatService");
const detectCognitiveDistortion = require("../utils/thoughtReframe");

router.post("/chat", async (req, res) => {
  
  console.log("CHAT ROUTE FROM chatRoutes.js IS RUNNING");
  try {
    const { text, mode } = req.body;
    

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
    const isAcuteAnxiety = detectAnxietyAttack(text);
    console.log("Is acute anxiety:", isAcuteAnxiety);

    // 1️⃣ Detect emotion
    const { emotion, mood_score } = await detectEmotion(text);

    // 2️⃣ Thought Reframe check
    const distortion = detectCognitiveDistortion(text);

    // 3️⃣ Build prompt
    /*let prompt = `
You are SERENIS, a supportive same-age friend.
Never diagnose.
Never replace therapy.
Encourage real support if distress is extreme.

Start responses naturally.
Sometimes reflect the user's emotion.
Do NOT repeat the same sentence every reply.
User message:
${text}
`;*/
// 3️⃣ Build prompt (Zephyr Chat Format)

// 3️⃣ Build prompt (Correct Zephyr structure)

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

// Inject panic protocol INSIDE system role
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

// Mode logic
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

// Night awareness
const hour = new Date().getHours();
if (hour >= 23) {
  systemBlock += `
Naturally include this sentence:
"Nights can make thoughts feel heavier."
`;
}

// Final Zephyr formatted prompt
let prompt = `
<|system|>
${systemBlock}
<|user|>
${text}
<|assistant|>
`;

    // 5️⃣ Generate AI response
    const aiReply = await generateAIResponse(prompt);

    // 6️⃣ Add thought reframe if needed
    const finalReply = distortion
      ? distortion + "\n\n" + aiReply
      : aiReply;

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
});

module.exports = router;