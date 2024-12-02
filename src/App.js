import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Sameer
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#publications" className="nav-link">
                Publications
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className="mobile-nav-link">
                  Home
                </a>
                <a href="#about" className="mobile-nav-link">
                  About
                </a>
                <a href="#skills" className="mobile-nav-link">
                  Skills
                </a>
                <a href="#projects" className="mobile-nav-link">
                  Projects
                </a>
                <a href="#experience" className="mobile-nav-link">
                  Experience
                </a>
                <a href="#publications" className="mobile-nav-link">
                  Publications
                </a>
                <a href="#contact" className="mobile-nav-link">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        <section id="publications" className="min-h-screen py-20">
          <Publications />
        </section>
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
