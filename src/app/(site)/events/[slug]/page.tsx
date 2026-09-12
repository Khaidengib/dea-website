import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react";
import SkylineMark from "@/components/SkylineMark";
import { getEvents } from "@/lib/data";

export const revalidate = 60;

async function findEvent(slug: string) {
  const events = await getEvents();
  return events.find((e) => e.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await findEvent(slug);
  if (!event) return {};
  return { title: event.name, description: event.description };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await findEvent(slug);
  if (!event) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <SkylineMark variant="full" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <Link href="/events" className="inline-flex items-center gap-1.5 text-sm text-silver-400 hover:text-white">
            <ArrowLeft size={15} /> All Events
          </Link>
          <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
            {event.name}
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-silver-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {formatDate(event.date)}
            </span>
            {event.time && (
              <span className="flex items-center gap-2">
                <Clock size={16} /> {event.time}
              </span>
            )}
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {event.location}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-base leading-relaxed text-navy-800/85">{event.description}</p>

        {event.status === "upcoming" && event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            className="mt-9 inline-flex rounded-sm bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Register for This Event
          </Link>
        )}
      </section>
    </>
  );
}
