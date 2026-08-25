"use client";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OnChainVerify } from "@/components/OnChainVerify";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { BrandChip } from "@/components/Logo";
import { Credentials } from "@/components/Credentials";
import { useApp } from "@/components/Providers";
import { org, structure, faculties, links, contact, mvps } from "@/lib/content";

export default function Home() {
  return (
    <main className="bg-field relative min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
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

/* Left-anchored, asymmetric. Nothing is centred. */
function SectionHead({ kicker, title, lede }: { kicker: string; title: string; lede?: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <div className="pt-2">
        <span className="accent-rule mb-3 block" />
        <span className="kicker">{kicker}</span>
      </div>
      <div>
        <h2 className="font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[color:var(--text)] md:text-[2.75rem]">
          {title}
        </h2>
        {lede && <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[color:var(--muted)]">{lede}</p>}
      </div>
    </div>
  );
}

function Ticker() {
  const { t } = useApp();
  const row = [...t.ticker, ...t.ticker];
  return (
    <div className="mt-24 overflow-hidden border-y border-[color:var(--line)] py-3.5">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--faint)]">
            <span>{w}</span>
            <span className="text-[color:var(--accent)] opacity-60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const { t } = useApp();
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead kicker={t.about.kicker} title={t.about.title} />

      <Reveal className="mt-14 md:ps-[228px]">
        <blockquote className="max-w-3xl border-s-2 border-[color:var(--accent)] ps-7">
          <p className="font-display text-[1.6rem] leading-[1.35] tracking-[-0.01em] text-[color:var(--text)] md:text-[2.1rem]">
            {t.about.vision}
          </p>
        </blockquote>
      </Reveal>

      <Stagger className="mt-16 md:ps-[228px]">
        {t.about.missions.map((m, i) => (
          <StaggerItem key={m.title}>
            <div className="grid grid-cols-[36px_1fr] gap-5 border-t border-[color:var(--line)] py-7 md:grid-cols-[52px_240px_1fr] md:gap-8">
              <span className="font-mono text-[11px] text-[color:var(--accent)]">0{i + 1}</span>
              <h3 className="font-display text-lg leading-snug text-[color:var(--text)]">{m.title}</h3>
              <p className="col-span-2 text-[14px] leading-[1.7] text-[color:var(--muted)] md:col-span-1">{m.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Portfolio() {
  const { t, locale } = useApp();
  const p = t.portfolio;
  const en = locale === "id" ? false : true;
  return (
    <section id="portofolio" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead kicker={p.kicker} title={p.title} lede={p.lede} />

      <Stagger className="mt-14">
        <div className="hidden grid-cols-[52px_1.15fr_0.55fr_150px] gap-6 border-b border-[color:var(--line-strong)] pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--faint)] md:grid">
          <span>{p.thNo}</span>
          <span>{p.thProduct}</span>
          <span>{p.thField}</span>
          <span className="text-end">{p.thStatus}</span>
        </div>
        {mvps.map((item) => (
          <StaggerItem key={item.code}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-2 border-b border-[color:var(--line)] py-6 duration-300 ease-crisp [transition-property:background-color] hover:bg-[color:var(--surface)] md:grid-cols-[52px_1.15fr_0.55fr_150px] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[11px] text-[color:var(--accent)]">{item.code}</span>
              <div>
                <h3 className="font-display text-xl leading-tight text-[color:var(--text)]">
                  {item.title}
                  <span className="ms-2 inline-block font-mono text-[10px] uppercase tracking-wider text-[color:var(--faint)] opacity-0 duration-200 [transition-property:opacity] group-hover:opacity-100">
                    {item.href.replace("https://", "")} ↗
                  </span>
                </h3>
                <p className="mt-1.5 max-w-md text-[13.5px] leading-[1.65] text-[color:var(--muted)]">
                  {en ? item.descEn : item.desc}
                </p>
                <p className="mt-1.5 font-mono text-[10.5px] text-[color:var(--faint)]">
                  {en ? item.byEn : item.by} · PIC: Vincentius Bryan Kwandou
                </p>
              </div>
              <span className="font-mono text-[11px] text-[color:var(--faint)]">{en ? item.domainEn : item.domain}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--faint)] md:text-end">
                {item.net}
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <p className="mt-6 max-w-2xl font-mono text-[10.5px] leading-relaxed text-[color:var(--faint)]">{p.note}</p>
      </Reveal>
    </section>
  );
}

function Journey() {
  const { t } = useApp();
  return (
    <section id="perjalanan" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead kicker={t.journey.kicker} title={t.journey.title} />
      <div className="mt-14 md:ps-[228px]">
        {t.journey.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-2 border-t border-[color:var(--line)] py-7 md:grid-cols-[136px_1fr] md:gap-10">
              <div className="font-mono text-[11px] text-[color:var(--accent)]">{item.date}</div>
              <div>
                <h3 className="font-display text-lg leading-snug text-[color:var(--text)]">{item.title}</h3>
                <p className="mt-2 max-w-xl text-[14px] leading-[1.7] text-[color:var(--muted)]">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const { t } = useApp();
  const s = t.team;
  return (
    <section id="tim" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead kicker={s.kicker} title={s.title} lede={s.lede} />

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="panel-feature p-7">
            <span className="kicker">{s.leadRole}</span>
            <div className="mt-3 font-display text-[1.75rem] leading-tight text-[color:var(--text)]">
              {structure.lead.name}
            </div>
            <div className="mt-2 text-[13.5px] text-[color:var(--muted)]">{s.leadNote}</div>
            <div className="mt-7 flex items-center gap-4 border-t border-[color:var(--line)] pt-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/10">
                <Image src="/uajm-logo.png" alt="Segel Universitas Atma Jaya Makassar" width={36} height={36} className="object-contain" />
              </span>
              <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/10">
                <Image src="/ukm-esport-logo.png" alt="Logo UKM E-Sport UAJM" width={38} height={38} className="object-contain" />
              </span>
              <span className="font-mono text-[10px] leading-relaxed text-[color:var(--faint)]">
                Atma Jaya Makassar
                <br />
                UKM E-Sport UAJM
              </span>
            </div>
          </div>
        </Reveal>

        <Stagger>
          {s.divisions.map((d) => (
            <StaggerItem key={d.name}>
              <div className="flex items-baseline justify-between gap-6 border-t border-[color:var(--line)] py-5">
                <h3 className="font-display text-[17px] text-[color:var(--text)]">{d.name}</h3>
                <span className="shrink-0 font-mono text-[10.5px] text-[color:var(--faint)]">{d.focus}</span>
              </div>
            </StaggerItem>
          ))}
          <Reveal delay={0.15}>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[color:var(--line-strong)] pt-6">
              {faculties.map((f, i) => (
                <div key={f.name}>
                  <div className="font-mono text-[1.6rem] leading-none text-[color:var(--text)]">{f.count}</div>
                  <div className="mt-2 text-[10.5px] leading-tight text-[color:var(--faint)]">{s.faculties[i]}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10.5px] leading-relaxed text-[color:var(--faint)]">{s.facultyNote}</p>
          </Reveal>
        </Stagger>
      </div>
    </section>
  );
}

function Achievements() {
  const { t } = useApp();
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead kicker={t.achievements.kicker} title={t.achievements.title} />
      <Credentials
        labels={{
          hackTitle: t.achievements.hackTitle,
          hackBody: t.achievements.hackBody,
          hackHolder: t.achievements.hackHolder,
          shipped: t.achievements.shipped,
          open: t.achievements.open,
        }}
      />
    </section>
  );
}

function CTA() {
  const { t } = useApp();
  return (
    <section id="kontak" className="mt-8 border-y border-[color:var(--line-strong)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="kicker">{t.cta.kicker}</span>
              <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] tracking-[-0.02em] text-[color:var(--text)] md:text-[2.6rem]">
                {t.cta.title}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-[color:var(--muted)]">{t.cta.lede}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-[13px]">
                {t.cta.join}
              </a>
              <a href={links.instagramBcc} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3 text-[13px]">
                {t.cta.instagram}
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3 text-[13px]">
                {t.cta.github}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useApp();
  const c = t.contactBlock;
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_0.9fr]">
        <div>
          <BrandChip height={34} />
          <div className="mt-4">
            <div className="font-display text-[15px] text-[color:var(--text)]">{org.name}</div>
            <div className="mt-1 font-mono text-[10.5px] text-[color:var(--faint)]">{org.location}</div>
          </div>
        </div>

        <div>
          <div className="kicker">{c.title}</div>
          <address className="mt-4 space-y-2.5 text-[12.5px] not-italic leading-relaxed text-[color:var(--muted)]">
            <div>{contact.address}</div>
            <div>
              {c.phone}{" "}
              <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`} className="link-quiet">{contact.phone}</a>
            </div>
            <div>
              {c.whatsapp}{" "}
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-quiet">{contact.whatsapp}</a>
            </div>
            <div>
              <a href={contact.websiteHref} target="_blank" rel="noopener noreferrer" className="link-quiet">{contact.website}</a>
            </div>
          </address>
        </div>

        <div>
          <div className="kicker">{c.links}</div>
          <nav className="mt-4 flex flex-col gap-2.5 font-mono text-[11px]">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="link-quiet">{t.nav.join}</a>
            <a href={links.instagramBcc} target="_blank" rel="noopener noreferrer" className="link-quiet">Instagram</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="link-quiet">GitHub</a>
            <a href={links.superteam} target="_blank" rel="noopener noreferrer" className="link-quiet">Superteam ID</a>
            <a href={`https://${org.domainEsport}`} target="_blank" rel="noopener noreferrer" className="link-quiet">UKM E-Sport ↗</a>
          </nav>
        </div>
      </div>
      <div className="mt-12 border-t border-[color:var(--line)] pt-6 font-mono text-[10.5px] leading-relaxed text-[color:var(--faint)]">
        © {new Date().getFullYear()} {org.full}. {t.footer.rights}
      </div>
    </footer>
  );
}
