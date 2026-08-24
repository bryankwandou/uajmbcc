import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
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
    <html lang="id" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
