import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Name */}
        <h1 className="text-2xl font-bold">WeatherNow</h1>

        {/* Optional About Link */}
        <div>
          <a
            href="#about"
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
