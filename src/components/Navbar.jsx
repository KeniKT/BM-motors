// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";
import logo from "../assets/logo_transparent.png"; // ✅ Ensure correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723] backdrop-blur-sm z-50 shadow-lg">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 h-[5rem]">
        
        {/* Left Side: Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#4E342E] rounded-full p-1.5 shadow-xl border-2 border-amber-500 flex items-center justify-center">
            <img
              src={logo}
              alt="BM Coffee Export Logo"
              className="w-[4rem] h-[4rem] object-contain rounded-full"
            />
          </div>
          <span className="text-white font-bold text-xl tracking-wide">
            BM Coffee Export
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-10 text-white font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-semibold transition-colors"
                  : "hover:text-amber-300 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-semibold transition-colors"
                  : "hover:text-amber-300 transition-colors"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/source"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-semibold transition-colors"
                  : "hover:text-amber-300 transition-colors"
              }
            >
              Sourcing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-semibold transition-colors"
                  : "hover:text-amber-300 transition-colors"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-white border-l border-amber-700/50 pl-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#4E342E] text-white py-6 flex flex-col items-center space-y-5 shadow-lg">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-amber-400 font-semibold"
                : "hover:text-amber-300 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-amber-400 font-semibold"
                : "hover:text-amber-300 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/source"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-amber-400 font-semibold"
                : "hover:text-amber-300 transition-colors"
            }
          >
            Sourcing
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-amber-400 font-semibold"
                : "hover:text-amber-300 transition-colors"
            }
          >
            Contact
          </NavLink>

          {/* Mobile Social Icons */}
          <div className="flex space-x-5 pt-3 border-t border-amber-700/40 mt-3 pt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
