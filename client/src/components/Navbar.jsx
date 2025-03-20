import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate()
  return (
    <nav className=" text-black bg-transparent py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">HealFund</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/Campaigns" className="hover:underline">
              Campaigns
            </a>
          </li>
          
          <li>
            <a href="/profile" className="hover:underline">
              Profile
            </a>
          </li>
        </ul>
        <button onClick={() => (navigate('/sisu'))} className="bg-white text-[#1882f2] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
