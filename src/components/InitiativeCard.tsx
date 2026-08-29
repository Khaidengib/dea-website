import Link from "next/link";
import type { Initiative } from "@/lib/content";

const statusStyles: Record<Initiative["status"], string> = {
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Launching Soon": "bg-amber-50 text-amber-700 border-amber-200",
  Pilot: "bg-sky-50 text-sky-700 border-sky-200",
};

export default function InitiativeCard({ initiative }: { initiative: Initiative }) {
  return (
    <div className="card-lift flex flex-col rounded-md border border-silver-300/60 bg-white p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-navy-950">{initiative.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[initiative.status]}`}
        >
          {initiative.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy-800/80">{initiative.description}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-navy-700/80">
        {initiative.goals.map((g) => (
          <li key={g} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-600" />
            {g}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy-600/70">
        {initiative.participants}
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-navy-900 underline decoration-silver-400 underline-offset-4 hover:text-navy-950"
      >
        Learn More →
      </Link>
    </div>
  );
}
