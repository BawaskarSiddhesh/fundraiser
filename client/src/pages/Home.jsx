import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container" style={{ overflow: 'hidden', position: 'relative', height: '400px' }}>
      <Slide autoplay={true} duration={880} transitionDuration={500} infinite={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {/* Slideshow Section */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Slideshow />
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-3xl px-6 z-10 relative">
        <h1 className="text-5xl font-bold text-[#1882f2] mb-6 leading-tight">
          Empowering Ideas Through Crowdfunding
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Join a community that brings ideas to life. Fund projects, support
          innovation, and make a meaningful impact.
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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 z-10 relative">
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

      {/* Call to Action */}
      <div className="mt-16 text-center z-10 relative">
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