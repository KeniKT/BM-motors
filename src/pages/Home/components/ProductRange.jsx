import React from "react";
import { motion } from "framer-motion";

const coffee1 = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop";
const coffee2 = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=1080&fit=crop";
const coffee3 = "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=1920&h=1080&fit=crop";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

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

export default ProductRange;