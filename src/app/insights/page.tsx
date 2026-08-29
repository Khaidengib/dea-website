"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import InsightCard from "@/components/InsightCard";
import { posts } from "@/lib/content";

export default function InsightsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    []
  );

  const filtered = posts.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">DEA Insights</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Perspectives from DEA Members
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <SectionHeading title="Latest Articles" />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-sm border border-silver-400/60 px-3 py-2.5">
            <Search size={16} className="text-navy-600/60" />
            <input
              placeholder="Search articles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-sm text-navy-950 outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  category === c
                    ? "border-navy-950 bg-navy-950 text-white"
                    : "border-silver-400/60 text-navy-800 hover:border-navy-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-navy-700/70">No articles match yet.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 6) * 50}>
                <InsightCard post={p} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
