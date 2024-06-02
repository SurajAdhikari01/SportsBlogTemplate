// src/hooks/useSearch.js
import { useState } from 'react';

const useSearch = (initialPosts) => {
  const [query, setQuery] = useState('');
  const filteredPosts = initialPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));

  return { query, setQuery, filteredPosts };
};

export default useSearch;
