# SERENIS | Emotional First-Aid Sanctuary

Serenis is a supportive, AI-powered emotional companion designed to provide a safe space for venting, advice, and mental well-being tracking.

## Project Structure

The project is organized into two main parts:

- `serenis-backend`: Express.js API powered by Gemini AI and Hugging Face.
- `serenis-frontend`: Vanilla JS frontend organized following production-ready standards.

```text
serenis/
├── serenis-backend/        # Node.js Express API
│   ├── src/
│   │   ├── config/         # Database and app config
│   │   ├── controllers/    # Route controllers (logic)
│   │   ├── routes/         # API routes
│   │   ├── services/       # External services (AI, etc.)
│   │   ├── utils/          # Shared utilities
│   │   └── index.js        # Main entry point
│   └── .env                # Sensitive environment variables
└── serenis-frontend/       # Client-side web application
    ├── src/
    │   ├── assets/         # CSS, Images, etc.
    │   ├── services/       # Modular JS services (API, Storage, Speech)
    │   └── main.js         # Frontend entry point
    └── index.html          # Main HTML entry
```

## Setup & Installations

### Backend
1. Navigate to `serenis-backend`.
2. Install dependencies: `npm install`.
3. Configure the `.env` file with your API keys (Gemini, Hugging Face) and MySQL credentials.
4. Start development server: `npm run dev` (requires `nodemon`).
5. Production start: `npm start`.

### Frontend
1. Navigate to `serenis-frontend`.
2. Open `index.html` via a local server (e.g., Live Server in VS Code).
3. Ensure the backend is running at `http://127.0.0.1:5000`.

## Key Features
- **Intelligent Chat**: Emotionally aware responses powered by Gemini AI.
- **Emotion Detection**: Real-time analysis of user input using Hugging Face models.
- **Panic Protocol**: Immediate grounding exercises detection of acute anxiety.
- **Journaling**: Secure, local storage for daily reflections and mood tracking.
- **60s Reset**: Guided breathing exercises for quick mental recalibration.
