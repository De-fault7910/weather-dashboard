import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import { fetchWeather } from "./services/weatherApi.js";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
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
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch default city weather on load
  useEffect(() => {
    handleSearch("Accra");
  }, []);

  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;