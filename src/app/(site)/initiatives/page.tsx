import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import InitiativeCard from "@/components/InitiativeCard";
import CTASection from "@/components/CTASection";
import { getInitiatives } from "@/lib/data";

export const metadata: Metadata = {
  title: "Initiatives",
  description: "DEA's major student-led programs and initiatives.",
};

export const revalidate = 60;

export default async function InitiativesPage() {
  const initiatives = await getInitiatives();

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Initiatives</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Programs Built by Members
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Programs" title="Current Initiatives" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((init, i) => (
            <Reveal key={init.id} delay={i * 70}>
              <InitiativeCard initiative={init} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Have an Idea for a New Initiative?"
        description="DEA initiatives are proposed and led by members. If you have an idea, bring it to us."
        primary={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
