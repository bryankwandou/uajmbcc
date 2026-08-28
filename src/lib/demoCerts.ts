/* Sample registry generator.
 *
 * One click fills all 25 reference slots so the claim flow can be exercised
 * end to end before a single real document exists. Every sheet it draws is
 * stamped DATA CONTOH and every recipient is "Peserta Contoh NN", so a sample
 * can never be mistaken for, or quietly replace, a real certificate.
 */
import { newId, SLOTS, type CertRecord } from "./certstore";

const PROGRAMS = [
  ["Peserta Kelas Dasar Blockchain", "UAJM Blockchain Club"],
  ["Peserta Workshop Solana", "UAJM Blockchain Club x Superteam"],
  ["Peserta Kelas Smart Contract", "Divisi Pengembangan UAJM BCC"],
  ["Kontributor Riset Web3", "Divisi Riset UAJM BCC"],
  ["Panitia Kegiatan", "UAJM Blockchain Club"],
];

function draw(index: number): string {
  const w = 1400;
  const h = 990;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Kanvas tidak tersedia di peramban ini.");

  const [program, issuer] = PROGRAMS[index % PROGRAMS.length];
  const no = String(index + 1).padStart(2, "0");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#1a3fd0";
  ctx.fillRect(0, 0, w, 12);
  ctx.fillStyle = "#f5c518";
  ctx.fillRect(0, h - 12, w, 12);

  ctx.strokeStyle = "rgba(10,16,32,0.18)";
  ctx.lineWidth = 2;
  ctx.strokeRect(46, 46, w - 92, h - 92);

  ctx.textAlign = "left";
  ctx.fillStyle = "#1a3fd0";
  ctx.fillRect(110, 128, 46, 4);
  ctx.font = "600 17px 'Courier New', monospace";
  ctx.fillText("UAJM BLOCKCHAIN CLUB", 110, 172);

  ctx.fillStyle = "#0a1020";
  ctx.font = "700 62px Georgia, serif";
  ctx.fillText("Sertifikat", 110, 268);
  ctx.font = "400 26px Georgia, serif";
  ctx.fillStyle = "rgba(10,16,32,0.7)";
  ctx.fillText(program, 110, 312);

  ctx.font = "400 19px Georgia, serif";
  ctx.fillStyle = "rgba(10,16,32,0.62)";
  ctx.fillText("Diberikan kepada", 110, 420);

  ctx.fillStyle = "#0a1020";
  ctx.font = "700 54px Georgia, serif";
  ctx.fillText(`Peserta Contoh ${no}`, 110, 486);

  ctx.font = "400 21px Georgia, serif";
  ctx.fillStyle = "rgba(10,16,32,0.7)";
  ctx.fillText("atas keikutsertaannya pada kegiatan yang diselenggarakan oleh", 110, 560);
  ctx.fillStyle = "#0a1020";
  ctx.font = "600 28px Georgia, serif";
  ctx.fillText(issuer, 110, 602);

  ctx.font = "400 18px Georgia, serif";
  ctx.fillStyle = "rgba(10,16,32,0.62)";
  ctx.fillText("Makassar, 20 Februari 2026", 110, 742);
  ctx.fillText("Ketua UAJM Blockchain Club", 110, 830);

  ctx.font = "400 15px 'Courier New', monospace";
  ctx.fillStyle = "rgba(10,16,32,0.5)";
  ctx.fillText(`No. CONTOH-${no}/UAJM-BCC/2026`, 110, h - 70);

  // Unmistakable sample stamp, drawn last so nothing sits over it.
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-Math.PI / 9);
  ctx.textAlign = "center";
  ctx.font = "800 130px Georgia, serif";
  ctx.fillStyle = "rgba(26,63,208,0.12)";
  ctx.fillText("DATA CONTOH", 0, 40);
  ctx.restore();

  return canvas.toDataURL("image/png");
}

export function sampleRecords(): CertRecord[] {
  const now = Date.now();
  return Array.from({ length: SLOTS }, (_, i) => {
    const no = String(i + 1).padStart(2, "0");
    const data = draw(i);
    return {
      id: newId(),
      fullName: `Peserta Contoh ${no}`,
      title: PROGRAMS[i % PROGRAMS.length][0],
      event: PROGRAMS[i % PROGRAMS.length][1],
      issuedAt: "20 Februari 2026",
      ref: `CONTOH-${no}/UAJM-BCC/2026`,
      fileName: `contoh-${no}.png`,
      mime: "image/png",
      size: Math.round((data.length - data.indexOf(",") - 1) * 0.75),
      data,
      source: "local" as const,
      createdAt: now + i,
    };
  });
}
