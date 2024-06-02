// src/components/blog/RelatedPosts.js
import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data/posts";

const RelatedPosts = ({ currentPost }) => {
  // Dummy logic: Assuming related posts are posts from the same category
  const relatedPosts = posts.filter(
    (post) =>
      post.category === currentPost.category && post.id !== currentPost.id
  );

  if (relatedPosts.length === 0) return null;

  return (
    <div className="bg-white shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Related Posts</h2>
      <ul>
        {relatedPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
