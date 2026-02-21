import api from './services/api.js';
import storage from './services/storage.js';
import speech from './services/speech.js';

/**
 * SERENIS | Main Application v3 (Modular Edition)
 */
class SerenisApp {
    constructor() {
        this.initElements();
        this.initState();
        this.initEvents();
        this.initSpeech();
        this.loadMoodTimeline();

        setTimeout(() => {
            this.addMessage("Welcome back to your sanctuary. I've been waiting for you—how are you feeling as we begin our session today?", 'bot');
        }, 1200);
    }

    initElements() {
        this.chatInput = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('send-btn');
        this.scrollArea = document.getElementById('chat-messages');
        this.ventBtn = document.getElementById('vent-mode');
        this.adviceBtn = document.getElementById('advice-mode');
        this.chatNavBtn = document.getElementById('chat-nav-btn');
        this.calendarBtn = document.getElementById('calendar-btn');
        this.chatSection = document.getElementById('chat-section');
        this.calendarSection = document.getElementById('calendar-section');
        this.micBtn = document.getElementById('mic-btn');
        this.statusOrb = document.getElementById('mic-status');
        this.statusText = document.getElementById('status-text');
        this.resetBtn = document.getElementById('reset-btn');
        this.journalBtn = document.getElementById('journal-btn');
        this.overlays = document.querySelectorAll('.overlay-scene');
        this.closeBtns = document.querySelectorAll('.close-scene');
        this.tabWrite = document.getElementById('tab-write');
        this.tabHistory = document.getElementById('tab-history');
        this.writeView = document.getElementById('journal-write-view');
        this.historyView = document.getElementById('journal-history-view');
        this.moodIcons = document.querySelectorAll('.mood-icon');
        this.journalInput = document.getElementById('journal-input');
        this.submitJournal = document.getElementById('submit-journal');
        this.calendarGrid = document.getElementById('calendar-grid');
    }

    initState() {
        this.currentMode = 'vent';
        this.isRecording = false;
        this.userData = storage.get();
        this.speechMetrics = { speed: 0, pauses: 0 };
    }

