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
    <form onSubmit={submit} className="flex justify-center gap-2">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full max-w-[250px] px-3 py-2 rounded-full bg-white shadow-inner border outline-none"
      />

      <button
        type="submit"
        className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;