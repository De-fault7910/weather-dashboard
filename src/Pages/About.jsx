// src/Pages/About.jsx
import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col
      bg-gradient-to-br from-indigo-600 via-purple-500/40 to-pink-300/20
      relative text-white overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Floating Cloud Blur Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-white/10 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-16 sm:pt-24 pb-16 px-4 sm:px-6 w-full relative z-10">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 drop-shadow-xl 
          bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-200 animate-text">
          About This App
        </h1>

        {/* Glass Card Container */}
        <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/30 hover:scale-105 transition-transform duration-300">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6">
            This is a modern <span className="font-bold text-pink-300">weather application</span> that provides 
            <span className="text-yellow-300 font-semibold"> current weather updates</span> for cities around the world.
          </p>

          <p className="text-white/70 text-base sm:text-lg italic">
            Enter a city name to get the latest <span className="text-cyan-200 font-medium">weather conditions</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <span className="px-3 py-1 rounded-full bg-pink-400/30 text-white font-semibold text-sm hover:bg-pink-500 transition-colors">Modern UI</span>
            <span className="px-3 py-1 rounded-full bg-purple-400/30 text-white font-semibold text-sm hover:bg-purple-500 transition-colors">React + Vite</span>
            <span className="px-3 py-1 rounded-full bg-indigo-400/30 text-white font-semibold text-sm hover:bg-indigo-500 transition-colors">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full bg-cyan-400/30 text-white font-semibold text-sm hover:bg-cyan-500 transition-colors">Responsive</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;