import React from "react";
import { motion } from "framer-motion";
import { Coffee, Award, Sparkles, Droplets, Sun, FlaskRound } from "lucide-react";
import coffeeCherriesImage from "../../../assets/coffee-cherries_1.png";

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const processingSteps = [
  {
    number: "01",
    title: "Harvesting",
    icon: Coffee,
    description: "Selective handpicking of ripe cherries ensures top flavor.",
    details: "Farmers use traditional methods passed through generations.",
    image: coffeeCherriesImage,
  },
  {
    number: "02",
    title: "Washing",
    icon: Droplets,
    description: "Wet processing method develops clean, bright profiles.",
    details: "Involves de-pulping, fermentation, and multiple rinses.",
    image: coffeeCherriesImage,
  },
  {
    number: "03",
    title: "Drying",
    icon: Sun,
    description: "Sun-drying preserves essential oils and aromatics.",
    details: "Beans are turned every few hours until 11% moisture.",
    image: coffeeCherriesImage,
  },
  {
    number: "04",
    title: "Quality Control",
    icon: FlaskRound,
    description: "Rigorous grading ensures premium export quality.",
    details: "Each batch undergoes cupping, defect analysis, and moisture testing.",
    image: coffeeCherriesImage,
  },
];

function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <motion.div
        className="relative z-10 w-full text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex items-center justify-center mb-6">
          <Coffee className="w-8 h-8 text-orange-500 mr-3" />
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">The Process</h2>
          <Coffee className="w-8 h-8 text-orange-500 ml-3" />
        </div>

        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          From cherry to cup, each step preserves Ethiopian coffee’s natural excellence.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {processingSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200" variants={fadeInUp}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {step.number}
                </div>
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{step.description}</p>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-400">
                <p className="text-xs text-gray-600">{step.details}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="inline-block bg-white rounded-2xl border border-gray-200 px-8 py-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Quality Guarantee</span>
          </div>
          <p className="text-gray-700 text-lg font-medium max-w-2xl">
            100% of our beans undergo this 4-step process — ensuring rich, authentic Ethiopian taste in every cup.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default ProcessSection;
