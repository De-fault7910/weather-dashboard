// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    onSearch(trimmedCity);
    setCity('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-6 px-4"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Input on the left */}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city"
          aria-label="City name"
          autoComplete="off"
          spellCheck="false"
          className={`
            flex-1
            min-w-0
            px-5 py-3.5
            text-base
            rounded-full
            bg-white/15 backdrop-blur-lg
            border border-white/30
            text-white placeholder:text-white/60
            shadow-inner
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
            transition-all duration-200
          `}
        />

        {/* Button completely on the right, outside the input */}
        <button
          type="submit"
          disabled={!city.trim()}
          className={`
            px-6 py-3.5
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            disabled:bg-blue-600/50 disabled:cursor-not-allowed
            text-white font-medium
            rounded-full
            shadow-md hover:shadow-lg
            transition-all duration-200
            whitespace-nowrap
            flex items-center justify-center
            min-w-[100px]
          `}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;