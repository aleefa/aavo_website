"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function NavbarWrapper() {
  const pathname = usePathname();
  const isLegalPage = pathname === "/privacy-policy" || pathname === "/terms-and-conditions";
  const hideNavbar = pathname === "/account-deletion";

  if (hideNavbar) {
    return null;
  }

  return (
    // <div className={`pt-4 sm:pt-5 md:pt-6 ${isLegalPage ? "bg-gradient-to-b from-[#FF3E1D] to-[#EC7F6C]" : ""}`}>
      <div className={`pt-4 sm:pt-5 md:pt-6 ${isLegalPage ? "bg-[#FF3E1D]" : ""}`}>
      <Navbar />
    </div>
  );
}
