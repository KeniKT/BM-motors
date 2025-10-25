import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const coffee1 = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop";
const coffee2 = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=1080&fit=crop";
const coffee3 = "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=1920&h=1080&fit=crop";
const coffee4 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const Hero = () => {
  const images = [coffee1, coffee2, coffee3, coffee4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <motion.section
      id="home"
      className="relative w-full h-screen overflow-hidden"
      style={{ y: heroY }}
    >
      {/* Animated Background with your images */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center text-white space-y-6 max-w-5xl">
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold tracking-tight"
            variants={fadeInUp}
            style={{
              textShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
              background: "linear-gradient(45deg, #ffffff, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BM Coffee Export
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-amber-100 font-light"
            variants={fadeInUp}
          >
            Premium Ethiopian Coffee Beans
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 w-full flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-white" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;