import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-500" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-400" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-500" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" }
  ];

  const contactInfo = [
    { icon: Mail, text: "BMcoffee@gmail.com", label: "Email Us", description: "For inquiries and orders" },
    { icon: Phone, text: "+251 900 000 000", label: "Call Us", description: "Monday - Friday, 9 AM - 6 PM" },
    { icon: MapPin, text: "Addis Ababa, Ethiopia", label: "Visit Us", description: "Coffee capital headquarters" }
  ];

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero */}
      <motion.section
        className="relative py-32 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E] via-[#6D4C41] to-[#8D6E63]" />
        
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
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 md:gap-20">
            
            {/* Contact Info - Left Side */}
            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-[#5C2C0C] mb-6"
                variants={fadeInLeft}
              >
                Get in Touch
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                variants={fadeInLeft}
              >
                Ready to explore premium Ethiopian coffee? Whether you're looking to place an order, learn about our sourcing process, or discuss partnership opportunities, we're here to help.
              </motion.p>

              {/* Social Media Icons */}
              <motion.div 
                className="flex items-center gap-3 mb-12"
                variants={fadeInLeft}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-xl transition-all text-gray-700 hover:text-white ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Items - Enhanced */}
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                  >
                    <motion.div
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all relative overflow-hidden"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Hover gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-bold text-[#5C2C0C] mb-1">
                          {item.text}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>

                      {/* Decorative element */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form - Brown Box */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-[#5C2C0C] via-[#4E342E] to-[#5C2C0C] shadow-2xl rounded-3xl p-8 md:p-10 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Elements */}
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)',
                  }}
                />

                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-orange-300/20 blur-2xl"
                      style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 50 - 25, 0],
                        y: [0, Math.random() * 50 - 25, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-orange-300 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Send us a Message
                  </motion.h2>
                  
                  <motion.p 
                    className="text-amber-100 mb-8 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    We'll respond within 24 hours.
                  </motion.p>
                  
                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-amber-200 mb-2 font-semibold text-sm">Full Name</label>
                      <motion.input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-amber-200 mb-2 font-semibold text-sm">Email Address</label>
                      <motion.input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-amber-200 mb-2 font-semibold text-sm">Message</label>
                      <motion.textarea
                        rows="4"
                        name="message"
                        placeholder="Tell us about your coffee needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                    
                    <motion.button
                      type="button"
                      onClick={handleSubmit}
                      className="relative w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-bold shadow-xl overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.03, boxShadow: "0 25px 35px -5px rgba(251, 146, 60, 0.6)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.span 
                        className="relative z-10 flex items-center justify-center"
                        animate={isSubmitted ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
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
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;