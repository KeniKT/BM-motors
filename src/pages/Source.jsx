import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlaskRound, Coffee, Droplets, Sun } from "lucide-react";

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
    number: "01.",
    title: "Harvesting",
    icon: Coffee,
    description: [
      "The journey of our exceptional coffee begins in the verdant highlands of Ethiopia, where coffee trees are laden with deep-red, ripe cherries. Our partner farmers, equipped with generations of ancestral knowledge, meticulously handpick each cherry at its absolute peak of ripeness. This highly selective process, known as selective harvesting, is the cornerstone of quality, ensuring that only the beans with the fullest flavor potential are chosen.",
      "Unlike mass-market methods, this labor-intensive approach guarantees that under-ripe or over-ripe cherries are left behind. This initial act of precision prevents undesirable flavors from entering the supply chain and sets a high standard from the very start. It is a testament to a deep respect for the coffee plant and a commitment to an extraordinary final product.",
      "This careful selection is more than just a step in a process; it's a promise. A promise that every bean has been individually assessed and deemed worthy of the complex journey ahead. It is this foundational dedication that allows the unique, nuanced flavors of Ethiopian heirloom varieties to truly shine in every cup.",
    ],
    image: coffeeCherriesImage,
  },
  {
    number: "02.",
    title: "Washing",
    icon: Droplets,
    description: [
      "Immediately after harvesting, the fresh cherries are transported to local washing stations. Here, they are submerged in clean water to begin the 'wet processing' method. This technique involves using a de-pulping machine to gently remove the outer skin and most of the fruity mucilage from the coffee bean, a critical step for producing coffees known for their clarity and bright acidity.",
      "Once de-pulped, the beans are guided through long channels of flowing water. This not only cleanses them further but also acts as a natural method of quality control. Denser, higher-quality beans sink to the bottom, while any lighter, defective beans float to the surface and are skillfully skimmed away. This gravity-based sorting ensures that only the most robust beans proceed to the next stage.",
      "The final part of the washing process involves a period of fermentation in clean water tanks for 12 to 48 hours. This controlled fermentation breaks down any remaining mucilage, polishing the bean and enhancing its aromatic complexity. The result is a pristine green coffee bean, free of impurities and primed to develop a clean, crisp, and vibrant flavor profile.",
    ],
    image: coffeeCherriesImage,
  },
  {
    number: "03.",
    title: "Drying",
    icon: Sun,
    description: [
      "After fermentation, the washed beans are carefully laid out on raised African drying beds. These beds, which look like large mesh tables, are essential for promoting even airflow around each bean. This method prevents the risk of mold or off-flavors developing, which can occur when beans are dried directly on the ground. The beans are spread in a thin layer to maximize their exposure to the sun and breeze.",
      "For the next one to two weeks, the beans embark on a slow and gentle sun-drying journey. During this time, farmers and station workers meticulously rake and turn the beans by hand every few hours. This constant motion is crucial for ensuring that all beans dry at a uniform rate, reducing their moisture content from around 45% down to the stable target of 11%.",
      "This patient, natural drying process is vital for locking in the coffee's inherent sweetness and complex flavors. Rushing this stage with mechanical dryers can compromise the bean's cellular structure and diminish its quality. By honoring this traditional, sun-powered method, we ensure the coffee retains its full aromatic potential and develops a rich, well-rounded character.",
    ],
    image: coffeeCherriesImage,
  },
];

