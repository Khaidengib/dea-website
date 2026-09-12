import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/content";
import SkylineMark from "./SkylineMark";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="card-lift flex flex-col overflow-hidden rounded-md border border-silver-300/60 bg-white">
      <div className="relative flex h-36 items-end overflow-hidden bg-gradient-to-br from-navy-900 to-navy-700 px-6 pb-4">
        {event.image ? (
          <Image src={event.image} alt="" fill className="object-cover" />
        ) : (
          <SkylineMark
            variant="full"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          />
        )}
        {event.image && <div className="absolute inset-0 bg-navy-950/55" />}
        {event.status === "past" && (
          <span className="absolute right-4 top-4 rounded-sm bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-silver-200">
            Past Event
          </span>
        )}
        <h3 className="relative font-display text-xl font-semibold text-white">{event.name}</h3>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-4 text-sm text-navy-700/80">
          <span className="flex items-center gap-1.5">
            <Calendar size={15} /> {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={15} /> {event.location}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-navy-800/80">{event.description}</p>
        <div className="mt-2 flex gap-3">
          {event.status === "upcoming" && event.registrationUrl && (
            <Link
              href={event.registrationUrl}
              className="rounded-sm bg-navy-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Register
            </Link>
          )}
          <Link
            href={`/events/${event.slug}`}
            className="rounded-sm border border-navy-950/15 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:border-navy-950/40"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
