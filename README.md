 <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [Project Name] 🎯
# Serenis🎯

## Basic Details
## Basic Details: Serenis is a full-stack web application designed to provide a simple and user-friendly platform for managing and interacting with data efficiently.
The project focuses on clean design, modular code structure, and practical implementation of backend and frontend concepts.

### Team Name: [Name]
### Team Name: AstroBytes

### Team Members
- Member 1: [Name] - [College]
- Member 2: [Name] - [College]
- Member 1:Archana P S - College of engineering attingal 
- Member 2: [Name] - College of engineering attingal 

### Hosted Project Link
[mention your project hosted link here]

serenis-pi.vercel.appCollapse commentComment on lines R13 to R17coderabbitai[bot] commented on Feb 21, 2026 coderabbitai[bot]on Feb 21, 2026More actions⚠️ Potential issue | 🟡 Minor

🧩 Analysis chain
🏁 Script executed:
#!/bin/bash
# Read README.md lines 13-17 to confirm current state
echo "=== Lines 13-17 of README.md ==="
sed -n '13,17p' README.md | cat -n

# Check if ./img.png exists
echo -e "\n=== Checking for ./img.png ==="
if [ -f "./img.png" ]; then
  echo "✓ ./img.png EXISTS"
else
  echo "✗ ./img.png NOT FOUND"
fi

# Check if docs/workflow.png exists
echo -e "\n=== Checking for docs/workflow.png ==="
if [ -f "docs/workflow.png" ]; then
  echo "✓ docs/workflow.png EXISTS"
else
  echo "✗ docs/workflow.png NOT FOUND"
fi

# Search for all PNG files in repo to see what image assets exist
echo -e "\n=== All PNG files in repository ==="
fd -e png
    
      
    

      
    

    
  
Repository: tinkerhub/tink-her-hack-temp
Length of output: 464


Fill in Member 2 name and format hosted link as clickable hyperlink

Line 14: Member 2: [Name] — the placeholder was not replaced with the actual team member's name.
Line 17: The hosted link is plain text and should be a clickable hyperlink.

Additionally, docs/workflow.png (referenced on line 584) does not exist in the repository and will fail to render.

Proposed fixes
-- Member 2: [Name] - College of engineering attingal 
+- Member 2: <Actual Name> - College of engineering attingal
    
      
    

      
    

    
  
