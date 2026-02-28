import React from "react";

const WeatherInfo = ({ weather }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-600">
      
      <div className="flex justify-between">
        <span className="font-medium text-gray-700">Condition</span>
        <span>{weather?.weather?.[0]?.main ?? "--"}</span>
      </div>

      <div className="flex justify-between">
        <span className="font-medium text-gray-700">Feels like</span>
        <span>{weather?.main?.feels_like ?? "--"}°C</span>
      </div>

      <div className="flex justify-between">
        <span className="font-medium text-gray-700">Pressure</span>
        <span>{weather?.main?.pressure ?? "--"} hPa</span>
      </div>

    </div>
  );
};

export default WeatherInfo;