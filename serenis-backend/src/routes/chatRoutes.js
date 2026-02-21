const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.post("/chat", chatController.handleChat);
router.post("/testEmotion", chatController.testEmotion);
router.get("/hello", chatController.hello);

module.exports = router;
