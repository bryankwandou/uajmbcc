import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OnChainVerify } from "@/components/OnChainVerify";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import {
  org, vision, missions, mvps, timeline, structure, achievements, faculties, links,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="bg-field relative min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Journey />
      <Team />
      <Achievements />
      <CTA />
      <Footer />
      <OnChainVerify />
    </main>
  );
}

function Marquee() {
  const words = [
    "Superteam Campus Club", "Builder-first", "Produk Nyata", "Lintas Fakultas",
    "Web3 Terapan", "Hackathon", "Mentorship Penuh", "Indonesia Timur",
  ];
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-white/6 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-white/35">
            <span>{w}</span>
            <span className="text-violet-glow/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="chip inline-block px-3 py-1 text-xs text-white/60">{kicker}</span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-white/55">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        kicker="Visi & Misi"
        title={<>Kenapa <span className="gradient-text">BCC</span> ada</>}
      />
      <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl">
        <div className="glass rounded-3xl p-8 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-glow/80">Visi</div>
          <p className="mt-3 text-lg leading-relaxed text-white/85 md:text-xl">{vision}</p>
        </div>
      </Reveal>
      <Stagger className="mt-6 grid gap-5 md:grid-cols-2">
        {missions.map((m, i) => (
          <StaggerItem key={m.title}>
            <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-glow/25 to-cyan-glow/10 font-display text-sm font-bold text-white">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{m.body}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portofolio" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        kicker="Portofolio · Meetup Perdana"
        title={<>6 MVP lahir di <span className="gradient-text">satu meetup</span></>}
        sub="Mahasiswa membawa ide, tim mendampingi pengembangan penuh sampai prototipe berjalan."
      />
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mvps.map((p) => (
          <StaggerItem key={p.code}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1.5">
              <div className="absolute right-5 top-5 font-display text-4xl font-bold text-white/6 transition-colors group-hover:text-white/12">
                {p.code}
              </div>
              <div className="chip inline-block px-2.5 py-1 text-[10px] uppercase tracking-wider text-cyan-glow/80">
                {p.domain}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                Deployed · Devnet
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-xs text-white/35">
          Judul produk digeneralisasi untuk menjaga privasi anggota. Detail teknis dibagikan pada sesi demo internal.
        </p>
      </Reveal>
    </section>
  );
}

function Journey() {
  return (
    <section id="perjalanan" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHead kicker="Perjalanan" title={<>Jejak yang <span className="gradient-text">dapat diperiksa</span></>} />
      <div className="mt-14 space-y-2">
        {timeline.map((t, i) => (
          <Reveal key={t.date} delay={i * 0.05}>
            <div className="relative grid grid-cols-[110px_1fr] gap-5 md:grid-cols-[150px_1fr]">
              <div className="pt-1 text-right">
                <div className="font-mono text-sm font-semibold text-cyan-glow/90">{t.date}</div>
              </div>
              <div className="relative border-l border-white/10 pb-8 pl-6">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-gradient-to-br from-violet-glow to-cyan-glow" />
                <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{t.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="tim" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        kicker="Struktur"
        title={<>Satu ekosistem, <span className="gradient-text">empat divisi</span></>}
        sub="UAJM BCC berjalan di bawah payung resmi UKM E-Sport UAJM, dengan SK dan AD/ART terdaftar."
      />
      <Reveal delay={0.03} className="mx-auto mt-10 flex max-w-md items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Image src="/uajm-logo.png" alt="Logo Universitas Atma Jaya Makassar" width={56} height={56} className="object-contain" />
          <span className="text-[10px] text-white/40">Atma Jaya Makassar</span>
        </div>
        <span className="text-white/20">×</span>
        <div className="flex flex-col items-center gap-2">
          <Image src="/ukm-esport-logo.png" alt="Logo UKM E-Sport UAJM" width={56} height={56} className="object-contain" />
          <span className="text-[10px] text-white/40">UKM E-Sport UAJM</span>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mx-auto mt-8 max-w-2xl">
        <div className="glass glow-ring rounded-3xl p-7 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">{structure.lead.role}</div>
          <div className="mt-2 font-display text-2xl font-bold text-white">{structure.lead.name}</div>
          <div className="mt-1 text-sm text-white/50">{structure.lead.note}</div>
        </div>
      </Reveal>
      <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {structure.divisions.map((d) => (
          <StaggerItem key={d.name}>
            <div className="glass h-full rounded-2xl p-5">
              <h3 className="font-display text-base font-semibold text-white">{d.name}</h3>
              <p className="mt-2 text-xs text-white/50">{d.focus}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {faculties.map((f) => (
            <div key={f.name} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-bold text-white">{f.count}</div>
              <div className="mt-1 text-xs text-white/50">Anggota · {f.name}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-white/35">
          Komposisi lintas fakultas dari data pendaftaran resmi: teknis, bisnis, dan hukum dalam satu tim.
        </p>
      </Reveal>
    </section>
  );
}

function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead kicker="Kredensial" title={<>Prestasi yang <span className="gradient-text">terdokumentasi</span></>} />
      <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
        {achievements.map((a) => (
          <StaggerItem key={a.title}>
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <div className="chip inline-block w-fit px-2.5 py-1 text-[10px] uppercase tracking-wider text-amber-glow/90">
                {a.tag}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{a.title}</h3>
              <p className="mt-1 text-sm text-white/55">{a.org}</p>
              <div className="mt-auto pt-4 font-mono text-xs text-white/40">{a.date}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function CTA() {
  return (
    <section id="kontak" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Bangun yang berikutnya <span className="gradient-text">bersama kami</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Mahasiswa UAJM yang ingin belajar membangun produk digital, atau mitra yang ingin berkolaborasi, silakan terhubung dengan kami.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={links.instagramBcc} target="_blank" rel="noopener" className="btn-primary rounded-full px-6 py-3 text-sm">
                Instagram @uajm_bcc
              </a>
              <a href={links.github} target="_blank" rel="noopener" className="rounded-full border border-white/12 px-6 py-3 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white">
                GitHub Founder
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/6 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <LogoMark size={30} />
          <div>
            <div className="font-display text-sm font-bold text-white">{org.name}</div>
            <div className="text-xs text-white/40">{org.location}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
          <a href={links.instagramBcc} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
          <a href={links.github} target="_blank" rel="noopener" className="hover:text-white">GitHub</a>
          <a href={links.superteam} target="_blank" rel="noopener" className="hover:text-white">Superteam ID</a>
          <a href={links.campus} target="_blank" rel="noopener" className="hover:text-white">UAJM</a>
          <a href={`https://${org.domainEsport}`} target="_blank" rel="noopener" className="hover:text-white">UKM E-Sport ↗</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/6 pt-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} {org.full}. Di bawah {org.parent}. Diinisiasi {org.initiatedBy}.
      </div>
    </footer>
  );
}
