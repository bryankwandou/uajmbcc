import Image from "next/image";

/* The club's official mark is the Superteam Campus Club lockup ("Managed by
   Universitas Atma Jaya Makassar"), taken from the approved UAJM logo form.
   The bare university seal is deliberately NOT used as the club logo: reusing an
   institution's seal as a small club's own mark is not permitted. The approved
   lockup already contains the sanctioned managed-by seal.
   The logo art is dark on transparent, so it sits on a white chip to stay
   legible on both the dark and light themes. */
export function BrandChip({ height = 30 }: { height?: number }) {
  return (
    <span
      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 ring-1 ring-black/10"
      style={{ height: height + 12 }}
    >
      <Image
        src="/superteam-campus-club.png"
        alt="Superteam Campus Club, dikelola Universitas Atma Jaya Makassar"
        width={Math.round(height * 2.6)}
        height={height}
        className="h-auto w-auto object-contain"
        style={{ height }}
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
    <div className="flex items-center gap-3">
      <BrandChip height={26} />
      <div className="leading-none">
        <div className="font-display text-[16px] tracking-[-0.01em] text-[color:var(--text)]">
          UAJM <span className="text-[color:var(--gold)]">BCC</span>
        </div>
        <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[color:var(--faint)]">
          Blockchain Club
        </div>
      </div>
    </div>
  );
}
