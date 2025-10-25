import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

function ContactInfo() {
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

      {/* Contact Items */}
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
  );
}

export default ContactInfo;