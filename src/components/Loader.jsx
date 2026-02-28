import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div role="status" className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      <p className="text-gray-600">{message}</p>
      <span className="sr-only">{message}</span>
    </div>
  );
};

export default Loader;