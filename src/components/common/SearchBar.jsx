// src/components/common/SearchBar.js
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setQuery }) => {
  return (
    <form className="relative mb-4">
      <input
        type="text"
        className="border p-3 w-full rounded-full bg-red-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10 pr-4"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </form>
  );
};

export default SearchBar;
