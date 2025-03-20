const express = require("express");
const upload = require("../middleware/uploadMiddleware.js");
const { createCampaign, deleteCampaign, getCampaignById,getAllCampaigns} = require("../controllers/campaignController.js");


const router = express.Router();

router.post("/create", upload.array("documents", 5), createCampaign); // Allow up to 5 document uploads

router.delete('/delete',deleteCampaign);
router.get('/campaign/:id',getCampaignById)
router.get('/getallcampaign',getAllCampaigns)
module.exports = router;
