/* Lagu resmi UAJM BCC.
   Lirik disalin persis dari naskah lagu (BRYAN KWANDOU, 2 September 2026,
   v5.5). Kedua versi rekaman memakai lirik yang sama; yang berbeda hanya
   aransemen dan durasi, jadi lirik disimpan sekali per lagu.

   Berkas audio dan video TIDAK ikut ke dalam repo. Semuanya berada di Vercel
   Blob (store: mars-uajmbcc) dan disajikan lewat CDN yang mendukung HTTP range
   request, sehingga pemutar bisa melakukan buffering bertahap seperti pemutar
   video pada umumnya, bukan mengunduh seluruh berkas lebih dulu.

   Neon Postgres tidak disentuh di sini sama sekali; basis data itu khusus
   melayani klaim sertifikat. */

const BLOB = "https://2pthu19njesj87bc.public.blob.vercel-storage.com/mars";

export type LyricSection = { label: string; lines: string[] };

export type MarsVersion = {
  id: string;
  label: string;
  /** Ringkasan aransemen yang membedakan versi ini dari versi lainnya. */
  note: string;
  /** Detik. Dipakai menggambar bilah seek sebelum metadata selesai terunduh. */
  duration: number;
  mp3: string;
  wav: string;
  /** Hanya ada kalau video spektrum untuk versi ini sudah dirender & diunggah. */
  mp4?: string;
};

export type MarsTrack = {
  slug: string;
  title: string;
  fullTitle: string;
  tagline: string;
  spec: { label: string; value: string }[];
  usage: string;
  lyrics: LyricSection[];
  versions: MarsVersion[];
};

/* Audio selalu ada. Video spektrum dirender terpisah, jadi tautannya baru
   dipasang untuk versi yang berkasnya memang sudah berada di blob store. */
const WITH_VIDEO = new Set<string>(["bangun-sampai-jadi-v1", "bangun-sampai-jadi-v2"]);

function media(slug: string) {
  return {
    mp3: BLOB + "/" + slug + ".mp3",
    wav: BLOB + "/" + slug + ".wav",
    ...(WITH_VIDEO.has(slug) ? { mp4: BLOB + "/" + slug + ".mp4" } : {}),
  };
}

export const marsCredit = {
  composer: "BRYAN KWANDOU",
  written: "2 September 2026",
  version: "v5.5",
  owner: "UAJM BCC, di bawah UKM E-Sport Universitas Atma Jaya Makassar",
  note:
    "Naskah lirik dan aransemen disusun untuk keperluan internal klub: video profil, pitch day, dan onboarding anggota baru. Penggunaan di luar kegiatan UAJM BCC harap seizin pengurus.",
};

export const tracks: MarsTrack[] = [
  {
    slug: "bangun-sampai-jadi",
    title: "Bangun Sampai Jadi",
    fullTitle: "UAJM BCC: Bangun Sampai Jadi",
    tagline:
      "Mars klub. Anthem startup yang visioner, bukan agresif — dibuat untuk video profil dan pitch day.",
    spec: [
      {
        label: "Genre",
        value: "Corporate startup anthem — motivational synth-trap, sengaja dibedakan dari EDM esport",
      },
      { label: "Tempo", value: "104–112 BPM, birama 4/4" },
      { label: "Nada dasar", value: "D / A mayor — optimis dan visioner" },
      {
        label: "Instrumen",
        value:
          "Synth arpeggio pluck bersih, hi-hat trap halus, sub bass 808 dalam, brass dan orchestral stab di momen naik kelas, piano minimal di verse",
      },
      {
        label: "Vokal",
        value:
          "Verse tegas semi rap-sung yang percaya diri; reff melodius dengan harmoni choir tipis, kesan visioner-kolektif",
      },
      {
        label: "Produksi",
        value: "Rapi, minimalis, futuristik — mengikuti gaya video pitch startup dan hype reel konferensi",
      },
      {
        label: "Dinamika",
        value:
          "Intro minimalis, verse membangun cerita, pre-chorus riser halus, reff megah tapi elegan, bridge reflektif-hangat, chorus final paling penuh",
      },
    ],
    usage: "Video profil klub, pitch day, dan onboarding anggota baru.",
    lyrics: [
      {
        label: "Intro",
        lines: ["Dari Atma Jaya, sebuah ide lahir", "Bukan cuma wacana, kami bangun sampai jadi"],
      },
      {
        label: "Verse 1",
        lines: [
          "Baris kode pertama, mimpi mulai nyata",
          "Teknologi, bisnis, hukum, satu bahasa",
          "Bukan modal besar, tapi nyali dan kerja",
          "Setiap hackathon, kami naik level",
        ],
      },
      {
        label: "Pre-Reff",
        lines: ["Dari kampus ke rantai blockchain", "Ide mahasiswa, jadi produk yang berjalan"],
      },
      {
        label: "Reff",
        lines: [
          "UAJM BCC, bangun sampai jadi",
          "Unggul di kode, integritas di hati",
          "Kolaboratif, lintas fakultas bersatu",
          "Berkelanjutan, kami ciptakan masa depan baru",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "On-chain kami catat, jejak tak bisa dusta",
          "Setiap produk, bukti nyata usaha",
          "Jembatan ke industri, jaringan tanpa batas",
          "Indonesia Timur, kini punya wajah baru",
        ],
      },
      {
        label: "Reff",
        lines: [
          "UAJM BCC, bangun sampai jadi",
          "Unggul di kode, integritas di hati",
          "Kolaboratif, lintas fakultas bersatu",
          "Berkelanjutan, kami ciptakan masa depan baru",
        ],
      },
      {
        label: "Bridge",
        lines: [
          "Ini bukan soal cepat kaya",
          "Ini soal karya yang nyata",
          "Bela rasa jadi fondasi",
          "Setiap baris kode, punya arti",
        ],
      },
      {
        label: "Reff Final",
        lines: [
          "UAJM BCC, bangun sampai jadi",
          "Unggul, integritas, kolaboratif sejati",
          "Dari ide ke produk, dari kampus ke dunia",
          "Berkelanjutan selamanya, UAJM BCC berjaya!",
        ],
      },
      { label: "Outro", lines: ["UAJM BCC... dari ide, jadi bukti!"] },
    ],
    versions: [
      {
        id: "bangun-sampai-jadi-v1",
        label: "Versi 1",
        note: "Take penuh. Bridge diberi ruang lebih panjang sebelum masuk chorus final.",
        duration: 158.32,
        ...media("bangun-sampai-jadi-v1"),
      },
      {
        id: "bangun-sampai-jadi-v2",
        label: "Versi 2",
        note: "Take lebih padat. Intro dipersingkat, cocok untuk video berdurasi ketat.",
        duration: 152.24,
        ...media("bangun-sampai-jadi-v2"),
      },
    ],
  },
];
