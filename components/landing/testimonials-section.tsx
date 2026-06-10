import type { CSSProperties } from "react";
import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import { AmbientGlow } from "./ambient-glow";
import { HorizontalAutoSlideTrack } from "./horizontal-auto-slide-track";
import { cn, Eyebrow, SectionContainer, SectionHeading } from "./shared";

const testimonials = [
     {
    quote:
      "AAVORide makes daily travel planning much easier. Instead of calling multiple drivers, I receive several quotations in one place and choose the best option. It saves both time and money.",
    name: "Mayur Pathani",
    role: "Daily Commuter",
    avatar: "/images/65fdd9e521f2e608e8ae7971ad0d33a6018e215b%20%281%29.jpg ",
  },
    {
    quote:
      "I used AAVORide for a weekend getaway with friends. Comparing offers from different drivers helped us find the perfect vehicle within our budget. The process was simple and hassle-free.",
    name: "Jenish Panchal",
    role: "Weekend Explorer",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
    {
    quote:
      "As someone who travels regularly, AAVORide has become my go-to platform. Getting multiple quotations from verified service providers gives me confidence that I'm getting competitive rates every time",
    name: "Prince Patel",
    role: "Frequent Traveler",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
    {
    quote:
      "What I like most about AAVORide is the transparency. I can compare different travel options before making a decision, which helps me plan trips more effectively",
    name: "Hiren Padsala",
    role: "Weekend Explorer",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
      {
    quote:
      "Booking travel for family outings used to take a lot of effort. With AAVORide, I simply submit one request and receive several offers. It makes choosing the right driver much easier.",
    name: "Shraddha Prajapati",
    role: "Weekend Explorer",
    avatar: "/images/65fdd9e521f2e608e8ae7971ad0d33a6018e215b%20%281%29.jpg ",
  },
      {
    quote:
      "The platform is straightforward and user-friendly. I appreciate having multiple options instead of depending on a single service provider. It gives me better control over my travel choices.",
    name: "Ashokbhai Shah",
    role: "Daily Commuter",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
      {
    quote:
      "AAVORide offers a smart way to book outstation and local travel. The ability to compare quotations from different drivers ensures I always find a suitable option for my requirements.",
    name: "Harsh Sharma",
    role: "Frequent Traveler",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
      {
    quote:
      "Excellent concept and easy to use. I received multiple quotations within a short time and was able to select the one that matched my budget and travel needs perfectly.",
    name: "Abhishek Malhotra",
    role: "Weekend Explorer",
    avatar: "/images/831ee7667b037b80573f122c53c53aff4e87f947%20(1).jpg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className="testimonial-card motion-card-hover flex h-[340px] w-[380px] shrink-0 flex-col rounded-[24px] border border-transparent bg-white p-7 shadow-[0_18px_36px_rgba(31,27,24,0.06)] md:p-8">
      <div className="flex items-center gap-1 text-[var(--primary)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.8} />
        ))}
      </div>

      <p className="mt-6 text-[15px] leading-8 text-[#625d5a]">{testimonial.quote}</p>

      <div className="mt-auto flex items-center gap-3.5">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image alt={testimonial.name} className="object-cover" fill sizes="44px" src={testimonial.avatar} />
        </div>
        <div>
          <p className="text-[15px] font-bold tracking-[-0.02em] text-[#201d1b]">
            {testimonial.name}
          </p>
          <p className="text-[13px] text-[#8a837f]">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialRail({
  idPrefix,
  className,
}: {
  idPrefix: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-max gap-[clamp(1rem,2vw,1rem)] py-3.5", className)}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={`${idPrefix}-${testimonial.name}`} testimonial={testimonial} />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const sliderStyle = {
    "--auto-slide-duration": "35s",
  } as CSSProperties;

  return (
    <section className="relative overflow-hidden pb-6 pt-18 md:pb-6 md:pt-20">
      <AmbientGlow
        className="right-[-252px] top-1/2 -translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body h-full">
          <div className="flex justify-center">
            <Eyebrow
              className="px-4 py-2 text-[10px] tracking-[0.18em]"
              icon={<BadgeCheck className="h-[15px] w-[15px]" strokeWidth={2} />}
            >
              Trusted By Travelers
            </Eyebrow>
          </div>

          <SectionHeading
            accent="Our Travelers."
            className="mt-7 max-w-[960px] [&_h2]:text-[44px] [&_h2]:leading-[1.02] md:[&_h2]:text-[62px] [&_p]:mt-6 [&_p]:text-[18px] [&_p]:leading-[1.8]"
            description="Honest reviews from people who travel smart with AAVORide."
            title="Stories from Our Travelers."
          />

          <div className="full-bleed-strip testimonial-slider-strip -mt-4 md:-mt-6">
            <div className="auto-slide-showcase testimonial-slide-showcase w-full p-0" style={sliderStyle}>
              <HorizontalAutoSlideTrack
                scrollSpeed={35}
                sliderClassName="testimonial-vertical-auto-slider py-[90px]!"
                trackClassName="testimonial-auto-slide-track gap-4!"
              >
                <TestimonialRail idPrefix="testimonials-primary" />
                <TestimonialRail idPrefix="testimonials-clone" />
              </HorizontalAutoSlideTrack>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
