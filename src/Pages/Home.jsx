import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Footer from "../components/Footer.jsx";
import { fetchWeather } from "../services/weatherApi.js";

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
    } catch {
      setError("City not found!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("Accra");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">

      <h1 className="text-2xl font-semibold text-gray-600 mt-10 mb-6">
        Main Weather Dashboard
      </h1>

      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,120,255,0.15)] overflow-hidden">

        <Navbar />

        <div className="p-8">
          <SearchBar onSearch={handleSearch} />

          <div className="mt-8 flex justify-center">
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {weather && !loading && !error && <WeatherCard weather={weather} />}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;