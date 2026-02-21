<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# Serenis 🎯

## Serenis, is an aesthetic, AI-powered mental health sanctuary designed to provide a calming space for emotional expression. It combines modern web technology with psychological wellness practices to help users process their thoughts and track their emotional journey over time.

### Team Name: AstroBytes

### Team Members
- Member 1: B S HARIPRIYA - COLLEGE OF ENGINEERING ATTINGAL
- Member 2: Archana P S - COLLEGE OF ENGINEERING ATTINGAL

### Hosted Project Link
[mention your project hosted link here]

### Project Description
Serenis is a high-fidelity "emotional sanctuary" that merges a calming glassmorphic interface with adaptive AI to provide empathetic counseling and mental health tracking. It transforms therapeutic practices like journaling and guided breathing into a fluid, visual experience, allowing users to map their emotional tides and find instant tranquility in a digital space.

### The Problem statement
Modern digital environments often exacerbate mental fatigue through "doom-scrolling" and high-stress interfaces, leaving users without a private, calming space to process emotions. Current wellness apps frequently feel clinical or transactional, failing to provide the immediate sensory relief and empathetic, real-time engagement needed to bridge the gap between high-tech AI and high-touch mental support.

### The Solution
Serenis provides a "digital sanctuary" through a glassmorphic interface that uses rhythmic ocean animations to immediately lower cortisol levels and induce a flow state. It bridges the gap between AI and wellness by offering an empathetic, dual-mode chat system for instant emotional support, combined with a visual mood-tracking calendar that transforms abstract feelings into a tangible, long-term "life-tide" timeline.

---

## Technical Details

### Technologies/Components Used

**For Software:**
Languages used: JavaScript (ES6+), HTML5, CSS3, and SQL.

Frameworks used: Express.js (Node.js web framework).

Libraries used: dotenv (environment management), mysql2 (database driver), cors (cross-origin resource sharing), and native Web Speech API (for voice integration).

Tools used: VS Code (Editor), Git (Version Control), Node Package Manager (NPM), and MySQL Workbench.

**For Hardware:**
Processor (CPU): Minimum Dual-Core 2.0GHz or higher to handle concurrent Node.js processes and smooth CSS animations.

Memory (RAM): 8GB RAM recommended to run the VS Code IDE, local MySQL server, and browser-based testing simultaneously.

Storage: 256GB SSD (Solid State Drive) for fast read/write access to project dependencies and local database records.
---

## Features

List the key features of your project:
-Dual-Mode AI Interaction: Offers a Vent Mode for unfiltered emotional release and an Advice Mode for structured guidance and thought reframing.

-Aesthetic "Sea Wave" Interface: Utilizes glassmorphism and rhythmic ocean animations to induce a "flow state" and reduce user stress levels.

-Visual Life-Tide Mapping: Features a "Cosmic Grid" calendar that color-codes daily entries based on mood, creating a long-term emotional timeline.

-Intelligent Journaling: Provides a private space for self-reflection with daily prompts and instant mood selection stored via Local Storage.

-Cinematic Breathing Reset: A guided mindfulness tool that uses visual pulses (Inhale/Hold/Exhale) to help regulate the user's nervous system.

-Real-Time Emotion Detection: Analyzes user input to dynamically update the "Sea Spirit" status and adjust the AI's empathetic tone.

---

## Implementation
1. Environment Setup & Configuration
This phase focuses on the foundational "plumbing" of the project.

Server Initialization: Setting up the Node.js environment and Express framework to handle HTTP requests.

Database Schema: Creating the MySQL tables for user profiles, mood logs, and journal entries.

Secure Integration: Implementing .env files to hide sensitive AI API keys and database credentials.

2. Frontend Architecture (The Sanctuary)
Focus on how you built the "look and feel" and user interaction.

Glassmorphic UI: Using CSS3 (Flexbox/Grid) and custom animations to create the translucent, "Sea Wave" aesthetic.

State Management: Using a central SerenisApp JavaScript class to manage UI transitions (switching between Chat, Journal, and History).

Local Persistence: Utilizing Browser Local Storage to save mood data instantly without needing a page refresh.

3. Backend Logic & AI Services
Explain how the "brain" of your app works.

Modular Routing: Using chatRoutes.js to separate API endpoints from the main server logic for better maintainability.

AI Service Integration: Connecting to the Gemini/AI API via chatService.js to generate empathetic responses.

Emotion Analytics: Running user text through emotionService.js to detect sentiment and categorize it into specific "Sea Spirit" moods.

4. Specific Feature Implementation
Briefly explain the "how-to" of your unique tools.

Voice Integration: Implementing the Web Speech API to capture audio and convert it to text for hands-free venting.

Breathing Module: Creating a JavaScript-controlled timer that toggles CSS classes to guide users through 4-7-8 breathing cycles.

The Cosmic Grid: Writing logic to map date-stamped mood entries from the database onto a visual calendar grid.

### For Software:
1. Modular Architecture Implementation
The software is implemented using a separation of concerns strategy to ensure that UI changes don't break the logical "brain" of the app.

Frontend-Backend Bridge: The frontend uses the fetch() API to send user messages to the Node.js server, which routes them through chatRoutes.js.

Service Layer Pattern: Logic is abstracted into specialized services (e.g., chatService.js for AI logic and emotionService.js for sentiment analysis) to keep the main server.js clean and scalable.

Environment Isolation: Sensitive configurations like database credentials and API keys are stored in a .env file, loaded via the dotenv library to ensure security.

2. Logic & Data Flow
Stateful UI Management: The SerenisApp class in the frontend manages the application's "state" (current mood, active tab, chat history) to ensure a smooth, Single Page Application (SPA) experience without browser refreshes.

Persistent Storage Logic:

Immediate: Current session data and journal entries are saved to Local Storage for instant access.

Long-term: The db.js module handles the connection to MySQL, allowing for permanent record-keeping of user profiles and history.

AI Processing Pipeline: When a user "vents," the software passes the text through thoughtReframe.js to analyze the psychological perspective before the AI generates a response.

#### Installation
```bash
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
