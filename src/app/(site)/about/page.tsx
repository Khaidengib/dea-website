import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import SkylineMark from "@/components/SkylineMark";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, vision, and values behind Dallas Entrepreneurial Alliance, a student-led network for ambitious Dallas-area students.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <SkylineMark variant="full" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">About DEA</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            A Network Built by Students, for Students.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Our Story" title="How DEA Started" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-800/85">
            <p>
              Dallas Entrepreneurial Alliance began with a simple observation: the students most
              curious about business, economics, and leadership rarely had a place built for that
              curiosity — until college, or sometimes not at all. DEA was founded to close that
              gap, giving ambitious Dallas-area students a real network to explore those ideas
              years earlier, alongside peers from other schools who share the same drive.
            </p>
            <p>
              What started as a small group of students meeting to discuss markets and business
              ideas has grown into a cross-school organization with a structured curriculum,
              recurring events, and a leadership pipeline entirely run by students.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-silver-100 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-md border border-silver-300/60 bg-white p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-600">
                Our Mission
              </p>
              <p className="mt-4 font-display text-2xl font-medium leading-snug text-navy-950">
                Dallas Entrepreneurial Alliance exists to empower students to become informed,
                innovative, and purposeful leaders by creating opportunities to explore
                economics, entrepreneurship, leadership, and the ideas shaping the future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-md border border-silver-300/60 bg-white p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-600">
                Our Vision
              </p>
              <p className="mt-4 font-display text-2xl font-medium leading-snug text-navy-950">
                A connected ecosystem of ambitious young leaders across every school in Dallas —
                supported by mentors, employers, and each other.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Our Values" title="What We Stand For" align="center" />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 50}>
              <div className="card-lift h-full rounded-md border border-silver-300/60 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-navy-950">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading dark eyebrow="What Makes DEA Different" title="Not Your Typical School Club" />
            <p className="mt-6 text-base leading-relaxed text-silver-400">
              Most school clubs stop at the edge of campus. DEA is designed as a cross-school
              network and platform — students from different schools collaborate on the same
              initiatives, attend the same events, and build the same relationships. That
              structure gives members access to a bigger community, a wider range of mentors,
              and opportunities no single school club could offer alone.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Be Part of It?"
        description="DEA is open to ambitious students across the Dallas area, regardless of school or experience level."
        primary={{ label: "Join DEA", href: "/join" }}
        secondary={{ label: "Meet the Team", href: "/leadership" }}
      />
    </>
  );
}
