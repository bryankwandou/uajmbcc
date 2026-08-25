"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { credentials, hackathon } from "@/lib/content";

type Cred = (typeof credentials)[number];

/* Credential scans sit on the page directly, never behind a control: the claim
   and the document that backs it are the same card. Clicking one opens the
   full-size scan. */
export function Credentials({
  labels,
}: {
  labels: { hackTitle: string; hackBody: string; hackHolder: string; shipped: string; open: string };
}) {
  const [active, setActive] = useState<Cred | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {credentials.map((c) => (
        <figure key={c.src} className="panel overflow-hidden">
          <button
            type="button"
            onClick={() => setActive(c)}
            className="relative block aspect-[16/10] w-full overflow-hidden bg-[color:var(--surface-2)]"
            aria-label={`${labels.open} ${c.title}`}
          >
            <Image
              src={c.src}
              alt={`Sertifikat ${c.title}, ${c.org}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover duration-500 ease-crisp [transition-property:transform] hover:scale-[1.03]"
            />
          </button>
          <figcaption className="border-t border-[color:var(--line)] p-5">
            <h3 className="font-display text-[15px] font-bold leading-snug text-[color:var(--text)]">{c.title}</h3>
            <p className="mt-1.5 text-[13px] text-[color:var(--muted)]">{c.org}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--accent)]">{c.tag}</p>
            <div className="mt-3 flex items-baseline justify-between gap-3 font-mono text-[10px] text-[color:var(--faint)]">
              <span>{c.ref ? `No. ${c.ref}` : ""}</span>
              <span className="shrink-0">{c.date}</span>
            </div>
          </figcaption>
        </figure>
      ))}

      {/* The hackathon record is a portfolio figure, not a certificate, so it is
          shown as a stated count with the public repository as its trail. */}
      <div className="panel-seal flex flex-col justify-between p-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">{labels.hackTitle}</div>
          <div className="mt-3 font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.03em]">
            ~{hackathon.count}
          </div>
          <p className="mt-3 text-[13px] leading-relaxed">{labels.hackBody}</p>
        </div>
        <div className="mt-6 border-t border-black/20 pt-4">
          <p className="font-mono text-[11px] leading-relaxed">
            {labels.hackHolder}: {hackathon.holder}
          </p>
          <a
            href={hackathon.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-mono text-[11px] underline underline-offset-2"
          >
            {hackathon.repoLabel}
          </a>
          <p className="mt-2 font-mono text-[11px]">
            {hackathon.shipped} {labels.shipped}
          </p>
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-full w-full max-w-4xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={`Sertifikat ${active.title}, ${active.org}`}
              width={1600}
              height={1000}
              className="h-auto w-full rounded object-contain"
            />
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3 text-white/80">
              <span className="font-display text-[15px] font-bold">{active.title}</span>
              <span className="font-mono text-[13px]">{active.org} · {active.date}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
