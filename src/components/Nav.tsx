"use client";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Controls } from "./Controls";
import { useApp } from "./Providers";
import { links } from "@/lib/content";
import { certDict } from "@/lib/certdict";
import { marsDict } from "@/lib/marsdict";

/* Jarak antar-tautan. Dipakai baris asli dan penggarisnya sekaligus, supaya
   yang diukur tidak pernah berbeda dari yang ditampilkan. */
const LINK_GAP = "gap-7";

export function Nav() {
  const { t, locale } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Hamburger menyerah tepat ketika seluruh label muat utuh, bukan pada lebar
     yang ditebak lebih dulu. Breakpoint tetap salah di satu arah: menambah satu
     tautan atau memanjangkan satu label akan menabrak lagi tanpa ada yang
     memberi tahu, persis seperti merek yang menimpa "Tentang".

     `fits` null berarti belum terukur: markup server memakai tebakan CSS agar
     lebar besar tidak berkedip lebih dulu, lalu hasil ukur mengambil alih. */
  const [fits, setFits] = useState<boolean | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const rulerRef = useRef<HTMLDivElement | null>(null);

  const items = [
    { href: "#tentang", label: t.nav.about },
    { href: "#portofolio", label: t.nav.portfolio },
    { href: "#perjalanan", label: t.nav.journey },
    { href: "#tim", label: t.nav.team },
    { href: "#kontak", label: t.nav.contact },
    // A participant looking for their certificate should not have to reach the
    // footer to find the door. It sits at the same weight as every other nav
    // item: findable at a glance, still not a call to action.
    { href: "/sertifikat", label: certDict(locale).entry.label },
    // Halaman lagu resmi. Rutenya sendiri, jadi membukanya tidak membebani
    // beranda; ditaruh sejajar dengan menu lain supaya mudah ditemukan.
    { href: "/mars", label: marsDict(locale).entry.label },
  ];

  /* Penggaris di bawah mengukur lebar alami seluruh label. Ia dipakai
     ketimbang baris aslinya karena baris asli ikut disembunyikan saat tidak
     muat, dan sesuatu yang display:none tidak punya lebar untuk dibaca --
     pengukurannya akan macet pada keputusan pertama. */
  useEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const logo = logoRef.current;
      const right = rightRef.current;
      const ruler = rulerRef.current;
      if (!nav || !logo || !right || !ruler) return;
      const cs = getComputedStyle(nav);
      const inner = nav.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const gap = parseFloat(cs.columnGap) || 0;
      const need = logo.offsetWidth + ruler.offsetWidth + right.offsetWidth + gap * 2;
      // Lantai desktop: di bawah ini hamburger tetap, sekalipun aritmetikanya lolos.
      setFits(window.innerWidth >= 1024 && need + 2 <= inner);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    // Label menyusut atau melebar begitu webfont menggantikan font sementara.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Panel tidak boleh tertinggal terbuka di belakang bilah yang sudah utuh.
  useEffect(() => {
    if (fits) setOpen(false);
  }, [fits]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 duration-300 ease-crisp [transition-property:opacity] ${
        scrolled || open
          ? "border-b border-[color:var(--line)] bg-[color:var(--bg)]/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav ref={navRef} className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <a ref={logoRef} href="#top" aria-label="UAJM BCC" className="shrink-0">
          <Logo />
        </a>

        <div
          className={`shrink-0 items-center ${LINK_GAP} ${
            fits === null ? "hidden lg:flex" : fits ? "flex" : "hidden"
          }`}
        >
          {items.map((i) => (
            <a key={i.href} href={i.href} className="link-quiet whitespace-nowrap text-[13px]">
              {i.label}
            </a>
          ))}
        </div>

        <div ref={rightRef} className="flex shrink-0 items-center gap-2.5">
          <Controls />
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary hidden px-4 py-2 text-[13px] sm:inline-block">
            {t.nav.join}
          </a>
          <button
            className={`grid h-[30px] w-[30px] place-items-center rounded border border-[color:var(--line)] text-[color:var(--muted)] ${
              fits === null ? "lg:hidden" : fits ? "hidden" : ""
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
        {/* Penggaris: salinan label yang tidak pernah terlihat, tidak pernah
            bisa difokus, dan tidak menempati aliran layout. Ia satu-satunya
            yang selalu punya lebar untuk dibaca -- baris aslinya ikut
            display:none saat tidak muat, dan yang display:none tidak punya
            lebar, jadi pengukurannya akan macet pada keputusan pertama.

            Ia hidup DI DALAM <nav> dan memakai <a> berkelas sama persis,
            karena globals.css memberi `header nav a` padding-inline 3px.
            Sebagai <span> di luar nav, penggaris ini kurang 6px per tautan --
            selisih yang tak terlihat di layar tapi cukup membuat bilahnya
            dinyatakan muat padahal luber. */}
        <div
          ref={rulerRef}
          aria-hidden="true"
          className={`pointer-events-none invisible absolute left-0 top-0 flex items-center ${LINK_GAP}`}
        >
          {items.map((i) => (
            <a key={i.href} tabIndex={-1} className="link-quiet whitespace-nowrap text-[13px]">
              {i.label}
            </a>
          ))}
        </div>
      </nav>

      {open && !fits && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)] px-6 py-5">
          <div className="flex flex-col gap-4">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="link-quiet text-[15px]">
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
