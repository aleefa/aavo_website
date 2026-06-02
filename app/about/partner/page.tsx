import { AavoRidePartners } from "@/components/partner/aavo-ride-partners";
import { Cta } from "@/components/partner/cta";
import { Faqs } from "@/components/partner/faqs";
import { FooterSection } from "@/components/landing/footer-section";
import { ForDriverPartners } from "@/components/partner/for-driver-partners";
import { Hero } from "@/components/partner/hero";
import { OurMission } from "@/components/partner/our-mission";
import { StartJourney } from "@/components/partner/start-journey";
// import { Footer } from "@/components/about/layout/Footer";
import React from "react";


const Page = () => {
  return (
    <div className="overflow-hidden relative bg-background">
      <div className="absolute top-[900px] right-[-292px] size-[570px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-30 hidden lg:block" />
      <Hero />
      <AavoRidePartners />
      <ForDriverPartners />
      <StartJourney />
      <OurMission />
      <Cta />
      <Faqs />
      <FooterSection />
    </div>
  );
};

export default Page;
