// src/pages/About.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

// 🔹 Sample images
const slides = [
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=350&fit=crop",
];

// 🔹 Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      {/* ---------- Hero ---------- */}
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
            “Experience the finest Ethiopian coffee beans — where tradition meets
            excellence.”
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ---------- Journey Carousel ---------- */}
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

      {/* ---------- Mission / Vision / Values ---------- */}
      <section className="py-24 bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#5C2C0C] text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-5xl font-extrabold mb-16 text-center text-orange-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mission, Vision & Values
          </motion.h2>

          <div className="space-y-16">
            {/* Mission */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="md:w-1/3 text-6xl">🎯</div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-4 text-orange-200">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed text-amber-100">
                  We aim to share the authentic taste of Ethiopian coffee with
                  the world. Every bean we export not only tells a story of
                  heritage and craftsmanship but also empowers local farmers by
                  providing fair trade, sustainable opportunities, and global
                  recognition for their hard work.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-10"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="md:w-1/3 text-6xl">🌍</div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-4 text-orange-200">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed text-amber-100">
                  To lead as a global ambassador of Ethiopian coffee while
                  preserving the culture, traditions, and values tied to our
                  beans. Our vision is a world where every sip of coffee
                  connects people back to the rich soil of Ethiopia.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="md:w-1/3 text-6xl">✨</div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-4 text-orange-200">
                  Our Values
                </h3>
                <p className="text-lg leading-relaxed text-amber-100">
                  Integrity, sustainability, and innovation guide every step we
                  take. From eco-friendly farming practices to introducing
                  cutting-edge roasting methods, we remain committed to
                  protecting both our environment and our customers’ trust.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Our Founders ---------- */}
<section className="py-24 bg-[#FAF6F0]">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      className="text-5xl font-extrabold mb-16 text-[#5C2C0C] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Meet Our Founders
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Abebe Mekonnen",
          role: "Co-Founder & CEO",
          img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop",
          bio: "Abebe has spent over 20 years building bridges between Ethiopian farmers and the global coffee market.",
        },
        {
          name: "Marta Bekele",
          role: "Co-Founder & COO",
          img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
          bio: "Marta oversees sourcing and operations, guaranteeing each bean meets the highest standards.",
        },
        {
          name: "Daniel Tadesse",
          role: "Head of Quality",
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
          bio: "Daniel ensures every batch passes rigorous quality control with his expertise in coffee grading.",
        },
        {
          name: "Sara Alemayehu",
          role: "Export Manager",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
          bio: "Sara manages global partnerships and logistics, connecting our coffee with markets worldwide.",
        },
      ].map((founder, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
        >
          <img
            src={founder.img}
            alt={founder.name}
            className="w-full aspect-square rounded-2xl mx-auto mb-4 object-cover shadow-lg"
          />
          <h3 className="text-xl font-bold text-[#5C2C0C] text-center">
            {founder.name}
          </h3>
          <p className="italic text-orange-600 mb-3 text-center text-sm">{founder.role}</p>
          <p className="text-gray-700 text-sm text-center">{founder.bio}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default About;
