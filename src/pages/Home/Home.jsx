import React from "react";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import SourcingPreview from "./components/SourcingPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductRange from "./components/ProductRange";
import FinalCTA from "./components/FinalCTA";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutPreview />
      <SourcingPreview />
      <WhyChooseUs />
      <ProductRange />
      <FinalCTA />
    </div>
  );
};

export default Home;