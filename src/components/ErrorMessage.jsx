import React from "react";

const ErrorMessage = ({ message = "Something went wrong" }) => {
  return (
    <div
      role="alert"
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3"
    >
      <div className="text-yellow-500 text-5xl" aria-hidden="true">
        ⚠️
      </div>
      <p className="text-lg font-semibold text-gray-700">{message}</p>
      <p className="text-gray-500">Please try again.</p>
    </div>
  );
};

export default ErrorMessage;