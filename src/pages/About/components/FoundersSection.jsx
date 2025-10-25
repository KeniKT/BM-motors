import React from "react";
import { motion } from "framer-motion";

function FoundersSection() {
  const founders = [
    {
      name: "Abebe Mekonnen",
      role: "Co-Founder & CEO",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop",
      bio: "Abebe has spent over 20 years building bridges between Ethiopian farmers and the global coffee market.",
    },
    {
      name: "Marta Bekele",
      role: "Co-Founder & COO",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      bio: "Marta oversees sourcing and operations, guaranteeing each bean meets the highest standards.",
    },
    {
      name: "Daniel Tadesse",
      role: "Head of Quality",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Daniel ensures every batch passes rigorous quality control with his expertise in coffee grading.",
    },
    {
      name: "Sara Alemayehu",
      role: "Export Manager",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Sara manages global partnerships and logistics, connecting our coffee with markets worldwide.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-[#5C2C0C] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Founders
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full aspect-square rounded-2xl mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-[#5C2C0C] text-center">
                {founder.name}
              </h3>
              <p className="italic text-orange-600 mb-3 text-center text-sm">{founder.role}</p>
              <p className="text-gray-700 text-sm text-center">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoundersSection;