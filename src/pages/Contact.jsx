// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

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

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Contact <span className="text-orange-400">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            "Have questions or want to connect? We'd love to hear from you."
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>
      </motion.section>

      {/* ---------- Contact Info + Form Section ---------- */}
      <section className="w-screen bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#5C2C0C] mb-12">
                Get in Touch
              </h2>
              
              {/* Contact Items */}
              <div className="space-y-8">
                {[
                  { icon: Mail, text: "info@bmcoffee.com", label: "Email" },
                  { icon: Phone, text: "+251 900 000 000", label: "Phone" },
                  { icon: MapPin, text: "Addis Ababa, Ethiopia", label: "Location" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-6 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#5C2C0C] to-[#4E342E] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="w-8 h-8 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        {item.label}
                      </p>
                      <p className="text-xl font-semibold text-[#5C2C0C]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5C2C0C]">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 ml-20">
                  <p className="text-lg text-gray-700"><span className="font-semibold">Mon – Fri:</span> 9:00 AM – 6:00 PM</p>
                  <p className="text-lg text-gray-700"><span className="font-semibold">Sat:</span> 10:00 AM – 3:00 PM</p>
                  <p className="text-lg text-gray-700"><span className="font-semibold">Sun:</span> Closed</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div 
                className="bg-white shadow-2xl rounded-2xl p-10 border-t-4 border-[#5C2C0C]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-[#5C2C0C] mb-8">
                  Send us a Message
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C2C0C] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C2C0C] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      placeholder="Tell us about your coffee needs or questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C2C0C] focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="group relative w-full bg-gradient-to-r from-[#5C2C0C] to-[#4E342E] text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Map Section ---------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C2C0C] via-[#4E342E] to-[#3E2723]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Visit Our Location
          </motion.h2>
          
          <motion.div
            className="bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-lg"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-orange-300">
              BM Coffee Headquarters
            </h3>
            <p className="text-amber-100 text-xl mb-6">
              Located in the heart of Ethiopia's coffee capital
            </p>
            <div className="text-lg text-amber-100">
              <p className="mb-2">📍 Addis Ababa, Ethiopia</p>
              <p className="mb-2">🕒 Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>📞 +251 900 000 000</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;