// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-400/40 to-transparent pointer-events-none" />

      {/* Footer Container */}
      <div className="relative text-center py-3 sm:py-5 
        bg-blue-600/80 backdrop-blur-xl 
        border-t border-blue-500/40">

        <p className="text-sm text-white tracking-wide">
          © 2026 Weather App
        </p>
        <p className="text-xs text-white/80 mt-1">
          Data provided by OpenWeatherMap
        </p>
      </div>
    </footer>
  );
};
export default Footer;