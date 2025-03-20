const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { createCampaign } = require("../controllers/campaignController.js");
const {getAllUsers} = require('../controllers/userController.js')
const router = express.Router();

router.post("/create",  upload.array("documents", 5), createCampaign); // Allow up to 5 document uploads

router.get("/getallusers", getAllUsers)

module.exports = router;
