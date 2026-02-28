// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-5 sm:px-8 py-4 max-w-full">
        
        {/* App Name with subtle hover effect */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200 hover:scale-105 transform"
          >
            WeatherNow
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link
            to="/about"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 active:bg-blue-700 rounded-full font-semibold text-white shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;