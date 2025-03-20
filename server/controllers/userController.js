const User = require('../models/User.js');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); 
        res.status(200).json({ message: "Users retrieved successfully", users });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
};

