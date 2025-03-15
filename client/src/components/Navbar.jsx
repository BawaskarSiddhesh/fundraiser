import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1882f2] text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">FundIt</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              Explore Projects
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-white text-[#1882f2] px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
