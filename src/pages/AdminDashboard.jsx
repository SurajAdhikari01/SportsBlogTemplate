import React, { useState } from "react";
import { posts } from "../data/posts";
import { categories } from "../data/categories";
import PostForm from "../components/common/PostForm";
import CategoryForm from "../components/common/CategoryForm";

const AdminDashboard = () => {
  const [postList, setPostList] = useState(posts);
  const [categoryList, setCategoryList] = useState(categories);

  const addPost = (newPost) => {
    setPostList([...postList, newPost]);
  };

  const addCategory = (newCategory) => {
    setCategoryList([...categoryList, newCategory]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
        <PostForm addPost={addPost} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
        <CategoryForm addCategory={addCategory} />
      </div>
    </div>
  );
};

export default AdminDashboard;
