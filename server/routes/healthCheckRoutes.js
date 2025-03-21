const express = require("express");
const { checkHealthFact } = require("../services/huggingfaceService.js");

const router = express.Router();

router.post("/check", async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ success: false, error: "Text input is required" });
        }

        const result = await checkHealthFact(text);
        res.json({ success: true, data: result });
    } catch (error) {
        console.error("Error in /check route:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error", details: error.message });
    }
});

module.exports = router;
