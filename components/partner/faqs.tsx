import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AmbientGlow } from "../landing/ambient-glow";
import { Eyebrow, SectionContainer, SectionHeading } from "../landing/shared";

const faqs = [
  {
    question: "What is AAVORide Partner?",
    answer:
      "AAVORide Partner is an app for drivers and rental agencies to receive ride bookings and earn money by providing ride services to passengers.",
  },
  {
    question: "How can I register as a driver?",
    answer:
      "Download the AAVORide Partner app, complete the registration process, upload your documents, and wait for approval.",
  },
  {
    question: "How can a rental agency join AAVORide?",
    answer:
      "Rental agencies can register multiple vehicles and drivers through the Partner app by submitting business and vehicle documents.",
  },
  {
    question: "What documents are required for driver registration?",
    answer:
      "You need a valid driving license, vehicle RC, insurance, PUC certificate, and Aadhaar or other identity proof.",
  },
  {
    question: "How do I receive ride requests?",
    answer: "Once your account is approved and you go online in the Partner app, nearby ride requests will appear on your screen.",
  },
  {
    question: "How do I get paid for rides?",
    answer: "Drivers receive 100% of the ride fare directly from the rider. AAVORide does not take any commission. Partners only need an active membership to access ride bookings.",
  },
  {
    question: "Can I add multiple vehicles in one account?",
    answer: "Yes, rental agencies can add and manage multiple vehicles and drivers under a single account.",
  },
  {
    question: "Is there any commission on rides?",
    answer: "No. AAVORide follows a 0% commission model. Drivers receive 100% of the ride fare and only need an active membership to access ride bookings.",
  },
  {
    question: "Why should I join AAVORide Partner?",
    answer:
      "AAVORide offers a 0% commission model, allowing drivers and rental agencies to keep 100% of their ride earnings with only a simple membership subscription.",
  },
];

export function Faqs() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <AmbientGlow
        className="hidden lg:block lg:left-[-252px] lg:top-1/2 lg:-translate-y-1/2"
        style={{ width: "570px", height: "570px" }}
        tone="orange"
      />
      <SectionContainer>
        <div className="landing-section-body">
          <div className="flex justify-center">
            <Eyebrow className="px-4 py-2 text-[10px] tracking-[0.18em]">Support Center</Eyebrow>
          </div>

          <SectionHeading
            className="mt-7 max-w-[920px] [&_h2]:text-[46px] [&_h2]:leading-[1.02] md:[&_h2]:text-[60px] [&_p]:mt-6 [&_p]:text-[18px] [&_p]:leading-[1.85]"
            description="Everything you need to know about bookings, drivers, payments, and travel experience."
            title="Frequently Asked Questions"
          />

          <div className="mx-auto mt-12 max-w-[860px]">
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group motion-card-hover rounded-[28px] border border-[#f1e9e5] bg-white shadow-[0_10px_22px_rgba(31,27,24,0.04)] transition-colors open:border-[#efd8cf]"
                >
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-6 text-left text-[16px] font-medium text-[#6d6866] [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      className="h-[18px] w-[18px] shrink-0 text-[var(--primary)] transition-transform duration-200 group-open:rotate-180"
                      strokeWidth={1.8}
                    />
                  </summary>
                  <div className="px-6 pb-6 pt-1">
                    <p className="text-[15px] leading-8 text-[#6f6966]">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="motion-card-hover relative mt-7 flex flex-col gap-4 rounded-[22px] border border-transparent px-6 py-6 max-md:z-10 max-md:bg-[#fff1ef] max-md:shadow-[0_12px_30px_rgba(31,27,24,0.14),0_8px_22px_rgba(255,62,29,0.16)] sm:flex-row sm:items-center sm:justify-between md:bg-[rgba(255,62,29,0.08)] md:px-7 md:py-7 md:shadow-[0_16px_36px_rgba(255,62,29,0.14),0_6px_16px_rgba(31,27,24,0.06)]">
              <div>
                <p className="text-[16px] font-bold tracking-[-0.02em] text-[var(--primary-strong)]">
                  Still have questions?
                </p>
                <p className="mt-2 text-[14px] leading-6 text-[#7a726f]">
                  We&apos;re here to help you anytime.
                </p>
              </div>
              <Link
                href="https://wa.me/919712387840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-[var(--primary)] px-7 text-[15px] font-bold text-white shadow-[0_14px_24px_rgba(255,62,29,0.2)]"
                  type="button"
                >
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
