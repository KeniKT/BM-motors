// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import logo from "../assets/logo_transparent.png"; // ✅ Ensure correct path

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#2C2416] to-[#1A1410] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        
        {/* Top Section: Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start mb-10 text-center sm:text-left">
          
          {/* Get In Touch */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-3 text-amber-400">
              Get In Touch
            </h3>
            <p className="text-gray-300">Bole Airport road to Imperial, InFront of MKC</p>
            <p className="text-gray-300">+251 90 000 0000</p>
            <p className="text-gray-300">+251 90 000 0000</p>
            <p className="text-amber-300">BMcoffee@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/source"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Single Origin Coffee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-[#4E342E] rounded-full p-2 shadow-lg border-4 border-amber-500 flex items-center justify-center mb-3">
              <img
                src={logo}
                alt="BM Coffee Export Logo"
                className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem] object-contain rounded-full"
              />
            </div>
            <h2 className="text-amber-400 font-bold text-lg sm:text-xl tracking-wide">
              BM Coffee Export
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Premium Ethiopian Coffee Exporter
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
            <h3 className="text-xl font-bold mb-3 text-amber-400">Follow Us</h3>
            <div className="flex justify-center sm:justify-end space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3E2723] hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3E2723] hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3E2723] hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-amber-900/30 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BM Coffee Export. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
