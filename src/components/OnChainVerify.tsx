"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useApp } from "./Providers";

const RPC = "https://api.devnet.solana.com";
// Solana addresses are base58; reject anything else before it reaches the RPC.
const ADDR_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

async function rpc(method: string, params: unknown[], signal?: AbortSignal) {
  const res = await fetch(RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal,
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`RPC ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(String(json.error.message ?? "RPC error"));
  return json.result;
}

type Account = { lamports: number; owner: string; executable: boolean; found: boolean };

/* Discreet technical proof, collapsed by default. A verification footnote, not
   a marketing section. */
export function OnChainVerify() {
  const { t } = useApp();
  const p = t.proof;
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState<number | null>(null);
  const [addr, setAddr] = useState("SysvarC1ock11111111111111111111111111111111");
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    const ctrl = new AbortController();
    let alive = true;
    const pull = () =>
      rpc("getSlot", [], ctrl.signal)
        .then((s) => alive && setSlot(Number(s)))
        .catch(() => {});
    pull();
    const timer = setInterval(pull, 5000);
    return () => {
      alive = false;
      clearInterval(timer);
      ctrl.abort();
    };
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const lookup = useCallback(async () => {
    const value = addr.trim();
    if (!ADDR_RE.test(value)) {
      setAccount(null);
      setErr(p.rpcError);
      return;
    }
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setLoading(true);
    setErr(null);
    setAccount(null);
    try {
      const info = await rpc("getAccountInfo", [value, { encoding: "base64" }], ctrl.signal);
      if (!info?.value) setAccount({ lamports: 0, owner: "n/a", executable: false, found: false });
      else
        setAccount({
          lamports: Number(info.value.lamports) || 0,
          owner: String(info.value.owner ?? "n/a"),
          executable: Boolean(info.value.executable),
          found: true,
        });
    } catch (e) {
      if ((e as Error).name !== "AbortError") setErr(p.rpcError);
    } finally {
      setLoading(false);
    }
  }, [addr, p.rpcError]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-12">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 font-mono text-[10.5px] text-[color:var(--faint)] duration-200 ease-crisp [transition-property:color] hover:text-[color:var(--text)]"
        aria-expanded={open}
      >
        <span className={`inline-block duration-200 ease-crisp [transition-property:transform] ${open ? "rotate-90" : ""}`}>
          ›
        </span>
        {p.toggle}
      </button>

      {open && (
        <div className="panel mt-4 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="max-w-xl text-[11.5px] leading-relaxed text-[color:var(--faint)]">{p.blurb}</span>
            <span className="font-mono text-[11px] text-[color:var(--faint)]">
              {p.slot}: <span className="text-[color:var(--text)]">{slot ? slot.toLocaleString("en-US") : "…"}</span>
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && lookup()}
              spellCheck={false}
              autoComplete="off"
              maxLength={64}
              dir="ltr"
              className="min-w-0 flex-1 rounded border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-2 font-mono text-[11px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
            />
            <button onClick={lookup} disabled={loading} className="btn-ghost shrink-0 px-4 py-2 text-[11px] disabled:opacity-50">
              {loading ? `${p.checking}…` : p.check}
            </button>
          </div>
          {err && <p className="mt-3 font-mono text-[11px] text-[#e0553f]">{err}</p>}
          {account && (
            <div className="mt-4 grid gap-2 font-mono text-[11px] text-[color:var(--faint)] sm:grid-cols-3">
              <div>
                {p.status}: <span className="text-[color:var(--text)]">{account.found ? p.found : p.notFound}</span>
              </div>
              <div>
                {p.balance}: <span className="text-[color:var(--text)]">{(account.lamports / 1e9).toFixed(4)} SOL</span>
              </div>
              <div>
                {p.program}: <span className="text-[color:var(--text)]">{account.executable ? p.yes : p.no}</span>
              </div>
              <div className="min-w-0 sm:col-span-3">
                {p.owner}: <span className="break-all text-[color:var(--text)]">{account.owner}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
