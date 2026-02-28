// Pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Footer from "../components/Footer.jsx";
import { fetchWeather } from "../services/weatherApi.js";

const DEFAULT_CITY = "Accra"; // Default city for initial load

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      console.error(err);
      setError("City not found!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(DEFAULT_CITY);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-800 text-white flex flex-col">
      {/* Header – sticky, semi-transparent */}
      <header className="bg-blue-900/80 backdrop-blur-md border-b border-blue-700/40 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
            WeatherNow
          </Link>

          <Link
            to="/about"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg font-medium transition-colors duration-150 shadow-sm"
          >
            About
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-10 sm:pt-16 pb-16 px-3 sm:px-6">
        {/* Search bar */}
        <div className="w-full max-w-md mb-10 sm:mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Weather / Loader / Error */}
        <div className="w-full">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader />
            </div>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : weather ? (
            <WeatherCard weather={weather} />
          ) : null}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;