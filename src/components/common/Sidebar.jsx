// src/components/common/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data/posts";

const Sidebar = () => {
  const latestPosts = posts.slice(-5); // Assuming last 5 posts are the latest

  return (
    <aside className="  p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-300 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
