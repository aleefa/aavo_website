"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

// Hero animates on mount (no scroll trigger needed — it's above the fold)
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-brand-primary/20 blur-[120px] pointer-events-none select-none" />
      <div className="absolute -right-20 top-1/3 w-80 h-80 rounded-full bg-brand-primary/15 blur-[140px] pointer-events-none select-none" />

      <div className="relative z-10 max-w-279 mx-auto px-4 md:px-12 flex flex-col items-center text-center">

        {/* Breadcrumb — fade down */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-sm font-medium text-foreground">Home</span>
          <Image
            src="/assets/icons/Icon.svg"
            alt="Arrow Icon"
            width={12}
            height={12}
            className="w-[4.93px] h-2 object-contain brightness-50"
          />
          <span className="text-sm font-bold text-brand-primary">About Us</span>
        </motion.div>

        {/* Title — clip reveal from bottom */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-[58px] font-extrabold tracking-tight text-foreground leading-tight md:leading-none"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Crafting Better Travel Experiences{" "}
            <span className="text-brand-primary block md:inline mt-2 md:mt-0">Across India</span>
          </motion.h1>
        </div>

        {/* Description — fade up */}
        {/* <motion.p
          className="mt-6 text-base text-muted-gray leading-7 tracking-normal font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.42 }}
        >
          At AAVORide, we believe booking transportation should be simple, transparent, and hassle-free. Travelers often spend valuable time contacting multiple drivers and travel agencies to compare prices and find the right ride. We built AAVORide to solve that problem.
Our platform connects travellers with verified drivers and travel agencies through a single request, allowing them to receive multiple quotations, compare options, and choose the service that best fits their needs and budget.
Whether it's an outstation trip, airport transfer, car rental, tempo traveller, or corporate travel requirement, AAVORide makes finding the right transportation partner easier than ever.
We are committed to creating a trusted mobility marketplace that benefits both travellers and transport service providers through technology, transparency, and convenience.
 text-sm md:text-lg text-muted-gray leading-7 font-normal
        </motion.p> */}
       <motion.p
  className="mt-6 text-sm md:text-lg text-muted-gray leading-6 md:leading-7 tracking-normal font-normal max-w-3xl md:max-w-none text-center pl-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.42 }}
>
  At AAVORide, we believe booking transportation should be simple, transparent, and hassle-free. We built AAVORide to solve the problem of travelers spending valuable time contacting multiple drivers to compare prices.
  <br />
  Our platform connects travellers with verified drivers through a single request, allowing them to receive multiple quotations and choose the service that best fits their needs.
  <br />
  Whether it's an outstation trip, airport transfer, car rental, tempo traveller, or corporate travel, AAVORide makes finding the right transportation partner easier than ever.
  <br />
  We are committed to creating a trusted mobility marketplace that benefits both travellers and transport service providers through technology and transparency.
</motion.p>
        {/* CTA — scale up */}
        <motion.div
          className="mt-10 w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut", delay: 0.58 }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.aavoride"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button variant="primary" size="lg" className="w-full md:w-auto px-10 py-4 font-bold text-lg hover:scale-105 active:scale-95 transition-all">
              Explore Rides
            </Button>
          </Link>
        </motion.div>

        {/* Trust Metrics — stagger slide up */}
        <div className="mt-11.75 flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20">
          {[
            {
              label: "RIDER RATING",
              value: "4.9/5",
              icon: (
                <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-5.75">
                  <path d="M3.8251,19l1.625,-7.025l-5.45,-4.725l7.2,-0.625l2.8,-6.625l2.8,6.625l7.2,0.625l-5.45,4.725l1.625,7.025l-6.175,-3.725z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              ),
            },
            {
              label: "VERIFIED FLEET",
              value: "100%",
              icon: (
                <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-[22.5px]">
                  <path d="M6.95,13.55l5.65,-5.65l-1.425,-1.425l-4.225,4.225l-2.1,-2.1l-1.425,1.425zM8,20c-2.317,-0.583 -4.229,-1.912 -5.738,-3.987c-1.508,-2.075 -2.262,-4.38 -2.262,-6.913v-6.1l8,-3l8,3v6.1c0,2.533 -0.754,4.838 -2.263,6.913c-1.508,2.075 -3.42,3.404 -5.737,3.987zM8,17.9c1.733,-0.55 3.167,-1.65 4.3,-3.3c1.133,-1.65 1.7,-3.483 1.7,-5.5v-4.725l-6,-2.25l-6,2.25v4.725c0,2.017 0.567,3.85 1.7,5.5c1.133,1.65 2.567,2.75 4.3,3.3z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="group flex gap-5 items-start"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 + i * 0.13 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-transparent bg-brand-primary/10 text-brand-primary transition-colors duration-300 shrink-0 mt-1 group-hover:border-brand-primary group-hover:bg-brand-primary">
                <div className="transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-foreground leading-none">{item.value}</span>
                <span className="text-sm font-medium text-muted-gray tracking-[0.7px] mt-1 uppercase">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
