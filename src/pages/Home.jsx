import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, MapPin, Send, Award, Globe, Users, Shield } from "lucide-react";

// Background images - replace with your actual imports
const coffee1 = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop";
const coffee2 = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=1080&fit=crop";
const coffee3 = "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=1920&h=1080&fit=crop";
const coffee4 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop";

// Animation variants
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

// ---------- Hero ----------
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

// ---------- About Preview Section ----------
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

// ---------- Sourcing Preview Section ----------
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

// ---------- Why Choose Us Section ----------
const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Grade 1 specialty coffee beans certified by Ethiopian Coffee & Tea Authority",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Certified & Traceable",
      description: "Full transparency from farm to export with comprehensive quality documentation",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Fair Trade Partner",
      description: "Direct relationships with farmers ensuring sustainable livelihoods and ethical practices",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Reliable worldwide shipping with customs expertise and flexible logistics solutions",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF6F0] to-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#5C2C0C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose BM Coffee
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for authentic Ethiopian coffee excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-[#5C2C0C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- Product Range Section ----------
const ProductRange = () => {
  const products = [
    {
      name: "Washed Arabica",
      origin: "Sidamo & Yirgacheffe",
      notes: "Floral, citrus, bright acidity",
      image: coffee1
    },
    {
      name: "Natural Process",
      origin: "Harrar & Limu",
      notes: "Berry, wine-like, full body",
      image: coffee2
    },
    {
      name: "Specialty Grade",
      origin: "Multiple Regions",
      notes: "Complex, balanced, clean",
      image: coffee3
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#5C2C0C] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Coffee Range
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our selection of premium Ethiopian coffee varieties
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#5C2C0C] mb-2">
                  {product.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {product.origin}
                </p>
                <p className="text-gray-600 text-sm italic">
                  {product.notes}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- Final CTA ----------
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

// ---------- Main Home ----------
const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutPreview />
      <SourcingPreview />
      <WhyChooseUs />
      <ProductRange />
      <FinalCTA />
    </div>
  );
};

export default Home;