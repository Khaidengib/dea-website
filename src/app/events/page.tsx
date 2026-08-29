"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/content";

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.status === tab);

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Events</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Conferences, Workshops & Competitions
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <SectionHeading eyebrow="Calendar" title="All Events" />
          <div className="flex shrink-0 rounded-sm border border-silver-400/60 p-1">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-sm px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                  tab === t ? "bg-navy-950 text-white" : "text-navy-800 hover:bg-silver-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-navy-700/70">
            No {tab} events right now — check back soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={i * 70}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
