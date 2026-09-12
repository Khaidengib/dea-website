import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import SkylineMark from "@/components/SkylineMark";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "DEA's areas of focus: economics, entrepreneurship, leadership, financial literacy, research & innovation, and events.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <SkylineMark variant="full" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">What We Do</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Six Pillars. One Curriculum.
          </h1>
        </div>
      </section>

      {pillars.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`scroll-mt-20 px-6 py-20 sm:px-8 ${i % 2 === 1 ? "bg-silver-100" : ""}`}
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950">{p.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-navy-800/80">{p.detail}</p>
                </div>
                <div className="rounded-md border border-silver-300/60 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-600/70">
                    Topics include
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy-950/10 bg-silver-100 px-3 py-1.5 text-sm text-navy-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Events & Experiences"
            title="Where It All Comes Together"
            description="Conferences, workshops, guest speakers, panels, networking events, and competitions turn every pillar into hands-on experience."
          />
        </Reveal>
      </section>

      <CTASection
        title="Explore Every Pillar in Practice"
        description="See what's coming up next across DEA's events and initiatives."
        primary={{ label: "View Events", href: "/events" }}
        secondary={{ label: "View Initiatives", href: "/initiatives" }}
      />
    </>
  );
}
