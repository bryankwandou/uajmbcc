import type { Metadata } from "next";

/* A participant service, not a marketing page: it is linked from the site but
   kept out of search results, so a certificate lookup form is not what a
   stranger finds when they search for the club. */
export const metadata: Metadata = {
  title: "Klaim Sertifikat · UAJM Blockchain Club",
  description:
    "Layanan peserta UAJM Blockchain Club: buka dan unduh sertifikat kegiatan dengan nama lengkap.",
  robots: { index: false, follow: false },
};

export default function CertLayout({ children }: { children: React.ReactNode }) {
  return children;
}
