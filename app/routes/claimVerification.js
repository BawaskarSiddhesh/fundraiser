const express = require('express');
const router = express.Router();
const { verifyHealthClaim } = require('../services/modelService');

// API to verify a health claim
router.post('/', async (req, res) => {
  const { claim } = req.body;
  
  if (!claim) {
    return res.status(400).json({ error: '❌ No claim text provided' });
  }

  try {
    const result = await verifyHealthClaim(claim);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: '❌ Error verifying claim', details: error.message });
  }
});

module.exports = router;
