"use client";
import { useState, useEffect } from "react";
import { FooterSection } from "@/components/landing/footer-section";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { id: "about", label: "About Aavoride", num: "01" },
  { id: "info-collect", label: "Information We Collect", num: "02" },
  { id: "how-we-use", label: "How We Use", num: "03" },
  { id: "our-commitment", label: "Our Commitment", num: "04" },
  { id: "data-security", label: "Data Security", num: "05" },
  { id: "data-retention", label: "Data Retention", num: "06" },
  { id: "security", label: "User Rights", num: "07" },
  { id: "location-data", label: "Location Data", num: "08" },
  { id: "cookies-tracking", label: "Cookies & Tracking", num: "09" },
  { id: "children-privacy", label: "Children's Privacy", num: "10" },
  { id: "third-party-links", label: "Third-Party Links", num: "11" },
  { id: "policy-updates", label: "Policy Updates", num: "12" },
  { id: "info-sharing", label: "Info Sharing", num: "13" },
];

// const sectionIcons = {
//   about: (
//     <svg
//       width="28"
//       height="28"
//       viewBox="0 0 28 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
//         stroke="white"
//         strokeWidth="2.5"
//       />
//       <path
//         d="M14 18V14"
//         stroke="white"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//       />
//       <circle cx="14" cy="9" r="1.8" fill="white" />
//     </svg>
//   ),
//   "info-collect": (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 18 18"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9 18C6.48333 18 4.35417 17.6125 2.6125 16.8375C0.870833 16.0625 0 15.1167 0 14V4C0 2.9 0.879167 1.95833 2.6375 1.175C4.39583 0.391667 6.51667 0 9 0C11.4833 0 13.6042 0.391667 15.3625 1.175C17.1208 1.95833 18 2.9 18 4V14C18 15.1167 17.1292 16.0625 15.3875 16.8375C13.6458 17.6125 11.5167 18 9 18ZM9 6.025C10.4833 6.025 11.975 5.8125 13.475 5.3875C14.975 4.9625 15.8167 4.50833 16 4.025C15.8167 3.54167 14.9792 3.08333 13.4875 2.65C11.9958 2.21667 10.5 2 9 2C7.48333 2 5.99583 2.2125 4.5375 2.6375C3.07917 3.0625 2.23333 3.525 2 4.025C2.23333 4.525 3.07917 4.98333 4.5375 5.4C5.99583 5.81667 7.48333 6.025 9 6.025ZM9 11C9.7 11 10.375 10.9667 11.025 10.9C11.675 10.8333 12.2958 10.7375 12.8875 10.6125C13.4792 10.4875 14.0375 10.3333 14.5625 10.15C15.0875 9.96667 15.5667 9.75833 16 9.525V6.525C15.5667 6.75833 15.0875 6.96667 14.5625 7.15C14.0375 7.33333 13.4792 7.4875 12.8875 7.6125C12.2958 7.7375 11.675 7.83333 11.025 7.9C10.375 7.96667 9.7 8 9 8C8.3 8 7.61667 7.96667 6.95 7.9C6.28333 7.83333 5.65417 7.7375 5.0625 7.6125C4.47083 7.4875 3.91667 7.33333 3.4 7.15C2.88333 6.96667 2.41667 6.75833 2 6.525V9.525C2.41667 9.75833 2.88333 9.96667 3.4 10.15C3.91667 10.3333 4.47083 10.4875 5.0625 10.6125C5.65417 10.7375 6.28333 10.8333 6.95 10.9C7.61667 10.9667 8.3 11 9 11ZM9 16C9.76667 16 10.5458 15.9417 11.3375 15.825C12.1292 15.7083 12.8583 15.5542 13.525 15.3625C14.1917 15.1708 14.75 14.9542 15.2 14.7125C15.65 14.4708 15.9167 14.225 16 13.975V11.525C15.5667 11.7583 15.0875 11.9667 14.5625 12.15C14.0375 12.3333 13.4792 12.4875 12.8875 12.6125C12.2958 12.7375 11.675 12.8333 11.025 12.9C10.375 12.9667 9.7 13 9 13C8.3 13 7.61667 12.9667 6.95 12.9C6.28333 12.8333 5.65417 12.7375 5.0625 12.6125C4.47083 12.4875 3.91667 12.3333 3.4 12.15C2.88333 11.9667 2.41667 11.7583 2 11.525V14C2.08333 14.25 2.34583 14.4917 2.7875 14.725C3.22917 14.9583 3.78333 15.1708 4.45 15.3625C5.11667 15.5542 5.85 15.7083 6.65 15.825C7.45 15.9417 8.23333 16 9 16Z"
//         fill="white"
//       />
//     </svg>
//   ),
//   "how-we-use": (
//     <svg
//       width="22"
//       height="20"
//       viewBox="0 0 22 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M16.675 7L15.575 4.6L13.175 3.5L15.575 2.4L16.675 0L17.775 2.4L20.175 3.5L17.775 4.6L16.675 7ZM18.675 14L17.875 12.3L16.175 11.5L17.875 10.7L18.675 9L19.475 10.7L21.175 11.5L19.475 12.3L18.675 14ZM5.675 20L5.375 17.65C5.25833 17.6 5.13333 17.5333 5 17.45C4.86667 17.3667 4.75833 17.2833 4.675 17.2L2.475 18.15L0 13.8L1.875 12.4C1.875 12.2667 1.875 12.1333 1.875 12C1.875 11.8667 1.875 11.7333 1.875 11.6L0 10.2L2.475 5.85L4.675 6.8C4.75833 6.71667 4.86667 6.63333 5 6.55C5.13333 6.46667 5.25833 6.4 5.375 6.35L5.675 4H10.675L10.975 6.35C11.0917 6.4 11.2167 6.46667 11.35 6.55C11.4833 6.63333 11.5917 6.71667 11.675 6.8L13.875 5.85L16.35 10.2L14.475 11.6C14.475 11.7333 14.475 11.8667 14.475 12C14.475 12.1333 14.475 12.2667 14.475 12.4L16.35 13.8L13.875 18.15L11.675 17.2C11.5917 17.2833 11.4833 17.3667 11.35 17.45C11.2167 17.5333 11.0917 17.6 10.975 17.65L10.675 20H5.675ZM8.175 15C9.00833 15 9.71667 14.7083 10.3 14.125C10.8833 13.5417 11.175 12.8333 11.175 12C11.175 11.1667 10.8833 10.4583 10.3 9.875C9.71667 9.29167 9.00833 9 8.175 9C7.34167 9 6.63333 9.29167 6.05 9.875C5.46667 10.4583 5.175 11.1667 5.175 12C5.175 12.8333 5.46667 13.5417 6.05 14.125C6.63333 14.7083 7.34167 15 8.175 15ZM7.425 18H8.925L9.125 16.2C9.60833 16.0667 10.0208 15.8958 10.3625 15.6875C10.7042 15.4792 11.0417 15.2 11.375 14.85L13.025 15.6L13.725 14.35L12.275 13.25C12.4083 12.8667 12.475 12.45 12.475 12C12.475 11.55 12.4083 11.1333 12.275 10.75L13.725 9.65L13.025 8.4L11.375 9.15C11.0417 8.8 10.7042 8.52083 10.3625 8.3125C10.0208 8.10417 9.60833 7.93333 9.125 7.8L8.925 6H7.425L7.225 7.8C6.74167 7.93333 6.32917 8.10417 5.9875 8.3125C5.64583 8.52083 5.30833 8.8 4.975 9.15L3.325 8.4L2.625 9.65L4.075 10.75C3.94167 11.1333 3.87083 11.55 3.8625 12C3.85417 12.45 3.925 12.8667 4.075 13.25L2.625 14.35L3.325 15.6L4.975 14.85C5.30833 15.2 5.64583 15.4792 5.9875 15.6875C6.32917 15.8958 6.74167 16.0667 7.225 16.2L7.425 18Z"
//         fill="white"
//       />
//     </svg>
//   ),
//   "info-sharing": (
//     <svg
//       width="18"
//       height="20"
//       viewBox="0 0 18 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z"
//         fill="white"
//       />
//     </svg>
//   ),
//   "data-values": (
//     <svg
//       width="28"
//       height="28"
//       viewBox="0 0 28 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14 4V24M4 14H24"
//         stroke="white"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   security: (
//     <svg
//       width="28"
//       height="28"
//       viewBox="0 0 28 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14 4L6 8V14C6 18 10 22 14 24C18 22 22 18 22 14V8L14 4Z"
//         stroke="white"
//         strokeWidth="2.5"
//       />
//     </svg>
//   ),
//   "user-rights": (
//     <svg
//       width="16"
//       height="20"
//       viewBox="0 0 16 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M6.95 13.55L12.6 7.9L11.175 6.475L6.95 10.7L4.85 8.6L3.425 10.025L6.95 13.55ZM8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1１67 １4 9.１V4.３７５L8 ２.１２５L２ 4.３７５V9.１C２ １１.１１６７ ２.５６６６７ １２.９５ ３.７ １４．６C４．８３３３３ １６．２５ ６．２６６６７ １７．３５ ８ １７．９Z"
//         fill="white"
//       />
//     </svg>
//   ),
//   contact: (
//     <svg
//       width="28"
//       height="28"
//       viewBox="0 0 28 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M19 21V19C19 17.3431 17.6569 16 16 16H12C10.3431 16 9 17.3431 9 19V21"
//         stroke="white"
//         strokeWidth="2.5"
//       />
//       <circle cx="14" cy="10" r="4" stroke="white" strokeWidth="2.5" />
//     </svg>
//   ),
// };

