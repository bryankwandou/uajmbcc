"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { org, stats } from "@/lib/content";
import { CountUp } from "./CountUp";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip inline-flex items-center gap-2 px-3 py-1.5 text-xs text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
            Di bawah {org.parent}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Ide mahasiswa, <br />
            jadi <span className="gradient-text">produk nyata.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            {org.full}, klub blockchain di bawah {org.parent}. Mahasiswa merancang ide,
            lalu kami dampingi sampai produk berjalan. Diinisiasi{" "}
            <span className="text-white/80">{org.initiatedBy}</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#portofolio" className="btn-primary rounded-full px-6 py-3 text-sm">
              Lihat portofolio
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-white/12 px-6 py-3 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              Tentang kami
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs leading-tight text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm md:block"
        >
          <BlockCluster />
        </motion.div>
      </div>
    </section>
  );
}

function BlockCluster() {
  const blocks = [
    { x: "34%", y: "8%", s: 96, d: 0, c: "from-cyan-glow/25" },
    { x: "8%", y: "40%", s: 76, d: 0.4, c: "from-violet-glow/25" },
    { x: "58%", y: "44%", s: 120, d: 0.8, c: "from-violet-glow/20" },
    { x: "30%", y: "68%", s: 84, d: 1.2, c: "from-cyan-glow/20" },
  ];
  return (
    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="42" y1="18" x2="20" y2="52" stroke="rgba(124,92,255,0.25)" strokeWidth="0.4" />
        <line x1="42" y1="18" x2="66" y2="54" stroke="rgba(34,211,238,0.25)" strokeWidth="0.4" />
        <line x1="20" y1="52" x2="40" y2="78" stroke="rgba(124,92,255,0.2)" strokeWidth="0.4" />
        <line x1="66" y1="54" x2="40" y2="78" stroke="rgba(34,211,238,0.2)" strokeWidth="0.4" />
      </svg>
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          className={`glass absolute grid place-items-center rounded-2xl bg-gradient-to-br ${b.c} to-transparent`}
          style={{ left: b.x, top: b.y, width: b.s, height: b.s }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5 + b.d, repeat: Infinity, ease: "easeInOut", delay: b.d }}
        >
          <div className="h-2 w-2 rounded-full bg-white/70" />
        </motion.div>
      ))}
    </div>
  );
}
