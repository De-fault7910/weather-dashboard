import React from "react";

const Footer = () => {
  return (
    <div className="relative">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent pointer-events-none" />

      {/* Footer Container */}
      <div className="relative text-center py-5 
        bg-white/40 backdrop-blur-xl 
        border-t border-white/40">

        <p className="text-sm text-gray-600 tracking-wide">
          © 2026 Weather App
        </p>
      </div>
    </div>
  );
};

export default Footer;