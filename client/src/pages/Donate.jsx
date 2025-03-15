import React from 'react';
import './Donate.css'; 

const campaigns = [
  {
    title: "Future for 15-Year Child",
    fundsRequired: "₹50,00,000",
    campaignEnds: "3 Days",
    peopleDonated: 140,
  },
  {
    title: "Fight Against Relapse...",
    fundsRequired: "₹45,00,000",
    campaignEnds: "17 Days",
    peopleDonated: 417,
  },
  {
    title: "3-year-old Amrita Needs Your Help...",
    fundsRequired: "₹30,00,000",
    campaignEnds: "17 Days",
    peopleDonated: 262,
  },
  {
    title: "Offer Support To Me, Om Kulkarni, An Army...",
    fundsRequired: "₹25,00,000",
    campaignEnds: "24 Days",
    peopleDonated: 929,
  },
  {
    title: "Memorial for Vindhyeshwari Prasad...",
    fundsRequired: "₹25,00,000",
    campaignEnds: "17 Days",
    peopleDonated: 200,
  }
];

const Donate = () => {
  return (
    <div className="donate-container">
      <h1>Support Our Campaigns</h1>
      <div className="campaigns">
        {campaigns.map((campaign, index) => (
          <div className="campaign-card" key={index}>
            <h2>{campaign.title}</h2>
            <p><strong>Funds Required:</strong> {campaign.fundsRequired}</p>
            <p><strong>Campaign ends in:</strong> {campaign.campaignEnds}</p>
            <div className="donation-info">
              <p>{campaign.peopleDonated} people donated</p>
              <button className="contribute-button">CONTRIBUTE</button>
            </div>
          </div>
        ))}
      </div>
      <div className="call-to-action">
        <h2>What’s better than saving one child?</h2>
        <h3>Saving 12 more!</h3>
        <button className="monthly-giving-button">Start Monthly Giving</button>
        <p>Confused about how to start a fundraiser?</p>
        <button className="start-fundraiser-button">Start a Fundraiser</button>
      </div>
    </div>
  );
};

export default Donate;
