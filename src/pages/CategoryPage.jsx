// src/pages/CategoryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import { posts } from "../data/posts";
import { categories } from "../data/categories";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryPosts = posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
  const categoryData = categories.find(
    (cat) => cat.path.split("/").pop() === category
  );
  const categoryName = categoryData?.name;
  const categoryImage = categoryData?.image || "path/to/default/image.jpg"; // Placeholder image

  return (
    <div>
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${categoryImage})` }}
      ></div>
      <div className="container mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-bold mb-4 text-blue-600 border-b-4 border-blue-600 inline-block pb-2">
            {categoryName} Posts
          </h2>
          {categoryPosts.length > 0 ? (
            <BlogList posts={categoryPosts} />
          ) : (
            <p className="text-gray-500">
              No posts available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
