require('dotenv').config();

const axios = require('axios');
const API_KEY = process.env.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;
const verifyHealthClaim = async (claimText) => {
  const modelAPI = 'https://api-inference.huggingface.co/models/Amanpradhan1/health-fact-check-model'; // Update with actual endpoint

  try {
    // Send request to Hugging Face model
    const response = await axios.post(
      modelAPI,
      { inputs: claimText },
      { headers: { 'Authorization': `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` } }
    );

    const result = response.data;
    return {
      claim: claimText,
      verification: result[0].label,  // The model's classification
      confidence: result[0].score,    // Confidence score
    };
  } catch (error) {
    throw new Error('❌ Error calling Hugging Face API: ' + error.message);
  }
};

module.exports = { verifyHealthClaim };
