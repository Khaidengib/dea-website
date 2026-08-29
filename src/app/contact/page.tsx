import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dallas Entrepreneurial Alliance.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Contact</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Let&rsquo;s Talk
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading title="Send Us a Message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-md border border-silver-300/60 bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-navy-950">Interested in Joining?</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                Learn how to become involved with DEA.
              </p>
              <Link
                href="/join"
                className="mt-4 inline-block text-sm font-semibold text-navy-950 underline decoration-silver-400 underline-offset-4"
              >
                Start your application →
              </Link>
            </div>
            <div className="rounded-md border border-silver-300/60 bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-navy-950">Interested in Partnering?</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                Connect with DEA about collaboration opportunities.
              </p>
              <Link
                href="/partnerships"
                className="mt-4 inline-block text-sm font-semibold text-navy-950 underline decoration-silver-400 underline-offset-4"
              >
                Explore partnerships →
              </Link>
            </div>
            <div className="rounded-md bg-navy-950 p-7 text-silver-300">
              <h3 className="font-display text-lg font-semibold text-white">Direct Email</h3>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
