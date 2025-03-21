const axios = require("axios");
require("dotenv").config();

const checkHealthFact = async (text) => {
    if (!process.env.HUGGINGFACE_API_KEY) {
        throw new Error("Missing Hugging Face API Key in environment variables");
    }

    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/Amanpradhan1/health-fact-check-model",
            { inputs: text },  // Make sure text input is in this format
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Hugging Face API Response:", response.data); // Debugging

        if (!response.data || response.data.length === 0) {
            throw new Error("Unexpected response from Hugging Face API");
        }

        // Map response to meaningful labels
        const labelMapping = ["False", "Mixture", "True"]; // Based on model description
        const prediction = response.data[0]?.label;
        const confidence = response.data[0]?.score;

        return {
            claim: text,
            verification: labelMapping[prediction] || "Unknown",
            confidence: confidence || 0,
        };
    } catch (error) {
        console.error("Error calling Hugging Face API:", error.response?.data || error.message);
        throw new Error("Failed to fetch model prediction");
    }
};

module.exports = { checkHealthFact };
