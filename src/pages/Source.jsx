import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlaskRound, Coffee, Droplets, Sun, MapPin, Award, Mountain, Thermometer, Sparkles } from "lucide-react";

// --- IMAGE ASSET ---
import coffeeCherriesImage from "../assets/coffee-cherries_1.png";

// --- ANIMATION VARIANTS ---
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// --- DATA STRUCTURE ---
const processingSteps = [
  {
    number: "01",
    title: "Harvesting",
    icon: Coffee,
    description: "Selective handpicking of ripe cherries at peak maturity ensures optimal flavor development and quality consistency.",
    details: "Our partner farmers use traditional methods passed down through generations, carefully selecting only the deepest red cherries.",
    image: coffeeCherriesImage,
  },
  {
    number: "02",
    title: "Washing",
    icon: Droplets,
    description: "Wet processing method removes fruit pulp and ferments beans to develop clean, bright flavor profiles.",
    details: "The washing process includes de-pulping, fermentation, and multiple rinses to achieve the signature Ethiopian clarity.",
    image: coffeeCherriesImage,
  },
  {
    number: "03",
    title: "Drying",
    icon: Sun,
    description: "Sun-drying on raised beds allows natural moisture reduction while preserving essential oils and aromatics.",
    details: "Beans are carefully turned every few hours for 1-2 weeks until reaching the optimal 11% moisture content.",
    image: coffeeCherriesImage,
  },
  {
    number: "04",
    title: "Quality Control",
    icon: FlaskRound,
    description: "Rigorous testing and grading ensures only premium beans meet our exacting standards for export.",
    details: "Each batch undergoes cupping, defect analysis, and moisture testing before receiving our quality certification.",
    image: coffeeCherriesImage,
  },
];

const originRegions = [
  {
    name: "Sidamo",
    location: "Southern Ethiopia",
    altitude: "1,400 - 2,200m",
    temperature: "15°C - 25°C",
    uniqueFeatures: [
      "Volcanic soil rich in minerals",
      "Ancient heirloom coffee varieties",
      "Shade-grown under native trees",
      "Family-owned micro-farms"
    ],
    flavorProfile: "Bright citrus acidity with floral notes, medium body with wine-like complexity",
    description: [
      "Often referred to as 'the garden of coffee,' Sidamo is a vast and fertile region in southern Ethiopia, blessed with high altitudes, ample rainfall, and rich, volcanic soil. This unique combination of environmental factors creates a perfect microclimate for producing some of the world's most diverse and nuanced coffees.",
      "The region is home to ancient heirloom varieties that have evolved naturally over centuries, creating unique flavor profiles that cannot be replicated elsewhere. These indigenous cultivars, combined with traditional farming methods, produce beans with exceptional complexity and character.",
      "Sidamo's coffee culture runs deep, with cultivation methods passed down through generations. The sustainable practices employed by local farmers not only preserve the environment but also maintain the authentic flavors that make Sidamo coffee truly distinctive."
    ],
    image: coffeeCherriesImage,
  },
  {
    name: "Yirgacheffe",
    location: "Gedeo Zone, SNNPR",
    altitude: "1,700 - 2,100m",
    temperature: "18°C - 22°C",
    uniqueFeatures: [
      "Birthplace of coffee legend",
      "Intense floral aromatics",
      "Washed processing perfection",
      "UNESCO heritage recognition"
    ],
    flavorProfile: "Intensely floral with jasmine and bergamot, tea-like body with exceptional clarity",
    description: [
      "Nestled within the larger Sidamo region lies Yirgacheffe, a small but legendary micro-region with a reputation that looms large in the world of specialty coffee. Often considered the very birthplace of coffee, its high elevations and ideal climate conditions produce beans that are exceptionally dense and packed with flavor.",
      "What sets Yirgacheffe apart is its unmistakable aromatic profile. The region is renowned for producing coffees with intense floral bouquets, featuring notes of jasmine, honeysuckle, and orange blossom. This is complemented by a vibrant, clean acidity and a silky, almost weightless mouthfeel.",
      "The meticulous washed processing method perfected in Yirgacheffe allows the coffee's intrinsic, delicate flavors to shine without interference. For coffee enthusiasts seeking the pinnacle of aromatic complexity and clean, bright flavors, Yirgacheffe remains an undisputed benchmark of excellence."
    ],
    image: coffeeCherriesImage,
  },
];

