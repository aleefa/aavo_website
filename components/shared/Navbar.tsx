"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { heroHighlights, heroStats, navItems } from "@/components/landing/landing-data";
import { MobileHeaderNav } from "@/components/landing/mobile-header-nav";
import { Reveal } from "@/components/landing/motion";
import { PrimaryButton, SectionContainer, cn } from "@/components/landing/shared";

export function Navbar() {
  const pathname = usePathname();

  const getActiveItem = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About Us";
    return null;
  };

  const activeLabel = getActiveItem();

  return (
    <>
      <Reveal className="relative z-40 md:hidden" delayMs={0}>
        <MobileHeaderNav items={navItems} activeLabel={activeLabel} />
      </Reveal>

      <Reveal className="relative z-40 hidden md:block" delayMs={0}>
        <nav className="mx-auto flex w-full max-w-[986px] flex-col items-center gap-3 rounded-[28px] border border-[#f3f3f3] bg-white px-4 py-3 sm:px-5 md:relative md:min-h-[68px] md:flex-row md:flex-wrap md:justify-between md:gap-5 md:rounded-full md:px-6 md:py-3 lg:flex-nowrap lg:gap-6">
          <div className="whitespace-nowrap text-[25px] font-extrabold leading-none tracking-[-0.04em] text-[var(--primary)]">
            AAVORide
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] font-semibold leading-none text-[#564f4b] sm:text-[14px] md:w-auto md:gap-6 lg:absolute lg:left-1/2 lg:top-1/2 lg:flex-nowrap lg:gap-8 lg:-translate-x-1/2 lg:-translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className={cn(
                  "relative whitespace-nowrap pb-[6px] transition-colors duration-300 hover:text-[var(--primary)]",
                  activeLabel === item.label &&
                  "text-[var(--primary)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--primary)]",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/about/partner">
            <PrimaryButton className="h-[44px] w-full whitespace-nowrap bg-[linear-gradient(180deg,#ff3e1d_0%,#ff3e1d_100%)] px-[25px] py-0 text-[13px] font-semibold tracking-[-0.01em] sm:w-auto">
              Join as a AAVORide Partner
            </PrimaryButton>
          </Link>
        </nav>
      </Reveal>
    </>
  );
}
