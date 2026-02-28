import React from "react";
const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_15px_40px_rgba(0,120,255,0.2)] p-8 w-full max-w-md">

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {weather.name}
      </h2>

      <div className="flex items-center gap-6">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          className="w-24 h-24"
        />

        <div>
          <p className="text-4xl font-bold text-gray-800">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="text-lg text-gray-600">
            {weather.weather[0].main}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-gray-700">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;