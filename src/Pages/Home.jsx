// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { fetchWeather } from "../services/weatherApi.js";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch default city on load
  useEffect(() => {
    setLoading(true);
    fetchWeather("Accra")
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => setError("Failed to fetch weather."))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (city) => {
    setLoading(true);
    fetchWeather(city)
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => {
        if (err.message.includes("404")) setError("City not found.");
        else setError("Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard weather={weather} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;