// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Source from "./Source";
import Contact from "./Contact";
import { motion } from "framer-motion";
import coffee1 from "../assets/coffee-cherries_1.png";
import coffee2 from "../assets/coffee-cherries_2.png";
import coffee3 from "../assets/coffee-cherries_4.png";
import coffee4 from "../assets/coffee-cherries.png";

const images = [coffee1, coffee2, coffee3, coffee4];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-y-scroll overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            BM <span className="text-orange-500">Coffee</span>
          </motion.h1>
          <motion.p
            className="mt-8 text-2xl md:text-3xl text-gray-200 max-w-3xl italic leading-relaxed drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            "Experience the finest collection of Ethiopian coffee beans, where
            tradition meets excellence"
          </motion.p>
          <motion.button
            onClick={() =>
              document
                .getElementById("source")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-10 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg shadow-xl text-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Explore Our Coffee Sources
          </motion.button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-6 w-full flex justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <span className="animate-bounce text-white text-3xl">⌄</span>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="w-full min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <About />
      </motion.section>

      {/* Source Section */}
      <motion.section
        id="source"
        className="w-full min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Source />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.section>
    </div>
  );
}
