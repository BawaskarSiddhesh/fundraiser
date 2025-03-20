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

const featureData = [
  {
    title: "Secure Payments",
    description: "We ensure safe and secure transactions for both fundraisers and contributors.",
    imageUrl: "data:image/png;base64,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"
  },
  {
    title: "Transparent Funding",
    description: "Every contribution is tracked, ensuring full transparency in fund usage.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlt3XPVOMSHppwz-CjXVowIOFf6LWFK8g6w&s"
  },
  {
    title: "Community Driven",
    description: "Join a supportive community that believes in backing great ideas.",
    imageUrl: "data:image/jpeg;base64,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"
  },
];


const Slideshow = () => {
  return (
    <div className="slide-container" style={{ overflow: 'hidden', position: 'relative', height: '400px' }}>
      <Slide autoplay={true} duration={2000} transitionDuration={800} infinite={true}>
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
  {featureData.map((feature, index) => (
    <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col justify-between">
      <img src={feature.imageUrl} alt={feature.title} className="w-full h-auto mb-4" />
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">{feature.title}</h3>
      <p className="text-gray-700">{feature.description}</p>
    </div>
  ))}
</div>
{/* DIRECTING TOWARD DONATION DIV */}
{/* here we need to create some of the campaign cards from where they will be guided to the campagin pages */}
<div className="mt-16 px-6 z-10 relative">
  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Description 1" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Title 1</h3>
      <p className="text-gray-700">This is a description for the first section. It provides information about the topic covered in this section.</p>
    </div>
  </div>

  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80" alt="Description 2" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Title 2</h3>
      <p className="text-gray-700">This is a description for the second section. It provides information about the topic covered in this section.</p>
    </div>
  </div>

  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Description 3" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Title 3</h3>
      <p className="text-gray-700">This is a description for the third section. It provides information about the topic covered in this section.</p>
    </div>
  </div>
</div>

{/* About Section[this section should be so that when someone clicks on learn more they will get directed to this part of the page] */}
<div className="mt-16 px-6 z-10 relative">
  <h2 className="text-3xl font-bold text-[#1882f2] mb-6 text-center">About Us</h2>

  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lbnxlbnwwfHx8fDE2ODI0MjY0MjM&ixlib=rb-4.0.3&q=80&w=400" alt="Who We Are" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">Who We Are</h3>
      <p className="text-gray-700">We are a passionate team dedicated to empowering individuals and communities through crowdfunding. Our mission is to provide a platform that connects innovative ideas with the resources they need to thrive.</p>
    </div>
  </div>

  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lbnxlbnwwfHx8fDE2ODI0MjY0MjM&ixlib=rb-4.0.3&q=80&w=400" alt="What We Do" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">What We Do</h3>
      <p className="text-gray-700">We facilitate crowdfunding campaigns that help bring ideas to life. Our platform allows creators to showcase their projects and connect with supporters who believe in their vision.</p>
    </div>
  </div>

  <div className="flex mb-8">
    <div className="w-1/4">
      <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1lbnxlbnwwfHx8fDE2ODI0MjY0MjM&ixlib=rb-4.0.3&q=80&w=400" alt="Community" className="w-full h-auto rounded-l-lg" />
    </div>
    <div className="w-3/4 bg-white p-8 rounded-r-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1882f2] mb-3">What the Community Is About</h3>
      <p className="text-gray-700">Our community is built on collaboration and support. We believe in the power of collective action and strive to create an inclusive environment where everyone can contribute and benefit.</p>
    </div>
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
