"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Star,
  BadgeCheck,
  BarChart3,
  UserMinus,
  Wallet,
  Headphones,
  Users,
} from "lucide-react";
import partnerImage from "@/public/partner.png";
import { circle } from "framer-motion/client";

interface StatItem {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any> | string;
}

const stats: StatItem[] = [
  {
    title: "1K+",
    subtitle: "Successful Rides",
    icon: "/star1.png",
  },
  {
    title: "Verified",
    subtitle: "Platform Trust",
    icon: "/tick1.png",
  },
  {
    title: "Transparent",
    subtitle: "Full Earnings History",
    icon: "/line1.png",
  },
  {
    title: "Direct",
    subtitle: "No Middlemen",
    icon: "/profile1.png",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 },
  },
};

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 leading-none w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Trusted Mobility Partner Platform
            </motion.span>

            {/* Heading for Desktop */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight mt-6 mb-4 font-sans hidden lg:block"
            >
              Drive with <br />
              <span className="text-primary">AAVORide Partner.</span> <br />
              Earn Without Limits
            </motion.h1>

            {/* Heading for Mobile */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold lg:hidden mt-6 mb-4 tracking-tight"
            >
              <span className="text-primary">Drive.Earn</span> <br /> Be Your
              Own Boss
            </motion.h1>

            {/* Subtitle */}
            <motion.h3
              variants={itemVariants}
              className="text-base lg:text-2xl font-bold text-neutral-800 mb-6 font-sans whitespace-nowrap lg:whitespace-normal"
            >
              Driver, Agency & Car Owner Earning App
            </motion.h3>

            {/* Paragraph Description for Desktop */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl mb-8 hidden lg:block"
            >
              Earn daily with outstation rides, intercity trips, fleet
              management, and flexible driving opportunities across India.
            </motion.p>

            {/* Paragraph Description for Mobile */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl mb-8 lg:hidden"
            >
              One platform for Drivers, Agencies & Car Owners earn more with
              flexible work, fleet management, and passive income opportunities
              powered by AAVORIDE.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              variants={itemVariants}
              href="https://play.google.com/store/apps/details?id=com.aavoridepartner"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-9 bg-primary hover:bg-primary/95 text-white font-bold rounded-full transition-all duration-200 text-base inline-flex items-center justify-center shadow-lg shadow-primary/15 cursor-pointer relative z-30 w-fit"
            >
              Start Earning Today
            </motion.a>
          </motion.div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center w-full">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full flex justify-center lg:justify-end items-center"
            >
              <Image
                src="/hero.png"
                alt="AAVORide Partner Mobile App Showcase"
                width={720}
                height={600}
                priority
                className="relative hidden md:block z-10 w-full h-auto object-contain"
              />
              <Image
                src="/hero-mobile.png"
                alt="AAVORide Partner Mobile App Showcase"
                width={720}
                height={600}
                priority
                className="relative md:hidden z-10 w-full h-auto object-contain"
              />
              <div className="top-4 left-0 absolute z-10 md:block hidden">
                <Image
                  src="/car-icon.png"
                  height={80}
                  width={100}
                  alt="car-icon"
                  className="w-6 mb-1 ml-4 h-auto"
                />
                <Image
                  src="/car-line.png"
                  height={80}
                  width={100}
                  alt="arrow"
                />
              </div>
              <div className="top-0 right-6 absolute z-10 md:block hidden">
                <Image
                  src="/location-icon.png"
                  height={80}
                  width={100}
                  alt="location-icon"
                  className="h-auto w-4 ml-20 mb-1"
                />
                <Image
                  src="/location-line.png"
                  height={80}
                  width={100}
                  alt="arrow"
                />
              </div>

              {/* Floating Card 1: Fast Payouts */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut" as const,
                    delay: 0.5,
                  },
                  opacity: { duration: 0.5, delay: 0.4 },
                  scale: { duration: 0.5, delay: 0.4 },
                }}
                className="flex absolute top-[10%] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-1/2 z-20 bg-white/70 backdrop-blur-lg shadow-lg border border-white/30 rounded-full p-3 sm:p-4 items-center gap-2 sm:gap-3 transition-all duration-300"
              >
                <div className="bg-green-50 text-green-600 p-2.5 rounded-full shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest leading-none">
                    Fast Payouts
                  </span>
                  <span className="text-sm font-bold text-neutral-900 mt-1.5 leading-none">
                    Instant Earnings
                  </span>
                </div>
              </motion.div>

              {/* Floating Card 2: Live Assistance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut" as const,
                    delay: 0.2,
                  },
                  opacity: { duration: 0.5, delay: 0.6 },
                  scale: { duration: 0.5, delay: 0.6 },
                }}
                className="flex absolute bottom-[10%] left-[2%] sm:left-[2%] z-20 bg-white/70 backdrop-blur-lg shadow-lg border border-white/30 rounded-full p-3 sm:p-4 items-center gap-2 sm:gap-3 transition-all duration-300"
              >
                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-full shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest leading-none">
                    Live Assistance
                  </span>
                  <span className="text-sm font-bold text-neutral-900 mt-1.5 leading-none">
                    24/7 Support
                  </span>
                </div>
              </motion.div>

              {/* Floating Card 3: Active Community */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.95 }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut" as const,
                    delay: 0.8,
                  },
                  opacity: { duration: 0.5, delay: 0.8 },
                  scale: { duration: 0.5, delay: 0.8 },
                }}
                className="flex absolute bottom-[16%] right-[-2%] sm:right-[-2%] z-20 bg-white/70 backdrop-blur-lg shadow-lg border border-white/30 rounded-full p-3 sm:p-4 items-center gap-2 sm:gap-3 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest leading-none">
                    Active Community
                  </span>
                  <span className="text-sm font-bold text-neutral-900 mt-1.5 leading-none">
                    1K+ Partners
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="lg:-mt-28 isolate z-10"
      >
        <Image
          src={partnerImage}
          alt="Partner Image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#FFF5F3] md:py-8 py-12 min-h-38 border-t border-b border-primary/5 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center w-full max-w-[188px] gap-4.5 text-left"
                >
                  {typeof Icon === 'string' ? (
                    <Image
                      src={Icon}
                      alt={stat.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 shrink-0"
                    />
                  ) : (
                    <Icon className="w-8 h-8 text-primary shrink-0" />
                  )}
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-neutral-900 text-lg leading-tight">
                      {stat.title}
                    </span>
                    <span className="text-sm text-neutral-500 mt-1.5 leading-none">
                      {stat.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
