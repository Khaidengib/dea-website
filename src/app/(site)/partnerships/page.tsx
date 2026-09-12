import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import SkylineMark from "@/components/SkylineMark";
import { partnershipOpportunities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Partner with Dallas Entrepreneurial Alliance through speaking, mentorship, sponsorship, and more.",
};

export default function PartnershipsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <SkylineMark variant="full" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Partnerships</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Partner With DEA
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver-400">
            DEA works with organizations, businesses, professionals, schools, and community
            partners to create meaningful opportunities for students.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Ways to Partner" title="Partnership Opportunities" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipOpportunities.map((opp, i) => (
            <Reveal key={opp} delay={i * 40}>
              <div className="card-lift rounded-md border border-silver-300/60 bg-white p-6 text-center">
                <p className="font-display text-base font-semibold text-navy-950">{opp}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="rounded-sm bg-navy-950 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Become a Partner →
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Help Shape the Next Generation of Dallas Leaders"
        description="Whether it's a single guest talk or an ongoing partnership, DEA makes it easy to get involved."
        primary={{ label: "Start the Conversation", href: "/contact" }}
      />
    </>
  );
}
