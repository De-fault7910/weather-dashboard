import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city); // Pass city to App
    setCity(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-l px-4 py-2 w-64 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
