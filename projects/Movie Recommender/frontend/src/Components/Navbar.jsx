import { useState } from "react";
import { Sparkles, Moon, Sun } from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav
      className={`z-50 relative flex justify-between items-center px-6 py-4 shadow-md transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100 border-b-indigo-900 border-b-1" : "bg-gray-100 text-gray-900"
        }`}
    >
      {/* Logo */}
      <Link to="/"><div className="text-2xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">rcmndr</div>
      </Link>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-5">
        <ul className="flex items-center space-x-4">
          <li>
            <a
              href="#"
              className={`border border-indigo-500 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 inline-block ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
            >
              {<Sparkles className="inline w-4 h-4 " />} Get Recommendations
            </a>
          </li>

          <li>
            <a href="#">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200 font-semibold cursor-pointer">
                Get Started
              </button>
            </a>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-transform duration-200`}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex flex-col space-y-1 p-2 hover:bg-gray-200 rounded-md transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-indigo-600 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-indigo-600 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-indigo-600 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-17 left-0 w-full bg-gray-100 shadow-md transition-all duration-300 ${isOpen
          ? "max-h-60 p-6 opacity-100"
          : "max-h-0 p-0 opacity-0 overflow-hidden"
          } ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
          }`}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-indigo-600 border border-indigo-500 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 inline-block"
            >
              &#10022; Get Recommendations
            </a>
          </li>

        </ul>
        <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-200">
          Get Started
        </button>
        <button onClick={toggleDarkMode} className={`p-2 mt-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:scale-110 transition-transform duration-200`}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;