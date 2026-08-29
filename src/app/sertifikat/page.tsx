"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Controls } from "@/components/Controls";
import { Reveal } from "@/components/Reveal";
import { useApp } from "@/components/Providers";
import { AdminPanel } from "@/components/cert/AdminPanel";
import { CertCard } from "@/components/cert/CertCard";
import { allRecords, findFor, hasFile, SLOTS, type CertRecord } from "@/lib/certstore";
import { certDict, fill } from "@/lib/certdict";
import { links } from "@/lib/content";

/* Certificate claim page.
 *
 * BCC issues class and workshop certificates to people it knows by name, so a
 * name is the whole key. Nothing is listed before a match, which keeps the
 * page from being read as a participant directory.
 *
 * The board reaches its dashboard through the separator dot in the footer
 * stamp (three clicks) or ?admin=1. Deliberately quiet: participants need the
 * claim form, and a board sign-in button on a public page invites everyone
 * else to try it.
 */

const MAX_TRIES = 5;
const COOLDOWN_S = 60;

export default function CertificatePage() {
  const { locale } = useApp();
  const d = useMemo(() => certDict(locale), [locale]);

  const [records, setRecords] = useState<CertRecord[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [admin, setAdmin] = useState(false);

  const refresh = useCallback(() => {
    allRecords()
      .then(setRecords)
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("admin") === "1") setAdmin(true);
  }, []);

  useEffect(() => {
    if (admin) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [admin]);

  return (
    <main className="bg-field relative min-h-screen">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-4">
          <Link href="/" className="min-w-0" aria-label={d.meta.home}>
            <span className="accent-rule mb-2 block" />
            <span className="block font-display text-sm tracking-[-0.01em] text-[color:var(--text)]">
              UAJM Blockchain Club
            </span>
            <span className="kicker">{d.meta.title}</span>
          </Link>
          <div className="flex shrink-0 items-center gap-4">
            <Controls />
            <Link
              href="/"
              className="hidden text-[13px] text-[color:var(--muted)] hover:text-[color:var(--text)] sm:inline-block"
            >
              {d.meta.back}
            </Link>
          </div>
        </div>
      </header>

      {admin ? (
        <section className="mx-auto max-w-5xl px-6 py-14">
          <AdminPanel d={d} onChanged={refresh} onClose={() => setAdmin(false)} />
        </section>
      ) : (
        <Claim d={d} records={records} loaded={loaded} />
      )}

      <Footer d={d} onAdmin={() => setAdmin(true)} count={records.length} />
    </main>
  );
}

function Claim({
  d,
  records,
  loaded,
}: {
  d: ReturnType<typeof certDict>;
  records: CertRecord[];
  loaded: boolean;
}) {
  const [name, setName] = useState("");
  const [found, setFound] = useState<CertRecord[] | null>(null);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);
  const [tries, setTries] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(0);
  const [now, setNow] = useState(Date.now());
  const resultsRef = useRef<HTMLDivElement>(null);

  // Only ticks while a cooldown is running, so the page is idle the rest of
  // the time.
  useEffect(() => {
    if (lockedUntil <= now) return;
    const t = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(t);
  }, [lockedUntil, now]);

  const remaining = Math.max(0, Math.ceil((lockedUntil - now) / 1000));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (remaining > 0) {
      setError(fill(d.err.cooldown, { s: remaining }));
      return;
    }
    if (!name.trim()) {
      setError(d.err.empty);
      setFound(null);
      return;
    }
    setChecking(true);
    // The typed name is hashed here, in this browser, and compared against the
    // registry. It is never put in a URL, a request body or storage.
    const hits = (await findFor(records, name)).filter(hasFile);
    setChecking(false);
    if (hits.length === 0) {
      const next = tries + 1;
      setTries(next);
      setFound(null);
      if (next >= MAX_TRIES) {
        setLockedUntil(Date.now() + COOLDOWN_S * 1000);
        setNow(Date.now());
        setTries(0);
        setError(fill(d.err.cooldown, { s: COOLDOWN_S }));
      } else {
        setError(d.err.notFound);
      }
      return;
    }
    setTries(0);
    setFound(hits);
    window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-6 pt-20">
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="pt-2">
            <span className="accent-rule mb-3 block" />
            <span className="kicker">{d.hero.kicker}</span>
          </div>
          <div>
            <h1 className="font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[color:var(--text)] md:text-[2.75rem]">
              {d.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[color:var(--muted)]">{d.hero.lede}</p>
            <p className="mt-3 max-w-xl text-[13px] leading-[1.7] text-[color:var(--faint)]">{d.hero.scope}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 pt-6">
        <Reveal>
          <form onSubmit={submit} className="panel-feature p-7 md:p-9">
            <span className="kicker">{d.form.legend}</span>
            <div className="mt-5 max-w-xl">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--faint)]">
                  {d.form.name}
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={d.form.namePh}
                  autoComplete="name"
                  className={inputCls}
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={checking || remaining > 0}
                className="btn-primary px-6 py-3 text-[13px] disabled:opacity-60"
              >
                {checking ? d.form.working : d.form.submit}
              </button>
              <span className="text-[12px] leading-[1.6] text-[color:var(--faint)]">{d.form.hint}</span>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-5 border-t border-[color:var(--line)] pt-4 text-[14px] text-[color:var(--accent)]"
              >
                {error}
              </p>
            )}
          </form>
        </Reveal>

        {loaded && records.length === 0 && (
          <div className="panel mt-5 p-6">
            <h2 className="font-display text-[15px] text-[color:var(--text)]">{d.empty.title}</h2>
            <p className="mt-2 text-[13px] leading-[1.7] text-[color:var(--muted)]">{d.empty.body}</p>
          </div>
        )}
      </section>

      <div ref={resultsRef} className="scroll-mt-6">
        {found && found.length > 0 && (
          <section className="mx-auto max-w-5xl px-6 pb-10 pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[color:var(--line)] pb-4">
              <h2 className="font-display text-[1.35rem] tracking-[-0.01em] text-[color:var(--text)]">
                {d.res.heading}
              </h2>
              <span className="text-[13px] text-[color:var(--muted)]">
                {found.length === 1 ? d.res.one : fill(d.res.many, { n: found.length })}
              </span>
            </div>
            <div className="mt-6 space-y-6">
              {found.map((r) => (
                <CertCard key={r.id} rec={r} d={d} />
              ))}
            </div>
          </section>
        )}
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-6">
        <div className="panel-quiet pt-6">
          <h2 className="font-display text-[15px] text-[color:var(--text)]">{d.help.title}</h2>
          <p className="mt-2 max-w-xl text-[13px] leading-[1.7] text-[color:var(--muted)]">{d.help.body}</p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              {d.help.wa}
            </a>
            <a
              href={links.instagramBcc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--muted)] hover:text-[color:var(--text)]"
            >
              {d.help.ig} @uajm_bcc
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* The separator dot in the stamp is the board's way in: three clicks inside
   two seconds. It carries a label for assistive technology, so it is quiet
   rather than hidden. */
