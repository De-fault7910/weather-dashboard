import React from "react";
const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4">
      <div className="text-yellow-500 text-4xl">⚠️</div>
      <p className="text-lg font-semibold text-gray-700">{message}</p>
      <p className="text-gray-500">Please try again.</p>
    </div>
  );
};

export default ErrorMessage;