const originRegions = [
  {
    name: "Sidamo",
    description: [
      "Often referred to as 'the garden of coffee,' Sidamo is a vast and fertile region in southern Ethiopia, blessed with high altitudes, ample rainfall, and rich, volcanic soil. This unique combination of environmental factors, known as terroir, creates a perfect microclimate for producing some of the world's most diverse and nuanced coffees. The region is a mosaic of small, family-owned farms where coffee is grown organically under the shade of native trees.",
      "The flavor profile of Sidamo coffee is famously complex and elegant. Connoisseurs celebrate these beans for their bright, crisp acidity and a delicate, often tea-like body. The aroma is intensely floral, with common tasting notes including lemon, lime, bergamot, and a medley of sweet stone fruits like peach and apricot. This bright, citrusy character makes Sidamo a benchmark for high-quality washed Ethiopian coffees.",
      "Growing coffee in Sidamo is more than agriculture; it's a cultural heritage. The methods used have been passed down through countless generations, and the coffee trees themselves are often ancient, heirloom varieties that are unique to the region. By sourcing from Sidamo, we not only acquire exceptional coffee but also support a sustainable ecosystem and a proud, long-standing tradition of coffee cultivation.",
    ],
    image: coffeeCherriesImage,
  },
  {
    name: "Yirgacheffe",
    description: [
      "Nestled within the larger Sidamo region lies Yirgacheffe, a small but legendary micro-region with a reputation that looms large in the world of specialty coffee. Often considered the very birthplace of coffee, its high elevations and ideal climate conditions produce beans that are exceptionally dense and packed with flavor. Yirgacheffe is not just a place; it's a standard of excellence.",
      "What sets Yirgacheffe coffee apart is its unmistakable and powerful aromatic profile. It is renowned for an intensely floral bouquet, with fragrant notes of jasmine, honeysuckle, and orange blossom that are immediately recognizable. This is complemented by a vibrant, clean acidity and a silky, almost weightless mouthfeel. The result is a coffee experience that is both exhilarating and profoundly elegant.",
      "The meticulous processing in Yirgacheffe is key to its world-class status. The region perfected the washed processing method, which allows the coffee's intrinsic, delicate flavors to shine without interference from the fruit. For coffee lovers seeking the pinnacle of aromatic complexity and clean, bright flavors, Yirgacheffe remains an undisputed and essential touchstone.",
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
      <section className="py-20 bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB]">
        <motion.div 
          className="w-full text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#5C2C0C] mb-4">
            The Origins
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* SIMPLIFIED PROFESSIONAL INTRO */}
          <motion.div 
            className="max-w-5xl mx-auto px-8 md:px-16 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-orange-500"
              variants={fadeInUp}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Ethiopia is often celebrated as the <span className="font-semibold text-[#5C2C0C]">birthplace of coffee</span>, and its landscapes carry centuries of tradition in every harvest. The country's diverse climates and high-altitude regions provide ideal conditions for cultivating beans with extraordinary complexity.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Each region tells a different story through its flavors — from <span className="italic text-orange-600">bright citrus to deep floral notes</span>. These coffees are not just agricultural products but living expressions of culture, history, and community.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                To explore Ethiopian coffee is to embark on a <span className="font-semibold text-[#5C2C0C]">journey through its land, people, and timeless heritage</span>.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB]">
          {originRegions.map((region, index) => (
            <section
              key={index}
              className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 py-20 px-6"
            >
              <motion.div
                className={`w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative group ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageReveal}
              >
                <motion.img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C2C0C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                className={`flex flex-col justify-center ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={staggerContainer}
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-extrabold text-[#5C2C0C] mb-8"
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                >
                  {region.name}
                </motion.h3>
                
                <div className="space-y-6">
                  {region.description.map((paragraph, pIndex) => (
                    <motion.div
                      key={pIndex}
                      className="relative pl-6 border-l-4 border-orange-400/30"
                      variants={fadeInUp}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </section>

      {/* ---------- The Process ---------- */}
      <section className="py-20 bg-white">
        <motion.div 
          className="w-full text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-4">
            The Process
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* SIMPLIFIED PROFESSIONAL INTRO */}
          <motion.div 
            className="max-w-5xl mx-auto px-8 md:px-16 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-orange-500"
              variants={fadeInUp}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Every exceptional cup of coffee begins long before it reaches your mug, in the <span className="font-semibold text-orange-600">careful hands of farmers</span> who tend each tree with dedication. From the moment cherries are harvested at peak ripeness, they embark on a journey of precision: <span className="italic text-orange-600">washing, fermenting, drying, and milling</span> — each step meticulously designed to preserve flavor and quality.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                This process transforms vibrant cherries into green coffee beans that capture the essence of their origin. By honoring <span className="font-semibold text-[#5C2C0C]">traditional methods</span> and combining them with modern quality standards, every stage ensures the beans' full potential is unlocked.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The result is a <span className="font-semibold text-orange-600">consistent, high-quality coffee</span> that carries the story of its journey from farm to cup.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="bg-white">
          {processingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <section
                key={index}
                className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 py-20 px-6"
              >
                <motion.div
                  className={`w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative group ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={imageReveal}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="absolute top-6 right-6 bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center gap-2"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  >
                    <span className="text-3xl font-extrabold text-orange-600">{step.number.replace('.', '')}</span>
                    <Icon className="w-6 h-6 text-orange-500" />
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </motion.div>
                
                <motion.div
                  className={`flex flex-col justify-center ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="flex items-center gap-4 mb-8"
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
                      {step.title}
                    </h2>
                  </motion.div>
                  
                  <div className="space-y-6">
                    {step.description.map((paragraph, pIndex) => (
                      <motion.div
                        key={pIndex}
                        className="relative pl-6 border-l-4 border-orange-400/30"
                        variants={fadeInUp}
                      >
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            );
          })}
        </div>
      </section>

      {/* ---------- Lab & Quality Testing ---------- */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#5C2C0C]" />
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-300/10 blur-2xl"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 80 - 40, 0],
                x: [0, Math.random() * 80 - 40, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: Math.random() * 12 + 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <motion.div
              className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-amber-300/30 mb-8 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              variants={scaleIn}
            >
              <FlaskRound className="w-16 h-16 text-amber-300" />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-8 text-orange-300"
              variants={fadeInUp}
            >
              Final Quality Control
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.p
              className="text-xl leading-relaxed max-w-4xl mx-auto text-amber-100"
              variants={fadeInUp}
            >
              Our state-of-the-art quality control laboratory employs rigorous testing protocols and certified experts to ensure every batch meets our exceptional standards. Through comprehensive cupping analysis, moisture testing, and sensory evaluation, we guarantee that only the finest coffee reaches your cup.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "Cupping Laboratory",
                icon: FlaskRound,
                step: "Step 1",
                description: "Our certified Q-graders conduct systematic cupping sessions to evaluate aroma, flavor, acidity, body, and aftertaste. Each sample is scored using standardized protocols to ensure consistency and quality across all batches."
              },
              {
                title: "Moisture Analysis",
                icon: Droplets,
                step: "Step 2",
                description: "Advanced moisture meters ensure optimal bean moisture content between 10-12%. This critical measurement prevents mold growth, preserves flavor compounds, and guarantees proper storage stability throughout the supply chain."
              },
              {
                title: "Defect Screening",
                icon: Coffee,
                step: "Step 3",
                description: "Meticulous visual inspection removes broken beans, foreign matter, and discolored samples. Our trained specialists identify primary and secondary defects, ensuring only premium-grade beans advance to final packaging stages."
              },
              {
                title: "Final Certification",
                icon: Sun,
                step: "Step 4",
                description: "Each approved batch receives comprehensive documentation including origin certificates, quality scores, and traceability records. This final step ensures complete transparency and maintains our commitment to excellence."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              const colors = ["amber", "cyan", "emerald", "violet"];
              const color = colors[index];
              
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
                    <div className={`w-full h-full bg-gradient-to-br from-${color}-200 to-${color}-300 flex items-center justify-center`}>
                      <Icon className="w-16 h-16 text-white/80" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * (index + 1) }}
                    >
                      <span className={`text-sm font-bold text-${color}-600`}>{item.step}</span>
                    </motion.div>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-amber-200 mb-3"
                    variants={fadeInUp}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-amber-100/80 text-sm leading-relaxed"
                    variants={fadeInUp}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block bg-white/5 backdrop-blur-md rounded-3xl border border-amber-300/20 px-8 py-6 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-amber-100 text-lg font-medium">
                <span className="text-orange-300 font-bold">100%</span> of our coffee beans undergo this rigorous 4-step quality control process, 
                ensuring that every cup delivers the exceptional taste and aroma you expect from our premium Ethiopian coffee.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Source;