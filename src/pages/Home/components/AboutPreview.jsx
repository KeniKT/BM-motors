import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const AboutPreview = () => (
  <section id="about-preview" className="py-24 bg-gradient-to-b from-[#FAF6F0] to-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Left: Image */}
        <motion.div 
          className="relative group"
          variants={fadeInLeft}
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
              alt="Ethiopian Coffee Heritage"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div variants={fadeInRight}>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-[#5C2C0C] mb-6"
            variants={fadeInUp}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Heritage
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-8"
            variants={fadeInUp}
          />
          
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-6"
            variants={fadeInUp}
          >
            At BM Coffee, we bridge tradition and innovation to bring you the finest Ethiopian coffee. Our journey began with a simple mission: to share the authentic taste of Ethiopia with the world while empowering local farmers through fair trade practices.
          </motion.p>
          
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-8"
            variants={fadeInUp}
          >
            Every bean tells a story of heritage, craftsmanship, and the rich soil of Ethiopia — the birthplace of coffee. We work directly with farming communities to ensure sustainable practices and exceptional quality at every step.
          </motion.p>
          
          <motion.a
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5C2C0C] to-[#4E342E] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutPreview;