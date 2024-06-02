import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`bg-black text-white p-4 `}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center w-1/2">
          <img src="/path/to/logo.png" alt="" className="h-10 mr-2" />
          <Link to="/" className="text-3xl font-bold">
            Sports Blog
          </Link>
        </div>

        <nav className="md:flex md:flex-grow space-x-4 mt-4 md:mt-0 w-1/2">
          <ul className="flex flex-grow justify-end space-x-4 ">
            <li>
              <Link to="/" className="hover:underline" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="ml-4 md:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
