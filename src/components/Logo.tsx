import Image from "next/image";

/* The club's official mark is the Superteam Campus Club lockup ("Managed by
   Universitas Atma Jaya Makassar"), taken from the approved UAJM logo form.
   The bare university seal is deliberately NOT used as the club logo: reusing an
   institution's seal as a small club's own mark is not permitted. The approved
   lockup already contains the sanctioned managed-by seal.
   The logo art is dark on transparent, so it sits on a white chip to stay
   legible on both the dark and light themes. */
/* The approved lockup art is 1191x648 (about 1.84:1) after trimming its empty
   margins, so the chip is sized by width and lets height follow. */
export function BrandChip({ height = 30 }: { height?: number }) {
  const width = Math.round(height * 1.84);
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-2 py-1.5 ring-1 ring-black/10">
      <Image
        src="/superteam-campus-club.png"
        alt="Superteam Campus Club, dikelola Universitas Atma Jaya Makassar"
        width={width}
        height={height}
        sizes={`${width}px`}
        className="block h-auto object-contain"
        style={{ width }}
        priority
      />
    </span>
  );
}

// Kept for call sites that expect a compact mark; renders the same approved chip.
export function LogoMark({ size = 30 }: { size?: number }) {
  return <BrandChip height={size} />;
}

export function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <BrandChip height={24} />
      {/* Wordmark is hidden on the narrowest viewports so it can never collide
          with the language and theme controls. */}
      <div className="hidden min-w-0 leading-none sm:block">
        <div className="whitespace-nowrap font-display text-[15px] tracking-[-0.01em] text-[color:var(--text)]">
          UAJM <span className="text-[color:var(--gold)]">BCC</span>
        </div>
        <div className="mt-1 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.2em] text-[color:var(--faint)]">
          Blockchain Club
        </div>
      </div>
    </div>
  );
}
