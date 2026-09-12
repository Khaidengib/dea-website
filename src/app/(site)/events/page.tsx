import type { Metadata } from "next";
import { getEvents } from "@/lib/data";
import EventsTabs from "./EventsTabs";

export const metadata: Metadata = {
  title: "Events",
  description: "Conferences, workshops, and competitions hosted by Dallas Entrepreneurial Alliance.",
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getEvents();

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
        <EventsTabs events={events} />
      </section>
    </>
  );
}
