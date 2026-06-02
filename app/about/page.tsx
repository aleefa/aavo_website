"use client";

import React from "react";
import { HeroSection } from "@/components/about/sections/HeroSection";
import { PhilosophySection } from "@/components/about/sections/PhilosophySection";
import { MissionSection } from "@/components/about/sections/MissionSection";
import { VisionSection } from "@/components/about/sections/VisionSection";
import { ServicesSection } from "@/components/about/sections/ServicesSection";
// import { Footer } from "@/components/about/layout/Footer";
import { FooterSection } from "@/components/landing/footer-section";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Main Sections */}
      <main>
        <HeroSection />
        <PhilosophySection />
        <MissionSection />
        <VisionSection />
        <ServicesSection />
      </main>

      {/* Footer System */}
      <FooterSection />
    </div>
  );
}

// "use client";
// export default function AboutPage() {
//     return <h1>About Page Works</h1>;
//   }