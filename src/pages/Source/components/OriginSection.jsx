import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mountain, Thermometer, Coffee, Star } from "lucide-react";
import coffeeCherries from "../../../assets/coffee-cherries_1.png";

const coffeeOrigins = [
  {
    name: "Sidamo",
    location: "Southern Ethiopia",
    altitude: "1,400 - 2,200m",
    temperature: "15°C - 25°C",
    flavor:
      "Bright citrus acidity with floral notes, medium body with wine-like complexity",
    image: coffeeCherries,
    description:
      "Sidamo’s coffee culture runs deep, with cultivation methods passed down through generations. The sustainable practices employed by local farmers not only preserve the environment but also maintain the authentic flavors that make Sidamo coffee truly distinctive.",
    details:
      "Often referred to as ‘the garden of coffee,’ Sidamo is a vast and fertile region in southern Ethiopia, blessed with high altitudes, ample rainfall, and rich, volcanic soil. This unique combination of environmental factors creates a perfect microclimate for producing some of the world’s most diverse and nuanced coffees.",
    highlights: [
      "Volcanic soil rich in minerals",
      "Ancient heirloom coffee varieties",
      "Shade-grown under native trees",
      "Family-owned micro-farms",
    ],
  },
  {
    name: "Yirgacheffe",
    location: "Southern Ethiopia",
    altitude: "1,700 - 2,200m",
    temperature: "16°C - 24°C",
    flavor:
      "Delicate floral and tea-like notes with hints of citrus and jasmine",
    image: coffeeCherries,
    description:
      "Yirgacheffe coffee is renowned for its clean, aromatic profile and exceptional cup clarity. Grown at high elevations, it benefits from cool temperatures and fertile soil that produce a cup unlike any other in the world.",
    details:
      "Known as the birthplace of washed coffee in Ethiopia, Yirgacheffe’s meticulous processing and traditional handpicking result in coffees with bright acidity, light body, and vibrant flavor complexity that appeals to coffee enthusiasts globally.",
    highlights: [
      "High-elevation washed processing",
      "Distinct floral and tea-like aroma",
      "Sustainably cultivated by smallholder farmers",
      "Ideal rainfall and temperature balance",
    ],
  },
  {
    name: "Jimma",
    location: "Western Ethiopia",
    altitude: "1,400 - 2,000m",
    temperature: "17°C - 26°C",
    flavor:
      "Rich, full-bodied with notes of dark chocolate, spice, and sweet fruit",
    image: coffeeCherries,
    description:
      "Jimma’s coffee embodies Ethiopia’s heritage with a strong, traditional flavor profile. Its natural processing method preserves the bean’s full flavor, resulting in a cup that’s both bold and deeply aromatic.",
    details:
      "Located in the fertile western highlands, Jimma’s coffee farms produce beans known for their balance of sweetness and depth. The region’s lush forests and natural drying methods contribute to its characteristic richness and complexity.",
    highlights: [
      "Natural (dry) processing methods",
      "Rich and complex flavor profile",
      "Abundant rainfall and forest cover",
      "Tradition of organic cultivation",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

function OriginSection() {
  return (
    <section className="w-full bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="flex flex-col gap-24 sm:gap-28 md:gap-32">
        {coffeeOrigins.map((origin, index) => (
          <motion.div
            key={origin.name}
            className={`flex flex-col lg:flex-row items-start gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* IMAGE SECTION */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={origin.image}
                  alt={origin.name}
                  className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-3xl"
                />

                {/* Name + Location Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent py-5 px-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                    {origin.name}
                  </h3>
                  <p className="flex items-center text-sm mt-1 text-gray-200">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    {origin.location}
                  </p>
                </div>
              </motion.div>

              {/* SEPARATE Paragraph Under the Image */}
              <motion.div
                className="mt-6 bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-amber-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {origin.details}
                </p>
              </motion.div>
            </div>

            {/* INFO SECTION */}
            <motion.div
              className="w-full lg:w-1/2 bg-white/80 backdrop-blur-md p-5 sm:p-7 md:p-8 rounded-2xl shadow-lg border border-amber-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-900 border-b border-orange-200 pb-3">
                {origin.name}
              </h3>

              {/* Altitude + Temperature */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100 w-full sm:w-[48%]">
                  <Mountain className="text-orange-500 w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500">Altitude</p>
                    <p className="font-semibold text-sm">{origin.altitude}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-100 w-full sm:w-[48%]">
                  <Thermometer className="text-blue-500 w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500">Temperature</p>
                    <p className="font-semibold text-sm">{origin.temperature}</p>
                  </div>
                </div>
              </div>

              {/* Flavor Profile */}
              <div className="bg-orange-50 p-4 mt-5 rounded-xl border border-orange-200">
                <p className="flex items-center font-semibold text-orange-800 mb-2">
                  <Coffee className="w-5 h-5 mr-2 text-orange-600" /> Flavor Profile
                </p>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  {origin.flavor}
                </p>
              </div>

              {/* Highlights */}
              <div className="mt-5">
                <p className="flex items-center font-semibold text-orange-800 mb-3">
                  <Star className="w-5 h-5 mr-2 text-orange-600" /> What Makes It
                  Special
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {origin.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 p-3 rounded-xl text-gray-700 text-sm flex items-center gap-2 hover:border-orange-300 hover:shadow-md transition"
                    >
                      <span className="text-orange-500">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 bg-white p-4 rounded-xl shadow-sm border-l-4 border-orange-400 text-gray-700 text-sm leading-relaxed">
                {origin.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OriginSection;
