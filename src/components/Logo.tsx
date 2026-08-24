export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bccg" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      {/* Outer hex block */}
      <path
        d="M24 3.5 41.7 13.75 V34.25 L24 44.5 6.3 34.25 V13.75 Z"
        stroke="url(#bccg)"
        strokeWidth="2"
        fill="rgba(124,92,255,0.06)"
      />
      {/* Inner stacked blocks — the 'chain' */}
      <rect x="16.5" y="15" width="8" height="8" rx="1.6" fill="url(#bccg)" />
      <rect x="25.5" y="15" width="6" height="6" rx="1.4" fill="#22D3EE" opacity="0.55" />
      <rect x="16.5" y="24.5" width="6" height="6" rx="1.4" fill="#7C5CFF" opacity="0.55" />
      <rect x="24" y="24.5" width="8" height="8" rx="1.6" fill="url(#bccg)" />
      {/* link node */}
      <circle cx="24" cy="24" r="2.1" fill="#05060B" stroke="url(#bccg)" strokeWidth="1.4" />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark />
      <div className="leading-none">
        <div className="font-display text-[15px] font-bold tracking-tight text-white">
          UAJM<span className="text-cyan-glow"> BCC</span>
        </div>
        <div className="text-[9px] uppercase tracking-[0.22em] text-white/40">Blockchain Club</div>
      </div>
    </div>
  );
}
