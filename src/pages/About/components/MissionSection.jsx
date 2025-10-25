import React from "react";
import { motion } from "framer-motion";

function MissionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#5C2C0C] text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center text-orange-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mission, Vision & Values
        </motion.h2>

        <div className="space-y-16">
          {/* Mission */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-1/3 text-6xl">🎯</div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-orange-200">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-amber-100">
                We aim to share the authentic taste of Ethiopian coffee with
                the world. Every bean we export not only tells a story of
                heritage and craftsmanship but also empowers local farmers by
                providing fair trade, sustainable opportunities, and global
                recognition for their hard work.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-1/3 text-6xl">🌍</div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-orange-200">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-amber-100">
                To lead as a global ambassador of Ethiopian coffee while
                preserving the culture, traditions, and values tied to our
                beans. Our vision is a world where every sip of coffee
                connects people back to the rich soil of Ethiopia.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-1/3 text-6xl">✨</div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-orange-200">
                Our Values
              </h3>
              <p className="text-lg leading-relaxed text-amber-100">
                Integrity, sustainability, and innovation guide every step we
                take. From eco-friendly farming practices to introducing
                cutting-edge roasting methods, we remain committed to
                protecting both our environment and our customers' trust.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;