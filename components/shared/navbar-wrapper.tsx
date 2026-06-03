"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function NavbarWrapper() {
  const pathname = usePathname();
  const isLegalPage = pathname === "/privacy-policy" || pathname === "/terms-and-conditions";

  return (
    <div className={`pt-4 sm:pt-5 md:pt-6 ${isLegalPage ? "bg-[#FF3E1D]" : ""}`}>
      <Navbar />
    </div>
  );
}
