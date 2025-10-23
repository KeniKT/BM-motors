import React from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import OriginSection from "./components/OriginSection";
import ProcessSection from "./components/ProcessSection";

function Source() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      <HeroSection heroY={heroY} heroOpacity={heroOpacity} />
      <OriginSection />
      <ProcessSection />
    </div>
  );
}

export default Source;
