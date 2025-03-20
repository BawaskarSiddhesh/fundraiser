const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { createCampaign } = require("../controllers/campaignController.js");
const { protect } = require("../middleware/authMiddleware.js"); // Ensure user is authenticated

const router = express.Router();

router.post("/create", protect, upload.array("documents", 5), createCampaign); // Allow up to 5 document uploads

module.exports = router;
