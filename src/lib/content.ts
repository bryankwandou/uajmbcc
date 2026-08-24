// Single source of truth. Every figure here is verified against UAJM BCC and
// UKM E-Sport official documents (SK, AD/ART, Google Form responses) and
// certificates on file. No fabricated metrics.

export const org = {
  name: "UAJM BCC",
  full: "Universitas Atma Jaya Makassar Blockchain Club",
  parent: "UKM E-Sport UAJM",
  tagline: "Klub blockchain kampus di bawah UKM E-Sport UAJM. Dari ide mahasiswa sampai produk yang berjalan.",
  network: "Solana",
  initiatedBy: "Superteam Campus Club, Superteam Indonesia",
  location: "Universitas Atma Jaya Makassar, Sulawesi Selatan",
  domainEsport: "uajmesport.vercel.app",
  domainBcc: "uajmbcc.vercel.app",
};

export const stats = [
  { value: 6, prefix: "", suffix: "", label: "MVP selesai", sub: "live & diuji internal" },
  { value: 50, prefix: "", suffix: "", label: "Target MVP", sub: "program Superteam Campus Club" },
  { value: 20, prefix: "", suffix: "+", label: "Anggota & pengurus", sub: "ekosistem digital" },
  { value: 30, prefix: "~", suffix: "", label: "Riwayat hackathon", sub: "track record PIC" },
];

// Charter for the blockchain club, disusun selaras dengan AD/ART UKM E-Sport
// (SK No. 002/SK/UKM-E-SPORT/UAJM/XII/2025).
export const vision =
  "Menjadikan Universitas Atma Jaya Makassar simpul pengembang Web3 di Indonesia Timur, tempat mahasiswa belajar membangun produk digital yang nyata, teruji, dan berkelanjutan.";

export const missions = [
  {
    title: "Edukasi berbasis praktik",
    body: "Membekali mahasiswa dengan literasi blockchain terapan: dari konsep dasar, arsitektur aplikasi, hingga rilis produk yang dapat diuji publik.",
  },
  {
    title: "Dari ide ke produk",
    body: "Memfasilitasi jalur lengkap dari brainstorming, prototipe, sampai peluncuran, dengan pendampingan teknis penuh hingga produk berjalan.",
  },
  {
    title: "Kolaborasi lintas fakultas",
    body: "Menyatukan mahasiswa Teknologi Informasi, Ekonomi & Bisnis, serta Hukum dalam satu tim produk yang utuh: teknis, model bisnis, dan kepatuhan.",
  },
  {
    title: "Jembatan ke industri",
    body: "Menghubungkan anggota dengan jaringan Superteam Indonesia, kompetisi, dan peluang hackathon tingkat nasional maupun internasional.",
  },
];

// Enam MVP nyata hasil pendampingan Superteam Campus Club UAJM. Setiap proyek
// punya pemilik ide (ideator) dan situs live yang dapat diperiksa. PIC dan
// orchestrator untuk keenamnya: Vincentius Bryan Kwandou (mahasiswa aktif).
// Data ini terdokumentasi resmi, bukan generalisasi.
export type Mvp = {
  code: string; title: string; domain: string; domainEn: string; net: string;
  desc: string; descEn: string; by: string; byEn: string; href: string;
};

