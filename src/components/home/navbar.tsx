"use client";

import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../common/logo";
import ThemeSwitch from "../common/theme-switch";

const NAV_LINKS = [
  { label: "work", href: "/#work" },
  { label: "experience", href: "/#experience" },
  { label: "stack", href: "/#stack" },
  { label: "contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[200] mx-auto mt-3 flex w-full max-w-2xl items-center justify-between rounded-2xl border px-3 py-2 antialiased transition-all duration-300 md:px-4",
        scrolled
          ? "border-black/[0.06] bg-white/70 shadow-sm shadow-black/5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60"
          : "border-transparent bg-transparent shadow-none"
      )}
    >
      {/* logo */}
      <Link
        href="/"
        aria-label="Himanshu Jain — Home"
        className="flex items-center text-neutral-900 dark:text-white"
      >
        <Logo className="h-7 w-[22px]" />
      </Link>

      {/* center nav links */}
      <div className="hidden items-center gap-0.5 sm:flex">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={(e) => scrollToId(e, l.href)}
            className="rounded-md px-2.5 py-1 font-mono text-xs lowercase text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* theme */}
      <ThemeSwitch />
    </nav>
  );
}
