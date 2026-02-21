/**
 * Speech Recognition Service for Serenis
 */
class SpeechService {
    constructor() {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = SR ? new SR() : null;
        this.isSupported = !!SR;
    }

    init(onStart, onResult, onEnd) {
        if (!this.isSupported) return;

        this.recognition.continuous = false;
        this.recognition.onstart = onStart;
        this.recognition.onresult = onResult;
        this.recognition.onend = onEnd;
    }

    start() {
        if (this.isSupported) this.recognition.start();
    }

    stop() {
        if (this.isSupported) this.recognition.stop();
    }
}

export default new SpeechService();
