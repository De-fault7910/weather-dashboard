import React from "react";
const Loader = () => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export default Loader;