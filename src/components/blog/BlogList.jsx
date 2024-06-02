// src/components/blog/BlogList.js
import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} />
    ))}
  </div>
);

export default BlogList;
