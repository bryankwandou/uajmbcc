import Image from "next/image";

/* Official institutional mark. Uses the genuine Universitas Atma Jaya Makassar
   seal, presented on a white badge so the colour crest stays legible on both
   the dark and light themes. No invented emblem is used anywhere. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="grid place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/10"
      style={{ width: size, height: size }}
    >
      <Image
        src="/uajm-logo.png"
        alt="Universitas Atma Jaya Makassar"
        width={size - 6}
        height={size - 6}
        className="object-contain"
        priority
      />
    </span>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={38} />
      <div className="leading-none">
        <div className="font-display text-[17px] tracking-[-0.01em] text-[color:var(--text)]">
          UAJM <span className="text-[color:var(--gold)]">BCC</span>
        </div>
        <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-[color:var(--faint)]">
          Blockchain Club
        </div>
      </div>
    </div>
  );
}
