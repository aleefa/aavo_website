"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  LucideIcon,
  Wallet,
  IndianRupee,
  MapPin,
  Shield,
  Handshake,
} from "lucide-react";

interface PartnerBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

const benefits: PartnerBenefit[] = [
  {
    title: "0% Commission",
    description:
      "Keep more of what you earn with transparent payouts and no hidden fees.",
    icon: Wallet,
  },
  {
    title: "Your Rate",
    description:
      "Decide your own KM pricing with complete flexibility. You are in control.",
    icon: IndianRupee,
  },
  {
    title: "More Outstation Trips",
    description:
      "Get more long-distance ride opportunities daily for higher ticket sizes.",
    icon: MapPin,
  },
  {
    title: "Safe & Secure",
    description:
      "Your safety and support are always our priority with 24/7 assistance.",
    icon: Shield,
  },
  {
    title: "Made for Partners",
    description:
      "Built specially for drivers and travel partners to thrive in the modern economy.",
    icon: Handshake,
  },
  {
    title: "Earn More With Every Ride",
    description:
      "Get daily bonuses, extra rewards, and exclusive benefits designed specially for dedicated driver partners.",
    icon: Handshake,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const AavoRidePartners = () => {
  return (
    <section className="w-full py-20 lg:py-28 flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="bg-primary/10 text-primary text-xs font-bold  tracking-widest rounded-full px-4 py-1.5 leading-none"
        >
          AAVORide PARTNERS
        </motion.span>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight mt-6 mb-6 font-sans"
        >
          Drive More. Earn More.
          <br /> Partner With{" "}
          <span className="text-primary">AAVORide Partner</span>.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Flexible earning opportunities with full transparency, safety, and
          better outstation trips.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full max-w-6xl"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-[32px] p-8 border border-neutral-200/50 shadow-lg transition-all duration-300 hover:scale-[1.01] flex flex-col items-start text-left shadow-neutral-200"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3 font-sans leading-tight">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
