import React from "react";
import WeatherInfo from "./WeatherInfo.jsx";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 mt-6 text-center">
      <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
        alt={weather?.weather?.[0]?.description || "weather icon"}
        className="mx-auto"
      />
      <p className="text-lg mb-1">
        Temperature: {weather?.main?.temp ?? "--"}°C
      </p>
      <p className="text-lg mb-1">
        Humidity: {weather?.main?.humidity ?? "--"}%
      </p>
      <p className="text-lg mb-1">
        Wind: {weather?.wind?.speed ?? "--"} km/h
      </p>

      <WeatherInfo weather={weather} />
    </div>
  );
};

export default WeatherCard;