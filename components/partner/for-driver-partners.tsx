"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Wallet, MapPin, Shield } from "lucide-react";
import { GooglePlay } from "./icons/google-play";
import { AppStore } from "./icons/app-store";

interface KeyPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const keyPoints: KeyPoint[] = [
  {
    title: "High Earnings",
    description: "Earn up to 30% more per KM.",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    title: "Intercity Trips",
    description: "Stable long-distance routes.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Safe & Secure",
    description: "24/7 road assistance & support.",
    icon: <Shield className="w-6 h-6" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const phoneVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.1 },
  },
};

export const ForDriverPartners = () => {
  return (
      <section className="w-full overflow-hidden flex justify-center items-center py-0 -mt-8 md:-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Driver Partner Value Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 leading-none"
            >
              For Driver Partners
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              // className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.15] tracking-tight mt-6 mb-6 font-sans"
              className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-[1.15] tracking-tight mt-6 mb-6 font-sans"
            > 
              Become an Intercity <br className="hidden sm:inline" />
              <span className="text-primary">Cab Driver Partner</span>
            </motion.h2>

            {/* Paragraph Description */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
            >
              Join AAVORide as a driver partner and earn more with intercity and
              outstation cab trips, flexible timings, secure payouts, and 24/7
              support.
            </motion.p>

            {/* Key Features Row */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col md:flex-row items-center gap-8 w-full mb-12"
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex flex-col max-w-[200px] w-full sm:max-w-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-colors duration-300 shrink-0 mt-1 group-hover:bg-primary">
                    <div className="transition-colors duration-300 group-hover:text-white">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mt-2 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 leading-normal">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* App Store / Google Play Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.aavoridepartner"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-950 hover:bg-neutral-900 text-white rounded-full px-6 py-3 flex items-center gap-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md w-full sm:w-auto justify-center"
              >
                <GooglePlay className="w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-neutral-400">
                    Get it on
                  </span>
                  <span className="text-sm font-bold text-white mt-1">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store Button */}
              <div
                className="bg-neutral-950 text-white rounded-full px-6 py-3 flex items-center gap-3.5 shadow-md w-full sm:w-auto justify-center cursor-default opacity-80"
              >
                <AppStore className="w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-neutral-400">
                    Download on the
                  </span>
                  <span className="text-sm font-bold text-white mt-1">
                    App Store
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Mobile App Screenshot Display */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center w-full -mt-8 lg:mt-0">
            {/* Subtle glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              variants={phoneVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full flex justify-center lg:justify-end items-center lg:translate-x-16"
            >
              <Image
                src="/phone2.png"
                alt="AAVORide Partner Mobile App Showcase"
                  width={650}
                  height={950}
                priority
                // className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                className="relative z-10 w-[120%] max-w-none h-auto object-contain drop-shadow-2xl motion-phone-primary"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
