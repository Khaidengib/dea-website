"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-navy-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/dea-logo.png"
            alt="Dallas Entrepreneurial Alliance logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="hidden font-display text-sm font-semibold tracking-wide text-silver-100 sm:block">
            DALLAS ENTREPRENEURIAL
            <br />
            ALLIANCE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-silver-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-sm bg-gradient-to-b from-silver-200 to-silver-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition-all hover:from-white hover:to-silver-300 hover:shadow-lg"
          >
            Join DEA
          </Link>
        </nav>

        <button
          className="text-silver-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-silver-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="mt-3 rounded-sm bg-gradient-to-b from-silver-200 to-silver-400 px-5 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Join DEA
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
