import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

function HeroSection({ heroY, heroOpacity }) {
  return (
    <motion.section
      className="relative py-32 overflow-hidden"
      style={{ y: heroY, opacity: heroOpacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-300/10 blur-xl"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-8"
          variants={fadeInUp}
          style={{
            textShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
            background: "linear-gradient(45deg, #ffffff, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact <span className="text-orange-400">Us</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          Connect with us and discover the perfect coffee partnership.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;