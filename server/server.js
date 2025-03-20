require("dotenv").config();
const express = require("express");
// const campaignRoutes = require("./routes/campaignRoutes.js");
// const userRoutes = require('./routes/userRoutes.js');
const {connectDB} = require("./config/db.js");

connectDB();
const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads")); 

// app.use("/api/campaigns", campaignRoutes);
// app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
