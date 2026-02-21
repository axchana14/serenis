require("dotenv").config({ path: require('path').resolve(__dirname, '../.env') });
const express = require("express");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");

// Check if .env loaded (debug)
console.log("DB_HOST:", process.env.DB_HOST);

const app = express();

// Middleware
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5173", "http://localhost:4173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("SERENIS API is running");
});

app.use("/api", chatRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
