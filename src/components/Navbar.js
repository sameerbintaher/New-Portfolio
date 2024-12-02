import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 dark:text-white"
            >
              Md Obaidullah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/experience" className="nav-link">
              Experience
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/publications" className="nav-link">
              Publications
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/skills" className="mobile-nav-link" onClick={closeMenu}>
            Skills
          </Link>
          <Link
            to="/experience"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link to="/projects" className="mobile-nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link
            to="/publications"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Publications
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
