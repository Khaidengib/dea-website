import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-silver-400">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/dea-logo.png"
                alt="Dallas Entrepreneurial Alliance logo"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-sm font-semibold tracking-wide text-silver-100">
                DALLAS ENTREPRENEURIAL ALLIANCE
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-500">
              Dallas Entrepreneurial Alliance — empowering the next generation of leaders
              through economics, entrepreneurship, innovation, and opportunity.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DEA on Instagram"
                className="rounded-full border border-white/10 p-2.5 text-silver-400 transition-colors hover:border-silver-300 hover:text-white"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DEA on LinkedIn"
                className="rounded-full border border-white/10 p-2.5 text-silver-400 transition-colors hover:border-silver-300 hover:text-white"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-silver-200">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/join" className="transition-colors hover:text-white">
                  Join DEA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-silver-200">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>Dallas, Texas</li>
              <li>
                <Link href="/partnerships" className="transition-colors hover:text-white">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="silver-rule mt-14 opacity-30" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-silver-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Dallas Entrepreneurial Alliance. All rights reserved.</p>
          <p>Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
