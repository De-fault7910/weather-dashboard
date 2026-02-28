import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#eef4ff] to-[#f6f9ff]">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">
        About Page
      </h1>

      {/* Main Glass Container */}
      <div className="w-full max-w-4xl bg-white/50 backdrop-blur-2xl rounded-[28px] 
        shadow-[0_25px_70px_rgba(0,120,255,0.18)] overflow-hidden border border-white/40">

        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="p-10 flex justify-center">
          <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-[22px] 
            shadow-[0_20px_50px_rgba(0,120,255,0.15)] p-10 border border-white/50">

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About This App
            </h2>

            <div className="h-[1px] w-full bg-gray-200 mb-6"></div>

            <p className="text-gray-700 leading-relaxed text-base">
              This is a simple weather application that provides current weather updates for cities around the world.
            </p>

            <p className="mt-4 italic text-gray-600">
              Enter a city name to get the latest weather conditions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;