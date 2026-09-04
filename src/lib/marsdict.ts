/* Copy for the anthem page.
 *
 * The site carries ten locales, but this page ships Indonesian plus English
 * only — the same split the certificate page uses. Lyrics, song titles and the
 * arrangement notes are never translated: they are the work itself, in the
 * language it was written in.
 */
import type { Locale } from "./i18n";

export type MarsDict = {
  meta: { title: string; description: string };
  entry: { label: string; short: string };
  nav: { back: string; home: string };
  hero: {
    kicker: string;
    title: string;
    titleEm: string;
    lede: string;
    counts: string;
    playAll: string;
  };
  track: {
    versions: string;
    play: string;
    pause: string;
    nowPlaying: string;
    lyrics: string;
    spec: string;
    usage: string;
    download: string;
    videoQuality: string;
  };
  docs: {
    kicker: string;
    title: string;
    composer: string;
    written: string;
    owner: string;
    version: string;
  };
  sibling: { title: string; body: string; cta: string; href: string };
};

const id: MarsDict = {
  meta: {
    title: "Mars & Lagu Resmi · UAJM BCC",
    description:
      "Mars resmi UAJM BCC dalam dua versi rekaman, lengkap dengan lirik, catatan aransemen, dan berkas MP3, WAV, serta video.",
  },
  entry: { label: "Mars & Lagu", short: "Mars" },
  nav: { back: "Kembali", home: "Beranda" },
  hero: {
    kicker: "Lagu Resmi",
    title: "Mars",
    titleEm: "UAJM BCC",
    lede:
      "Lagu resmi klub, direkam dalam dua versi aransemen. Halaman ini memuat lirik lengkap, catatan produksi, dan berkas siap pakai untuk video profil, pitch day, serta onboarding anggota baru.",
    counts: "1 lagu · 2 versi rekaman · MP3, WAV, dan video",
    playAll: "Putar mars",
  },
  track: {
    versions: "Versi rekaman",
    play: "Putar",
    pause: "Jeda",
    nowPlaying: "Sedang diputar",
    lyrics: "Lirik lengkap",
    spec: "Catatan aransemen",
    usage: "Penggunaan",
    download: "Unduh",
    videoQuality: "1080p · 60 fps · H.264 + AAC",
  },
  docs: {
    kicker: "Dokumentasi",
    title: "Kredit dan hak pakai",
    composer: "Penulis & aransemen",
    written: "Tanggal naskah",
    owner: "Pemilik hak pakai",
    version: "Versi naskah",
  },
  sibling: {
    title: "Mars UKM E-Sport UAJM",
    body:
      "UAJM BCC berada di bawah UKM E-Sport UAJM. Tiga mars induk organisasi, masing-masing dua versi, ada di halaman lagu mereka.",
    cta: "Buka halaman lagu UKM E-Sport",
    href: "https://uajmesport.vercel.app/mars",
  },
};

const en: MarsDict = {
  meta: {
    title: "Anthem & Official Song · UAJM BCC",
    description:
      "The official anthem of UAJM BCC in two recorded versions, with full lyrics, arrangement notes, and MP3, WAV and video files.",
  },
  entry: { label: "Anthem", short: "Anthem" },
  nav: { back: "Back", home: "Home" },
  hero: {
    kicker: "Official Song",
    title: "The anthem of",
    titleEm: "UAJM BCC",
    lede:
      "The club's official song, recorded in two arrangements. This page holds the full lyrics, the production notes, and files ready for the profile video, pitch days and member onboarding.",
    counts: "1 song · 2 recorded versions · MP3, WAV and video",
    playAll: "Play the anthem",
  },
  track: {
    versions: "Recorded versions",
    play: "Play",
    pause: "Pause",
    nowPlaying: "Now playing",
    lyrics: "Full lyrics",
    spec: "Arrangement notes",
    usage: "Intended use",
    download: "Download",
    videoQuality: "1080p · 60 fps · H.264 + AAC",
  },
  docs: {
    kicker: "Documentation",
    title: "Credit and permitted use",
    composer: "Written & arranged by",
    written: "Draft dated",
    owner: "Rights held by",
    version: "Draft version",
  },
  sibling: {
    title: "The UKM E-Sport UAJM anthems",
    body:
      "UAJM BCC sits under UKM E-Sport UAJM. The parent unit's three anthems, each in two versions, are on their own song page.",
    cta: "Open the UKM E-Sport song page",
    href: "https://uajmesport.vercel.app/mars",
  },
};

export function marsDict(locale: Locale): MarsDict {
  return locale === "id" ? id : en;
}
