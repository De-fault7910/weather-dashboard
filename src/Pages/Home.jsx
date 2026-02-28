// Pages/Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Footer from "../components/Footer.jsx";
import { fetchWeather } from "../services/weatherApi.js";

const DEFAULT_CITY = "Accra";

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
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-800 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-10 sm:pt-16 pb-16 w-full">

        {/* Search bar */}
        <div className="w-full sm:max-w-3xl px-4 sm:px-6 mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Weather / Loader / Error */}
        <div className="w-full px-4 sm:px-6 flex flex-col items-center gap-8">

          {loading && (
            <div className="py-12">
              <Loader />
            </div>
          )}

          {error && (
            <div className="py-12 w-full sm:max-w-3xl">
              <ErrorMessage message={error} />
            </div>
          )}

          {weather && (
            <div className="w-full sm:max-w-5xl">
              <WeatherCard weather={weather} />
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;