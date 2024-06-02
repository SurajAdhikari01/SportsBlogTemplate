// src/pages/AdminAuth.js
import React, { useState } from "react";

const AdminAuth = ({ setAuthenticated }) => {
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log("handleLogin");
    e.preventDefault();
    if (password === "adminpassword") {
      setAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
