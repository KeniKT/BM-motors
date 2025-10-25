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

const SourcingPreview = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Left: Content */}
        <motion.div variants={fadeInLeft} className="lg:order-2">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-orange-500 mb-6"
            variants={fadeInUp}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Farm to Cup
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-8"
            variants={fadeInUp}
          />
          
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-6"
            variants={fadeInUp}
          >
            Our coffee journey begins in Ethiopia's legendary regions — Sidamo and Yirgacheffe — where altitude, climate, and volcanic soil create the perfect conditions for exceptional beans. Each cherry is handpicked at peak ripeness by skilled farmers who understand the land intimately.
          </motion.p>
          
          <motion.p 
            className="text-gray-700 text-lg leading-relaxed mb-8"
            variants={fadeInUp}
          >
            Through meticulous washing, sun-drying, and rigorous quality testing in our state-of-the-art laboratory, we ensure only the finest beans reach your cup. Every batch undergoes comprehensive cupping analysis and certification before export.
          </motion.p>
          
          <motion.a
            href="/source"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="relative group lg:order-1"
          variants={fadeInRight}
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
              alt="Coffee Processing"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <motion.div
            className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SourcingPreview;