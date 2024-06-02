import React, { useState } from "react";

const CategoryForm = ({ addCategory }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name,
      slug,
    };
    addCategory(newCategory);
    setName("");
    setSlug("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block mb-2">Category Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