    initEvents() {
        if (this.sendBtn) this.sendBtn.addEventListener('click', () => this.handleSendMessage());
        if (this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSendMessage();
            });
        }
        if (this.ventBtn) this.ventBtn.addEventListener('click', () => this.toggleChatMode('vent'));
        if (this.adviceBtn) this.adviceBtn.addEventListener('click', () => this.toggleChatMode('advice'));
        if (this.chatNavBtn) this.chatNavBtn.addEventListener('click', () => this.switchScene('chat'));
        if (this.calendarBtn) this.calendarBtn.addEventListener('click', () => this.switchScene('calendar'));
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.toggleOverlay('reset-section', true));
        if (this.journalBtn) this.journalBtn.addEventListener('click', () => this.toggleOverlay('journal-section', true));

        this.closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const overlay = e.target.closest('.overlay-scene');
                if (overlay) this.toggleOverlay(overlay.id, false);
            });
        });

        if (this.tabWrite) this.tabWrite.addEventListener('click', () => this.switchJournalTab('write'));
        if (this.tabHistory) this.tabHistory.addEventListener('click', () => this.switchJournalTab('history'));

        this.moodIcons.forEach(btn => {
            btn.addEventListener('click', () => this.selectedMood = btn.dataset.mood);
        });

        if (this.submitJournal) this.submitJournal.addEventListener('click', () => this.handleSubmitJournal());
    }

    initSpeech() {
        if (!speech.isSupported) return;

        speech.init(
            () => {
                this.isRecording = true;
                this.micBtn.classList.add('recording');
                this.statusOrb.classList.add('active');
                this.statusText.innerText = "Listening...";
            },
            (e) => {
                this.chatInput.value = e.results[0][0].transcript;
            },
            () => {
                this.isRecording = false;
                this.micBtn.classList.remove('recording');
                this.statusOrb.classList.remove('active');
                this.statusText.innerText = "Ready";
                if (this.chatInput.value) this.handleSendMessage();
            }
        );

        this.micBtn.addEventListener('click', () => {
            this.isRecording ? speech.stop() : speech.start();
        });
    }

    async handleSendMessage() {
        const text = this.chatInput.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        this.chatInput.value = '';
        const typing = this.showTyping();

        try {
            const data = await api.chat(text, this.currentMode, this.speechMetrics);
            typing.remove();

            const reply = data.reply || "I am processing your words...";
            const emotion = data.emotion || "Calm";

            this.addMessage(reply, 'bot', emotion);
        } catch (error) {
            typing.remove();
            this.handleMockResponse(text);
        }
    }

    addMessage(text, sender, emotion = null) {
        const wrap = document.createElement('div');
        wrap.className = `message ${sender} entry-anim`;

        if (emotion && sender === 'bot') {
            const tag = document.createElement('span');
            tag.className = `sentiment-tag ${emotion.toLowerCase()}`;
            tag.innerText = emotion;
            wrap.appendChild(tag);
        }

        const bubble = document.createElement('div');
        bubble.className = 'bubble-glass';
        bubble.innerText = text;

        wrap.appendChild(bubble);
        this.scrollArea.appendChild(wrap);
        this.scrollArea.scrollTo({ top: this.scrollArea.scrollHeight, behavior: 'smooth' });
    }

    showTyping() {
        const wrap = document.createElement('div');
        wrap.className = 'message bot entry-anim';
        wrap.innerHTML = `<div class="bubble-glass">...</div>`;
        this.scrollArea.appendChild(wrap);
        this.scrollArea.scrollTop = this.scrollArea.scrollHeight;
        return wrap;
    }

    switchScene(sceneName) {
        this.chatSection.classList.toggle('active', sceneName === 'chat');
        this.calendarSection.classList.toggle('active', sceneName === 'calendar');
        this.chatNavBtn.classList.toggle('active', sceneName === 'chat');
        this.calendarBtn.classList.toggle('active', sceneName === 'calendar');

        if (sceneName === 'calendar') this.loadMoodTimeline();
    }

    toggleOverlay(id, show) {
        const el = document.getElementById(id);
        if (!el) return;
        show ? el.classList.add('active') : el.classList.remove('active');
        if (id === 'reset-section' && show) this.startResetMode();
    }

    toggleChatMode(mode) {
        this.currentMode = mode;
        this.ventBtn.classList.toggle('active', mode === 'vent');
        this.adviceBtn.classList.toggle('active', mode === 'advice');
    }

    startResetMode() {
        const text = document.querySelector('.breath-text');
        const circle = document.querySelector('.breath-circle');
        const bar = document.getElementById('reset-progress');
        const phrases = ["Breathe in...", "Hold...", "Breathe out..."];

        let i = 0;
        let totalSeconds = 0;
        this.resetInProgress = true;
        circle.classList.add('animating');

        const loop = () => {
            if (!this.resetInProgress) {
                circle.classList.remove('animating');
                return;
            }

            text.innerText = phrases[i];
            totalSeconds += 4;
            bar.style.width = `${Math.min((totalSeconds / 60) * 100, 100)}%`;

            if (totalSeconds >= 60) {
                this.resetInProgress = false;
                text.innerText = "Peace settles like the tide.";
                setTimeout(() => this.toggleOverlay('reset-section', false), 3000);
                return;
            }

            i = (i + 1) % phrases.length;
            setTimeout(loop, 4000);
        };
        loop();
    }

    async handleSubmitJournal() {
        const text = this.journalInput.value.trim();
        if (!text) return;

        const dateStr = new Date().toISOString().split('T')[0];
        this.userData.moods[dateStr] = this.selectedMood || 'calm';
        this.userData.journals[dateStr] = text;
        storage.save(this.userData);

        this.submitJournal.innerText = "Saved";
        setTimeout(() => {
            this.toggleOverlay('journal-section', false);
            this.submitJournal.innerText = "Save Journal";
        }, 1000);
    }

    loadMoodTimeline() {
        if (!this.calendarGrid) return;
        this.calendarGrid.innerHTML = '';
        Object.keys(this.userData.moods).forEach(date => {
            const day = document.createElement('div');
            day.className = `calendar-day ${this.userData.moods[date]}`;
            day.innerText = date.split('-')[2];
            this.calendarGrid.appendChild(day);
        });
    }

    handleMockResponse(text) {
        let reply = "I'm having trouble connecting to my core, but I'm still here listening.";
        if (text.toLowerCase().includes("help")) reply = "I'm here. Try taking a deep breath while I try to reconnect.";
        this.addMessage(reply, 'bot', 'Offline');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.serenis = new SerenisApp();
});
