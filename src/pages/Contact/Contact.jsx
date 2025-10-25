import React from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

function Contact() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      <HeroSection heroY={heroY} heroOpacity={heroOpacity} />
      
      <section className="py-20 bg-gradient-to-r from-[#FAF6F0] to-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 md:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;