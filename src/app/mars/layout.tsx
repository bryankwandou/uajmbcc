import type { Metadata } from "next";

/* Halaman lagu berdiri sendiri di rutenya sendiri. Next.js memecah rute ini
   menjadi bundel terpisah, jadi kode pemutar dan naskah lirik tidak ikut
   membebani beranda dan baru diunduh ketika halaman ini dibuka. */
export const metadata: Metadata = {
  title: "Mars & Lagu Resmi · UAJM BCC",
  description:
    "Mars resmi UAJM BCC dalam dua versi rekaman, lengkap dengan lirik, catatan aransemen, dan berkas MP3, WAV, serta video.",
  openGraph: {
    title: "Mars & Lagu Resmi · UAJM BCC",
    description: "Lagu resmi klub, dua versi rekaman, lirik lengkap, dan berkas siap pakai.",
    type: "music.song",
  },
};

export default function MarsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
