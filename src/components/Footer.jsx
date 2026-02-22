// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-center sm:text-left">
          &copy; 2026 Weather Dashboard. All rights reserved.
        </p>
        <p className="text-center sm:text-right text-sm">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;