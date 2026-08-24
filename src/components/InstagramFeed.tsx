"use client";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { useApp } from "./Providers";
import { IG_HANDLE, IG_URL, POSTS, type IgPost } from "@/lib/posts";

/* Instagram-styled archive in the BCC design language: ink surfaces, single gold
   accent, no glass. Renders nothing until real posts are supplied, so the
   section never ships with fabricated captions. */
export function InstagramFeed() {
  const { t } = useApp();
  const g = t.gallery;
  if (POSTS.length === 0) return null;
  return (
    <section id="galeri" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
        <div className="pt-2">
          <span className="accent-rule mb-3 block" />
          <span className="kicker">{g.kicker}</span>
        </div>
        <div>
          <h2 className="font-display text-[2rem] leading-[1.1] tracking-[-0.02em] text-[color:var(--text)] md:text-[2.75rem]">
            {g.title}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[color:var(--muted)]">
            {g.lede}{" "}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-[color:var(--gold)] underline-offset-4 hover:underline">
              @{IG_HANDLE}
            </a>
            .
          </p>
        </div>
      </div>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <StaggerItem key={post.id}>
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-block px-6 py-3 text-[13px]">
          {g.viewAll}
        </a>
      </Reveal>
    </section>
  );
}

function PostCard({ post }: { post: IgPost }) {
  const permalink = post.href ?? `${IG_URL.replace(/\/$/, "")}/`;
  return (
    <article className="panel overflow-hidden">
      <header className="flex items-center gap-3 px-4 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-2)]">
          <Image src="/ukm-esport-logo.png" alt="" width={20} height={20} className="rounded-full object-contain" />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate font-display text-[14px] text-[color:var(--text)]">{IG_HANDLE}</div>
          {post.category && (
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--faint)]">{post.category}</div>
          )}
        </div>
        <a href={permalink} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--gold)]">
          Buka
        </a>
      </header>

      <a href={permalink} target="_blank" rel="noopener noreferrer" className="relative block aspect-square w-full overflow-hidden bg-[color:var(--surface-2)]">
        <Image src={post.image} alt={post.caption.slice(0, 80)} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
      </a>

      <div className="flex items-center gap-4 border-t border-[color:var(--line)] px-4 pt-3 text-[color:var(--muted)]">
        <HeartIcon />
        <CommentIcon />
        <ShareIcon />
        <span className="ml-auto font-mono text-[10.5px] text-[color:var(--faint)]">{post.date}</span>
      </div>

      <div className="px-4 pb-4 pt-2">
        <p className="text-[13.5px] leading-[1.65] text-[color:var(--muted)]">
          <span className="font-medium text-[color:var(--text)]">{IG_HANDLE}</span>{" "}
          <span className="whitespace-pre-line">{post.caption}</span>
        </p>
      </div>
    </article>
  );
}

function HeartIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L3 21l1.9-6.1A8.4 8.4 0 1 1 21 11.5Z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}
