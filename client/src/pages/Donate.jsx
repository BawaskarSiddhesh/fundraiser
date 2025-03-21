import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_stripe_public_key"); // Replace with your Stripe Public Key

const DonateForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            console.error("Error:", error);
            return;
        }

        const response = await fetch("http://localhost:5000/api/donations/donate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: token.id,
                amount,
                currency: "usd",
                email,
            }),
        });

        const data = await response.json();
        console.log(data);
        alert(data.message);
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen" 
            style={{ 
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvScGXhWxT9P9TEHJDCRmnTolOFsn-p0PAw&s')`, // Replace with your image URL
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '100vh' // Optional: Ensures the background covers the full height of the viewport
            }}
        >
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Make a Donation</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <div className="p-2 border border-gray-300 rounded-lg bg-gray-100">
                        <CardElement className="p-2" />
                    </div>
                    <button 
                        type="submit" 
                        disabled={!stripe} 
                        className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
};

const Donate = () => (
    <Elements stripe={stripePromise}>
        <DonateForm />
    </Elements>
);

export default Donate;
