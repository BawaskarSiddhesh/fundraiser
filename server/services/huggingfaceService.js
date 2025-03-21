const axios = require("axios");
require("dotenv").config();

const checkHealthFact = async (text) => {
    if (!process.env.HUGGINGFACE_API_KEY) {
        throw new Error("Missing Hugging Face API Key in environment variables");
    }

    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/Amanpradhan1/health-fact-check-model",
            { inputs: text },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // Ensure response data exists and parse the result properly
        if (!response.data || response.data.length === 0) {
            throw new Error("Unexpected response from Hugging Face API");
        }

        return {
            claim: text,
            verification: response.data[0]?.label || "Unknown",
            confidence: response.data[0]?.score || 0,
        };
    } catch (error) {
        console.error("Error calling Hugging Face API:", error.response?.data || error.message);
        throw new Error("Failed to fetch model prediction");
    }
};

module.exports = { checkHealthFact };
