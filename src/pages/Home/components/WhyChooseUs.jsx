import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Users, Shield } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

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

export default WhyChooseUs;