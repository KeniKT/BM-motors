import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Animation variants matching other pages
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
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

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-400", name: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700", name: "LinkedIn" }
  ];

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      {/* ---------- Hero ---------- */}
      <motion.section
        className="relative py-32 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />
        
        {/* Floating Background Elements */}
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
          <motion.div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-8" />
        </motion.div>
      </motion.section>

      {/* ---------- Contact Info + Form Section ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-28">
            
            {/* Contact Info - Left Side */}
            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-[#5C2C0C] mb-8"
                variants={fadeInLeft}
              >
                Get in Touch
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInLeft}
              >
                Ready to explore premium Ethiopian coffee? Whether you're looking to place an order, learn about our sourcing process, or discuss partnership opportunities, we're here to help. Our team is passionate about connecting you with the finest coffee Ethiopia has to offer.
              </motion.p>

              {/* Social Media Icons next to intro */}
              <div className="flex items-center space-x-6 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              {/* Contact Items */}
              <div className="space-y-8 mt-12">
                {[ 
                  { icon: Mail, text: "info@bmcoffee.com", label: "Email Us", description: "For inquiries and orders" },
                  { icon: Phone, text: "+251 900 000 000", label: "Call Us", description: "Monday - Friday, 9 AM - 6 PM" },
                  { icon: MapPin, text: "Addis Ababa, Ethiopia", label: "Visit Us", description: "Coffee capital headquarters" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-orange-600 uppercase tracking-wider font-bold mb-1">
                          {item.label}
                        </p>
                        <p className="text-xl font-bold text-[#5C2C0C] mb-2">
                          {item.text}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageReveal}
            >
              <motion.div 
                className="bg-white shadow-2xl rounded-3xl p-10 border-t-4 border-[#5C2C0C] relative overflow-hidden group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-extrabold text-[#5C2C0C] mb-8"
                  variants={fadeInRight}
                >
                  Send us a Message
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 mb-8 leading-relaxed"
                  variants={fadeInRight}
                >
                  Share your coffee requirements, ask questions about our sourcing process, or discuss potential partnerships. We'll get back to you within 24 hours.
                </motion.p>
                
                <motion.div className="space-y-6" variants={staggerContainer}>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-700 mb-3 font-bold text-sm uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-700 mb-3 font-bold text-sm uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="BMcoffee@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-lg"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <label className="block text-gray-700 mb-3 font-bold text-sm uppercase tracking-wider">Message</label>
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Tell us about your coffee needs, volume requirements, or any questions about our Ethiopian coffee..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none text-lg"
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="group relative w-full bg-gradient-to-r from-[#5C2C0C] to-[#4E342E] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-6 h-6 mr-3" />
                          Message Sent Successfully!
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-3" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
