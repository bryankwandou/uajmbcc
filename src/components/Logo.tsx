/* Typographic wordmark. Deliberately a lettermark rather than an invented
   crest, so nothing here can be mistaken for an official institutional seal.
   The genuine university seal is used separately, as-is. */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="0.6" y="0.6" width="38.8" height="38.8" rx="1.4" stroke="var(--line-strong)" />
      <path d="M8 27.5V12.5h5.4c2.5 0 4 1.3 4 3.4 0 1.5-.8 2.6-2.1 3.1 1.6.4 2.6 1.6 2.6 3.3 0 2.4-1.7 3.9-4.4 3.9H8Z" fill="var(--text)" />
      <path d="M21.5 20c0-4.4 3-7.7 7.2-7.7 1.6 0 3 .5 4.1 1.3l-1.5 2.6a4.3 4.3 0 0 0-2.5-.8c-2.3 0-4 1.9-4 4.6s1.7 4.6 4 4.6c1 0 1.9-.3 2.6-.9l1.5 2.6a7 7 0 0 1-4.2 1.4c-4.2 0-7.2-3.3-7.2-7.7Z" fill="var(--gold)" />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark />
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
