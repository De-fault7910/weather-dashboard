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
    <form onSubmit={submit} className="flex justify-center gap-3 w-full max-w-[95vw] mx-auto">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full max-w-sm px-5 py-2.5 rounded-full bg-white shadow-inner border outline-none"
      />

      <button
        type="submit"
        className="
          px-6 py-2.5 
          rounded-full 
          bg-blue-500 text-white 
          font-semibold 
          shadow-lg 
          hover:bg-blue-400 
          active:bg-blue-600 
          transition-colors duration-200
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;