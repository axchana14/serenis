function detectCognitiveDistortion(text) {
    const triggers = [
        "always",
        "never",
        "everyone hates me",
        "i always fail"
    ];

    const lowerText = text.toLowerCase();

    for (let phrase of triggers) {
        if (lowerText.includes(phrase)) {
            return "Can we gently question that thought? Is there a small exception to it?";
        }
    }

    return null;
}

module.exports = detectCognitiveDistortion;
