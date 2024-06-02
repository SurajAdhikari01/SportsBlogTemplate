// src/components/layouts/Footer.js
import React from "react";

const Footer = () => (
  <footer className="bg-black text-white p-4 text-center">
    &copy; {new Date().getFullYear()} Sports Blog. All rights reserved.
  </footer>
);

export default Footer;
