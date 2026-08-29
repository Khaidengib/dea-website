"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PersonCard from "@/components/PersonCard";
import { members } from "@/lib/content";

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [school, setSchool] = useState("All Schools");
  const [interest, setInterest] = useState("All Interests");

  const schools = useMemo(
    () => ["All Schools", ...Array.from(new Set(members.map((m) => m.school).filter(Boolean)))],
    []
  );
  const interests = useMemo(
    () => ["All Interests", ...Array.from(new Set(members.map((m) => m.interest)))],
    []
  );

  const filtered = members.filter((m) => {
    const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase());
    const matchesSchool = school === "All Schools" || m.school === school;
    const matchesInterest = interest === "All Interests" || m.interest === interest;
    return matchesQuery && matchesSchool && matchesInterest;
  });

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Members</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            The DEA Community
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <SectionHeading eyebrow="Directory" title="Find a Member" />

        <div className="mt-8 flex flex-col gap-4 rounded-md border border-silver-300/60 bg-white p-5 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-sm border border-silver-400/60 px-3 py-2.5">
            <Search size={16} className="text-navy-600/60" />
            <input
              placeholder="Search by name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-sm text-navy-950 outline-none"
            />
          </div>
          <select
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="rounded-sm border border-silver-400/60 px-3 py-2.5 text-sm text-navy-950"
          >
            {schools.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="rounded-sm border border-silver-400/60 px-3 py-2.5 text-sm text-navy-950"
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-navy-700/70">
            No members match those filters yet.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m, i) => (
              <Reveal key={m.id} delay={(i % 6) * 40}>
                <PersonCard
                  name={m.name}
                  position={m.position}
                  meta={[m.school, m.gradYear].filter(Boolean).join(" · ")}
                  bio={m.bio}
                  linkedin={m.linkedin}
                />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
