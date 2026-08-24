import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers, noFlashScript } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
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
    <html lang="id" dir="ltr" data-theme="dark" className={`${inter.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
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
