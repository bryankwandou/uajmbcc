import Image from "next/image";

/* The club's official mark is the Superteam Campus Club lockup ("Managed by
   Universitas Atma Jaya Makassar") from the approved UAJM logo form. The bare
   university seal is deliberately not used as the club's own mark.

   Two variants of the same approved artwork are shipped, both on a transparent
   ground so the mark never sits in a plate or box: the black original for light
   surfaces, and a reversed version for dark ones in which only the neutral
   wordmark is lifted to white. The seal inside the lockup keeps its official
   colours in both. CSS picks the variant, so the swap needs no JavaScript and
   cannot flash the wrong one. */
export function BrandChip({ height = 30 }: { height?: number }) {
  const width = Math.round(height * 1.84);
  return (
    <span className="inline-flex shrink-0 items-center" style={{ height }}>
      <Image
        src="/scc-dark.png"
        alt="Superteam Campus Club, dikelola Universitas Atma Jaya Makassar"
        width={width}
        height={height}
        sizes={`${width}px`}
        className="block h-auto object-contain dark-hidden"
        style={{ width }}
        priority
      />
      <Image
        src="/scc-light.png"
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        sizes={`${width}px`}
        className="light-hidden block h-auto object-contain"
        style={{ width, marginInlineStart: `-${width}px` }}
        priority
      />
    </span>
  );
}

// Kept for call sites that expect a compact mark; renders the same approved lockup.
export function LogoMark({ size = 30 }: { size?: number }) {
  return <BrandChip height={size} />;
}

export function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <BrandChip height={26} />
      {/* Hidden on the narrowest viewports so it can never collide with the
          language and theme controls. */}
      <div className="hidden min-w-0 leading-none sm:block">
        <div className="whitespace-nowrap font-display text-[15px] font-extrabold tracking-[-0.02em] text-[color:var(--text)]">
          UAJM <span className="text-[color:var(--accent)]">BCC</span>
        </div>
        <div className="mt-1 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--faint)]">
          Blockchain Club
        </div>
      </div>
    </div>
  );
}
