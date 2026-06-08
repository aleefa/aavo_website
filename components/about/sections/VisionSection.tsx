"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const VisionSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visionItems = [
    {
      title: "Smarter Travel Decisions",
      description: "Enable travellers to receive multiple quotations and make informed booking decisions with complete transparency.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8V17.5C19 17.8978 18.842 18.2794 18.5607 18.5607C18.2794 18.842 17.8978 19 17.5 19H2.5C2.10218 19 1.72064 18.842 1.43934 18.5607C1.15804 18.2794 1 17.8978 1 17.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 8L11 12L18.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Connecting Travelers & Service Providers",
      description: "Build a platform that seamlessly connects customers with verified drivers and travel agencies across India.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.41421 4.41421C4.03914 4.78929 3.53043 5 3 5C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1C3.53043 1 4.03914 1.21071 4.41421 1.58579C4.78929 1.96086 5 2.46957 5 3C5 3.53043 4.78929 4.03914 4.41421 4.41421Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.12132 19.1213C5.55871 19.6839 4.79565 20 4 20C3.20435 20 2.44129 19.6839 1.87868 19.1213C1.31607 18.5587 1 17.7956 1 17C1 16.2044 1.31607 15.4413 1.87868 14.8787C2.44129 14.3161 3.20435 14 4 14C4.79565 14 5.55871 14.3161 6.12132 14.8787C6.68393 15.4413 7 16.2044 7 17C7 17.7956 6.68393 18.5587 6.12132 19.1213Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21C17.2044 21 16.4413 20.6839 15.8787 20.1213C15.3161 19.5587 15 18.7956 15 18C15 17.2044 15.3161 16.4413 15.8787 15.8787C16.4413 15.3161 17.2044 15 18 15C18.7956 15 19.5587 15.3161 20.1213 15.8787C20.6839 16.4413 21 17.2044 21 18C21 18.7956 20.6839 19.5587 20.1213 20.1213Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9C6 7.93913 6.42143 6.92172 7.17157 6.17157C7.92172 5.42143 8.93913 5 10 5C11.0609 5 12.0783 5.42143 12.8284 6.17157C13.5786 6.92172 14 7.93913 14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.4142 4.41421C17.0391 4.78929 16.5304 5 16 5C15.4696 5 14.9609 4.78929 14.5858 4.41421C14.2107 4.03914 14 3.53043 14 3C14 2.46957 14.2107 1.96086 14.5858 1.58579C14.9609 1.21071 15.4696 1 16 1C16.5304 1 17.0391 1.21071 17.4142 1.58579C17.7893 1.96086 18 2.46957 18 3C18 3.53043 17.7893 4.03914 17.4142 4.41421Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.5 4.5L6.5 6.5M14 5L13 6M16 15.75L13 12M6 14.5L8 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Accessible Mobility for Everyone",
      description: "Make reliable transportation easy to access, regardless of city, destination, or travel requirement.",
      icon: (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 20C5.23333 20 3.79167 19.7208 2.675 19.1625C1.55833 18.6042 1 17.8833 1 17C1 16.6 1.12083 16.2292 1.3625 15.8875C1.60417 15.5458 1.94167 15.25 2.375 15L3.95 16.475C3.8 16.5417 3.6375 16.6167 3.4625 16.7C3.2875 16.7833 3.15 16.8833 3.05 17C3.26667 17.2667 3.76667 17.5 4.55 17.7C5.33333 17.9 6.15 18 7 18C7.85 18 8.67083 17.9 9.4625 17.7C10.2542 17.5 10.7583 17.2667 10.975 17C10.8583 16.8667 10.7083 16.7583 10.525 16.675C10.3417 16.5917 10.1667 16.5167 10 16.45L11.55 14.95C12.0167 15.2167 12.375 15.5208 12.625 15.8625C12.875 16.2042 13 16.5833 13 17C13 17.8833 12.4417 18.6042 11.325 19.1625C10.2083 19.7208 8.76667 20 7 20ZM7.025 14.5C8.675 13.2833 9.91667 12.0625 10.75 10.8375C11.5833 9.6125 12 8.38333 12 7.15C12 5.45 11.4583 4.16667 10.375 3.3C9.29167 2.43333 8.16667 2 7 2C5.83333 2 4.70833 2.43333 3.625 3.3C2.54167 4.16667 2 5.45 2 7.15C2 8.26667 2.40833 9.42917 3.225 10.6375C4.04167 11.8458 5.30833 13.1333 7.025 14.5ZM7 17C4.65 15.2667 2.89583 13.5833 1.7375 11.95C0.579167 10.3167 0 8.71667 0 7.15C0 5.96667 0.2125 4.92917 0.6375 4.0375C1.0625 3.14583 1.60833 2.4 2.275 1.8C2.94167 1.2 3.69167 0.75 4.525 0.45C5.35833 0.15 6.18333 0 7 0C7.81667 0 8.64167 0.15 9.475 0.45C10.3083 0.75 11.0583 1.2 11.725 1.8C12.3917 2.4 12.9375 3.14583 13.3625 4.0375C13.7875 4.92917 14 5.96667 14 7.15C14 8.71667 13.4208 10.3167 12.2625 11.95C11.1042 13.5833 9.35 15.2667 7 17ZM7 9C7.55 9 8.02083 8.80417 8.4125 8.4125C8.80417 8.02083 9 7.55 9 7C9 6.45 8.80417 5.97917 8.4125 5.5875C8.02083 5.19583 7.55 5 7 5C6.45 5 5.97917 5.19583 5.5875 5.5875C5.19583 5.97917 5 6.45 5 7C5 7.55 5.19583 8.02083 5.5875 8.4125C5.97917 8.80417 6.45 9 7 9Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Empowering Local Transport Businesses",
      description: "Support independent drivers and travel agencies with digital tools that help them reach more customers and grow sustainably.",
      icon: (
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1667 13.3333H2.5V14.1667C2.5 14.3877 2.4122 14.5996 2.25592 14.7559C2.09964 14.9122 1.88768 15 1.66667 15H0.833333C0.61232 15 0.400358 14.9122 0.244078 14.7559C0.0877973 14.5996 0 14.3877 0 14.1667V5.83333L2.06667 1.01C2.19527 0.710001 2.40913 0.454366 2.68171 0.274817C2.95429 0.0952685 3.2736 -0.00028964 3.6 6.59471e-07H13.0667C13.3928 3.66767e-05 13.7117 0.0957475 13.984 0.275276C14.2562 0.454804 14.4698 0.710262 14.5983 1.01L16.6667 5.83333V14.1667C16.6667 14.3877 16.5789 14.5996 16.4226 14.7559C16.2663 14.9122 16.0543 15 15.8333 15H15C14.779 15 14.567 14.9122 14.4107 14.7559C14.2545 14.5996 14.1667 14.3877 14.1667 14.1667V13.3333ZM15 7.5H1.66667V11.6667H15V7.5ZM1.81333 5.83333H14.8533L13.0675 1.66667H3.6L1.81333 5.83333ZM3.75 10.8333C3.41848 10.8333 3.10054 10.7016 2.86612 10.4672C2.6317 10.2328 2.5 9.91485 2.5 9.58333C2.5 9.25181 2.6317 8.93387 2.86612 8.69945C3.10054 8.46503 3.41848 8.33333 3.75 8.33333C4.08152 8.33333 4.39946 8.46503 4.63388 8.69945C4.8683 8.93387 5 9.25181 5 9.58333C5 9.91485 4.8683 10.2328 4.63388 10.4672C4.39946 10.2328 4.08152 10.8333 3.75 10.8333ZM12.9167 10.8333C12.5851 10.8333 12.2672 10.7016 12.0328 10.4672C11.7984 10.2328 11.6667 9.91485 11.6667 9.58333C11.6667 9.25181 11.7984 8.93387 12.0328 8.69945C12.2672 8.46503 12.5851 8.33333 12.9167 8.33333C13.2482 8.33333 13.5661 8.46503 13.8005 8.69945C14.035 8.93387 14.1667 9.25181 14.1667 9.58333C14.1667 9.91485 14.035 10.2328 13.8005 10.4672C13.5661 10.2328 13.2482 10.8333 12.9167 10.8333Z" fill="currentColor"/>
        </svg>
      ),
    }
  ];

  return (
    <section ref={ref} className="relative w-full pt-16 md:pt-20 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="md:w-142.5 w-78 h-78 md:h-142.5 bg-brand-primary md:bg-brand-primary/20 blur-[163px] absolute top-30 md:top-0 -right-70 md:right-auto md:-left-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left: Text — fade up stagger */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">

          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          >
            <span className="text-xs font-bold text-brand-primary tracking-[0.15em] uppercase">THE FUTURE</span>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-1.6px] text-foreground leading-10 md:leading-14.5">
              Our Vision
            </h2>
          </motion.div>

          <motion.p
            className="text-sm md:text-lg text-muted-gray leading-7 font-normal"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            To redefine travel booking in India by creating a transparent mobility marketplace where one request connects travellers with multiple trusted transportation providers.
          </motion.p>

          {/* Vision items — stagger from right */}
          <div className="mt-4 flex flex-col gap-6">
            {visionItems.map((item, index) => (
              <motion.div
                key={index}
                className="group flex gap-4 items-start"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 + index * 0.13 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary transition-colors duration-300 shrink-0 mt-1 group-hover:bg-brand-primary">
                  <div className="transition-colors duration-300 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm md:text-base text-muted-gray leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>

        {/* Right: Map image — slide in from right + slight scale */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <div className="relative w-full max-w-125 bg-transparent">
            <Image
              src="/assets/images/india-map-connection1.png"
              alt="Digital map of India showing network connections"
              width={500}
              height={400}
              style={{ width: "100%", height: "auto",background: "transparent" }}
              className="hover:scale-[1.01] transition-transform duration-300"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};
