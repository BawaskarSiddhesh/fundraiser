const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { createCampaign, deleteCampaign, getCampaignById,getAllCampaigns} = require("../controllers/campaignController.js");
const { protect } = require("../middleware/authMiddleware.js"); // Ensure user is authenticated

const router = express.Router();

router.post("/create", protect, upload.array("documents", 5), createCampaign); // Allow up to 5 document uploads

router.delete('/delete',protect,deleteCampaign);
router.get('/campaign/:id',protect,getCampaignById)
router.get('/getallcampaign', protect ,getAllCampaigns)
module.exports = router;
