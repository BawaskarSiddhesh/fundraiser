import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl font-bold text-[#1882f2] mb-6 leading-tight">
          Empowering Ideas Through Crowdfunding
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Join a community that brings ideas to life. Fund projects, support innovation, and make a meaningful impact.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#1882f2] text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Start Funding
          </button>
          <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Secure Payments</h3>
          <p className="text-gray-700">
            We ensure safe and secure transactions for both fundraisers and contributors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Transparent Funding</h3>
          <p className="text-gray-700">
            Every contribution is tracked, ensuring full transparency in fund usage.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Community Driven</h3>
          <p className="text-gray-700">
            Join a supportive community that believes in backing great ideas.
          </p>
        </div>
      </div>

      {/* Campaigns Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Future for 15-Year-Old</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹50,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 3 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Fight Against Relapse</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹45,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 17 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Support Needed for Child</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹40,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 17 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">3-Year-Old Needs Help</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹30,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 17 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Support for Digvijay Shetty</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹25,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 24 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Memorial Fund for Pranit</h4>
          <p className="text-gray-700 mb-2">Funds Required: ₹25,00,000</p>
          <p className="text-gray-700 mb-2">Campaign ends in 17 Days</p>
          <button className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg">CONTRIBUTE</button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Start your journey today by creating or supporting a crowdfunding campaign.
        </p>
        <button className="bg-[#1882f2] text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
