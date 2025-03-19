import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const StartCampaign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    description: "",
    files: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Start Your Medical Fundraiser
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Share your story and get the help you need.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Required Amount ($)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Enter required amount"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Medical Condition & Story</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Describe the medical condition and need for donation"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Medical Files</label>
            <div className="relative flex items-center justify-center w-full p-3 border rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
              <input
                type="file"
                name="files"
                onChange={handleFileChange}
                multiple
                required
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center space-x-2 text-blue-500 font-medium">
                <FiUpload className="text-xl" />
                <span>Upload Files</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1882f2] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Start Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartCampaign;
