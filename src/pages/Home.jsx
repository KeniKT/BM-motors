// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "./About";
import Source from "./Source";
import Contact from "./Contact";
import coffee1 from "../assets/coffee-cherries_1.png";
import coffee2 from "../assets/coffee-cherries_2.png";
import coffee3 from "../assets/coffee-cherries_4.png";
import coffee4 from "../assets/coffee-cherries.png";

const images = [coffee1, coffee2, coffee3, coffee4];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll();

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const heroY = useTransform(springScrollProgress, [0, 1], ["0%", "50%"]);
  const heroScale = useTransform(springScrollProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(springScrollProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-screen min-h-screen overflow-x-hidden scroll-smooth"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform origin-left z-50"
        style={{ scaleX: springScrollProgress }}
      />

      {/* Hero Section */}
      <section
        className="relative w-screen h-screen overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                opacity: index === currentImage ? 1 : 0,
              }}
              initial={{ scale: 1.2 }}
              animate={{
                scale: index === currentImage ? 1 : 1.2,
                opacity: index === currentImage ? 1 : 0,
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
          style={{ opacity: heroOpacity }}
        />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl"
            style={{
              textShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
              background: "linear-gradient(45deg, #ffffff, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BM <span className="text-orange-400">Coffee</span>
          </h1>

          <p className="mt-8 text-2xl md:text-4xl text-gray-100 max-w-4xl italic leading-relaxed drop-shadow-lg font-light">
            Experience the finest collection of Ethiopian coffee beans,
            <br />
            <span className="text-orange-300 font-medium">
              where tradition meets excellence
            </span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-6" />

          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group relative mt-12 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-12 py-6 rounded-full shadow-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25"
          >
            <span className="relative z-10">Discover Our Story</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-screen min-h-screen relative overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="relative z-10 w-full h-full">
          <About />
        </div>
      </section>

      {/* Source Section */}
      <section
        id="source"
        className="w-screen min-h-screen relative overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900" />
        <div className="relative z-10 w-full h-full">
          <Source />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-screen min-h-screen relative overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900" />
        <div className="relative z-10 w-full h-full">
          <Contact />
        </div>
      </section>

      {/* Back to Top */}
      <button
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
