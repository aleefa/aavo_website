"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { UserPlus, FileUp, ShieldCheck, Car } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: 1,
    title: "Register",
    description: "Quick sign-up with basic details",
    icon: <UserPlus className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Upload Docs",
    description: "Submit KYC & vehicle papers",
    icon: <FileUp className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Get Verified",
    description: "Fast 24h background verification",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    number: 4,
    title: "Start Driving",
    description: "Accept trips and earn instantly",
    icon: <Car className="w-8 h-8 text-white" />,
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

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const StartJourney = () => {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center relative -mt-8 md:-mt-16">
      <div className="absolute top-0 left-[-272px] size-[570px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-20" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight max-w-2xl font-sans"
        >
          Start Your Journey in <span className="text-primary">4 Steps</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-500 text-base md:text-lg mt-5 max-w-2xl leading-relaxed"
        >
          We provide the tools and connections to help professional partners
          build a sustainable business with complete freedom.
        </motion.p>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mt-16 w-full max-w-5xl relative"
        >
          {/* Connecting line for desktop only */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 z-0 border-t-2 border-dashed border-primary/30" />
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Circular Icon Container */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/35 border-2 border-white group-hover:border-primary">
                <div className="transition-colors duration-300 group-hover:text-white">
                  {step.icon}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-neutral-900 mt-6 font-sans">{step.title}</h3>

              {/* Step Description */}
              <p className="text-sm text-neutral-500 mt-2 max-w-[220px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
