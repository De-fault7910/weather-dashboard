// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-lg mb-2">
          Weather Dashboard is a React application built with Vite and styled using Tailwind CSS.
        </p>
        <p className="text-lg mb-2">
          It fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly dashboard.
        </p>
        <p className="text-lg">
          Features include search by city, loading states, error handling, responsive design, and mobile optimization.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;