// src/components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const city = weather.name || "Unknown";
  const temp = Math.round(weather.main?.temp ?? 0);
  const feelsLike = Math.round(weather.main?.feels_like ?? 0);
  const condition = weather.weather?.[0]?.main ?? "--";
  const description = weather.weather?.[0]?.description ?? "";
  const iconCode = weather.weather?.[0]?.icon;
  const humidity = weather.main?.humidity ?? "--";
  const windSpeed = weather.wind?.speed ?? "--";
  const pressure = weather.main?.pressure ?? "--";

  return (
    <div className="w-full min-h-[100vh] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden text-white mx-auto rounded-2xl transition-all duration-300 hover:shadow-3xl">
      
      {/* Main Weather Info */}
      <div className="p-6 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{city}</h2>
        <p className="text-lg sm:text-2xl capitalize opacity-90 mb-5">{description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {iconCode ? (
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
              alt={description}
              className="w-28 h-28 sm:w-40 sm:h-40 drop-shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 sm:w-40 sm:h-40 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white/70">N/A</span>
            </div>
          )}

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-7xl sm:text-8xl font-light tracking-tighter">{temp}°</p>
            <p className="text-2xl sm:text-3xl font-medium opacity-90">{condition}</p>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="px-6 sm:px-12 pb-6 sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 border-t border-white/10 pt-6">
        <div className="text-center">
          <p className="text-sm sm:text-base opacity-70">Feels like</p>
          <p className="text-xl sm:text-2xl font-semibold">{feelsLike}°</p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base opacity-70">Humidity</p>
          <p className="text-xl sm:text-2xl font-semibold">{humidity}%</p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base opacity-70">Wind</p>
          <p className="text-xl sm:text-2xl font-semibold">{windSpeed} m/s</p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base opacity-70">Pressure</p>
          <p className="text-xl sm:text-2xl font-semibold">{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;