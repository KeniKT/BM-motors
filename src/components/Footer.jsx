import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#2C2416] to-[#1A1410] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Get In Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>Bole Airport road to Imperial, InFront of MKC</p>
              <p>+251 90 000 0000</p>
              <p>+251 90 000 0000</p>
              <p className="text-amber-300">BMcoffee@gmail.com</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-amber-300 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/source" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Single origin coffee
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-amber-300 transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Follow Us</h3>
            <div className="flex space-x-4">
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

        {/* Copyright */}
        <div className="border-t border-amber-900/30 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 BM Coffee Exporter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;