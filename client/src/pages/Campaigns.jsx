import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartCampaign from "../pages/StartCampaign";

const Campaigns = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  
  const campaigns = [
    {
      title: "3-Year-Old Harsh Sharma Needs Your Help", 
      funds: "₹30,00,000", 
      days: 13, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAz2YCn0Smkq6kZSlomkWCY_MlTAZziokvg&s" 
    },
    { 
      title: "Our Family's Breadwinner Is Fighting Cancer", 
      funds: "₹20,00,000", 
      days: 14, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezhIU_vGPocO3M8a2-N5ldvNB-wvUnpKP7w&s" 
    },
    { 
      title: "Join Mayur Patil's Battle To Fight Third Stage Cancer", 
      funds: "₹28,00,000", 
      days: 14, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKULmIzS5-s1UwsdZLjJCITMdQ8OlU-u0YQ&s"
    },
    { 
      title: "Support Me, Varun Kulkarni, An Actor", 
      funds: "₹25,00,000", 
      days: 20, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2sii9YSrdBHv7EiTb9AEspPwUkBAlsbBnw&s" 
    },
    { 
      title: "Give Life To My Mother, Basanti Kalati", 
      funds: "₹9,00,000", 
      days: 20, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU5ztfJ6fdOYU3xAwyXjxb1jdY0dk5D3B5Q&s" 
    },
    { 
      title: "A Few Days Into This World And My Baby Girl Is Fighting", 
      funds: "₹25,00,000", 
      days: 7, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNNEd0GfAopgSMXCdWCS7zeu-o9UDmieU5A&s" 
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900 relative">
      {/* Sidebar Toggle Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)} 
        className="fixed left-5 top-20 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 z-20"
      >

        Start Your Own Campaign
      </button>
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-96 bg-gray-100 shadow-xl p-6 transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-30`}> 
        <button onClick={() => setShowSidebar(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">✖</button>
        <StartCampaign />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Ongoing Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <div className="h-40 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={campaign.image} alt={campaign.title} className="object-cover h-full w-full" />
                </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{campaign.title}</h4>
              <p className="text-gray-700 mb-2">Funds Required: {campaign.funds}</p>
              <p className="text-gray-700 mb-2">Campaign ends in {campaign.days} Days</p>
              <button 
                onClick={() => navigate(`/campaigns/${campaign.id}`)} 
                className="bg-[#1882f2] hover:bg-[#1665c1] text-white px-5 py-2 rounded-lg transition-colors duration-300 mb-2"
              >
                DONATE NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
