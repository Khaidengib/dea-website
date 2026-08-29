import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import PersonCard from "@/components/PersonCard";
import CTASection from "@/components/CTASection";
import { leadership, type LeadershipPerson } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the students leading Dallas Entrepreneurial Alliance.",
};

const categories: LeadershipPerson["category"][] = [
  "Executive Leadership",
  "Directors",
  "Advisors & Alumni",
];

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Leadership</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Student Leadership, Real Responsibility
          </h1>
        </div>
      </section>

      {categories.map((cat) => {
        const people = leadership.filter((l) => l.category === cat);
        if (people.length === 0) return null;
        return (
          <section key={cat} className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
            <Reveal>
              <SectionHeading title={cat} />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {people.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <PersonCard
                    name={p.name}
                    position={p.position}
                    meta={p.school}
                    bio={p.bio}
                    linkedin={p.linkedin}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <CTASection
        title="Want to Lead Something?"
        description="Leadership roles open up as DEA grows. Members who show up consistently are the first ones considered."
        primary={{ label: "Join DEA", href: "/join" }}
      />
    </>
  );
}
