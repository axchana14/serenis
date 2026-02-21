# Serenis 🎯

## Basic Details
**Team Name**: [AstroBytes]  
**Team Members**  
- **Member 1**: Archana P S - [College Name]  
- **Member 2**: Haripriya B S - [College Name]  

**Hosted Project Link**  
[mention your project hosted link here]

## Project Description
Serenis is a cinematic emotional first-aid platform providing a supportive AI sanctuary for mental well-being. It offers real-time emotion detection, guided mindfulness exercises, and a reflective journaling system.

## The Problem Statement
Modern life can be overwhelming, and many people lack immediate, low-barrier access to emotional support or grounding exercises during moments of distress. Seeking help often feels like a significant hurdle, leading to bottled-up emotions and unmanaged anxiety.

## The Solution
Serenis solves this by providing an anonymous, aesthetically soothing "digital sanctuary." It uses AI to detect user emotions and provide empathetic, CBT-inspired guidance or a safe space to vent. Integrated 60-second breathing exercises and sentiment-aware journaling offer immediate tools for emotional self-regulation and reflection.

## Technical Details

### Technologies/Components Used
**For Software:**

- **Languages used**: JavaScript (ES6+), HTML5, CSS3
- **Frameworks used**: Express.js, Node.js
- **Libraries used**: 
  - Backend: `@google/generative-ai`, `helmet`, `morgan`, `express-rate-limit`, `compression`, `cors`, `dotenv`, `mysql2`, `node-fetch`
  - Frontend: Vanilla JavaScript
- **Tools used**: VS Code, Git, Hugging Face Inference API

## Features
List the key features of your project:

- **AI-Driven Emotional Support**: Real-time emotion detection and empathetic AI responses tailored to "vent" or "advice" modes.
- **Mindful Reset**: A guided 60-second breathing and grounding interface for immediate anxiety relief.
- **Sentiment-Aware Journaling**: A reflective space for users to write, with automated emotion tracking and progress history.
- **Cinematic UI/UX**: A premium, low-friction interface using glassmorphism and oceanic animations to promote relaxation and lower cognitive load.

## Implementation

### For Software:
**Installation**
```bash
npm install
```

**Run**
```bash
npm run dev
```

## Project Documentation

### For Software:
**Screenshots (Add at least 3)**

![Screenshot1](client/assets/img/chat_demo.png) 
*The main chat sanctuary where users interact with Serenis.*

![Screenshot2](client/assets/img/reset_demo.png) 
*The 60-second mindful reset interface during a breathing cycle.*

![Screenshot3](client/assets/img/journal_demo.png) 
*The journaling system with mood tracking and progress history.*

### Diagrams
**System Architecture:**

The architecture consists of a **Vanilla JS Frontend (Client)** communicating via **REST API** with a **Node.js/Express Backend (Server)**. The backend integrates with:
1. **Google Gemini Pro** for intelligent, supportive responses.
2. **Hugging Face DistilRoBERTa** for precise real-time sentiment and emotion analysis.
3. **MySQL Database** for storing mood history and journal entries securely.

**Application Workflow:**

A user interacts with the chat or journal. The client sends the input to the server, which concurrently analyzes the emotion (Hugging Face) and generates a contextual response (Gemini). The results are saved to the database and returned to the client to update the UI dynamically.

## Additional Documentation

### API Documentation
**Base URL**: `http://localhost:5000`

**Endpoints**

**POST /api/chat**
- **Description**: Processes user input to detect emotions and generate an AI-driven supportive response.
- **Request Body**:
```json
{
  "text": "I feel really overwhelmed today.",
  "mode": "vent"
}
```
- **Response**:
```json
{
  "emotion": "overwhelmed",
  "mood_score": 8,
  "reply": "I'm so sorry you're feeling this way. Take a deep breath...",
  "isAcuteAnxiety": false
}
```

---

## AI Tools Used
- **GitHub Copilot / Cursor / ChatGPT**: Assisted in designing boilerplate components and optimizing async API integrations.
- **v0.dev**: Used for prototyping the initial glassmorphism UI components.

**Percentage of AI-generated code**: Approximately 40%

**Human Contributions**:
- Architecture design and system planning.
- Custom CBT-inspired prompt engineering for Serenis's personality.
- Global CSS design system and custom oceanic animations.
- Integration of multiple AI models (Gemini + Hugging Face) and local MySQL persistence.

## Team Contributions
- **Archana P S**: Backend architecture, API integration (Gemini/Hugging Face), and database design.
- **Haripriya B S**: UI/UX design, Frontend development, and project documentation.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Made with ❤️ at TinkerHub
