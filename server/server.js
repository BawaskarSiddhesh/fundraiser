require("dotenv").config();
const express = require("express");
// const campaignRoutes = require("./routes/campaignRoutes.js");
// const userRoutes = require('./routes/userRoutes.js');
const donationRoutes = require('./routes/donationRoutes.js')
const {connectDB} = require("./config/db.js");
const authRoutes = require('./routes/authRoutes.js')
connectDB();
const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads")); 

// app.use("/api/campaigns", campaignRoutes);
// app.use('/api/user', userRoutes)

app.use('/api/dona/api/donations', donationRoutes)
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
