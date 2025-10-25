import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function HeroSection({ heroY, heroOpacity }) {
  return (
    <motion.section
      className="relative py-32 overflow-hidden"
      style={{ y: heroY, opacity: heroOpacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold mb-8"
          style={{
            textShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
            background: "linear-gradient(45deg, #ffffff, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About <span className="text-orange-400">BM Coffee</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto"
        >
          "Experience the finest Ethiopian coffee beans — where tradition meets
          excellence."
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;