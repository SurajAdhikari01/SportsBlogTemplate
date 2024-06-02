// src/components/layouts/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen  flex flex-col">
    <Header />
    <main className="flex-grow w-full">{children}</main>
    <Footer />
  </div>
);

export default Layout;
