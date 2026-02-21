require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const chatRoutes = require("./server/routes/chatRoutes");

const app = express();

// Security Middleware
app.use(helmet());

// Logging
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Compression
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { error: "Too many requests from this IP, please try again after 15 minutes" },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api/", limiter);

// Standard Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : ["http://127.0.0.1:5500", "http://localhost:5173", "http://localhost:4173"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("SERENIS API is running");
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api", chatRoutes);

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: "Resource not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`[Error] ${err.message}\n${err.stack}`);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        error: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

