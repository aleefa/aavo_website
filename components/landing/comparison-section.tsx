import type { ComparisonIconName, ComparisonItem } from "./landing-types";
import { aavoRideItems, traditionalCabItems } from "./landing-data";
import Image from "next/image";
import {
  BadgeCheck,
  Clock3,
} from "lucide-react";
import {
  ShieldIcon,
  XCircleIcon,
} from "./icons";
import { AmbientGlow } from "./ambient-glow";
import { Eyebrow, SectionContainer, SectionHeading, cn } from "./shared";

function ComparisonFeatureIcon({
  icon,
  positive,
}: {
  icon: ComparisonIconName;
  positive: boolean;
}) {
  const iconMap: Record<string, string> = {
    shield: "/comparison.png",
    rupee: "/comparison11.png",
    headset: "/comparison12.png",
    sparkle: "/comparison13.png",
    link: "/comparison14.png",
    calendar: "/comparison15.png",
    car: "/comparison16.png",
  };

  const iconSrc = iconMap[icon] || "/comparison1.png";

  // comparison.png already has its own background, so don't add wrapper background
  const hasOwnBackground = icon === "shield";
  const wrapperClass = positive && !hasOwnBackground
    ? "bg-[rgba(255,62,29,0.08)] text-[var(--primary)]"
    : "bg-transparent text-[var(--primary)]";

  // comparison.png is visually smaller, so increase its display size
  const imageSize = hasOwnBackground ? 40 : 30;

  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px]",
        wrapperClass,
      )}
    >
      {positive ? (
        <Image src={iconSrc} alt={icon} width={imageSize} height={imageSize} className={`h-[${imageSize}px] w-[${imageSize}px]`} />
      ) : (
        <XCircleIcon className="h-7 w-7" />
      )}
    </div>
  );
}

function ComparisonPanel({
  title,
  items,
  positive,
}: {
  title: string;
  items: ComparisonItem[];
  positive?: boolean;
}) {
  return (
    <div className="glass-panel-soft motion-card-hover relative rounded-[28px] px-7 pb-8 pt-10 md:px-8">
      <div
        className={cn(
          "absolute right-0 top-0 rounded-bl-[26px] rounded-tr-[28px] px-7 py-4 text-[15px] font-bold",
          positive
            ? "bg-[var(--primary)] text-white"
            : "bg-[#ebe7e5] text-[#6c6764]",
        )}
      >
        {title}
      </div>
      <div className="space-y-6 pt-3">
        {items.map((item) => (
          <div key={item.title} className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
            <ComparisonFeatureIcon icon={item.icon} positive={Boolean(positive)} />
            <div>
              <p className="text-[15px] font-extrabold leading-6 text-[#2a2421] md:text-[17px]">
                {item.title}
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[var(--muted-foreground)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <AmbientGlow
        className="right-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="flex flex-wrap justify-center gap-3">
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<ShieldIcon className="h-3.5 w-3.5" />}
          >
            Safe Ride
          </Eyebrow>
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<BadgeCheck className="h-3.5 w-3.5" />}
            tone="blue"
          >
            Verified
          </Eyebrow>
          <Eyebrow
            className="px-4 py-2 text-[11px] normal-case tracking-normal"
            icon={<Clock3 className="h-3.5 w-3.5" />}
            tone="slate"
          >
            24 / 7
          </Eyebrow>
        </div>

        {/* <SectionHeading
          className="mt-8 text-center"
         
          centered={true}
          description="Get quotations from multiple drivers and travel agencies with a single request and choose the best deal."
          title={
            <>
              Why Pay More When You Can{" "}
              <span className="text-[var(--primary)]">Compare?</span>
            </>
          }
          titleClassName="md:whitespace-nowrap"
        /> */}

         {/* <div className="mx-auto mt-8 max-w-[760px] text-center">
          <h2 className="text-[clamp(2rem,7vw,3.375rem)] font-extrabold leading-[1.3] md:leading-[1.08] tracking-[-0.04em] text-[#201d1b]">
            Why Pay More When You Can{" "}
            <span className="text-[var(--primary)]">Compare?</span>
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[18px] md:leading-8">
            Get quotations from multiple drivers and travel agencies with a single request and choose the best deal.
          </p>
        </div> */}

      <SectionHeading
            className="mt-8 max-w-none"
            centered={true}
            titleClassName="text-center md:whitespace-nowrap"
            description="Get quotations from multiple drivers and travel agencies with a single request and choose the best deal."
            title={
              <>
                Why Pay More When You Can{" "}
                <span className="text-[var(--primary)]">Compare?</span>
              </>
            }
          />

        <div className="landing-section-body mt-14 grid gap-5 lg:grid-cols-2">
          <ComparisonPanel items={traditionalCabItems} title="Traditional Cabs" />
          <ComparisonPanel items={aavoRideItems} positive title="AAVORide Experience" />
        </div>
      </SectionContainer>
    </section>
  );
}
