"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About Us";
    return null;
  };

  const activeLabel = getActiveLink();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 80);
    setScrolled(latest > 20);
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      // Slide down on mount
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full px-4 md:px-12 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-slate-100"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand Logo — letter stagger on mount */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-[-0.02em] text-brand-primary select-none"
        >
          <motion.span
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            whileTap={{ scale: 0.97 }}
          >
            AAVORide
          </motion.span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link key={link.label} href={link.href}>
              <motion.span
                // Mount: drop in from top with spring
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  delay: 0.12 + i * 0.09,
                }}
                // Hover: slight lift
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
                className={`relative text-[14px] tracking-[0.02em] pb-1 font-bold transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                  after:h-0.5 after:rounded-full after:transition-all after:duration-500
                  ${activeLabel === link.label
                    ? "text-brand-primary after:w-full after:bg-brand-primary"
                    : "text-foreground hover:text-brand-primary after:w-0 after:bg-brand-primary hover:after:w-full"
                  }`}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        {/* <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        > */}
          <Button variant="primary" size="sm" asLink href="/about/partner" className="text-[14px] font-semibold">
            Join as a AAVORide Partner
          </Button>
        {/* </motion.div> */}

        {/* Mobile Hamburger — animated bars */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-hidden cursor-pointer"
          aria-label="Toggle navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full origin-center block"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full block"
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground rounded-full origin-center block"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Drawer — slides down with staggered links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-100 shadow-lg"
          >
            <motion.div
              className="p-6 flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                    <motion.span
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                        delay: 0.05 + i * 0.07,
                      }}
                      whileHover={{ x: 6, color: "var(--color-primary-orange)" }}
                      whileTap={{ scale: 0.97 }}
                      className={`text-base py-2.5 px-1 border-b border-slate-50 last:border-0 ${
                        activeLabel === link.label
                          ? "font-bold text-brand-primary"
                          : "font-semibold text-foreground"
                      }`}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
              </nav>

              <button
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/about/partner';
                }}
                className="inline-flex items-center justify-center w-full px-4 py-2 text-[14px] font-semibold text-white bg-[#FF4D30] rounded-full hover:bg-[#e03d20] transition-all duration-200 active:scale-[0.98] cursor-pointer text-center border-none"
              >
                Join as a AAVORide Partner
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