export const mvps: Mvp[] = [
  {
    code: "01", title: "KopEdu", domain: "Edukasi Koperasi", domainEn: "Cooperative Education", net: "Solana",
    desc: "Literasi koperasi Indonesia lewat kurikulum interaktif, AI tutor, dan sertifikat NFT on-chain di Solana sebagai bukti belajar yang permanen dan terverifikasi. Berawal dari Web2, kini MVP berbasis Solana.",
    descEn: "Indonesian cooperative literacy through an interactive curriculum, an AI tutor, and on-chain NFT certificates on Solana as permanent, verifiable proof of learning. Started as Web2, now a Solana-based MVP.",
    by: "Ide: Marvel Harjosetio", byEn: "Idea: Marvel Harjosetio", href: "https://kopedux.vercel.app",
  },
  {
    code: "02", title: "Veritair", domain: "Drone Delivery", domainEn: "Drone Delivery", net: "Solana",
    desc: "Platform pemesanan dan pembayaran layanan drone delivery berbasis Solana.",
    descEn: "A Solana-based ordering and payment platform for drone delivery services.",
    by: "Ide: Putra Purwanugraha Tengbunan", byEn: "Idea: Putra Purwanugraha Tengbunan", href: "https://veritair.vercel.app",
  },
  {
    code: "03", title: "SOLQ", domain: "Pembayaran QRIS", domainEn: "QRIS Payments", net: "Solana Mainnet",
    desc: "Orkestrator pembayaran Solana x QRIS: bayar merchant QRIS Indonesia mana pun pakai SOL, USDC, atau IDRX secara instan dan non-custodial.",
    descEn: "A Solana x QRIS payment orchestrator: pay any Indonesian QRIS merchant with SOL, USDC, or IDRX, instantly and non-custodially.",
    by: "PIC: Vincentius Bryan Kwandou", byEn: "PIC: Vincentius Bryan Kwandou", href: "https://solq.vercel.app",
  },
  {
    code: "04", title: "EverAnima", domain: "AI Memory On-chain", domainEn: "On-chain AI Memory", net: "Solana Devnet",
    desc: "AI pribadi yang menulis sendiri file memorinya (persona.md), menyegel tiap versi ke Solana Devnet lewat Memo program dengan tanda tangan wallet pemilik, dan dapat dibawa ke agent AI mana pun.",
    descEn: "A personal AI that writes its own memory file (persona.md), seals each version to Solana Devnet via the Memo program signed by the owner's wallet, and can be exported to any AI agent.",
    by: "Ide: Marvel Harjosetio", byEn: "Idea: Marvel Harjosetio", href: "https://everanima.vercel.app",
  },
  {
    code: "05", title: "DiaFund", domain: "Donasi Escrow", domainEn: "Escrow Donations", net: "Solana",
    desc: "Platform donasi dengan escrow berbasis milestone di Solana.",
    descEn: "A donation platform with milestone-based escrow on Solana.",
    by: "Ide: Christian Alexander Wongso", byEn: "Idea: Christian Alexander Wongso", href: "https://diafund.vercel.app",
  },
  {
    code: "06", title: "Anamneon", domain: "Rekam Medis", domainEn: "Medical Records", net: "Solana",
    desc: "Riwayat penyakit pasien yang dikunci di Solana: dapat dibuktikan asli dalam hitungan detik, tanpa satu byte data medis pun bocor ke publik.",
    descEn: "Patient medical history anchored on Solana: provably authentic in seconds, without leaking a single byte of medical data to the public.",
    by: "Ide: Denzel Joshua Yasin", byEn: "Idea: Denzel Joshua Yasin", href: "https://anamneon.vercel.app",
  },
];

export const timeline = [
  { date: "Feb 2024", title: "Fondasi kompetitif", body: "Pendiri menembus E-Fortion 5.0, International Business Case Competition (IBM Student Union, Universitas Ciputra)." },
  { date: "2024 s.d. 2025", title: "Jam terbang", body: "Menempuh hampir 30 hackathon yang membangun disiplin eksekusi cepat dan portofolio produk." },
  { date: "Jun 2025", title: "UKM E-Sport resmi", body: "Proposal pembentukan UKM E-Sport UAJM disahkan sebagai payung resmi bagi klub." },
  { date: "Des 2025", title: "AD/ART & kepengurusan", body: "SK penetapan AD/ART dan kepengurusan periode 2025/2026 ditetapkan." },
  { date: "2026", title: "BCC lahir", body: "UAJM BCC diinisiasi di bawah Superteam Campus Club. Meetup builder perdana menghasilkan enam produk MVP." },
];

export const structure = {
  lead: { role: "Ketua / PIC BCC", name: "Vincentius Bryan Kwandou", note: "Ketua Umum UKM E-Sport sekaligus Ketua UAJM BCC" },
  divisions: [
    { name: "Turnamen & Kompetisi", focus: "Hackathon & event" },
    { name: "Pelatihan & Pengembangan", focus: "Kurikulum pengembang" },
    { name: "Kreatif & Konten Digital", focus: "Brand & dokumentasi" },
    { name: "Humas & Relasi", focus: "Kemitraan & Superteam" },
  ],
};

export const achievements = [
  { title: "E-Fortion 5.0, ENSPIRIT 5.0", org: "IBM Student Union, Universitas Ciputra", tag: "International Business Case Competition", date: "25 Feb 2024" },
  { title: "Personal Branding Academy", org: "Kadev Co.", tag: "Certificate of Completion", date: "31 Jul 2026" },
  { title: "Hampir 30 Hackathon", org: "Portofolio pendiri", tag: "GitHub: bryankwandou", date: "2024 s.d. 2026" },
];

export const faculties = [
  { name: "Ekonomi & Bisnis", count: 7 },
  { name: "Teknologi Informasi", count: 4 },
  { name: "Hukum", count: 4 },
];

export const links = {
  instagramBcc: "https://instagram.com/uajm_bcc",
  instagramEsport: "https://instagram.com/uajm_esport",
  github: "https://github.com/bryankwandou",
  superteam: "https://id.superteam.fun",
  campus: "https://uajm.ac.id",
  // Direct join, no application form. Open Superteam x UAJM BCC WhatsApp group.
  whatsapp: "https://chat.whatsapp.com/DOItAWJVPF1KdAfshk2uoD",
};

// Verified from the official UKM E-Sport UAJM proposal letterhead (kop surat).
export const contact = {
  address: "Jl. Tanjung Alang No. 23, Makassar, Sulawesi Selatan 90134",
  phone: "(0411) 871038",
  whatsapp: "+62 813-5504-9802",
  whatsappHref: "https://wa.me/6281355049802",
  website: "www.uajm.ac.id",
  websiteHref: "https://uajm.ac.id",
};
