"use client";

import { useState, useEffect } from "react";
import { FooterSection } from "@/components/landing/footer-section";
import { CircleX, FileDown } from "lucide-react";

const termsData = [
  {
    num: "1",
    title: "How to Request Account Deletion",
    desc: (
      <>
        <p className="mb-3">
          You can request deletion of your account using any of the following methods:
        </p>
        <ul className=" list-disc pl-10 space-y-2">
          <li>
            Inside the Mobile App: Go to <span className="font-semibold">
    Profile → Settings → Delete Account
  </span>
          </li>
          <li>
           Email us at: <span className="font-semibold">aavoride@gmail.com</span>
          </li>
  
        </ul>
                <p className="mb-3 mt-4">
          When sending an email request, please include your registered mobile number and email address for verification purposes.
        </p>
      </>
    ),
   

  },
  {
    num: "2",
    title: "What Happens After You Request Deletion?",
    desc:(
        <>
        <ul className=" list-disc pl-5 space-y-2">
          <li>
            Your account will be deactivated immediately.
          </li>
          <li>
           We will verify your identity to prevent unauthorized deletion.
          </li>
          <li>
            Eligible personal data will be permanently deleted within 7 working days.
          </li>
          <li>
           You will receive confirmation once the deletion process is completed.
          </li>
  
        </ul>
        </>

    ) ,
    
  
  },
  {
    num: "3",
    title: "What Data Will Be Deleted?",
 desc:(
        <>
        <p className="mb-3">
          Upon successful processing of your request, the following data will be permanently removed:
        </p>
        <ul className=" list-disc pl-10 space-y-2">
          <li>
           Your full name and profile details.
          </li>
          <li>
          Email address and mobile number.
          </li>
          <li>
            Saved addresses.
          </li>
          <li>
           Trip and booking history.
          </li>
          <li>
          Driver verification documents (if applicable).
          </li>
          <li>
          Uploaded profile photos.
          </li>
          <li>
          Payment identifiers stored in our system.
          </li>
  
        </ul>
        </>

    ) ,  
  
  },
  {
    num: "4",
    title: "What Data May Be Retained?",
 desc:(
        <>
        <p className="mb-3">
           Some limited data may be retained where required for: </p>
        <ul className=" list-disc pl-10 space-y-2">
          <li>
          Legal and regulatory compliance.
          </li>
          <li>
          Fraud prevention and dispute resolution.
          </li>
          <li>
            Tax and financial record keeping.
          </li>
         </ul>
         <p className="mb-3 mt-4">
         This retained data will not be used for marketing purposes. </p>
        </>

    ) ,   
  },
  {
    num: "5",
    title: "Data Deletion Timeline",
    desc:(
        <>
        <ul className=" list-disc pl-5 space-y-2">
          <li>
            Account Deactivation: Immediate.
          </li>
          <li>
          Full Data Deletion: Within 7 working days.
          </li>
          <li>
            Backup Removal (if applicable): Within 30 days.
          </li>
          
  
        </ul>
        </>

    ) ,    
  },
  {
    num: "6",
    title: "Contact Us",
 desc:(
        <>
        <p className="mb-3">
          If you have any questions regarding account deletion or data privacy, please contact us: </p>
        <ul className=" list-disc pl-10 space-y-2">
          <li>
         <span className="font-semibold">Email  </span>: aavoride@gmail.com
          </li>
          <li>
          <span className="font-semibold">Website</span>: https://aavoride.in
          </li>
          
         </ul>
         <p className="mb-3 mt-4">
         By using AAVORide, you acknowledge that you understand this Account Deletion Policy.</p>
        </>

    ) ,   
  },
 
];

export default function AccountDeletion() {
  const title = "Account Deletion & Data|Removal Policy";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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
      <div className="bg-gradient-to-b from-[#FF3E1D] to-[#EC7F6C]">
        <div className="text-center px-6 pt-12 sm:pb-11 pb-8 max-w-[700px] mx-auto">
          <h1 className="text-white text-3xl leading-16 md:text-[56px] font-extrabold mb-6 sm:leading-tight tracking-tight flex justify-center flex-wrap">
            {title.split("|").map((part, partIndex) => (
              <span key={partIndex} className="flex justify-center flex-wrap">
                <span className="hidden md:flex">
                  {part.split("").map((char, charIndex) => (
                    <span
                      key={`${partIndex}-${charIndex}`}
                      className="inline-block animate-fade-in-up"
                      style={{
                        animationDelay: `${(partIndex * part.length + charIndex) * 40 + 800}ms`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="md:hidden animate-fade-in-up" style={{ animationDelay: "800ms", opacity: 0, animationFillMode: "forwards" }}>
                  {part}
                </span>
                {partIndex < title.split("|").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p
            className="text-white md:text-base text-sm font-semibold leading-relaxed mb-4 max-w-[650px] mx-auto animate-fade-in-up"
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
        className="max-w-[896px] mx-auto px-5 pt-16 md:pb-20 pb-16 flex flex-col gap-6 relative z-10 scroll-reveal"
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
              {/* <div className="text-[#FF3E1D]">{item.icon}</div> */}
              <h3 className="text-2xl md:text-[32px] font-bold text-gray-900 tracking-tight">
                {item.title}
              </h3>
            </div>
            <div className="text-[#444748] text-base md:text-[15px] leading-relaxed">
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}
