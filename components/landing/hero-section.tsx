import Link from "next/link";
import Image from "next/image";
import {
  DownloadIcon,
  PartnerIcon,
} from "./icons";
import { BadgeCheck } from "lucide-react";
import { AnimatedStatValue } from "./animated-stat-value";
import { AvatarStack } from "./illustrations";
import {  heroStats } from "./landing-data";
import { Reveal } from "./motion";
import { HeroPhoneStage } from "./hero-phone-stage";
import { Eyebrow, OutlineButton, PrimaryButton, SectionContainer } from "./shared";

export function HeroSection() {
  return (
    <section className="relative pt-4 sm:pt-5 md:pt-6" id="home">
      <SectionContainer className="relative max-w-[1268px]">
        <div className="relative grid gap-8 pb-8 pt-8 sm:gap-10 sm:pt-10 sm:pb-10 md:gap-12 md:pt-12 lg:grid-cols-[minmax(0,548px)_minmax(0,1fr)] lg:items-center lg:gap-[34px] lg:pb-12 lg:pt-[64px] xl:gap-[52px]">
          <Reveal className="relative z-10 w-full lg:max-w-[580px] lg:pb-8 lg:pt-2" delayMs={120}>
            <Eyebrow
              className="px-4 py-2 text-[11px] normal-case tracking-normal shadow-[0_10px_20px_rgba(255,62,29,0.04)]"
              icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
            >
              Service Available in your city
            </Eyebrow>

            <h1 className="mt-7 text-[clamp(2.35rem,9vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#201d1b]">
              One Request.
              <span className="mt-1 block text-[var(--primary)]">Multiple Quotes.</span>
              <span className="mt-7 text-[clamp(2.35rem,9vw,4.25rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#201d1b]">
               Better Choice.
              </span>
            </h1>
{/* 
            <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] font-medium text-black sm:gap-x-3 sm:text-[13px]">
              {heroHighlights.map((item, index) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3">
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                    />
                  ) : null}
                  <span className="whitespace-nowrap">{item}</span>
                </li>
              ))}
            </ul> */}

            <p className="mt-7 max-w-[540px] text-[16px] leading-[1.9] text-[var(--muted-foreground)] sm:text-[17px] sm:leading-[2]">
              <span className="font-semibold text-[var(--primary)]">AAVORide </span> is a smart mobility marketplace where travelers receive competitive quotations from verified drivers and travel agencies through a single request. Compare offers, choose the best option, and travel with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-2">
                <Image src="/home1.png" alt="Multiple Quotes" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-center text-[11px] font-medium leading-tight text-[#38312d] sm:text-[12px]">
                  Multiple Quotes<br />Best Prices
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/home2.png" alt="Verified Drivers" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-center text-[11px] font-medium leading-tight text-[#38312d] sm:text-[12px]">
                  Verified Drivers<br />& Agencies
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/home3.png" alt="Free Cancellation" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-center text-[11px] font-medium leading-tight text-[#38312d] sm:text-[12px]">
                  Free<br />Cancellation
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/home4.png" alt="Zero Commission" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-center text-[11px] font-medium leading-tight text-[#38312d] sm:text-[12px]">
                  Zero<br />Commission
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src="/home6.png" alt="Direct Communication" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" />
                <p className="text-center text-[11px] font-medium leading-tight text-[#38312d] sm:text-[12px]">
                  Direct<br />Communication
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.aavoridepartner" target="_blank" rel="noopener noreferrer">
                <OutlineButton
                  className="w-full min-w-[170px] px-7 py-[15px] text-[15px] shadow-none hover:shadow-none sm:w-auto"
                  icon={<PartnerIcon className="h-5 w-5" />}
                >
                  Become a Partner
                </OutlineButton>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.aavoride" target="_blank" rel="noopener noreferrer">
                <PrimaryButton
                  className="w-full min-w-[146px] px-7 py-[15px] text-[15px] shadow-none hover:shadow-none sm:w-auto"
                  icon={<DownloadIcon className="h-5 w-5" />}
                >
                  Download App
                </PrimaryButton>
              </Link>
            </div>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <AvatarStack />
              <p className="text-[15px] text-[#38312d]">
                <span className="font-extrabold text-[var(--primary)]">4.9/5 Rating</span>{" "}
                <span className="text-black">from 1k+ Happy Travelers</span>
              </p>
            </div>
          </Reveal>

          <Reveal
            className="relative z-10 mx-auto flex w-full min-w-0 max-w-[480px] items-center justify-center xs:max-w-[540px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-none lg:justify-self-end lg:justify-end xl:min-w-[724px]"
            delayMs={220}
            distance={36}
          >
            <HeroPhoneStage />
          </Reveal>
        </div>
      </SectionContainer>

      <Reveal className="relative z-30" delayMs={120}>
        <div className="full-bleed-strip relative z-30 border-t border-[#f1f1f1] bg-[#FFF1EF] py-8 md:py-11">
          <SectionContainer className="max-w-[1268px]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-panel-soft motion-hover-lift flex flex-col items-center justify-center text-center max-md:h-[148px] max-md:w-full max-md:rounded-[32px] max-md:p-6 md:rounded-[28px] md:px-7 md:py-7"
                >
                  <p className="text-[28px] font-extrabold leading-none tracking-[-0.05em] text-[var(--primary)] sm:text-[32px] md:text-[42px]">
                    <AnimatedStatValue delayMs={index * 120} value={stat.value} />
                  </p>
                  <p className="mt-2 text-[14px] font-medium leading-snug text-[#66605c] sm:text-[15px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionContainer>
        </div>
      </Reveal>
    </section>
  );
}
