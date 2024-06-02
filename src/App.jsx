import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Categories from "./components/common/Categories";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />

          {/* Define routes inside <Routes> */}
          <Route
            path="/admin"
            element={<AdminAuth setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
            authenticated={authenticated}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
