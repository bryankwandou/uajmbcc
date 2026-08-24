"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Controls } from "./Controls";
import { useApp } from "./Providers";
import { links } from "@/lib/content";

export function Nav() {
  const { t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const items = [
    { href: "#tentang", label: t.nav.about },
    { href: "#portofolio", label: t.nav.portfolio },
    { href: "#perjalanan", label: t.nav.journey },
    { href: "#tim", label: t.nav.team },
    { href: "#kontak", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet when the viewport grows past the breakpoint, so the
  // panel can never linger behind the desktop bar.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 duration-300 ease-crisp [transition-property:background-color,border-color,backdrop-filter] ${
        scrolled || open
          ? "border-b border-[color:var(--line)] bg-[color:var(--bg)]/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <a href="#top" aria-label="UAJM BCC" className="min-w-0 shrink">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="link-quiet whitespace-nowrap text-[13px]">
              {i.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <Controls />
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary hidden px-4 py-2 text-[12px] sm:inline-block">
            {t.nav.join}
          </a>
          <button
            className="grid h-[30px] w-[30px] place-items-center rounded border border-[color:var(--line)] text-[color:var(--muted)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="link-quiet text-sm">
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
