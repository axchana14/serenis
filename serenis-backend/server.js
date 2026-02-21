require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { detectEmotion } = require("./services/emotionService");

const app = express();

// 1. Updated CORS to trust your frontend
app.use(cors({
  origin: "http://127.0.0.1:5500", 
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

console.log("THIS SERVER FILE IS RUNNING");

app.get("/", (req, res) => {
  res.send("SERENIS backend is running");
});

app.post("/testEmotion", async (req, res) => {
  const { text } = req.body;
  const result = await detectEmotion(text);
  res.json(result);
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello route works" });
});

// 2. Mounted with /api prefix to match frontend calls
const chatRoutes = require("./routes/chatRoutes");
app.use("/api", chatRoutes); 

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});