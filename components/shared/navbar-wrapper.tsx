"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function NavbarWrapper() {
  const pathname = usePathname();
  const isLegalPage = pathname === "/privacy-policy" || pathname === "/terms-and-conditions" || pathname === "/account-deletion";
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <div className={`${isBlogPage ? "absolute top-0 left-0 right-0 z-50 pt-4 sm:pt-5 md:pt-6" : `pt-4 sm:pt-5 md:pt-6 ${isLegalPage ? "bg-[#FF3E1D]" : ""}`}`}>
      <Navbar />
    </div>
  );
}
