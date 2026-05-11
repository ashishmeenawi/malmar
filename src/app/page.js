"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import ElicyonTextSection from "@/components/ElicyonTextSection";
import ProjectSection from "@/components/ProjectSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import InsightsSection from "@/components/InsightsSection";
import ObjectsOfDesire from "@/components/ObjectsOfDesire";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    if (!isLoading) {
      // Ensure GSAP knows about the updated layout after preloader is gone
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      
      // Small delay to catch any late layout shifts
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Preloader sits on top as a fixed overlay — content is always mounted */}
      <AnimatePresence>
        {isLoading && (
          <Preloader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Site content always rendered, preloader covers it until done */}
      <div className="relative">
        <HeroSection isLoading={isLoading} />
        <ElicyonTextSection />
        <ProjectSection />
        <ServicesSection />
        <VisionSection />
        <InsightsSection />
        <ObjectsOfDesire />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
