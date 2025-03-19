import React from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Ongoing Campaigns</h2>

     
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {[
          { title: "Future for 15-Year-Old", funds: "₹50,00,000", days: 3 },
          { title: "Fight Against Relapse", funds: "₹45,00,000", days: 17 },
          { title: "Support Needed for Child", funds: "₹40,00,000", days: 17 },
          { title: "3-Year-Old Needs Help", funds: "₹30,00,000", days: 17 },
          { title: "Support for Digvijay Shetty", funds: "₹25,00,000", days: 24 },
          { title: "Memorial Fund for Pranit", funds: "₹25,00,000", days: 17 },
        ].map((campaign, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {/* Placeholder for campaign image */}
            <div className="h-40 bg-gray-300 mb-4 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Image Placeholder</span>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">{campaign.title}</h4>
            <p className="text-gray-700 mb-2">Funds Required: {campaign.funds}</p>
            <p className="text-gray-700 mb-2">Campaign ends in {campaign.days} Days</p>
            <button onClick={() => (navigate('/donate'))} className="bg-[#1882f2] hover:bg-[#1665c1] text-white px-5 py-2 rounded-lg transition-colors duration-300 mb-2">
              DONATE NOW
            </button>
          </div>
        ))}
      </div>

    
      <a href="/start-campaign" className="fixed bottom-10 right-10 bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
        Start Your Own Campaign
      </a>
    </div>
  );
};

export default Campaigns;