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
  { value: 6, prefix: "", suffix: "", label: "Produk MVP", sub: "hasil meetup perdana" },
  { value: 20, prefix: "", suffix: "+", label: "Anggota & pengurus", sub: "ekosistem digital" },
  { value: 30, prefix: "~", suffix: "", label: "Riwayat hackathon", sub: "track record pendiri" },
  { value: 1, prefix: "", suffix: "", label: "Meetup builder", sub: "brainstorming ke build" },
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

// Enam MVP dari meetup builder perdana. Judul digeneralisasi untuk menjaga
// privasi anggota. Setiap ide dibawa sampai prototipe berjalan di bawah
// pendampingan Vincentius Bryan Kwandou.
export const mvps = [
  { code: "01", title: "On-chain Attestation", domain: "Proof & Reputasi", desc: "Sertifikasi kegiatan mahasiswa yang terverifikasi, sulit dipalsukan, dan dapat diaudit publik." },
  { code: "02", title: "Campus Micro-Treasury", domain: "Keuangan Transparan", desc: "Pengelolaan kas organisasi dengan jejak transaksi yang terbuka dan tercatat." },
  { code: "03", title: "Event Ticketing", domain: "Tiket Digital", desc: "Tiket acara berbasis token dengan validasi masuk yang tidak dapat digandakan." },
  { code: "04", title: "Peer Bounty Board", domain: "Koordinasi", desc: "Papan tugas berhadiah untuk kolaborasi antar-anggota dengan penyelesaian otomatis." },
  { code: "05", title: "Skill Passport", domain: "Identitas", desc: "Portofolio kompetensi mahasiswa sebagai kredensial yang dapat dibawa antar-platform." },
  { code: "06", title: "Transparent Voting", domain: "Tata Kelola", desc: "Pemungutan suara organisasi yang hasilnya tercatat permanen dan dapat diperiksa." },
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
};
