import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
          MB
        </div>
        <span className="text-white font-bold text-lg">MB Coffee Export</span>
      </div>

      {/* Links */}
      <ul className="flex space-x-8 text-white font-medium items-center">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/source"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`
            }
          >
            Source
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`
            }
          >
            Contact
          </NavLink>
        </li>

        {/* Social Media Icons */}
        <li className="flex space-x-4 ml-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <Linkedin size={20} />
          </a>
        </li>
      </ul>

      {/* Extra mini-navbar style (from your snippet) */}
      <div className="hidden">
        <nav className="bg-[#5C2C0C] text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">BM Coffee</h1>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link to="/" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/source" className="hover:text-amber-300">
                  Source
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300">
                  Contact
                </Link>
              </li>
              {/* Social Media Mini Links */}
              <li className="flex space-x-4 ml-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition"
                >
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
}
