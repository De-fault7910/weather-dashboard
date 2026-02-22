import React from "react";

const WeatherInfo = ({ weather }) => {
  return (
    <div className="mt-4 text-sm text-gray-700">
      <p>Condition: {weather?.weather?.[0]?.main ?? "--"}</p>
      <p>Feels like: {weather?.main?.feels_like ?? "--"}°C</p>
      <p>Pressure: {weather?.main?.pressure ?? "--"} hPa</p>
    </div>
  );
};

export default WeatherInfo;