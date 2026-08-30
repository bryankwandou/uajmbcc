/* Demonstration certificates for the BCC registry.
 *
 * BCC has issued nothing yet, so there is no real document to show. These
 * stand in for that — and they are built so they can never be mistaken for
 * one: every recipient is "Peserta Contoh NN", and a grey DATA CONTOH is
 * struck diagonally across the middle of each sheet.
 *
 * They exist to prove the claim path works end to end on the live site, and
 * they are meant to be removed the moment real certificates arrive:
 *
 *   node scripts/demo-certificates.mjs          # write 10 demo sheets
 *   node scripts/demo-certificates.mjs --clean  # remove every one of them
 */
import { readFileSync, existsSync } from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";

const SITE = "uajmbcc";
const SALT = "uajm-bcc/sertifikat/v1";
const TITLE = "Sertifikat Peserta (DATA CONTOH)";
const EVENT = "Web3 & Solana Interactive Gathering #1 · Superteam Campus Club Makassar";
const ISSUED = "10 Juli 2025";
const COUNT = 10;

function dbUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  for (const f of [".env.local", ".env.development.local"]) {
    if (!existsSync(f)) continue;
    for (const line of readFileSync(f, "utf8").split(/\r?\n/)) {
      const m = /^\s*DATABASE_URL\s*=\s*(.+)\s*$/.exec(line);
      if (m) return m[1].replace(/^["']|["']$/g, "");
    }
  }
  throw new Error("DATABASE_URL is not set");
}

const normName = (v) =>
  v.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const identityKey = (name) =>
  createHash("sha256").update(SALT + "|" + normName(name)).digest("hex");

function latin1(s) {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) & 0xff;
  return out;
}
const esc = (s) => s.normalize("NFC").replace(/[\\()]/g, (m) => "\\" + m).replace(/[^\x20-\x7e\xa0-\xff]/g, "");

function demoPdf(name, no) {
  const W = 842, H = 595, M = 74;
  const line = (font, size, x, y, text) =>
    "BT /" + font + " " + size + " Tf " + x + " " + y + " Td (" + esc(text) + ") Tj ET\n";

  let c = "";
  c += "0.10 0.25 0.82 rg 0 " + (H - 10) + " " + W + " 10 re f\n";   // BCC blue
  c += "0.96 0.77 0.09 rg 0 0 " + W + " 10 re f\n";                   // seal yellow
  c += "0.85 0.85 0.86 RG 1 w " + (M - 22) + " " + (M - 22) + " " + (W - 2 * (M - 22)) + " " + (H - 2 * (M - 22)) + " re S\n";
  c += "0 0 0 rg\n";

  c += line("F2", 13, M, H - 96, "UAJM BLOCKCHAIN CLUB");
  c += line("F1", 11, M, H - 114, "Universitas Atma Jaya Makassar");

  c += "0.10 0.25 0.82 rg\n" + line("F2", 40, M, H - 178, "SERTIFIKAT") + "0 0 0 rg\n";
  c += line("F1", 15, M, H - 202, "Peserta Kegiatan - LEMBAR CONTOH");

  c += line("F1", 11, M, H - 264, "Diberikan kepada");
  c += line("F2", 28, M, H - 302, name);

  c += line("F1", 11, M, H - 360, "atas keikutsertaannya pada Web3 & Solana Interactive Gathering #1");
  c += line("F1", 11, M, H - 378, "yang diselenggarakan Superteam Campus Club Makassar bersama");
  c += line("F1", 11, M, H - 396, "UAJM Blockchain Club.");

  c += "0.55 0.55 0.58 rg\n";
  c += line("F2", 11, M, H - 436, "LEMBAR INI CONTOH, BUKAN SERTIFIKAT SAH.");
  c += "0 0 0 rg\n";

  c += line("F1", 11, M, H - 480, "Makassar, " + ISSUED);
  c += line("F2", 11, M, H - 502, "Ketua UAJM Blockchain Club");
  c += line("F1", 9, M, 44, "No. CONTOH-" + no + "/UAJM-BCC/2025");

  /* The stamp goes last so nothing can sit over it. Rotated ~20 degrees via a
     text matrix, in a light grey that reads through the whole sheet. */
  const cos = 0.94, sin = 0.34;
  c += "q 0.87 0.88 0.92 rg BT /F2 78 Tf " +
    cos + " " + sin + " " + -sin + " " + cos + " 120 200 Tm (DATA CONTOH) Tj ET Q\n";

  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + W + " " + H + "] " +
      "/Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    "<< /Length " + c.length + " >>\nstream\n" + c + "endstream",
  ];

  const chunks = [];
  let offset = 0;
  const push = (u) => { chunks.push(u); offset += u.length; };
  push(latin1("%PDF-1.4\n%âãÏÓ\n"));
  const xref = [];
  objs.forEach((body, i) => {
    xref.push(offset);
    push(latin1(i + 1 + " 0 obj\n" + body + "\nendobj\n"));
  });
  const startxref = offset;
  let x = "xref\n0 " + (objs.length + 1) + "\n0000000000 65535 f \n";
  for (const o of xref) x += String(o).padStart(10, "0") + " 00000 n \n";
  x += "trailer\n<< /Size " + (objs.length + 1) + " /Root 1 0 R >>\nstartxref\n" + startxref + "\n%%EOF\n";
  push(latin1(x));

  const total = chunks.reduce((n, u) => n + u.length, 0);
  const out = new Uint8Array(total);
  let at = 0;
  for (const u of chunks) { out.set(u, at); at += u.length; }
  return Buffer.from(out);
}

const sql = neon(dbUrl());

if (process.argv.includes("--clean")) {
  const gone = await sql`DELETE FROM certificates WHERE site = ${SITE} AND title = ${TITLE} RETURNING id`;
  console.log("demo sheets removed:", gone.length);
  process.exit(0);
}

let bytes = 0;
for (let i = 1; i <= COUNT; i++) {
  const no = String(i).padStart(2, "0");
  const name = "Peserta Contoh " + no;
  const pdf = demoPdf(name, no);
  bytes += pdf.length;
  await sql`
    INSERT INTO certificates
      (id, site, identity_key, full_name, nim, title, event, issued_at, ref,
       file_name, mime, size, data, created_at)
    VALUES (${randomUUID()}, ${SITE}, ${identityKey(name)}, ${name}, '',
            ${TITLE}, ${EVENT}, ${ISSUED}, ${"CONTOH-" + no + "/UAJM-BCC/2025"},
            ${"contoh-" + no + ".pdf"}, 'application/pdf', ${pdf.length},
            ${pdf.toString("base64")}, ${Date.now() + i})
  `;
}
console.log("demo sheets written:", COUNT, "-", (bytes / 1024).toFixed(1), "KB total");
console.log("claim any of them with the name: Peserta Contoh 01 .. Peserta Contoh " + String(COUNT).padStart(2, "0"));
