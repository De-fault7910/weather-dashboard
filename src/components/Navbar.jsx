// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Name with link to Home */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition-colors duration-200">
            WeatherNow
          </Link>
        </h1>

        {/* About Page Link */}
        <div>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;