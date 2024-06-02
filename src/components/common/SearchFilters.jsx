// src/components/common/SearchFilters.js
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

const SearchFilters = () => (
  <div className=" p-4 mb-4 border-t-2 border-b-2 border-gray-950">
    <h2 className="text-xl  font-bold mb-2">Categories</h2>
    <ul>
      {categories.map((category) => (
        <li key={category.name} className="mb-1">
          <Link
            to={`/category/${category.slug}`}
            className="text-blue-300 hover:underline"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SearchFilters;
