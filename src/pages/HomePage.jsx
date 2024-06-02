// src/pages/HomePage.js
import React from "react";
import BlogList from "../components/blog/BlogList";
import SearchBar from "../components/common/SearchBar";
import SearchFilters from "../components/common/SearchFilters";
import Carousel from "../components/common/Carousel";
import Sidebar from "../components/common/Sidebar";

import { posts } from "../data/posts";
import useSearch from "../hooks/useSearch";

const HomePage = () => {
  const { query, setQuery, filteredPosts } = useSearch(posts);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-red-700 to-black">
      <Carousel />
      <div className="container mx-auto flex flex-col md:flex-row mt-8 px-4">
        <div className="md:w-3/4 p-6 rounded-lg shadow-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
          <SearchBar query={query} setQuery={setQuery} />
          <BlogList posts={filteredPosts} />
        </div>
        <div className="md:w-1/4 md:ml-6 mt-6 md:mt-0 p-6 bg-white rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30">
          <Sidebar />
          <SearchFilters />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
