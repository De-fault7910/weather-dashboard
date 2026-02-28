// src/components/WeatherInfo.jsx
import React from "react";

const WeatherInfo = ({ weather }) => {
  // Helper to safely get nested values with fallback
  const getValue = (path, unit = "") => {
    try {
      const value = path.reduce((obj, key) => obj?.[key], weather);
      return value !== undefined ? `${value}${unit}` : "--";
    } catch {
      return "--";
    }
  };

  const details = [
    { label: "Condition", value: weather?.weather?.[0]?.main || "--" },
    { label: "Feels like", value: getValue(["main", "feels_like"], "°C") },
    { label: "Humidity", value: getValue(["main", "humidity"], "%") },
    { label: "Wind Speed", value: getValue(["wind", "speed"], " m/s") },
    { label: "Pressure", value: getValue(["main", "pressure"], " hPa") },
    // Optional extra fields:
    // { label: "Visibility", value: getValue(["visibility"], " m") },
    // { label: "Sunrise", value: getValue(["sys", "sunrise"]) },
    // { label: "Sunset", value: getValue(["sys", "sunset"]) },
  ];

  return (
    <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
      {details.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 shadow-sm hover:bg-white/15 transition-colors duration-200"
        >
          <span className="font-medium text-white/90">{item.label}</span>
          <span className="font-semibold text-white">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;