-serenis-pi.vercel.app
+[serenis-pi.vercel.app](https://serenis-pi.vercel.app)
    
      
    

      
    

    
  



📝 Committable suggestion

‼️ IMPORTANT
Carefully review the code before committing. Ensure that it accurately replaces the highlighted code, contains no missing lines, and has no issues with indentation. Thoroughly test & benchmark the code to ensure it meets the requirements.

  
    
      
        Suggested change
      
    
    
      
          
            
            - Member 1:Archana P S - College of engineering attingal 
          
          
            
            - Member 2: [Name] - College of engineering attingal 
          
          
            
            
          
          
            
            ### Hosted Project Link
          
          
            
            [mention your project hosted link here]
          
          
            
            
          
          
            
            serenis-pi.vercel.app
          
          
            
            - Member 1:Archana P S - College of engineering attingal 
          
          
            
            - Member 2: <Actual Name> - College of engineering attingal 
          
          
            
            
          
          
            
            ### Hosted Project Link
          
          
            
            [serenis-pi.vercel.app](https://serenis-pi.vercel.app)
          
      
    
    Unable to apply suggestions when viewing a specific commit range.
  




🤖 Prompt for AI Agents
Verify each finding against the current code and only fix it if needed.

In `@README.md` around lines 13 - 17, Replace the "Member 2: [Name]" placeholder
with the actual team member's full name under the "Member 2" entry, change the
plain hosted URL under the "Hosted Project Link" heading to a markdown hyperlink
(e.g., make the visible text and URL clickable), and fix the broken image
reference to docs/workflow.png by either adding the missing image file to docs/
or removing/updating the reference where "docs/workflow.png" is used so the
README no longer points to a non-existent asset.

    
      
    

      
    

    
  


ReactWrite a replyResolve comment
### Project Description
[2-3 lines about what your project does]
Serenis is a simple wellness journaling application that helps users record daily thoughts in a calendar-based journal and track mood patterns over time. It supports multiple members, allowing each user to maintain personal entries while gaining insights into emotional trends.

### The Problem statement
[What problem are you solving?]
Many individuals experience emotional stress, anxiety, and mood fluctuations but lack simple, private, and accessible tools to understand and manage their mental well-being. Existing mental health platforms are often complex, expensive, or intimidating, making users reluctant to seek help or track their emotions regularly.

There is a need for a beginner-friendly, science-backed system that can analyze users’ emotions through text and voice, track moods over time, and provide immediate emotional support and self-regulation techniques during moments of distress.

Serenis aims to address this gap by offering a lightweight emotional wellness assistant that helps users:

Express feelings through journaling and voice input

Detect emotional patterns and early distress signals

Receive timely, evidence-based emotional regulation and self-soothing guidance

### The Solution
[How are you solving it?]
Serenis is a text and voice–based emotional wellness chatbot that detects user emotions in real time and provides science-backed emotional regulation support in a friendly, age-appropriate conversational style.

---
The system analyzes text messages and voice inputs to identify emotional states such as stress, anxiety, sadness, or emotional overload. Based on the detected emotion, Serenis dynamically adapts its tone and response style, allowing users to either vent freely or receive guidance, making them feel heard and safe.

Key Functionalities
1. Emotion Detection (Text + Voice)

Uses NLP for text sentiment and emotion analysis

Uses voice emotion analysis (tone, pitch, energy) via free APIs

Detects states like calm, stressed, anxious, low mood, or overwhelmed

2. Supportive Conversational Response

Adjusts language, tone, and empathy level to match the user’s emotional state

Speaks like a supportive friend rather than a clinical assistant

Avoids judgment and promotes openness

3. Advice vs Vent Toggle

Users choose whether they want solutions or just emotional release

Prevents overwhelming users during vulnerable moments

4. Crisis Awareness & Immediate Support

Detects panic/anxiety signals and activates calming interventions

Recognizes suicidal ideation keywords and responds with grounding support, reassurance, and help-seeking encouragement

Focuses on support, not diagnosis

5. Science-Backed Emotional Regulation Tools

60-Second Reset (paced breathing, grounding)

Thought Reframing (CBT-inspired)

Self-soothing techniques (sensory calming, reassurance prompts)

Break-and-Restart method for emotional overload

6. Journal + Mood Tracking

Daily journaling saved in a calendar-style view

Automatically tracks emotional trends from journal entries

Highlights micro-wins and emotional improvements

7. Night Awareness

Detects late-night vulnerability

Suggests sleep-friendly grounding techniques and reflection prompts

Why Serenis Is Unique

Combines voice + text emotion analysis

Uses scientifically backed emotional regulation techniques

Beginner-friendly, hackathon-feasible architecture

Focuses on comfort, awareness, and recovery, not therapy replacement

Impact

Serenis empowers users to:

Understand their emotions better

Regulate distress safely and privately

Build emotional awareness over time

Feel supported during vulnerable moments

## Technical Details
Technical Details
System Overview

Serenis is a lightweight web-based emotional wellness chatbot that performs text and voice emotion analysis and responds with science-backed emotional regulation techniques.

The system is designed with a simple frontend + minimal backend + third-party APIs, making it hackathon-friendly and scalable.

Architecture
User (Browser)
   ↓
Frontend (React / HTML + JS)
   ↓
Backend API (Node.js / Flask)
   ↓
Emotion APIs + LLM
   ↓
Response + Exercises
   ↓
Database (MySQL) – Journals & Mood History
Technology Stack
Frontend

HTML / CSS / JavaScript (or React if comfortable)

Voice input using Web Speech API

Text chat interface

Calendar-based journal UI

Advice vs Vent toggle

Micro-win and mood display

Backend

Node.js (Express) or Python (Flask)

Handles:

API calls

Emotion analysis logic

Safety & crisis detection

Journal storage

Mood tracking

Emotion Detection
1. Text Emotion Analysis

Uses Hugging Face free inference APIs

Example models:

j-hartmann/emotion-english-distilroberta-base

cardiffnlp/twitter-roberta-base-emotion

Output emotions:

happy, calm, anxious, sad, angry, overwhelmed

2. Voice Emotion Analysis

Voice captured in browser

Converted to text using:

Web Speech API or Whisper (API)

Emotion inferred from:

Speech energy

Pauses

Word choice

(Hackathon-level approximation, not medical diagnosis)

Conversational Intelligence
LLM (Chat Response)

OpenAI / Open-source LLM (API-based)

Prompted to:

Speak like a supportive friend

Match user’s emotional tone

Avoid clinical language

Follow safety constraints

Advice vs Vent Logic
IF mode == "Vent":
   → Empathy + validation
ELSE:
   → Emotional regulation exercises
Crisis & Safety Detection
Panic / Anxiety Detection

Triggered when:

High anxiety emotion score

Keywords like: panic, can’t breathe, heart racing

Response:

60-Second Reset

Grounding exercise

Slow breathing prompts

Comforting language

Suicidal Ideation Detection

Keyword + sentiment based:Collapse commentComment on line R241coderabbitai[bot] commented on Feb 21, 2026 coderabbitai[bot]on Feb 21, 2026More actions⚠️ Potential issue | 🟡 Minor
Grammar: hyphenate compound modifier sentiment-based

📝 Proposed fix
-Keyword + sentiment based:
+Keyword + sentiment-based:
    
      
    

      
    

    
  



📝 Committable suggestion

‼️ IMPORTANT
Carefully review the code before committing. Ensure that it accurately replaces the highlighted code, contains no missing lines, and has no issues with indentation. Thoroughly test & benchmark the code to ensure it meets the requirements.

  
    
      
        Suggested change
      
    
    
      
          
            
            Keyword + sentiment based:
          
          
            
            Keyword + sentiment-based:
          
      
    
    Unable to apply suggestions when viewing a specific commit range.
  




🧰 Tools

🪛 LanguageTool
[grammar] ~241-~241: Use a hyphen to join words.
Context: ... Ideation Detection  Keyword + sentiment based:  “I want to disappear”  “No reaso...
(QB_NEW_EN_HYPHEN)



🤖 Prompt for AI Agents
Verify each finding against the current code and only fix it if needed.

In `@README.md` at line 241, In the README change the phrase "Keyword + sentiment
based:" to use a hyphenated compound modifier by replacing it with "Keyword +
sentiment-based:" so the compound adjective "sentiment-based" is grammatically
correct; update any identical occurrences of "sentiment based" used as a
modifier elsewhere in the document.

    
      
    

      
    

    
  


ReactWrite a replyResolve comment

“I want to disappear”

“No reason to live”

“I want to die”

Action:

Non-judgmental support

Encouragement to seek help

Emergency resources (region-based)

Never gives medical advice or instructions

Science-Backed Interventions
Implemented Methods

CBT-inspired thought reframing

Box breathing / paced breathing

5-4-3-2-1 grounding

Self-soothing prompts

Break & Restart method

Night-time calming routines

All responses are evidence-informed, not diagnostic.

Journal & Mood Tracking
Database (MySQL)

Yes — MySQL is used.

Tables:

users

journal_entries

daily_mood

Each journal entry stores:

Date

Text

Detected emotion

Mood score

Features

Calendar-based journaling

Mood trend visualization

Micro-wins extraction

Emotional pattern awareness

Privacy & Ethics

No diagnosis or labeling

Minimal data storage

No voice stored permanently

Users control journal visibility

Clear mental health disclaimer

Role Division (2 Members)
Member 1 – AI & Backend

Emotion detection APIs

Chat response logic

Safety & crisis handling

MySQL integration

Member 2 – Frontend & UX

Chat UI

Voice input

Journal calendar

Mood visualization

User flow & comfort design

Hackathon Feasibility

Uses free APIs

Minimal backend logic

Modular design

Expandable after hackathon
### Technologies/Components Used
Technologies / Components Used

Frontend: HTML, CSS, JavaScript (React optional)

Voice Input: Web Speech API

Backend: Node.js (Express) / Python (Flask)

AI & NLP: Hugging Face Emotion Detection Models, LLM (Chat API)

Speech-to-Text: Browser Speech API / Whisper API

Database: MySQL (Journal & Mood Tracking)

APIs: Emotion Analysis API, Chat Response API

Features: Text & Voice Chat, Emotion Detection, Journaling, Mood Tracking, Safety Detection
**For Software:**
- Languages used: [e.g., JavaScript, Python, Java]
- Frameworks used: [e.g., React, Django, Spring Boot]
- Libraries used: [e.g., axios, pandas, JUnit]
- Tools used: [e.g., VS Code, Git, Docker]
-Software Used

Operating System: Windows / Linux

Programming Languages: JavaScript, Python

Frontend Software: HTML, CSS, JavaScript

Backend Frameworks: Node.js (Express) / Flask

AI Libraries: Hugging Face Transformers, TensorFlow / PyTorch

Database Software: MySQL

APIs & Tools: Speech-to-Text API, Emotion Analysis API

Version Control: Git, GitHub

IDE: VS Code
**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: [List tools needed]
Processor: Intel i3 or above

---
RAM: 4 GB or more

Storage: 20 GB free space

Microphone: Built-in or external (for voice emotion analysis)

Internet Connection: Required

## Features

List the key features of your project:
- Feature 1: [Description]
- Feature 2: [Description]
- Feature 3: [Description]
- Feature 4: [Description]
Text and voice-based chatbot interaction

---
Basic emotion detection from user input

## Implementation
Advice vs Vent mode toggle

### For Software:
Panic/anxiety support with calming exercises

Thought reframing and emotional regulation techniques

Calendar-based journaling with mood tracking

Night-time emotional awareness prompts

## Implementation
The system is implemented as a web-based application where users interact with a chatbot using text or voice. User input is analyzed using emotion detection models to identify emotional states. Based on the detected emotion, the system provides appropriate, science-backed responses such as calming exercises, emotional regulation techniques, or supportive conversation. Journal entries are stored in a database and visualized in a calendar format to track mood patterns over time.
### For Software:
The application is developed using HTML, CSS, and JavaScript for the frontend interface. The backend is built using Node.js or Flask to handle user requests and API communication. Emotion detection is performed using pre-trained AI models accessed through APIs. User journal entries and mood data are stored using MySQL. Git and GitHub are used for version control and collaboration.
#### Installation
```bash
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```
Install Node.js / Python on the system.

Clone the project repository from GitHub.

Navigate to the project folder.

Install required dependencies using the package manager.

Configure environment variables for API keys and database connection.

Run the backend server.

Open the frontend in a web browser.
#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```
Start the backend server.

Open the frontend application in a browser.

Allow microphone access for voice input.

Begin interacting with SERENIS using text or voice.

### For Hardware:
Power on the system (PC / Laptop).

Connect and enable a working microphone.

Ensure speakers or headphones are connected.

Launch the application and grant microphone access.

Interact with SERENIS using voice or text input.
#### Components Required
[List all components needed with specifications]
Software

#### Circuit Setup
[Explain how to set up the circuit]
Web Browser (Chrome / Edge)

---
Node.js / Python (for backend)

## Project Documentation
OpenAI API

MySQL Database

Hardware

Laptop / Desktop

Microphone

Speakers / Headphones

Internet Connection

#### Circuit Setup
Project Data Flow (Digital Circuit)Input Stage: The User Interface (HTML/CSS/JS) captures emotional data via text input or the Web Speech API (Voice input).Processing Bridge: Data is sent via REST API calls (Express.js) to the backend logic.Logic Gate (AI): The chatService.js and emotionService.js act as the central processors, analyzing sentiment and generating empathetic responses.Storage (Memory): * Short-term: Local Storage holds immediate session moods.Long-term: MySQL Database acts as the permanent memory for history and user profiles.Output Stage: The UI renders the AI's response and updates the Cosmic Grid (Mood Calendar) based on the processed data.Logical ConnectionsFrontend $\rightarrow$ Node.js Server (via HTTP POST)Server $\rightarrow$ AI API (for Sentiment Analysis)Server $\rightarrow$ MySQL (via db.js for persistence)Backend $\rightarrow$ Frontend (JSON response to update the UI)

## Project Documentation
1. Abstract / Executive SummarySerenis is a full-stack mental health application designed to serve as a digital sanctuary. It utilizes a glassmorphic "Sea Wave" interface to provide immediate sensory relief while leveraging an AI-powered backend to offer empathetic counseling. The system bridges the gap between high-tech AI and high-touch emotional support through real-time sentiment analysis, visual mood history, and guided mindfulness tools.2. Problem StatementModern digital environments often exacerbate mental fatigue through high-stress interfaces. Existing wellness tools often feel clinical or transactional, lacking the privacy and the immediate, calming sensory engagement required for effective emotional processing.3. Proposed SolutionSerenis addresses this by providing an "intentional space" featuring:Fluid UI: Rhythmic animations to lower cortisol and induce flow state.Dual-Mode AI: Adapting between "Vent" (listening) and "Advice" (coaching) modes.Life-Tide Mapping: Transforming abstract emotions into a tangible, color-coded visual timeline.4. Software Architecture & TechnologiesThe project follows a modular Full-Stack JavaScript architecture.Languages: JavaScript (ES6+), HTML5, CSS3, SQL.Frameworks: Express.js (Node.js).Libraries: dotenv, mysql2, cors, Web Speech API.Tools: VS Code, Git, NPM, MySQL Workbench.5. Implementation DetailsThe software logic is divided into specialized layers to ensure security and performance:LayerComponentFunctionalityFrontendserenis-frontendManages the glassmorphic UI, local state, and Speech-to-Text.Backendserver.jsHandles API requests and environment configuration.RoutingchatRoutes.jsDirects emotional data to the appropriate processing services.ServicesemotionService.jsAnalyzes user sentiment to determine "Sea Spirit" mood.Persistencedb.jsManages the connection pool for the MySQL database.6. Key FeaturesAdaptive AI Counseling: Context-aware responses generated via the Gemini/AI API.Cosmic Grid History: A visual calendar populated from local and database storage.Cinematic Breathing: A mindfulness module using CSS keyframe pulses for 4-7-8 breathing.Voice-to-Soul: Real-time speech transcription for hands-free venting.7. Installation & SetupDependencies: Run npm install in the serenis-backend folder.Environment: Create a .env file with DB_HOST, DB_USER, DB_PASS, and AI_API_KEY.Database: Import the SQL schema to initialize the MySQL tables.Execution: Run npm start for the backend and launch index.html via Live Server.8. ConclusionSerenis demonstrates the potential of combining aesthetic design with AI logic to create a proactive mental wellness tool. By storing data locally for privacy and on a server for history, it provides a secure and restorative user experience.
### For Software:
The software follows a Modular Full-Stack Architecture, separating the visual interface from the logic-heavy backend services to ensure a responsive, therapeutic user experience.

Frontend (The UI Sanctuary): Implemented using HTML5, CSS3, and Vanilla JavaScript. It utilizes Glassmorphism for a calming aesthetic and the Web Speech API for real-time voice-to-text processing.

Backend (The Intelligence Hub): A Node.js and Express.js environment that handles API requests. It uses chatRoutes.js to direct emotional data through specialized logic services.

Service Layer: Dedicated modules like chatService.js (AI integration) and emotionService.js (sentiment analysis) process user input to provide empathetic, context-aware responses.

Data Management: A dual-storage system using Local Storage for immediate mood tracking and MySQL (via db.js) for persistent, long-term history and user profiles.
#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*
<img width="1600" height="896" alt="image" src="https://github.com/user-attachments/assets/4e4cdad0-af7c-4578-adc1-a6fc596de3c3" />

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*
<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/e439f4c7-87b6-4ebd-9603-1aa3db7e507d" />

<img width="1600" height="891" alt="image" src="https://github.com/user-attachments/assets/b76a0c06-3801-42cf-b708-e9dd6db48847" />


<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/258841e5-e58a-4943-bf3e-50d482326176" />

#### Diagrams

#### Diagrams
graph TD
    subgraph Client_Side [Frontend: The Sanctuary]
        UI[Glassmorphic UI - HTML/CSS]
        JS[App Logic - Vanilla JS]
        LS[(Local Storage)]
        Voice[Web Speech API]
    end

    subgraph Server_Side [Backend: The Intelligence Hub]
        Express[Express.js Server]
        Routes[chatRoutes.js]
        
        subgraph Services [Service Layer]
            ES[emotionService.js]
            CS[chatService.js]
            TR[thoughtReframe.js]
        end
    end

    subgraph Data_AI_External [External & Persistence]
        DB[(MySQL Database)]
        Gemini[Gemini AI API]
    end

    %% Connections
    UI <--> JS
    JS <--> LS
    JS <--> Voice
    JS -- REST API / JSON --> Express
    Express --> Routes
    Routes --> ES
    Routes --> CS
    CS --> TR
    CS -- API Call --> Gemini
    Express -- db.js --> DB
    Routes -- Response --> JSCollapse commentComment on lines R504 to R540coderabbitai[bot] commented on Feb 21, 2026 coderabbitai[bot]on Feb 21, 2026More actions⚠️ Potential issue | 🟠 Major
Mermaid diagram won't render — missing code fence
The graph TD block is plain text. GitHub requires a ```mermaid fenced code block to render it as a diagram; without it, the entire block displays as raw text.

🐛 Proposed fix
 #### Diagrams
+```mermaid
 graph TD
     subgraph Client_Side [Frontend: The Sanctuary]
         UI[Glassmorphic UI - HTML/CSS]
         JS[App Logic - Vanilla JS]
         LS[(Local Storage)]
         Voice[Web Speech API]
     end

     subgraph Server_Side [Backend: The Intelligence Hub]
         Express[Express.js Server]
         Routes[chatRoutes.js]
         
         subgraph Services [Service Layer]
             ES[emotionService.js]
             CS[chatService.js]
             TR[thoughtReframe.js]
         end
     end

     subgraph Data_AI_External [External & Persistence]
         DB[(MySQL Database)]
         Gemini[Gemini AI API]
     end

     %% Connections
     UI <--> JS
     JS <--> LS
     JS <--> Voice
     JS -- REST API / JSON --> Express
     Express --> Routes
     Routes --> ES
     Routes --> CS
     CS --> TR
     CS -- API Call --> Gemini
     Express -- db.js --> DB
     Routes -- Response --> JS
+```
    
      
    

      
    

    
  


🤖 Prompt for AI Agents
Verify each finding against the current code and only fix it if needed.

In `@README.md` around lines 504 - 540, The Mermaid diagram block starting with
"graph TD" is not fenced and therefore not rendered; wrap the existing diagram
(the "graph TD" block under the "Diagrams" section) in a fenced code block using
triple backticks with the mermaid language identifier (i.e., add ```mermaid
immediately before the "graph TD" line and a closing ``` after the final
connection line) so GitHub will render it as a diagram.

    
      
    

      
    

    
  


ReactWrite a replyResolve comment
**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*
High-Level System Architecture
The architecture is divided into three primary tiers:

1. Presentation Tier (Frontend)
Technology: HTML5, CSS3, Vanilla JavaScript.

Function: This is the "Sanctuary." It renders the glassmorphic UI and handles rhythmic animations.

Edge Processing: Uses the Web Speech API for local audio-to-text conversion and Local Storage for immediate, low-latency mood logging.

2. Application Tier (Backend)
Technology: Node.js, Express.js.

Function: Acts as the "Brain." It manages API endpoints defined in chatRoutes.js.

Services:

chatService.js: Interfaces with the Gemini AI for empathetic response generation.

emotionService.js: Performs sentiment analysis to trigger UI changes (mood icons/colors).

thoughtReframe.js: A utility layer that restructures negative inputs into constructive reflections.

3. Data Tier (Persistence)
Technology: MySQL.

Function: Acts as the "Memory." It stores user credentials, encrypted journal entries, and long-term emotional history via the db.js connector.

System Architecture Diagram
Component Interaction Flow
Request: User inputs a thought via text or voice in the Frontend.

Transmission: The frontend sends a JSON payload to the Express Server via a RESTful POST request.

Analysis: The server passes the data through the Service Layer to determine emotion and generate an AI response.

Storage: The interaction is logged into the MySQL Database for the "Cosmic Grid" history.

Response: The server sends back the AI response and mood metadata, which the Frontend uses to update the UI animations and chat bubbles.
**Application Workflow:**

![Workflow](docs/workflow.png)
### For Hardware:

#### Schematic & Circuit
Since Serenis is a software-based application rather than a physical hardware project, the "schematic" refers to the logical data flow rather than electrical wiring.

System Schematic (Data Flow)
The "circuit" is a closed-loop system where emotional data is processed and returned as therapeutic feedback:

Input Node: User provides text/voice data via the Frontend (HTML/JS).

Signal Transmission: Data travels via HTTP/JSON to the Express.js API.

Processing Unit: The Service Layer (emotionService.js & chatService.js) processes the signal using AI logic.

Memory Storage: Results are written to the MySQL Database (Long-term) and Local Storage (Short-term).

Output Node: The system sends a response back to the UI, triggering CSS animations and chat updates.

The "Circuit" Summary
Controller: Node.js (Express)

Sensors: Web Speech API / Input Forms

Processor: Gemini AI API

Memory: MySQL / Local Storage

Display: Glassmorphic CSS UI
![Circuit](Add your circuit diagram here)
*Add caption explaining connections*


#### Build Photos

![Team](Add photo of your team here)
<img width="1152" height="864" alt="image" src="https://github.com/user-attachments/assets/eda1e0d6-35a4-4ddb-8c5a-c5664a77adfd" />


![Components](Add photo of your components here)
*List out all components shown*
## Project Demo

### Video
    https://drive.google.com/file/d/1mcroKAQs-mgdYSxe23jIlys7aMMtKmsL/view?usp=sharing

*Explain what the video demonstrates - key features, user flow, technical highlights*

https://drive.google.com/file/d/1mcroKAQs-mgdYSxe23jIlys7aMMtKmsL/view?usp=sharing
### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]
