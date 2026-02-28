// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-5 sm:px-8 py-4 max-w-full">
        {/* App Name */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          <Link to="/" className="hover:text-gray-200 transition-colors duration-200">
            WeatherNow
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg font-medium transition-colors duration-150 shadow-sm"
          >
            About
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;