import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 px-8 py-4 flex justify-between items-center">
      <h2 className="font-semibold text-gray-700">Weather Dashboard</h2>

      <Link to="/about" className="text-gray-600 hover:text-gray-800 font-medium">
        About
      </Link>
    </div>
  );
};

export default Navbar;