function Source() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      {/* ---------- Hero ---------- */}
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
            Our <span className="text-orange-400">Sourcing</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl italic text-amber-100 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            "From Ethiopia's rich highlands to your cup — discover the journey of our beans."
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ---------- The Origins ---------- */}
      <section className="py-20 bg-gradient-to-br from-[#FAF6F0] via-[#F8F4EE] to-[#F5F1EB] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl" />
        </div>

        <motion.div 
          className="relative z-10 w-full text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div className="flex items-center justify-center mb-6" variants={fadeInUp}>
            <Sparkles className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#5C2C0C]">
              The Origins
            </h2>
            <Sparkles className="w-8 h-8 text-orange-500 ml-3" />
          </motion.div>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          {/* Enhanced Introduction */}
          <motion.div 
            className="max-w-6xl mx-auto px-8 md:px-16 mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative bg-gradient-to-r from-white via-orange-50/50 to-white rounded-3xl shadow-xl p-10 md:p-16 border border-orange-200/30 backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="text-3xl font-bold text-orange-500">2</div>
                  <div className="text-sm text-gray-600 font-medium">Premium Regions</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="text-3xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Tradition</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Heirloom Varieties</div>
                </motion.div>
              </div>

              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center"
                variants={fadeInUp}
              >
                Ethiopia is often celebrated as the <span className="font-semibold text-[#5C2C0C] bg-orange-100 px-2 py-1 rounded">birthplace of coffee</span>, and its landscapes carry centuries of tradition in every harvest. The country's diverse climates and high-altitude regions provide ideal conditions for cultivating beans with extraordinary complexity.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center"
                variants={fadeInUp}
              >
                Each region tells a different story through its flavors — from <span className="italic text-orange-600 font-medium">bright citrus to deep floral notes</span>. These coffees are not just agricultural products but living expressions of culture, history, and community.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed text-center"
                variants={fadeInUp}
              >
                To explore Ethiopian coffee is to embark on a <span className="font-semibold text-[#5C2C0C] bg-gradient-to-r from-orange-100 to-amber-100 px-2 py-1 rounded">journey through its land, people, and timeless heritage</span>.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Region Cards */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {originRegions.map((region, index) => (
            <motion.div
              key={index}
              className="mb-24 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image Section */}
                <motion.div
                  className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                  variants={imageReveal}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group mb-6">
                    <motion.img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Region Name Overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{region.name}</h3>
                      <div className="flex items-center text-amber-200">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{region.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Paragraph under image */}
                  <motion.div 
                    className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-400"
                    variants={fadeInUp}
                  >
                    <p className="text-gray-700 leading-relaxed italic">
                      {region.description[region.description.length - 1]}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  variants={staggerContainer}
                >
                  <motion.h3
                    className="text-4xl md:text-5xl font-extrabold text-[#5C2C0C] mb-6"
                    variants={fadeInUp}
                  >
                    {region.name}
                  </motion.h3>

                  {/* Key Stats */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    variants={fadeInUp}
                  >
                    <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-orange-400">
                      <div className="flex items-center mb-2">
                        <Mountain className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-600">Altitude</span>
                      </div>
                      <p className="text-lg font-bold text-[#5C2C0C]">{region.altitude}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                      <div className="flex items-center mb-2">
                        <Thermometer className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-600">Temperature</span>
                      </div>
                      <p className="text-lg font-bold text-[#5C2C0C]">{region.temperature}</p>
                    </div>
                  </motion.div>

                  {/* Flavor Profile */}
                  <motion.div 
                    className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8 border border-orange-200"
                    variants={fadeInUp}
                  >
                    <div className="flex items-center mb-3">
                      <Coffee className="w-5 h-5 text-orange-500 mr-2" />
                      <span className="font-semibold text-[#5C2C0C]">Flavor Profile</span>
                    </div>
                    <p className="text-gray-700 italic">{region.flavorProfile}</p>
                  </motion.div>

                  {/* Unique Features */}
                  <motion.div 
                    className="mb-8"
                    variants={fadeInUp}
                  >
                    <h4 className="font-semibold text-[#5C2C0C] mb-4 flex items-center">
                      <Award className="w-5 h-5 text-orange-500 mr-2" />
                      What Makes It Special
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {region.uniqueFeatures.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          className="flex items-center bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                          variants={fadeInUp}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Description (first two paragraphs) */}
                  <motion.div 
                    className="space-y-4"
                    variants={staggerContainer}
                  >
                    {region.description.slice(0, -1).map((paragraph, pIndex) => (
                      <motion.p
                        key={pIndex}
                        className="text-gray-700 leading-relaxed"
                        variants={fadeInUp}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- The Process ---------- */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #f97316 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #f59e0b 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, #f97316 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <motion.div 
          className="relative z-10 w-full text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div className="flex items-center justify-center mb-6" variants={fadeInUp}>
            <Coffee className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">
              The Process
            </h2>
            <Coffee className="w-8 h-8 text-orange-500 ml-3" />
          </motion.div>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Enhanced Process Introduction */}
          <motion.div 
            className="max-w-4xl mx-auto px-6 mb-16"
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-full p-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-4">
                From cherry to cup, every step is carefully orchestrated to preserve the unique character of Ethiopian coffee
              </p>
              <p className="text-lg text-gray-600 text-center">
                Our 4-step process ensures <span className="font-semibold text-orange-600">exceptional quality</span> and <span className="font-semibold text-orange-600">authentic flavors</span> in every batch
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Simplified Process Steps */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {processingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Simple Card Design */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-400">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Simple Arrow Connector */}
                  {index < processingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2 z-10">
                      <div className="w-0 h-0 border-l-6 border-l-orange-400 border-t-3 border-t-transparent border-b-3 border-b-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quality Assurance Summary */}
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block bg-white rounded-2xl border border-gray-200 px-8 py-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-orange-500 mr-3" />
                <span className="text-2xl font-bold text-gray-800">Quality Guarantee</span>
              </div>
              <p className="text-gray-700 text-lg font-medium max-w-2xl">
                <span className="text-orange-500 font-bold">100%</span> of our coffee beans undergo this rigorous 4-step process, 
                ensuring that every cup delivers the exceptional taste and aroma you expect from our premium Ethiopian coffee.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Source;
