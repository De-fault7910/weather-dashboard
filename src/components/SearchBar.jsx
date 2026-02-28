import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={submit} className="flex justify-center gap-3">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full max-w-md px-6 py-3 rounded-full bg-white shadow-inner border outline-none"
      />

      <button
        type="submit"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;