import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const FinalCTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />
    
    {/* Animated background orbs */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amber-300/10 blur-2xl"
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
      className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-serif mb-8"
        variants={fadeInUp}
        style={{ 
          fontFamily: "'Playfair Display', serif",
          textShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
        }}
      >
        Ready to Experience Ethiopian Excellence?
      </motion.h2>
      
      <motion.p 
        className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto font-light"
        variants={fadeInUp}
      >
        Connect with us today to discuss your coffee needs, place an order, or explore partnership opportunities
      </motion.p>
      
      <motion.a
        href="/contact"
        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#5C2C0C] rounded-xl font-bold text-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
        variants={fadeInUp}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us Now
        <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  </section>
);

export default FinalCTA;