function Footer({ d, onAdmin, count }: { d: ReturnType<typeof certDict>; onAdmin: () => void; count: number }) {
  const taps = useRef<number[]>([]);

  function knock() {
    const now = Date.now();
    taps.current = [...taps.current, now].filter((t) => now - t < 2000);
    if (taps.current.length >= 3) {
      taps.current = [];
      onAdmin();
    }
  }

  return (
    <footer className="border-t border-[color:var(--line)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 font-mono text-[11px] text-[color:var(--faint)]">
        <span>UAJM Blockchain Club</span>
        <button
          type="button"
          onClick={knock}
          aria-label="Akses pengurus"
          className="px-1 text-[color:var(--faint)] hover:text-[color:var(--muted)]"
        >
          ·
        </button>
        <span>
          Registry {count}/{SLOTS}
        </span>
        <span aria-hidden="true">·</span>
        <Link href="/" className="hover:text-[color:var(--muted)]">
          {d.meta.back}
        </Link>
        <span aria-hidden="true">·</span>
        {/* The knock on the dot above still works, but a door nobody can find
            is not a door. This is the same door with its name written on it:
            plain footer text, at the weight of a legal stamp, which the board
            can point at and the public has no reason to press. */}
        <button
          type="button"
          onClick={onAdmin}
          className="underline decoration-dotted underline-offset-4 hover:text-[color:var(--muted)]"
        >
          {d.admin.signIn}
        </button>
      </div>
    </footer>
  );
}

const inputCls =
  "w-full rounded-[2px] border border-[color:var(--line)] bg-[color:var(--field)] px-3.5 py-3 text-[15px] text-[color:var(--text)] outline-none placeholder:text-[color:var(--faint)] focus-visible:border-[color:var(--accent)]";
