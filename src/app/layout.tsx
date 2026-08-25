import type { Metadata } from "next";
import { Instrument_Sans, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers, noFlashScript } from "@/components/Providers";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "UAJM BCC · Universitas Atma Jaya Makassar Blockchain Club",
  description:
    "Klub blockchain kampus di bawah UKM E-Sport UAJM. Dari ide mahasiswa sampai produk yang berjalan. Diinisiasi Superteam Campus Club.",
  keywords: ["UAJM BCC", "Blockchain Club", "Solana", "Web3", "Universitas Atma Jaya Makassar", "Superteam"],
  openGraph: {
    title: "UAJM BCC · Blockchain Club",
    description: "Dari ide mahasiswa sampai produk yang berjalan.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" dir="ltr" data-theme="light" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Static, self-authored string built from fixed constants. */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
