import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SkylineMark from "@/components/SkylineMark";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import StatCard from "@/components/StatCard";
import PillarCard from "@/components/PillarCard";
import EventCard from "@/components/EventCard";
import PersonCard from "@/components/PersonCard";
import CTASection from "@/components/CTASection";
import { pillars, whyDea } from "@/lib/content";
import { getEvents, getLeadership, getSiteSettings } from "@/lib/data";

export const revalidate = 60;

export default async function Home() {
  const [settings, events, leadership] = await Promise.all([
    getSiteSettings(),
    getEvents(),
    getLeadership(),
  ]);
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);
  const featuredLeaders = leadership.slice(0, 4);
  const stats = settings.stats ?? [];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="animate-drift pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,193,207,0.14),transparent_55%)]" />
        <SkylineMark
          variant="full"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-50"
        />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 py-28 sm:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">
            Dallas Entrepreneurial Alliance
          </p>
          <h1
            className="animate-fade-up mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Building the Next Generation of{" "}
            <span className="metal-text">Dallas Leaders.</span>
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-silver-400"
            style={{ animationDelay: "160ms" }}
          >
            {settings.heroSubtext}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-b from-silver-200 to-silver-400 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-all hover:from-white hover:to-silver-300"
            >
              Join DEA
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex items-center justify-center rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Explore What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-14 px-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {stats.map((s, i) => (
                <StatCard key={`${s.label}-${i}`} label={s.label} value={s.value} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About DEA"
              title={settings.aboutHeadline ?? "A Student-Led Network for Ambition, Ideas, and Opportunity."}
            />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-700/80">
              {settings.aboutBody}
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 underline decoration-silver-400 underline-offset-4 hover:decoration-navy-950"
            >
              Learn About DEA <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
              <SkylineMark variant="full" className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-60" />
              <p className="relative px-10 text-center font-display text-2xl font-medium text-silver-200">
                &ldquo;Economics, entrepreneurship, and leadership — taught by students, for
                students.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-silver-100 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Six Areas. One Community."
              description="Every DEA member builds skills across these pillars — through workshops, competitions, research, and hands-on leadership."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <PillarCard slug={p.slug} title={p.title} description={p.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured Initiatives" title="Upcoming Events" />
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 underline decoration-silver-400 underline-offset-4"
            >
              View all events <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.id} delay={i * 80}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP PREVIEW */}
      <section className="bg-silver-100 py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Our Team" title="Meet DEA Leadership" />
              <Link
                href="/leadership"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 underline decoration-silver-400 underline-offset-4"
              >
                Meet the Team <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredLeaders.map((l, i) => (
              <Reveal key={l.id} delay={i * 60}>
                <PersonCard name={l.name} position={l.position} bio={l.bio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DEA */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-md bg-navy-950">
              <SkylineMark variant="full" className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <span className="font-display text-7xl font-semibold text-silver-300/90">DEA</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Why DEA" title="Not a Club. A Network." />
            <ul className="mt-7 space-y-4">
              {whyDea.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy-800/85">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-navy-700" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Your Ideas Can Shape What Comes Next."
        description="Join a growing community of students building the skills, relationships, and ideas that will shape their future."
        primary={{ label: "Join DEA", href: "/join" }}
        secondary={{ label: "Partner With Us", href: "/partnerships" }}
      />
    </>
  );
}
