const Campaign = require("../models/Campaign");

// Create a campaign with file uploads
const createCampaign = async (req, res) => {
  try {
    const { title, description, targetAmount, daysRemaining, createdBy } = req.body;
    const documentPaths = req.files.map(file => file.path); // Store file paths

    const newCampaign = new Campaign({
      title,
      description,
      targetAmount,
      daysRemaining,
      createdBy,
      documents: documentPaths, // Store uploaded file paths
    });

    await newCampaign.save();
    res.status(201).json({ success: true, campaign: newCampaign });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all campaigns
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("createdBy", "name email");
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single campaign by ID
const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate("createdBy", "name email");
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    res.json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a campaign
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    res.json({ success: true, message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  deleteCampaign,
};