export default function PrivacyPolicy() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("about");
  const [mobileTabActive, setMobileTabActive] = useState("about");

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            setMobileTabActive(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      observers[id].observe(el);
    });
    return () => Object.values(observers).forEach((o) => o.disconnect());
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

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDeleteAccountClick = () => {
    router.push("/account-deletion");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-[#FF3E1D] to-[#EC7F6C]">
        <div className="text-center px-6 pt-12 sm:pb-11 pb-8 max-w-[700px] mx-auto">
          <span
            className="inline-block bg-white text-[#FF3E1D] text-[11px] font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-6 leading-4 animate-fade-in-up"
            style={{
              animationDelay: "600ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            AAVORIDE LEGAL
          </span>
          <h1 className="text-white text-3xl leading-16 md:text-[56px] font-extrabold mb-6 sm:leading-tight tracking-tight flex justify-center flex-wrap">
            {"Privacy Policy".split("").map((char, index) => (
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
            className="text-white md:text-base text-sm font-semibold leading-relaxed mb-4 max-w-[650px] mx-auto animate-fade-in-up"
            style={{
              animationDelay: "1500ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Your trust is our priority. We are committed to protecting your
            privacy and ensuring your personal information is handled with care.
          </p>
          <p
            className="text-white text-sm font-semibold animate-fade-in-up"
            style={{
              animationDelay: "1600ms",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Last Updated :- June 2026
          </p>
        </div>
      </div>

      <div className="max-w-280 mx-auto px-5 pt-17.75 pb-12 md:pb-28 flex flex-col lg:flex-row lg:gap-13 gap-8 items-start">
        <aside className="hidden md:flex lg:flex-col flex-row overflow-x-auto scrollbar-hide lg:overflow-x-visible w-full lg:w-55 shrink-0 lg:sticky lg:top-6 gap-2.5 pb-4 lg:pb-0 border-b border-gray-100 lg:border-none mb-6 lg:mb-0">
          <p className="text-sm font-bold tracking-[1px] text-[#1A1C1D] mb-4 hidden lg:block">
            NAVIGATION
          </p>
          {NAV_ITEMS.map(({ id, label, num }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-2.5 lg:w-full w-auto whitespace-nowrap text-left rounded-lg px-3 py-2.5 lg:mb-1 mb-0 text-[13px] transition-all cursor-pointer border-none shrink-0 ${
                activeSection === id
                  ? "bg-[#FFF5F0] text-gray-500 "
                  : "bg-transparent text-gray-500 font-normal hover:bg-gray-50"
              }`}
            >
              <span className="text-[#5F5E5E] text-sm leading-5 font-medium w-5 lg:block hidden">
                {num}
              </span>
              {label}
            </button>
          ))}
        </aside>

        <main className="flex-1 flex flex-col min-w-0 lg:gap-6 md:gap-5  gap-[32px]">
          <section
            id="about"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <SectionHeader num="01" iconKey="about" title="About Aavoride" />
            <div>
              <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                Aavoride provides a modern transportation platform connecting
                users with reliable drivers. This policy describes how we
                collect, use, and protect your information across our mobile app
                and website.
              </p>
            </div>
          </section>

          <section
            id="info-collect"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <SectionHeader
              num="02"
              iconKey="info-collect"
              title="Information We Collect"
            />
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InfoCard
                  title="For Customers:"
                  items={[
                    "Contact details Full name, Mobile number, Email address (optional),",
                    "Pickup & drop location, Travel details you submit and Communication preferences",
                  ]}
                  variant="default"
                />
                <InfoCard
                  title="For Drivers:"
                  items={[
                    "Identification documents, vehicle information, location data, and background check results.",
                  ]}
                  variant="drivers"
                />
              </div>
              <InfoCard
                title="Automatically Collected:"
                items={[
                  "IP address, device type, browser information, and app usage statistics.",
                ]}
                variant="auto"
                wide
              />
            </div>
          </section>

          {/* Fix 1: how-we-use section - all 5 items same card style */}
          <section
            id="how-we-use"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <SectionHeader
              num="03"
              iconKey="how-we-use"
              title="How We Use Your Information"
            />
            <div>
              <div className="grid md:max-w-[800px] grid-cols-2 gap-3 mb-2">
                {[
                  "To provide and manage ride-hailing services.",
                  "To verify identity and ensure safety standards.",
                  "To process payments and issue invoices.",
                  "To communicate service updates and marketing (with consent).",
                  "To improve our platform's user experience and technical stability.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 items-start border border-[#E5E7EB] rounded-xl p-4 ${i === 4 ? "col-span-2" : ""}`}
                  >
                    <span className="text-[#FF3E1D] mt-0.5 shrink-0 max-md:hidden">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.16667 12.1667L13.0417 6.29167L11.875 5.125L7.16667 9.83333L4.79167 7.45833L3.625 8.625L7.16667 12.1667ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667ZM8.33333 15C10.1944 15 11.7708 14.3542 13.0625 13.0625C14.3542 11.7708 15 10.1944 15 8.33333C15 6.47222 14.3542 4.89583 13.0625 3.60417C11.7708 2.3125 10.1944 1.66667 8.33333 1.66667C6.47222 1.66667 4.89583 2.3125 3.60417 3.60417C2.3125 4.89583 1.66667 6.47222 1.66667 8.33333C1.66667 10.1944 2.3125 11.7708 3.60417 13.0625C4.89583 14.3542 6.47222 15 8.33333 15Z"
                          fill="#FF3E1D"
                        />
                      </svg>
                    </span>
                    <span className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fix 3: Our Commitment with SVG icons */}
            </div>
          </section>
          <section id="our-commitment" className="lg:p-8 md:p-6 scroll-reveal">
            <div className="bg-[#FFF5F0] border border-[#FFD5CC] rounded-2xl lg:p-12 md:p-6 max-md:pt-10 max-md:pb-14 px-4 ">
              <div className="flex items-center gap-3 mb-10">
                {/* <div className="w-12 h-12 bg-[#FF3E1D] rounded-xl flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2L3 5V10C3 13.5 6.5 16.5 10 18C13.5 16.5 17 13.5 17 10V5L10 2Z"
                      stroke="white"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <path
                      d="M7 10L9 12L13 8"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
                <NumBadge n="04" />
                <h3 className="text-2xl font-bold text-gray-900 leading-9 tracking-tight m-0">
                  Our Commitment: What We Do Not Do
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 text-center border border-[#FFE5DF]">
                  <div className="flex justify-center mb-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.8 13.425L12.825 6.45C13.175 6.3 13.5312 6.1875 13.8938 6.1125C14.2563 6.0375 14.625 6 15 6C16.475 6 17.7188 6.50625 18.7313 7.51875C19.7438 8.53125 20.25 9.775 20.25 11.25C20.25 11.625 20.2125 11.9937 20.1375 12.3562C20.0625 12.7188 19.95 13.075 19.8 13.425ZM5.775 22.65C7.05 21.675 8.475 20.9062 10.05 20.3438C11.625 19.7812 13.275 19.5 15 19.5C15.45 19.5 15.8813 19.5187 16.2938 19.5562C16.7063 19.5938 17.1375 19.65 17.5875 19.725L14.2875 16.425C13.1125 16.275 12.1062 15.7812 11.2688 14.9438C10.4313 14.1063 9.9375 13.1 9.7875 11.925L5.5125 7.65C4.7125 8.675 4.09375 9.80625 3.65625 11.0437C3.21875 12.2812 3 13.6 3 15C3 16.475 3.24375 17.8625 3.73125 19.1625C4.21875 20.4625 4.9 21.625 5.775 22.65ZM24.45 22.35C25.25 21.325 25.875 20.1937 26.325 18.9562C26.775 17.7188 27 16.4 27 15C27 11.675 25.8312 8.84375 23.4937 6.50625C21.1562 4.16875 18.325 3 15 3C13.6 3 12.2812 3.225 11.0437 3.675C9.80625 4.125 8.675 4.75 7.65 5.55L24.45 22.35ZM15.0188 30C12.9563 30 11.0125 29.6063 9.1875 28.8188C7.3625 28.0312 5.76875 26.9562 4.40625 25.5938C3.04375 24.2313 1.96875 22.6375 1.18125 20.8125C0.39375 18.9875 0 17.0438 0 14.9812C0 12.9187 0.39375 10.9812 1.18125 9.16875C1.96875 7.35625 3.04375 5.76875 4.40625 4.40625C5.76875 3.04375 7.3625 1.96875 9.1875 1.18125C11.0125 0.39375 12.9563 0 15.0188 0C17.0812 0 19.0187 0.39375 20.8312 1.18125C22.6437 1.96875 24.2313 3.04375 25.5938 4.40625C26.9562 5.76875 28.0312 7.35625 28.8188 9.16875C29.6063 10.9812 30 12.9187 30 14.9812C30 17.0438 29.6063 18.9875 28.8188 20.8125C28.0312 22.6375 26.9562 24.2313 25.5938 25.5938C24.2313 26.9562 22.6437 28.0312 20.8312 28.8188C19.0187 29.6063 17.0812 30 15.0188 30ZM15 27C16.325 27 17.575 26.8063 18.75 26.4188C19.925 26.0312 21 25.475 21.975 24.75C21 24.025 19.925 23.4688 18.75 23.0812C17.575 22.6937 16.325 22.5 15 22.5C13.675 22.5 12.425 22.6937 11.25 23.0812C10.075 23.4688 9 24.025 8.025 24.75C9 25.475 10.075 26.0312 11.25 26.4188C12.425 26.8063 13.675 27 15 27Z"
                        fill="#FF3E1D"
                      />
                    </svg>
                  </div>
                  <p className="font-bold md:text-base text-lg mb-2">
                    No Selling Data
                  </p>
                  <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                    We do not sell your personal data to third parties for their
                    marketing purposes.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center border border-[#FFE5DF]">
                  <div className="flex justify-center mb-3">
                    <svg
                      width="24"
                      height="30"
                      viewBox="0 0 24 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M10.5 22.5H13.5V13.5H10.5V22.5ZM12 10.5C12.425 10.5 12.7812 10.3563 13.0688 10.0688C13.3563 9.78125 13.5 9.425 13.5 9C13.5 8.575 13.3563 8.21875 13.0688 7.93125C12.7812 7.64375 12.425 7.5 12 7.5C11.575 7.5 11.2188 7.64375 10.9312 7.93125C10.6437 8.21875 10.5 8.575 10.5 9C10.5 9.425 10.6437 9.78125 10.9312 10.0688C11.2188 10.3563 11.575 10.5 12 10.5ZM12 30C8.525 29.125 5.65625 27.1312 3.39375 24.0187C1.13125 20.9062 0 17.45 0 13.65V4.5L12 0L24 4.5V13.65C24 17.45 22.8688 20.9062 20.6063 24.0187C18.3438 27.1312 15.475 29.125 12 30ZM12 26.85C14.6 26.025 16.75 24.375 18.45 21.9C20.15 19.425 21 16.675 21 13.65V6.5625L12 3.1875L3 6.5625V13.65C3 16.675 3.85 19.425 5.55 21.9C7.25 24.375 9.4 26.025 12 26.85Z"
                        fill="#FF3E1D"
                      />{" "}
                    </svg>
                  </div>
                
                  <p className="font-bold md:text-base text-lg mb-2">Private Contacts</p>
                  <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                    We do not share your private contact information with other
                    users except as necessary for the service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="data-values"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="scroll-mt-6 lg:px-2 lg:py-8 md:px-1 md:py-6 scroll-reveal">
                <h3 className="flex items-center gap-2.5 text-2xl font-bold text-gray-900 leading-9 tracking-tight mb-3">
                  <NumBadge n="05" /> Data Security
                </h3>
                <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                  We use industry-standard encryption and secure servers to
                  protect your data from unauthorized access or disclosure.
                </p>
              </div>
              <div className="scroll-mt-6 lg:px-2 lg:py-8 md:px-1 md:py-6 scroll-reveal">
                <h3 className="flex items-center gap-2.5 text-2xl font-bold text-gray-900 leading-9 tracking-tight mb-3">
                  <NumBadge n="06" /> Data Retention
                </h3>
                <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                  We retain data as long as your account is active or as needed
                  to provide services and comply with legal obligations.
                </p>
              </div>
            </div>
          </section>

          <section
            id="security"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <div>
              <SectionHeader
                num="07"
                iconKey="user-rights"
                title="User Rights"
              />
              <div>
                <p className="text-[#444748] text-base md:text-[15px] leading-relaxed mb-5">
                  You have the right to access, correct, or delete your personal
                  information. You may also object to processing or request data
                  portability through your account settings or by contacting us.
                </p>
                <div className="flex flex-wrap gap-3 mb-8 max-sm:justify-center max-sm:flex-col">
                 
                  <button onClick={handleDeleteAccountClick} className="flex items-center gap-2 max-sm:justify-center bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm font-semibold border border-gray-200 cursor-pointer hover-secondary group">
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:rotate-[360deg] transition-transform duration-700"
                    >
                      <path
                        d="M1.75 10.5C1.42917 10.5 1.15451 10.3858 0.926042 10.1573C0.697569 9.92882 0.583333 9.65417 0.583333 9.33333V1.75H0V0.583333H2.91667V0H6.41667V0.583333H9.33333V1.75H8.75V9.33333C8.75 9.65417 8.63576 9.92882 8.40729 10.1573C8.17882 10.3858 7.90417 10.5 7.58333 10.5H1.75ZM7.58333 1.75H1.75V9.33333H7.58333V1.75ZM2.91667 8.16667H4.08333V2.91667H2.91667V8.16667ZM5.25 8.16667H6.41667V2.91667H5.25V8.16667ZM1.75 1.75V9.33333V1.75Z"
                        fill="currentColor"
                      />
                    </svg>
                    Delete Account
                  </button>
                 
                </div>
              </div>
            </div>
          </section>

          <section
            id="location-data"
            className="scroll-mt-6 lg:px-2 lg:py-8 md:px-1 md:py-6 scroll-reveal"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  
                  title: "Location Data",
                  num: "08",
                  desc: "Real-time location data is collected from your device to enable pickups and route tracking. You can disable this in device settings, but service functionality will be limited.",
                },
                {
                  
                  title: "Cookies & Tracking",
                  num: "09",
                  desc: "We use cookies to remember your preferences and analyze traffic. You can manage cookie settings through your browser.",
                },
                {
                  
                  title: "Children's Privacy",
                  num: "10",
                  desc: "Our services are not intended for children under 18. We do not knowingly collect data from minors.",
                },
                {
                 
                  title: "Third-Party Links",
                  num: "11",
                  desc: "Our platform may contain links to external sites. We are not responsible for the privacy practices of those third parties.",
                },
              ].map((item) => (
                <div key={item.title} className="md:p-8 py-2">
                  <h3 className="flex items-center gap-2.5 text-2xl font-bold text-gray-900 leading-9 tracking-tight mb-3">
                    <NumBadge n={item.num} /> {item.title}
                  </h3>
                  <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="policy-updates"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            {/* <div className="border border-[#FFD5CC] rounded-2xl lg:p-12 p-6 flex gap-4 items-start"> */}
             
              <div>
                <h3 className="flex items-center gap-2.5 text-2xl font-bold text-gray-900 leading-9 tracking-tight mb-2">
                  <NumBadge n="12" /> Policy Updates
                </h3>
                <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                  We may update this policy periodically. We will notify you of
                  any significant changes via the app or email. Continued use of
                  the service constitutes acceptance of the revised policy.
                </p>
              </div>
            {/* </div> */}
          </section>

          <section
            id="info-sharing"
            className="scroll-mt-6 lg:p-8 md:p-6 scroll-reveal"
          >
            <SectionHeader
              num="13"
              iconKey="info-sharing"
              title="Information Sharing"
            />
            <div className="flex flex-col gap-5">
              {[
                {
                  // icon: (
                  //   <svg
                  //     width="13"
                  //     height="10"
                  //     viewBox="0 0 13 10"
                  //     fill="none"
                  //     xmlns="http://www.w3.org/2000/svg"
                  //   >
                  //     <path
                  //       d="M0 9.33333V7.7C0 7.36944 0.0850694 7.06563 0.255208 6.78854C0.425347 6.51146 0.651389 6.3 0.933333 6.15417C1.53611 5.85278 2.14861 5.62674 2.77083 5.47604C3.39306 5.32535 4.025 5.25 4.66667 5.25C5.30833 5.25 5.94028 5.32535 6.5625 5.47604C7.18472 5.62674 7.79722 5.85278 8.4 6.15417C8.68194 6.3 8.90799 6.51146 9.07812 6.78854C9.24826 7.06563 9.33333 7.36944 9.33333 7.7V9.33333H0ZM10.5 9.33333V7.58333C10.5 7.15556 10.3809 6.74479 10.1427 6.35104C9.90451 5.95729 9.56667 5.61944 9.12917 5.3375C9.625 5.39583 10.0917 5.49549 10.5292 5.63646C10.9667 5.77743 11.375 5.95 11.7542 6.15417C12.1042 6.34861 12.3715 6.56493 12.5562 6.80312C12.741 7.04132 12.8333 7.30139 12.8333 7.58333V9.33333H10.5ZM4.66667 4.66667C4.025 4.66667 3.47569 4.43819 3.01875 3.98125C2.56181 3.52431 2.33333 2.975 2.33333 2.33333C2.33333 1.69167 2.56181 1.14236 3.01875 0.685417C3.47569 0.228472 4.025 0 4.66667 0C5.30833 0 5.85764 0.228472 6.31458 0.685417C6.77153 1.14236 7 1.69167 7 2.33333C7 2.975 6.77153 3.52431 6.31458 3.98125C5.85764 4.43819 5.30833 4.66667 4.66667 4.66667ZM10.5 2.33333C10.5 2.975 10.2715 3.52431 9.81458 3.98125C9.35764 4.43819 8.80833 4.66667 8.16667 4.66667C8.05972 4.66667 7.92361 4.65451 7.75833 4.63021C7.59306 4.6059 7.45694 4.57917 7.35 4.55C7.6125 4.23889 7.81424 3.89375 7.95521 3.51458C8.09618 3.13542 8.16667 2.74167 8.16667 2.33333C8.16667 1.925 8.09618 1.53125 7.95521 1.15208C7.81424 0.772917 7.6125 0.427778 7.35 0.116667C7.48611 0.0680556 7.62222 0.0364583 7.75833 0.021875C7.89444 0.00729167 8.03056 0 8.16667 0C8.80833 0 9.35764 0.228472 9.81458 0.685417C10.2715 1.14236 10.5 1.69167 10.5 2.33333ZM1.16667 8.16667H8.16667V7.7C8.16667 7.59306 8.13993 7.49583 8.08646 7.40833C8.03299 7.32083 7.9625 7.25278 7.875 7.20417C7.35 6.94167 6.82014 6.74479 6.28542 6.61354C5.75069 6.48229 5.21111 6.41667 4.66667 6.41667C4.12222 6.41667 3.58264 6.48229 3.04792 6.61354C2.51319 6.74479 1.98333 6.94167 1.45833 7.20417C1.37083 7.25278 1.30035 7.32083 1.24688 7.40833C1.1934 7.49583 1.16667 7.59306 1.16667 7.7V8.16667ZM4.66667 3.5C4.9875 3.5 5.26215 3.38576 5.49062 3.15729C5.7191 2.92882 5.83333 2.65417 5.83333 2.33333C5.83333 2.0125 5.7191 1.73785 5.49062 1.50937C5.26215 1.2809 4.9875 1.16667 4.66667 1.16667C4.34583 1.16667 4.07118 1.2809 3.84271 1.50937C3.61424 1.73785 3.5 2.0125 3.5 2.33333C3.5 2.65417 3.61424 2.92882 3.84271 3.15729C4.07118 3.38576 4.34583 3.5 4.66667 3.5Z"
                  //       fill="#FF3E1D"
                  //     />
                  //   </svg>
                  // ),
                  title: "With Other Users:",
                  desc: "We share names and locations between customers and drivers to facilitate the ride.",
                },
                {
                  // icon: (
                  //   <svg
                  //     width="14"
                  //     height="14"
                  //     viewBox="0 0 14 14"
                  //     fill="none"
                  //     xmlns="http://www.w3.org/2000/svg"
                  //   >
                  //     <path
                  //       d="M3.5 13.4167C3.01389 13.4167 2.60069 13.2465 2.26042 12.9062C1.92014 12.566 1.75 12.1528 1.75 11.6667C1.75 11.1806 1.92014 10.7674 2.26042 10.4271C2.60069 10.0868 3.01389 9.91667 3.5 9.91667C3.63611 9.91667 3.7625 9.93125 3.87917 9.96042C3.99583 9.98958 4.10764 10.0285 4.21458 10.0771L5.04583 9.04167C4.77361 8.74028 4.58403 8.4 4.47708 8.02083C4.37014 7.64167 4.34583 7.2625 4.40417 6.88333L3.22292 6.48958C3.05764 6.73264 2.84861 6.92708 2.59583 7.07292C2.34306 7.21875 2.06111 7.29167 1.75 7.29167C1.26389 7.29167 0.850694 7.12153 0.510417 6.78125C0.170139 6.44097 0 6.02778 0 5.54167C0 5.05556 0.170139 4.64236 0.510417 4.30208C0.850694 3.96181 1.26389 3.79167 1.75 3.79167C2.23611 3.79167 2.64931 3.96181 2.98958 4.30208C3.32986 4.64236 3.5 5.05556 3.5 5.54167C3.5 5.56111 3.5 5.58056 3.5 5.6C3.5 5.61944 3.5 5.63889 3.5 5.65833L4.68125 6.06667C4.87569 5.71667 5.13576 5.42014 5.46146 5.17708C5.78715 4.93403 6.15417 4.77847 6.5625 4.71042V3.44167C6.18333 3.33472 5.86979 3.12813 5.62187 2.82188C5.37396 2.51562 5.25 2.15833 5.25 1.75C5.25 1.26389 5.42014 0.850694 5.76042 0.510417C6.10069 0.170139 6.51389 0 7 0C7.48611 0 7.89931 0.170139 8.23958 0.510417C8.57986 0.850694 8.75 1.26389 8.75 1.75C8.75 2.15833 8.62361 2.51562 8.37083 2.82188C8.11806 3.12813 7.80694 3.33472 7.4375 3.44167V4.71042C7.84583 4.77847 8.21285 4.93403 8.53854 5.17708C8.86424 5.42014 9.12431 5.71667 9.31875 6.06667L10.5 5.65833C10.5 5.63889 10.5 5.61944 10.5 5.6C10.5 5.58056 10.5 5.56111 10.5 5.54167C10.5 5.05556 10.6701 4.64236 11.0104 4.30208C11.3507 3.96181 11.7639 3.79167 12.25 3.79167C12.7361 3.79167 13.1493 3.96181 13.4896 4.30208C13.8299 4.64236 14 5.05556 14 5.54167C14 6.02778 13.8299 6.44097 13.4896 6.78125C13.1493 7.12153 12.7361 7.29167 12.25 7.29167C11.9389 7.29167 11.6545 7.21875 11.3969 7.07292C11.1392 6.92708 10.9326 6.73264 10.7771 6.48958L9.59583 6.88333C9.65417 7.2625 9.62986 7.63924 9.52292 8.01354C9.41597 8.38785 9.22639 8.73056 8.95417 9.04167L9.78542 10.0625C9.89236 10.0139 10.0042 9.97743 10.1208 9.95312C10.2375 9.92882 10.3639 9.91667 10.5 9.91667C10.9861 9.91667 11.3993 10.0868 11.7396 10.4271C12.0799 10.7674 12.25 11.1806 12.25 11.6667C12.25 12.1528 12.0799 12.566 11.7396 12.9062C11.3993 13.2465 10.9861 13.4167 10.5 13.4167C10.0139 13.4167 9.60069 13.2465 9.26042 12.9062C8.92014 12.566 8.75 12.1528 8.75 11.6667C8.75 11.4722 8.7816 11.2851 8.84479 11.1052C8.90799 10.9253 8.99306 10.7625 9.1 10.6167L8.26875 9.58125C7.87014 9.80486 7.44479 9.91667 6.99271 9.91667C6.54063 9.91667 6.11528 9.80486 5.71667 9.58125L4.9 10.6167C5.00694 10.7625 5.09201 10.9253 5.15521 11.1052C5.2184 11.2851 5.25 11.4722 5.25 11.6667C5.25 12.1528 5.07986 12.566 4.73958 12.9062C4.39931 13.2465 3.98611 13.4167 3.5 13.4167ZM1.75 6.125C1.91528 6.125 2.05382 6.0691 2.16563 5.95729C2.27743 5.84549 2.33333 5.70694 2.33333 5.54167C2.33333 5.37639 2.27743 5.23785 2.16563 5.12604C2.05382 5.01424 1.91528 4.95833 1.75 4.95833C1.58472 4.95833 1.44618 5.01424 1.33438 5.12604C1.22257 5.23785 1.16667 5.37639 1.16667 5.54167C1.16667 5.70694 1.22257 5.84549 1.33438 5.95729C1.44618 6.0691 1.58472 6.125 1.75 6.125ZM3.5 12.25C3.66528 12.25 3.80382 12.1941 3.91563 12.0823C4.02743 11.9705 4.08333 11.8319 4.08333 11.6667C4.08333 11.5014 4.02743 11.3628 3.91563 11.251C3.80382 11.1392 3.66528 11.0833 3.5 11.0833C3.33472 11.0833 3.19618 11.1392 3.08437 11.251C2.97257 11.3628 2.91667 11.5014 2.91667 11.6667C2.91667 11.8319 2.97257 11.9705 3.08437 12.0823C3.19618 12.1941 3.33472 12.25 3.5 12.25ZM7 2.33333C7.16528 2.33333 7.30382 2.27743 7.41563 2.16563C7.52743 2.05382 7.58333 1.91528 7.58333 1.75C7.58333 1.58472 7.52743 1.44618 7.41563 1.33438C7.30382 1.22257 7.16528 1.16667 7 1.16667C6.83472 1.16667 6.69618 1.22257 6.58437 1.33438C6.47257 1.44618 6.41667 1.58472 6.41667 1.75C6.41667 1.91528 6.47257 2.05382 6.58437 2.16563C6.69618 2.27743 6.83472 2.33333 7 2.33333ZM7 8.75C7.40833 8.75 7.75347 8.60903 8.03542 8.32708C8.31736 8.04514 8.45833 7.7 8.45833 7.29167C8.45833 6.88333 8.31736 6.53819 8.03542 6.25625C7.75347 5.97431 7.40833 5.83333 7 5.83333C6.59167 5.83333 6.24653 5.97431 5.96458 6.25625C5.68264 6.53819 5.54167 6.88333 5.54167 7.29167C5.54167 7.7 5.68264 8.04514 5.96458 8.32708C6.24653 8.60903 6.59167 8.75 7 8.75ZM10.5 12.25C10.6653 12.25 10.8038 12.1941 10.9156 12.0823C11.0274 11.9705 11.0833 11.8319 11.0833 11.6667C11.0833 11.5014 11.0274 11.3628 10.9156 11.251C10.8038 11.1392 10.6653 11.0833 10.5 11.0833C10.3347 11.0833 10.1962 11.1392 10.0844 11.251C9.97257 11.3628 9.91667 11.5014 9.91667 11.6667C9.91667 11.8319 9.97257 11.9705 10.0844 12.0823C10.1962 12.1941 10.3347 12.25 10.5 12.25ZM12.25 6.125C12.4153 6.125 12.5538 6.0691 12.6656 5.95729C12.7774 5.84549 12.8333 5.70694 12.8333 5.54167C12.8333 5.37639 12.7774 5.23785 12.6656 5.12604C12.5538 5.01424 12.4153 4.95833 12.25 4.95833C12.0847 4.95833 11.9462 5.01424 11.8344 5.12604C11.7226 5.23785 11.6667 5.37639 11.6667 5.54167C11.6667 5.70694 11.7226 5.84549 11.8344 5.95729C11.9462 6.0691 12.0847 6.125 12.25 6.125Z"
                  //       fill="#FF3E1D"
                  //     />
                  //   </svg>
                  // ),
                  title: "Service Providers:",
                  desc: "Third-party vendors performing payment processing, data analysis, and email delivery.",
                },
                {
                  // icon: (
                  //   <svg
                  //     width="11"
                  //     height="12"
                  //     viewBox="0 0 11 12"
                  //     fill="none"
                  //     xmlns="http://www.w3.org/2000/svg"
                  //   >
                  //     <path
                  //       d="M0 11.0833V9.91667H7V11.0833H0ZM3.29583 8.25417L0 4.95833L1.225 3.70417L4.55 7L3.29583 8.25417ZM7 4.55L3.70417 1.225L4.95833 0L8.25417 3.29583L7 4.55ZM9.68333 10.5L2.07083 2.8875L2.8875 2.07083L10.5 9.68333L9.68333 10.5Z"
                  //       fill="#FF3E1D"
                  //     />
                  //   </svg>
                  // ),
                  title: "Legal Authorities:",
                  desc: "When required by law or to protect the safety and rights of Aavoride and its users.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <p className="text-[#444748] text-base md:text-[15px] leading-relaxed">
                    <span className="font-bold text-gray-800">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <FooterSection />
    </div>
  );
}
function SectionHeader({ num, iconKey, title }: { num: string; iconKey: string; title: string }) {
  // const icon = sectionIcons[iconKey as keyof typeof sectionIcons];

  return (
    <div className="mb-2">
      <div className="flex items-center gap-4">
        {/* <div
          className="hidden md:flex w-14 h-14 shrink-0 rounded-3xl items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #FF3E1D 0%, #FF8A75 100%)",
            boxShadow:
              "0px 10px 15px -3px rgba(255, 62, 29, 0.3), 0px 4px 6px -4px rgba(255, 62, 29, 0.3)",
          }}
        > */}
          {/* <div className="text-white w-6 h-6 flex items-center justify-center">
            {icon}
          </div> */}
        </div>

        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-[#FF3E1D] text-white rounded-full flex items-center justify-center text-[15px] font-black shrink-0">
            {num}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-9 tracking-tight">
            {title}
          </h2>
        </div>
      </div>
    // </div>
  );
}

function NumBadge({ n }: { n: string }) {
  return (
    <span className="w-8 h-8 bg-[#FF3E1D] text-white rounded-full flex items-center justify-center text-[15px] font-black shrink-0">
      {n}
    </span>
  );
}

function InfoCard({ title, items, wide, variant = "default" }: { title: string; items: string[]; wide?: boolean; variant?: string }) {
  const bgColor =
    variant === "auto"
      ? "bg-[#FFF5F2] border border-[#FF3E1D0D]"
      : "bg-[#F8FAFC] border border-gray-100";

  return (
    <div className={`${bgColor} rounded-2xl p-5 shadow-sm`}>
      <p className="text-lg font-bold text-[#FF3E1D] mb-3">
        • <span className="text-[#111827]">{title}</span>
      </p>
      <ul className="text-[#444748] text-base md:text-[15px] leading-relaxed space-y-1.5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
