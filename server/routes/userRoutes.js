const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { createCampaign } = require("../controllers/campaignController.js");
const {getAllUsers} = require('../controllers/userController.js')
const { protect } = require("../middleware/authMiddleware.js"); 
const router = express.Router();

router.post("/create", protect, upload.array("documents", 5), createCampaign); // Allow up to 5 document uploads

router.get("/getallusers",protect, getAllUsers)

module.exports = router;
