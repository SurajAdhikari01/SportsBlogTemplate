// src/pages/PostPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
