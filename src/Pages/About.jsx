import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col
      bg-gradient-to-br from-blue-600 via-blue-400/30 to-white/20
      relative text-white">

      {/* Navbar */}
      <Navbar />

      {/* Floating Cloud Blur Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-white/10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-16 sm:pt-24 pb-16 px-4 sm:px-6 w-full relative z-10">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 drop-shadow-lg text-white">
          About This App
        </h1>

        {/* Glass Card Container */}
        <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/30">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6">
            This is a modern weather application that provides <strong>current weather updates</strong> for cities around the world.
          </p>

          <p className="text-white/70 text-base sm:text-lg italic">
            Enter a city name to get the latest weather conditions.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;