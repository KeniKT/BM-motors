import React from "react";
import { motion } from "framer-motion";

// 🔹 Mock Swiper for auto-scrolling carousel
const Swiper = ({ children, className, ...props }) => (
  <div className={`flex overflow-hidden ${className}`} {...props}>
    <motion.div
      className="flex"
      animate={{ x: [0, -2000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {children}
      {children} {/* Duplicate for seamless loop */}
    </motion.div>
  </div>
);

const SwiperSlide = ({ children, className }) => (
  <div className={`flex-shrink-0 ${className}`}>{children}</div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// 🔹 Sample images
const slides = [
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=350&fit=crop",
];

function JourneySection() {
  return (
    <section className="w-screen bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB] py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#5C2C0C] mb-4">
          Our Coffee Journey
        </h2>
        <p className="text-lg text-gray-600">
          From bean to cup — witness the craft behind every blend.
        </p>
      </motion.div>

      <Swiper className="w-full">
        {slides.map((image, idx) => (
          <SwiperSlide key={idx} className="px-3" style={{ width: "350px" }}>
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image}
                alt={`Step ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#5C2C0C] mb-2">
                  Step {idx + 1}
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover the meticulous process behind our premium beans.
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default JourneySection;