const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createDonation = async (req, res) => {
    try {
        const { amount, currency, token, email } = req.body;

        if (!amount || !currency || !token || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const charge = await stripe.charges.create({
            amount: amount * 100, // Convert to cents
            currency: currency || "usd",
            source: token.id, // Payment token from frontend
            description: `Donation by ${email}`,
            receipt_email: email,
        });

        res.status(200).json({ message: "Donation successful", charge });
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ message: "Payment failed", error: error.message });
    }
};

module.exports = { createDonation };
