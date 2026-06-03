"use client";

import { useState, useEffect } from "react";
import { FooterSection } from "@/components/landing/footer-section";

const termsData = [
  {
    num: "1",
    title: "Nature of Service",
    desc: (
      <>
        <p className="mb-3">
          Aavoride is a driver listing and lead generation platform designed to
          connect service seekers with independent providers. Specifically:
        </p>
        <ul className=" pl-5 space-y-2">
          <li>
            We provide a digital marketplace for listing driving services.
          </li>
          <li>
            We facilitate initial contact but do not moderate the relationship.
          </li>
          <li>Aavoride is NOT a transportation company or a fleet owner.</li>
        </ul>
      </>
    ),
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
  {
    num: "2",
    title: "No Ride Booking or Transport Responsibility",
    desc: "Aavoride does not confirm rides, assign drivers, or guarantee the availability of any listed service. The platform merely facilitates information exchange; the actual arrangement of transport is a private agreement between the user and the driver.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    num: "3",
    title: "Independent Drivers",
    desc: "Drivers are independent service providers and not employees, agents, or contractors of Aavoride. They maintain full control over their schedules, routes, and pricing outside of platform suggestions.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    num: "4",
    title: "Platform Role Limitation",
    desc: "Aavoride acts only as a technology intermediary between users and drivers. We do not provide vehicle insurance, safety training, or mechanical inspections of the vehicles listed.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
  {
    num: "5",
    title: "Payments & Fees",
    desc: "Our revenue model is based on listing fees for service providers. Aavoride charges no ride commission to ensure maximum value for both parties. All financial transactions for services must be handled directly between the user and driver.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    num: "6",
    title: "User Responsibility",
    desc: "Users are solely responsible for the verification of credentials and assuming platform risk. We recommend users verify driver licenses and vehicle registration before initiating any trip.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    num: "7",
    title: "No Partnership or Employment",
    desc: "Nothing in these terms shall be construed as creating an employment relationship, joint venture, or partnership between the user, the driver, and Aavoride.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    num: "8",
    title: "Governing Law",
    desc: "These terms are governed by the Laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    num: "9",
    title: "Acceptance of Terms",
    desc: "By accessing or using Aavoride services, users confirm they have read, understood, and agreed to be bound by these Terms & Conditions.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
  },
  {
    num: "10",
    title: "Suspension & Removal",
    desc: "Aavoride reserves the right to suspend or block users or drivers at our sole discretion if they violate platform policies, receive poor feedback, or engage in unlawful behavior.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    ),
  },
];

export default function TermsAndConditions() {
  const title = "Terms & Conditions";

  // Scroll reveal animation
  useEffect(() => {
    const scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach((el) => scrollRevealObserver.observe(el));

    return () => scrollRevealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="bg-linear-to-b from-[#FF3E1D] via-[#FF5A3D] to-[#EC7F6C]">
        <div className="text-center px-6 pt-20 sm:pb-32 pb-24 max-w-[800px] mx-auto">
          <h1 className="text-white text-4xl leading-snug md:text-[56px] font-extrabold mb-6 sm:leading-tight tracking-tight flex justify-center flex-wrap">
            {title.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up"
                style={{
                  animationDelay: `${index * 40 + 800}ms`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p
            className="text-white/90 md:text-lg text-sm font-medium leading-relaxed mb-4 max-w-[650px] mx-auto animate-fade-in-up"
            style={{
              animationDelay: "1500ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Please read these terms carefully before using Aavoride services. We
            believe in transparency and mutual respect between our platform,
            drivers, and travelers.
          </p>
        </div>
      </div>

      <div
        className="max-w-[896px] mx-auto px-5 pt-16 md:pb-40 pb-16 flex flex-col gap-6 relative z-10 scroll-reveal"
        style={{ animationDelay: "1800ms" }}
      >
        {termsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-0 flex flex-col gap-3 w-full hover:shadow-[0_12px_40px_rgba(255,62,29,0.08)] transition-shadow duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 bg-[#FF3E1D] text-white rounded-full flex items-center justify-center text-[15px] font-black shrink-0">
                {item.num}
              </div>
              <div className="text-[#FF3E1D]">{item.icon}</div>
              <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 tracking-tight">
                {item.title}
              </h3>
            </div>
            <div className="text-[#444748] text-base md:text-[15px] leading-relaxed pl-11">
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}
