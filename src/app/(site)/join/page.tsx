import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import JoinForm from "@/components/JoinForm";
import SkylineMark from "@/components/SkylineMark";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Join DEA",
  description: "Apply to become a member of Dallas Entrepreneurial Alliance.",
};

const eligibility = [
  "Any Dallas-area high school student, from any school",
  "No prior business or economics experience required",
  "A genuine interest in leadership, entrepreneurship, or economics",
];

const expectations = [
  "Attend DEA events and meetings regularly",
  "Participate actively in at least one focus area",
  "Represent DEA professionally at school and partner events",
];

const benefits = [
  "Access to workshops, competitions, and guest speakers",
  "A cross-school network of ambitious peers",
  "Leadership opportunities within DEA",
  "Direct exposure to Dallas business and civic professionals",
];

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <SkylineMark variant="full" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Membership</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Join Dallas Entrepreneurial Alliance
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoBlock title="Who Can Join" items={eligibility} />
          <InfoBlock title="What's Expected" items={expectations} />
          <InfoBlock title="Member Benefits" items={benefits} />
        </div>
      </section>

      <section className="bg-silver-100 py-20">
        <div className="mx-auto max-w-2xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Application" title="Apply to DEA" align="center" />
            <div className="mt-10">
              <JoinForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="h-full rounded-md border border-silver-300/60 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-navy-950">{title}</h3>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-800/80">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-navy-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
