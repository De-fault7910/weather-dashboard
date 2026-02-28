// components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-[95vw] mx-auto">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="
          w-full 
          flex-1
          px-4 py-3 
          rounded-full 
          bg-white/90 
          text-gray-800 
          shadow-inner 
          border border-white/20 
          outline-none 
          focus:ring-2 focus:ring-blue-400 focus:ring-opacity-70
          transition
        "
      />

      <button
        type="submit"
        className="
          px-6 py-3 
          rounded-full 
          bg-blue-600 
          text-white 
          font-semibold 
          shadow 
          hover:bg-blue-700 
          active:bg-blue-800 
          transition
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;