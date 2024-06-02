// src/components/common/Categories.js
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

const Categories = () => (
  <nav className=" bg-stone-900 p-4  mb-4 rounded-lg">
    <ul className="flex space-x-10">
      {categories.map((category) => (
        <li key={category.name}>
          <Link
            to={category.path}
            className="text-yellow-400  p-4 hover:bg-red-500 hover:text-white"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Categories;
