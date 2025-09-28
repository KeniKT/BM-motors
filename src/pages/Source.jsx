// src/pages/Source.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Droplets, Sun, FlaskRound } from "lucide-react";

// Mock Swiper for auto-scrolling carousel (no external dependency)
const Swiper = ({ children, className, ...props }) => (
  <div className={`flex overflow-hidden ${className}`} {...props}>
    <motion.div
      className="flex"
      animate={{ x: [0, -2000] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {children}
      {children} {/* Duplicate for seamless infinite loop */}
    </motion.div>
  </div>
);

const SwiperSlide = ({ children, className }) => (
  <div className={`flex-shrink-0 ${className}`}>{children}</div>
);

// Sample images (replace with real assets later)
const imgFarm = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=320&fit=crop";
const imgLab = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop";
const imgMap = "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=600&h=400&fit=crop";

// Animation variants matching About page
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
};

function Source() {
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
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />

        {/* Floating Coffee Glow Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-300/10 blur-xl"
              style={{
                width: `${Math.random() * 120 + 40}px`,
                height: `${Math.random() * 120 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white"
          variants={stagger}
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
            Our <span className="text-orange-400">Sourcing</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            "From Ethiopia's rich highlands to your cup — discover the journey of our beans."
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>
      </motion.section>

      {/* ---------- Coffee Origins Map ---------- */}
      <section className="w-screen bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.img
              src={imgMap}
              alt="Coffee Origins Map"
              className="rounded-2xl shadow-xl w-full object-cover"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#5C2C0C] mb-6">
              Ethiopian Coffee Origins
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ethiopia is the birthplace of coffee, with regions like Sidamo,
              Yirgacheffe, and Harrar producing beans renowned for their unique
              flavors and aromas. Each region contributes a distinct profile,
              shaped by altitude, climate, and heritage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We source directly from farmers across these regions, ensuring
              authenticity and sustainability in every batch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Pre-Processing Steps ---------- */}
      <section className="w-screen bg-white py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C2C0C] mb-4">
            Pre-Processing Journey
          </h2>
          <p className="text-lg text-gray-600">
            From cherry to bean — every step matters in crafting quality coffee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: Coffee,
              title: "Harvesting",
              description: "Handpicked cherries selected at peak ripeness for the best quality.",
              isDark: false
            },
            {
              icon: Droplets,
              title: "Washing",
              description: "Cherries are carefully washed to remove impurities and prepare for drying.",
              isDark: true
            },
            {
              icon: Sun,
              title: "Drying",
              description: "Beans are sun-dried on raised beds, enhancing flavor complexity.",
              isDark: false
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`${
                step.isDark 
                  ? "bg-[#3C1B02]/70 text-white" 
                  : "bg-white border-t-4 border-[#964304]"
              } p-6 rounded-2xl shadow-xl`}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon 
                  className={`w-10 h-10 ${
                    step.isDark ? "text-amber-300" : "text-[#964304]"
                  } mb-4 mx-auto`} 
                />
              </motion.div>
              <h3 className={`text-xl font-bold mb-2 ${
                step.isDark ? "text-white" : "text-[#5C2C0C]"
              }`}>
                {step.title}
              </h3>
              <p className={step.isDark ? "text-gray-200" : "text-gray-600"}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Lab & Quality Testing ---------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C2C0C] via-[#4E342E] to-[#3E2723]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <FlaskRound className="w-16 h-16 text-amber-300 mb-8 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-300">
              Lab & Quality Testing
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-amber-100">
              Every batch undergoes strict quality control and cupping tests in
              our labs. Our experts ensure consistency, aroma, and flavor standards
              that represent the best of Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Farming Area Showcase ---------- */}
      <section className="w-screen bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB] py-20">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C2C0C] mb-4">
            Farming Area Showcase
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse into the regions and farms where our story begins.
          </p>
        </motion.div>

        <Swiper className="w-full">
          {Array(7).fill(imgFarm).map((img, idx) => (
            <SwiperSlide key={idx} className="px-3" style={{ width: "350px" }}>
              <motion.div
                className="border-2 border-[#5A2802] rounded-2xl overflow-hidden shadow-xl bg-white"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={img}
                  alt={`Farm Area ${idx + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-[#964304] mb-2">
                    Farm Area {idx + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Premium Ethiopian Region {idx + 1}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Source;