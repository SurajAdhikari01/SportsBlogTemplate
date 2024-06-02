// src/components/blog/BlogPost.js
import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ post }) => (
  <article className="relative bg-white rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-[101%] overflow-hidden">
    <div className="relative h-64">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600">{post.excerpt}</p>
      <div className="mt-4">
        <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
          Read more...
        </Link>
      </div>
    </div>
  </article>
);

export default BlogPost;
