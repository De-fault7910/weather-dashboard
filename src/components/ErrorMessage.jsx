import React from "react";

const ErrorMessage = ({ message = "Something went wrong", retry }) => (
  <div role="alert" className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center gap-3">
    <div className="text-yellow-500 text-4xl sm:text-5xl" aria-hidden="true">⚠️</div>
    <p className="text-lg font-semibold text-gray-700">{message}</p>
    <p className="text-gray-500">Please try again.</p>
    {retry && (
      <button
        onClick={retry}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Retry
      </button>
    )}
  </div>
);
export default ErrorMessage;