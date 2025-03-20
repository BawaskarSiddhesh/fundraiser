const express = require('express');
const bodyParser = require('body-parser');
const claimVerificationRouter = require('./routes/claimVerification');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use('/verify_claim', claimVerificationRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
