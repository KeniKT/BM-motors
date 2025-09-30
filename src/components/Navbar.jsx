import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#3E2723] backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            MB
          </div>
          <span className="text-white font-bold text-xl tracking-wide">MB Coffee Export</span>
        </div>

        {/* Right side: Links then Social */}
        <div className="flex items-center space-x-12 text-white font-medium">
          {/* Links */}
          <ul className="flex space-x-8 items-center">
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

          {/* Social Media Icons */}
          <div className="flex space-x-4 pl-8 border-l border-amber-700/50">
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
      </div>
    </nav>
  );
};

export default Navbar;