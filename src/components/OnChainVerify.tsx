"use client";
import { useEffect, useState, useCallback } from "react";

const RPC = "https://api.devnet.solana.com";

async function rpc(method: string, params: unknown[] = []) {
  const res = await fetch(RPC, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message);
  return json.result;
}

type Account = { lamports: number; owner: string; executable: boolean; found: boolean };

// Discreet technical proof. Kept intentionally low-key and collapsed by default;
// this is a verification footnote, not a marketing section.
export function OnChainVerify() {
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState<number | null>(null);
  const [addr, setAddr] = useState("SysvarC1ock11111111111111111111111111111111");
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let alive = true;
    const pull = () => rpc("getSlot").then((s) => alive && setSlot(s)).catch(() => {});
    pull();
    const t = setInterval(pull, 5000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [open]);

  const lookup = useCallback(async () => {
    setLoading(true);
    setErr(null);
    setAccount(null);
    try {
      const info = await rpc("getAccountInfo", [addr.trim(), { encoding: "base64" }]);
      if (!info?.value) setAccount({ lamports: 0, owner: "n/a", executable: false, found: false });
      else setAccount({ lamports: info.value.lamports, owner: info.value.owner, executable: info.value.executable, found: true });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Gagal terhubung ke RPC");
    } finally {
      setLoading(false);
    }
  }, [addr]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-[11px] text-white/30 transition-colors hover:text-white/60"
        aria-expanded={open}
      >
        <span className={`inline-block transition-transform ${open ? "rotate-90" : ""}`}>›</span>
        Bukti teknis: verifikasi jaringan Solana
      </button>

      {open && (
        <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.015] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
            <span>Panel ini memanggil RPC publik secara langsung sebagai bukti bahwa produk berjalan di jaringan, bukan mock.</span>
            <span className="font-mono">
              slot: <span className="text-white/70">{slot ? slot.toLocaleString("id-ID") : "…"}</span>
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              spellCheck={false}
              className="flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs text-white/80 outline-none focus:border-violet-glow/50"
            />
            <button
              onClick={lookup}
              disabled={loading}
              className="rounded-lg border border-white/12 px-4 py-2 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white disabled:opacity-50"
            >
              {loading ? "…" : "Cek akun"}
            </button>
          </div>
          {err && <p className="mt-3 text-xs text-red-400/80">{err}</p>}
          {account && (
            <div className="mt-3 grid gap-2 font-mono text-[11px] text-white/50 sm:grid-cols-3">
              <div>status: <span className="text-white/75">{account.found ? "ditemukan" : "tidak ada"}</span></div>
              <div>saldo: <span className="text-white/75">{(account.lamports / 1e9).toFixed(4)} SOL</span></div>
              <div>program: <span className="text-white/75">{account.executable ? "ya" : "tidak"}</span></div>
              <div className="truncate sm:col-span-3">owner: <span className="text-white/75">{account.owner}</span></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
