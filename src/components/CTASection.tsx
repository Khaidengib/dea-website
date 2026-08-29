import Link from "next/link";
import SkylineMark from "./SkylineMark";

export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <SkylineMark
        variant="full"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-30"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-silver-400">
          {description}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primary.href}
            className="rounded-sm bg-gradient-to-b from-silver-200 to-silver-400 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-all hover:from-white hover:to-silver-300"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
