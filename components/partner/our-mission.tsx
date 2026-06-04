"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { BadgeCheck, Car, Building2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const OurMission = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden -mt-8 md:-mt-16">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <motion.span
              variants={itemVariants}
              className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 leading-none"
            >
              Our Mission
            </motion.span>

            {/* Heading for Desktop */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-[50px] font-bold text-neutral-900 leading-[1.15] tracking-tight mt-6 mb-6 font-sans hidden lg:block"
            >
              Empowering Drivers, Vehicle Owners & Rental Agencies
            </motion.h2>

            {/* Heading for Mobile */}
            <motion.h2
              variants={itemVariants}
              className="lg:hidden text-neutral-900 text-4xl font-bold mb-6 mt-6"
            >
              Driving Prosperity Through{" "}
              <span className="text-primary">Reliable Mobility.</span>
            </motion.h2>

            {/* Description for Desktop */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-500 text-lg leading-relaxed max-w-xl hidden lg:block mb-6"
            >
              AAVORide helps drivers, vehicle owners, and rental agencies earn
              more with outstation rides, intercity trips, fleet management
              tools, and reliable mobility services across India.
            </motion.p>

            {/* Description for Mobile */}
            <motion.p
              variants={itemVariants}
              className="lg:hidden text-neutral-500 mb-6"
            >
              To empower drivers, vehicle owners, and rental agencies with
              better earning opportunities while delivering reliable
              transportation services.
            </motion.p>

            {/* Trusted Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-4"
            >
              <BadgeCheck className="w-6 h-6 text-primary fill-primary/10" />
              <span className="text-neutral-800 font-bold text-base">
                Trusted by 1k+ Partners
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Staggered Premium Cards */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0 lg:items-end justify-center"
          >
            {/* Card 1: Driver */}
            <motion.div
              variants={cardVariants}
              className="group w-full bg-white md:max-w-xs rounded-[28px] p-6.5 flex items-center gap-5 border border-neutral-100 shadow-lg lg:-translate-x-12 transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="w-14 h-14 bg-white border border-neutral-100 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  Driver
                </h3>
                <p className="text-sm text-neutral-500 mt-1.5 leading-normal">
                  Maximized daily earnings with flexible shifts.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Vehicle Owner */}
            <motion.div
              variants={cardVariants}
              className="group w-full bg-white md:max-w-xs rounded-[28px] p-6.5 flex items-center gap-5 border border-neutral-100 shadow-lg lg:translate-x-0 transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="w-14 h-14 bg-white border border-neutral-100 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                <Car className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  Vehicle Owner
                </h3>
                <p className="text-sm text-neutral-500 mt-1.5 leading-normal">
                  Passive income with secure fleet management.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Rental Agency */}
            <motion.div
              variants={cardVariants}
              className="group w-full bg-white md:max-w-xs rounded-[28px] p-6.5 flex items-center gap-5 border border-neutral-100 shadow-lg lg:translate-x-12 transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="w-14 h-14 bg-white border border-neutral-100 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:border-primary">
                <Building2 className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  Rental Agency
                </h3>
                <p className="text-sm text-neutral-500 mt-1.5 leading-normal">
                  Scale operations with enterprise-grade tools.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
