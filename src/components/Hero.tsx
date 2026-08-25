"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { org, stats } from "@/lib/content";
import { CountUp } from "./CountUp";
import { useApp } from "./Providers";

const ease = [0.2, 0.7, 0.3, 1] as const;

export function Hero() {
  const { t } = useApp();
  const h = t.hero;

  const rows = [
    { k: h.rows.parent, v: h.rowVals.parent },
    { k: h.rows.status, v: h.rowVals.status },
    { k: h.rows.initiator, v: h.rowVals.initiator },
    { k: h.rows.campus, v: h.rowVals.campus },
    { k: h.rows.network, v: org.network },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="accent-rule" />
              <span className="kicker">{h.kicker}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="mt-7 font-display text-[2.6rem] leading-[1.04] tracking-[-0.02em] text-[color:var(--text)] sm:text-6xl md:text-[4.15rem]"
            >
              {h.title1}
              <br />
              {h.title2} <em className="italic text-[color:var(--accent)]">{h.titleEm}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease }}
              className="mt-7 max-w-xl text-[15px] leading-[1.7] text-[color:var(--muted)]"
            >
              {h.lede}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#portofolio" className="btn-primary px-6 py-3 text-[13px]">
                {h.ctaPrimary}
              </a>
              <a href="#tentang" className="btn-ghost px-6 py-3 text-[13px]">
                {h.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Institutional record. Specific to this organisation, not decorative. */}
          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease }}
            className="panel-feature self-start p-6"
          >
            <div className="border-b border-[color:var(--line)] pb-4">
              <span className="kicker">{h.recordTitle}</span>
            </div>
            <dl className="mt-5 space-y-4 font-mono text-[11px]">
              {rows.map((r) => (
                <div key={r.k} className="flex items-baseline justify-between gap-5">
                  <dt className="shrink-0 text-[color:var(--faint)]">{r.k}</dt>
                  <dd className="text-end text-[color:var(--text)]">{r.v}</dd>
                </div>
              ))}
            </dl>

            {/* Official club identity, real logos only. */}
            <div className="mt-6 rounded-md bg-white p-4 ring-1 ring-black/10">
              <Image
                src="/superteam-campus-club.png"
                alt="Superteam Campus Club, dikelola Universitas Atma Jaya Makassar"
                width={320}
                height={120}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.aside>
        </div>

        {/* Ledger row, not gradient metric cards */}
        <div className="mt-20 grid grid-cols-2 border-t border-[color:var(--line)] sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 + i * 0.07, ease }}
              className={`border-b border-[color:var(--line)] py-7 sm:border-b-0 ${
                i > 0 ? "sm:border-s sm:ps-7" : ""
              } ${i % 2 === 1 ? "border-s ps-7 sm:ps-7" : ""}`}
            >
              <div className="font-mono text-[2rem] leading-none text-[color:var(--text)]">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2.5 text-[11px] leading-tight text-[color:var(--faint)]">
                {t.stats[i]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
