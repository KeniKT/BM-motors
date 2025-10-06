// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo_transparent.png"; // ✅ Ensure correct path

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723] backdrop-blur-sm z-50 shadow-lg h-[5rem] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8">

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

        {/* Center: Navigation Links */}
        <ul className="flex items-center space-x-10 text-white font-medium">
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

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4 text-white border-l border-amber-700/50 pl-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
