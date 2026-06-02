import Link from "next/link";
import { Apple, Play } from "lucide-react";
import { SectionContainer } from "./shared";

export function AppDownloadSection() {
  return (
    <section className="relative overflow-hidden bg-[#1c1c1c] py-12 text-white md:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1e1e1e_0%,#1b1b1b_52%,#191919_100%)]" />
      <SectionContainer className="relative z-10">
        <div className="landing-section-body">
          <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
            <h2 className="text-[44px] font-extrabold leading-[0.96] tracking-[-0.05em] text-white md:text-[64px]">
              Your next ride starts in the app.
            </h2>
            <p className="mt-5 max-w-[440px] text-[16px] leading-7 text-white/58 md:text-[18px]">
              Join the electric revolution of urban mobility today.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] px-8 py-3 text-[16px] font-bold text-white shadow-[0_16px_32px_rgba(255,62,29,0.26)] sm:w-auto cursor-default"
                type="button"
              >
                <Apple className="h-5 w-5" strokeWidth={2.2} />
                App Store
              </button>
              
              <Link
                href="https://play.google.com/store/apps/details?id=com.aavoride"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3 text-[16px] font-bold text-[#1b1a1a] shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                  type="button"
                >
                  <Play className="h-5 w-5 fill-current" strokeWidth={2.2} />
                  Play Store
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
