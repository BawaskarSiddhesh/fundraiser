import React from "react";

const Campaigns = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Ongoing Campaigns</h2>
      
      {/* Campaigns Section */}
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
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{campaign.title}</h4>
            <p className="text-gray-700 mb-2">Funds Required: {campaign.funds}</p>
            <p className="text-gray-700 mb-2">Campaign ends in {campaign.days} Days</p>
            <button className="bg-[#1882f2] hover:bg-[#1665c1] text-white px-5 py-2 rounded-lg transition-colors duration-300">
              CONTRIBUTE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
