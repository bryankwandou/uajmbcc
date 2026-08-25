// Locale dictionaries. Indonesian is the source of record; every other locale is
// a direct translation of the same verified facts. Numbers, names, SK references
// and dates are never localised away.

export const LOCALES = [
  { code: "id", label: "Indonesia", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export const DEFAULT_LOCALE: Locale = "id";

export function isLocale(v: string): v is Locale {
  return LOCALES.some((l) => l.code === v);
}

export function dirFor(code: Locale): "ltr" | "rtl" {
  return LOCALES.find((l) => l.code === code)?.dir ?? "ltr";
}

type Mission = { title: string; body: string };
type Tl = { date: string; title: string; body: string };
type Ach = { title: string; org: string; tag: string; date: string };

export type Dict = {
  nav: { about: string; portfolio: string; journey: string; team: string; contact: string; join: string; menu: string };
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    titleEm: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    recordTitle: string;
    rows: { parent: string; status: string; initiator: string; campus: string; network: string };
    rowVals: { parent: string; status: string; initiator: string; campus: string };
  };
  stats: string[];
  ticker: string[];
  about: { kicker: string; title: string; vision: string; missions: Mission[] };
  portfolio: {
    kicker: string; title: string; lede: string;
    thNo: string; thProduct: string; thField: string; thStatus: string;
    statusVal: string; note: string;
  };
  journey: { kicker: string; title: string; items: Tl[] };
  team: {
    kicker: string; title: string; lede: string;
    leadRole: string; leadNote: string;
    divisions: { name: string; focus: string }[];
    faculties: string[]; facultyNote: string;
  };
  achievements: { kicker: string; title: string; items: Ach[]; hackTitle: string; hackBody: string; hackHolder: string; shipped: string; open: string };
  cta: { kicker: string; title: string; lede: string; join: string; instagram: string; github: string };
  footer: { rights: string };
  contactBlock: { title: string; links: string; phone: string; whatsapp: string };
  proof: { toggle: string; blurb: string; slot: string; check: string; checking: string; status: string; balance: string; program: string; owner: string; found: string; notFound: string; yes: string; no: string; rpcError: string };
  a11y: { theme: string; language: string };
};

const id: Dict = {
  nav: { about: "Tentang", portfolio: "Portofolio", journey: "Perjalanan", team: "Tim", contact: "Kontak", join: "Gabung", menu: "Menu" },
  hero: {
    kicker: "Di bawah UKM E-Sport UAJM",
    title1: "Ide mahasiswa,",
    title2: "dibangun sampai",
    titleEm: "jadi.",
    lede: "Universitas Atma Jaya Makassar Blockchain Club berjalan di bawah UKM E-Sport UAJM. Mahasiswa merancang ide, lalu kami dampingi pengembangannya sampai produk benar-benar berjalan. Diinisiasi Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "Lihat portofolio",
    ctaSecondary: "Tentang kami",
    recordTitle: "Catatan Organisasi",
    rows: { parent: "Induk", status: "Status", initiator: "Inisiator", campus: "Kampus", network: "Jaringan" },
    rowVals: { parent: "UKM E-Sport UAJM", status: "Terdaftar, SK & AD/ART", initiator: "Superteam Campus Club", campus: "Atma Jaya Makassar" },
  },
  stats: ["MVP selesai", "Target MVP", "Anggota & pengurus", "Riwayat hackathon"],
  ticker: ["Superteam Campus Club", "Builder-first", "Produk Nyata", "Lintas Fakultas", "Web3 Terapan", "Hackathon", "Mentorship Penuh", "Indonesia Timur"],
  about: {
    kicker: "Visi & Misi",
    title: "Kenapa BCC ada",
    vision: "Menjadikan Universitas Atma Jaya Makassar simpul pengembang Web3 di Indonesia Timur, tempat mahasiswa belajar membangun produk digital yang nyata, teruji, dan berkelanjutan.",
    missions: [
      { title: "Edukasi berbasis praktik", body: "Membekali mahasiswa dengan literasi blockchain terapan: dari konsep dasar, arsitektur aplikasi, hingga rilis produk yang dapat diuji publik." },
      { title: "Dari ide ke produk", body: "Memfasilitasi jalur lengkap dari brainstorming, prototipe, sampai peluncuran, dengan pendampingan teknis penuh hingga produk berjalan." },
      { title: "Kolaborasi lintas fakultas", body: "Menyatukan mahasiswa Teknologi Informasi, Ekonomi & Bisnis, serta Hukum dalam satu tim produk yang utuh: teknis, model bisnis, dan kepatuhan." },
      { title: "Jembatan ke industri", body: "Menghubungkan anggota dengan jaringan Superteam Indonesia, kompetisi, dan peluang hackathon tingkat nasional maupun internasional." },
    ],
  },
  portfolio: {
    kicker: "Portofolio", title: "Enam ide mahasiswa, enam MVP di Solana",
    lede: "Superteam Campus Club UAJM menargetkan 50 ide mahasiswa menjadi MVP di Solana. Enam sudah selesai dan diuji internal, dengan Vincentius Bryan Kwandou sebagai PIC dan orchestrator. Setiap situs live dan dapat diperiksa.",
    thNo: "No.", thProduct: "Produk", thField: "Bidang", thStatus: "Jaringan", statusVal: "Live",
    note: "Setiap proyek memiliki pemilik ide (ideator) dan situs live yang dapat diperiksa langsung. Klik untuk membuka.",
  },
  journey: {
    kicker: "Perjalanan", title: "Jejak yang dapat diperiksa",
    items: [
      { date: "Feb 2024", title: "Fondasi kompetitif", body: "Pendiri menembus E-Fortion 5.0, International Business Case Competition (IBM Student Union, Universitas Ciputra)." },
      { date: "2024 s.d. 2025", title: "Jam terbang", body: "Menempuh hampir 30 hackathon yang membangun disiplin eksekusi cepat dan portofolio produk." },
      { date: "Jun 2025", title: "UKM E-Sport resmi", body: "Proposal pembentukan UKM E-Sport UAJM disahkan sebagai payung resmi bagi klub." },
      { date: "Des 2025", title: "AD/ART & kepengurusan", body: "SK penetapan AD/ART dan kepengurusan periode 2025/2026 ditetapkan." },
      { date: "2026", title: "BCC lahir", body: "UAJM BCC diinisiasi di bawah Superteam Campus Club. Meetup builder perdana menghasilkan enam produk MVP." },
    ],
  },
  team: {
    kicker: "Struktur", title: "Satu ekosistem, empat divisi",
    lede: "UAJM BCC berjalan di bawah payung resmi UKM E-Sport UAJM, dengan SK dan AD/ART terdaftar.",
    leadRole: "Ketua / PIC BCC", leadNote: "Ketua Umum UKM E-Sport sekaligus Ketua UAJM BCC",
    divisions: [
      { name: "Turnamen & Kompetisi", focus: "Hackathon & event" },
      { name: "Pelatihan & Pengembangan", focus: "Kurikulum pengembang" },
      { name: "Kreatif & Konten Digital", focus: "Brand & dokumentasi" },
      { name: "Humas & Relasi", focus: "Kemitraan & Superteam" },
    ],
    faculties: ["Ekonomi & Bisnis", "Teknologi Informasi", "Hukum"],
    facultyNote: "Komposisi lintas fakultas dari data pendaftaran resmi.",
  },
  achievements: {
    kicker: "Kredensial", title: "Dua sertifikat dan catatan hackathon",
    hackTitle: "Catatan hackathon", hackHolder: "Atas nama",
    hackBody: "Hackathon yang diikuti sepanjang 2024 sampai 2026. Angka ini berasal dari portofolio PIC, bukan sertifikat tunggal, dan jejaknya dapat diperiksa di repositori publik.",
    shipped: "MVP mahasiswa selesai dan dapat dibuka", open: "Perbesar sertifikat",
    items: [
      { title: "E-Fortion 5.0, ENSPIRIT 5.0", org: "IBM Student Union, Universitas Ciputra", tag: "International Business Case Competition", date: "25 Feb 2024" },
      { title: "Personal Branding Academy", org: "Kadev Co.", tag: "Certificate of Completion", date: "31 Jul 2026" },
      { title: "Hampir 30 Hackathon", org: "Portofolio pendiri", tag: "GitHub: bryankwandou", date: "2024 s.d. 2026" },
    ],
  },
  cta: {
    kicker: "Kontak", title: "Bangun yang berikutnya bersama kami",
    lede: "Mahasiswa UAJM yang ingin belajar membangun produk digital, atau mitra yang ingin berkolaborasi, silakan terhubung dengan kami.",
    join: "Gabung grup WhatsApp", instagram: "Instagram", github: "GitHub",
  },
  footer: { rights: "Di bawah UKM E-Sport UAJM. Diinisiasi Superteam Campus Club, Superteam Indonesia." },
  contactBlock: { title: "Kontak & Alamat", links: "Tautan", phone: "Telp", whatsapp: "WhatsApp" },
  proof: {
    toggle: "Bukti teknis: verifikasi jaringan Solana",
    blurb: "Panel ini memanggil RPC publik secara langsung sebagai bukti bahwa produk berjalan di jaringan, bukan mock.",
    slot: "slot", check: "Cek akun", checking: "Memeriksa", status: "status", balance: "saldo", program: "program", owner: "pemilik",
    found: "ditemukan", notFound: "tidak ada", yes: "ya", no: "tidak", rpcError: "Gagal terhubung ke RPC",
  },
  a11y: { theme: "Ganti tema", language: "Ganti bahasa" },
};

const en: Dict = {
  nav: { about: "About", portfolio: "Portfolio", journey: "Journey", team: "Team", contact: "Contact", join: "Join", menu: "Menu" },
  hero: {
    kicker: "Under UKM E-Sport UAJM",
    title1: "Student ideas,",
    title2: "built until they",
    titleEm: "ship.",
    lede: "Universitas Atma Jaya Makassar Blockchain Club operates under UKM E-Sport UAJM. Students shape the idea, then we mentor the build until the product genuinely runs. Initiated by Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "View portfolio",
    ctaSecondary: "About us",
    recordTitle: "Organisation Record",
    rows: { parent: "Parent", status: "Status", initiator: "Initiator", campus: "Campus", network: "Network" },
    rowVals: { parent: "UKM E-Sport UAJM", status: "Registered, charter on file", initiator: "Superteam Campus Club", campus: "Atma Jaya Makassar" },
  },
  stats: ["MVPs shipped", "MVP target", "Members & officers", "Hackathon record"],
  ticker: ["Superteam Campus Club", "Builder-first", "Real Products", "Cross-faculty", "Applied Web3", "Hackathon", "Full Mentorship", "Eastern Indonesia"],
  about: {
    kicker: "Vision & Mission",
    title: "Why BCC exists",
    vision: "To make Universitas Atma Jaya Makassar a hub for Web3 builders in Eastern Indonesia, where students learn to build digital products that are real, tested, and built to last.",
    missions: [
      { title: "Practice-led education", body: "Equipping students with applied blockchain literacy: from core concepts and application architecture through to releases the public can test." },
      { title: "From idea to product", body: "Guiding the full path from brainstorming and prototype to launch, with hands-on technical mentorship until the product runs." },
      { title: "Cross-faculty collaboration", body: "Bringing Information Technology, Economics & Business, and Law students into one complete product team: engineering, business model, and compliance." },
      { title: "A bridge to industry", body: "Connecting members to the Superteam Indonesia network, competitions, and hackathon opportunities at national and international level." },
    ],
  },
  portfolio: {
    kicker: "Portfolio", title: "Six student ideas, six MVPs on Solana",
    lede: "Superteam Campus Club UAJM aims to turn 50 student ideas into MVPs on Solana. Six are complete and internally tested, with Vincentius Bryan Kwandou as PIC and orchestrator. Every site is live and verifiable.",
    thNo: "No.", thProduct: "Product", thField: "Field", thStatus: "Network", statusVal: "Live",
    note: "Each project has a named idea owner and a live site you can open and inspect directly. Click to visit.",
  },
  journey: {
    kicker: "Journey", title: "A record that can be checked",
    items: [
      { date: "Feb 2024", title: "Competitive foundation", body: "The founder reached E-Fortion 5.0, an International Business Case Competition (IBM Student Union, Universitas Ciputra)." },
      { date: "2024 to 2025", title: "Flight hours", body: "Close to 30 hackathons, building the discipline to execute fast and a portfolio of products." },
      { date: "Jun 2025", title: "UKM E-Sport made official", body: "The proposal establishing UKM E-Sport UAJM was approved, giving the club an official home." },
      { date: "Dec 2025", title: "Charter & leadership", body: "The decree setting the charter and the 2025/2026 leadership term was issued." },
      { date: "2026", title: "BCC founded", body: "UAJM BCC was initiated under Superteam Campus Club. The first builder meetup produced six MVP products." },
    ],
  },
  team: {
    kicker: "Structure", title: "One ecosystem, four divisions",
    lede: "UAJM BCC operates under the official umbrella of UKM E-Sport UAJM, with its decree and charter on file.",
    leadRole: "Lead / BCC Focal Point", leadNote: "President of UKM E-Sport and Lead of UAJM BCC",
    divisions: [
      { name: "Tournament & Competition", focus: "Hackathons & events" },
      { name: "Training & Development", focus: "Builder curriculum" },
      { name: "Creative & Digital Content", focus: "Brand & documentation" },
      { name: "Public Relations", focus: "Partnerships & Superteam" },
    ],
    faculties: ["Economics & Business", "Information Technology", "Law"],
    facultyNote: "Cross-faculty composition drawn from official registration data.",
  },
  achievements: {
    kicker: "Credentials", title: "Two certificates and a hackathon record",
    hackTitle: "Hackathon record", hackHolder: "In the name of",
    hackBody: "Hackathons entered between 2024 and 2026. This figure comes from the PIC's own portfolio rather than a single certificate, and the trail can be checked in the public repository.",
    shipped: "student MVPs completed and open to inspection", open: "Enlarge certificate",
    items: [
      { title: "E-Fortion 5.0, ENSPIRIT 5.0", org: "IBM Student Union, Universitas Ciputra", tag: "International Business Case Competition", date: "25 Feb 2024" },
      { title: "Personal Branding Academy", org: "Kadev Co.", tag: "Certificate of Completion", date: "31 Jul 2026" },
      { title: "Nearly 30 Hackathons", org: "Founder portfolio", tag: "GitHub: bryankwandou", date: "2024 to 2026" },
    ],
  },
  cta: {
    kicker: "Contact", title: "Build the next one with us",
    lede: "UAJM students who want to learn to build digital products, or partners looking to collaborate, are welcome to get in touch.",
    join: "Join the WhatsApp group", instagram: "Instagram", github: "GitHub",
  },
  footer: { rights: "Under UKM E-Sport UAJM. Initiated by Superteam Campus Club, Superteam Indonesia." },
  contactBlock: { title: "Contact & Address", links: "Links", phone: "Tel", whatsapp: "WhatsApp" },
  proof: {
    toggle: "Technical proof: Solana network verification",
    blurb: "This panel calls the public RPC directly, as evidence the product runs on the network rather than on mocks.",
    slot: "slot", check: "Check account", checking: "Checking", status: "status", balance: "balance", program: "program", owner: "owner",
    found: "found", notFound: "not found", yes: "yes", no: "no", rpcError: "Could not reach the RPC",
  },
  a11y: { theme: "Toggle theme", language: "Change language" },
};

// Remaining locales reuse the English structure with translated copy.
const zh: Dict = {
  ...en,
  nav: { about: "关于", portfolio: "作品", journey: "历程", team: "团队", contact: "联系", join: "加入", menu: "菜单" },
  hero: { ...en.hero, kicker: "隶属 UKM E-Sport UAJM", title1: "学生的想法，", title2: "一路做到", titleEm: "上线。",
    lede: "阿玛加亚玛卡萨大学区块链俱乐部隶属于 UKM E-Sport UAJM。学生提出构想，我们全程指导开发，直到产品真正运行。由 Superteam Campus Club（Superteam Indonesia）发起。",
    ctaPrimary: "查看作品", ctaSecondary: "关于我们", recordTitle: "组织记录",
    rows: { parent: "上级", status: "状态", initiator: "发起方", campus: "校区", network: "网络" },
    rowVals: { ...en.hero.rowVals, status: "已注册，章程存档" } },
  stats: ["MVP 产品", "成员与干部", "黑客松记录", "开发者聚会"],
  about: { ...en.about, kicker: "愿景与使命", title: "BCC 为何存在",
    vision: "让阿玛加亚玛卡萨大学成为印尼东部的 Web3 开发者枢纽，让学生学会打造真实、经过验证且可持续的数字产品。" },
  portfolio: { ...en.portfolio, kicker: "作品", title: "一次聚会，六款产品", thNo: "序号", thProduct: "产品", thField: "领域", thStatus: "状态", statusVal: "运行中" },
  journey: { ...en.journey, kicker: "历程", title: "可核查的记录" },
  team: { ...en.team, kicker: "架构", title: "一个生态，四个部门" },
  achievements: { ...en.achievements, kicker: "资历", title: "有据可查的成绩" },
  cta: { ...en.cta, kicker: "联系", title: "与我们一起打造下一个产品" },
  a11y: { theme: "切换主题", language: "切换语言" },
};

const ja: Dict = {
  ...en,
  nav: { about: "概要", portfolio: "実績", journey: "沿革", team: "チーム", contact: "連絡先", join: "参加", menu: "メニュー" },
  hero: { ...en.hero, kicker: "UKM E-Sport UAJM 傘下", title1: "学生のアイデアを、", title2: "動くところまで", titleEm: "つくる。",
    lede: "アトマジャヤ・マカッサル大学ブロックチェーンクラブは UKM E-Sport UAJM の傘下で活動しています。学生が構想を練り、製品が実際に動くまで開発を伴走します。Superteam Campus Club（Superteam Indonesia）により設立。",
    ctaPrimary: "実績を見る", ctaSecondary: "私たちについて", recordTitle: "組織記録",
    rows: { parent: "上部組織", status: "状態", initiator: "設立支援", campus: "大学", network: "ネットワーク" },
    rowVals: { ...en.hero.rowVals, status: "登録済み、規約保管" } },
  stats: ["MVP 製品", "メンバーと役員", "ハッカソン実績", "ビルダー交流会"],
  about: { ...en.about, kicker: "ビジョンとミッション", title: "BCC が存在する理由",
    vision: "アトマジャヤ・マカッサル大学を東インドネシアの Web3 開発拠点とし、学生が実際に動き、検証され、続いていくデジタル製品を作れるようにします。" },
  portfolio: { ...en.portfolio, kicker: "実績", title: "一度の交流会から六つの製品", thNo: "番号", thProduct: "製品", thField: "分野", thStatus: "状態", statusVal: "稼働中" },
  journey: { ...en.journey, kicker: "沿革", title: "検証できる記録" },
  team: { ...en.team, kicker: "体制", title: "一つの生態系、四つの部門" },
  achievements: { ...en.achievements, kicker: "資格", title: "記録に残る実績" },
  cta: { ...en.cta, kicker: "連絡先", title: "次の一つを一緒に作りましょう" },
  a11y: { theme: "テーマ切り替え", language: "言語切り替え" },
};

const ko: Dict = {
  ...en,
  nav: { about: "소개", portfolio: "포트폴리오", journey: "연혁", team: "팀", contact: "문의", join: "참여", menu: "메뉴" },
  hero: { ...en.hero, kicker: "UKM E-Sport UAJM 소속", title1: "학생의 아이디어를,", title2: "실제로 돌아갈 때까지", titleEm: "만듭니다.",
    lede: "아트마자야 마카사르 대학교 블록체인 클럽은 UKM E-Sport UAJM 산하에서 운영됩니다. 학생이 아이디어를 구상하고, 제품이 실제로 작동할 때까지 개발을 함께합니다. Superteam Campus Club(Superteam Indonesia)이 시작했습니다.",
    ctaPrimary: "포트폴리오 보기", ctaSecondary: "소개", recordTitle: "조직 기록",
    rows: { parent: "상위 조직", status: "상태", initiator: "설립 지원", campus: "대학", network: "네트워크" },
    rowVals: { ...en.hero.rowVals, status: "등록 완료, 정관 보관" } },
  stats: ["MVP 제품", "구성원 및 임원", "해커톤 기록", "빌더 밋업"],
  about: { ...en.about, kicker: "비전과 미션", title: "BCC가 존재하는 이유",
    vision: "아트마자야 마카사르 대학교를 동인도네시아의 Web3 빌더 거점으로 만들고, 학생들이 실제로 작동하고 검증되며 지속 가능한 디지털 제품을 만들도록 합니다." },
  portfolio: { ...en.portfolio, kicker: "포트폴리오", title: "한 번의 밋업에서 나온 여섯 제품", thNo: "번호", thProduct: "제품", thField: "분야", thStatus: "상태", statusVal: "운영 중" },
  journey: { ...en.journey, kicker: "연혁", title: "확인할 수 있는 기록" },
  team: { ...en.team, kicker: "조직", title: "하나의 생태계, 네 개의 부문" },
  achievements: { ...en.achievements, kicker: "자격", title: "문서로 남은 성과" },
  cta: { ...en.cta, kicker: "문의", title: "다음 제품을 함께 만듭시다" },
  a11y: { theme: "테마 전환", language: "언어 변경" },
};

const es: Dict = {
  ...en,
  nav: { about: "Nosotros", portfolio: "Portafolio", journey: "Trayectoria", team: "Equipo", contact: "Contacto", join: "Únete", menu: "Menú" },
  hero: { ...en.hero, kicker: "Bajo UKM E-Sport UAJM", title1: "Ideas de estudiantes,", title2: "construidas hasta que", titleEm: "funcionan.",
    lede: "El Club de Blockchain de la Universidad Atma Jaya Makassar opera bajo UKM E-Sport UAJM. Los estudiantes dan forma a la idea y acompañamos el desarrollo hasta que el producto funciona de verdad. Iniciado por Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "Ver portafolio", ctaSecondary: "Sobre nosotros", recordTitle: "Registro de la organización",
    rows: { parent: "Organismo matriz", status: "Estado", initiator: "Iniciador", campus: "Campus", network: "Red" },
    rowVals: { ...en.hero.rowVals, status: "Registrado, estatutos archivados" } },
  stats: ["Productos MVP", "Miembros y directivos", "Historial de hackatones", "Encuentro de builders"],
  about: { ...en.about, kicker: "Visión y misión", title: "Por qué existe BCC",
    vision: "Convertir a la Universidad Atma Jaya Makassar en un nodo de desarrolladores Web3 en el este de Indonesia, donde los estudiantes aprenden a crear productos digitales reales, probados y duraderos." },
  portfolio: { ...en.portfolio, kicker: "Portafolio", title: "Seis productos de un solo encuentro", thNo: "N.º", thProduct: "Producto", thField: "Ámbito", thStatus: "Estado", statusVal: "En marcha" },
  journey: { ...en.journey, kicker: "Trayectoria", title: "Un historial verificable" },
  team: { ...en.team, kicker: "Estructura", title: "Un ecosistema, cuatro divisiones" },
  achievements: { ...en.achievements, kicker: "Credenciales", title: "Logros documentados" },
  cta: { ...en.cta, kicker: "Contacto", title: "Construyamos el siguiente juntos" },
  a11y: { theme: "Cambiar tema", language: "Cambiar idioma" },
};

const fr: Dict = {
  ...en,
  nav: { about: "À propos", portfolio: "Portfolio", journey: "Parcours", team: "Équipe", contact: "Contact", join: "Rejoindre", menu: "Menu" },
  hero: { ...en.hero, kicker: "Sous UKM E-Sport UAJM", title1: "Des idées d'étudiants,", title2: "construites jusqu'à ce qu'elles", titleEm: "tournent.",
    lede: "Le Blockchain Club de l'Université Atma Jaya Makassar opère sous UKM E-Sport UAJM. Les étudiants façonnent l'idée, puis nous encadrons le développement jusqu'à ce que le produit fonctionne réellement. Initié par Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "Voir le portfolio", ctaSecondary: "À propos", recordTitle: "Fiche de l'organisation",
    rows: { parent: "Entité mère", status: "Statut", initiator: "Initiateur", campus: "Campus", network: "Réseau" },
    rowVals: { ...en.hero.rowVals, status: "Enregistré, statuts déposés" } },
  stats: ["Produits MVP", "Membres et responsables", "Historique hackathons", "Rencontre builders"],
  about: { ...en.about, kicker: "Vision et mission", title: "Pourquoi BCC existe",
    vision: "Faire de l'Université Atma Jaya Makassar un pôle de développeurs Web3 dans l'est de l'Indonésie, où les étudiants apprennent à créer des produits numériques réels, éprouvés et durables." },
  portfolio: { ...en.portfolio, kicker: "Portfolio", title: "Six produits issus d'une seule rencontre", thNo: "N°", thProduct: "Produit", thField: "Domaine", thStatus: "Statut", statusVal: "En service" },
  journey: { ...en.journey, kicker: "Parcours", title: "Un historique vérifiable" },
  team: { ...en.team, kicker: "Structure", title: "Un écosystème, quatre divisions" },
  achievements: { ...en.achievements, kicker: "Références", title: "Réalisations documentées" },
  cta: { ...en.cta, kicker: "Contact", title: "Construisons le prochain ensemble" },
  a11y: { theme: "Changer de thème", language: "Changer de langue" },
};

const de: Dict = {
  ...en,
  nav: { about: "Über uns", portfolio: "Portfolio", journey: "Werdegang", team: "Team", contact: "Kontakt", join: "Mitmachen", menu: "Menü" },
  hero: { ...en.hero, kicker: "Unter UKM E-Sport UAJM", title1: "Studentische Ideen,", title2: "gebaut, bis sie", titleEm: "laufen.",
    lede: "Der Blockchain Club der Universitas Atma Jaya Makassar arbeitet unter UKM E-Sport UAJM. Studierende entwickeln die Idee, wir begleiten die Umsetzung, bis das Produkt wirklich läuft. Initiiert von Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "Portfolio ansehen", ctaSecondary: "Über uns", recordTitle: "Organisationsakte",
    rows: { parent: "Trägerorganisation", status: "Status", initiator: "Initiator", campus: "Campus", network: "Netzwerk" },
    rowVals: { ...en.hero.rowVals, status: "Registriert, Satzung hinterlegt" } },
  stats: ["MVP-Produkte", "Mitglieder und Vorstand", "Hackathon-Bilanz", "Builder-Treffen"],
  about: { ...en.about, kicker: "Vision und Mission", title: "Warum es BCC gibt",
    vision: "Die Universitas Atma Jaya Makassar zu einem Knotenpunkt für Web3-Entwickler im Osten Indonesiens machen, an dem Studierende lernen, digitale Produkte zu bauen, die echt, erprobt und tragfähig sind." },
  portfolio: { ...en.portfolio, kicker: "Portfolio", title: "Sechs Produkte aus einem Treffen", thNo: "Nr.", thProduct: "Produkt", thField: "Bereich", thStatus: "Status", statusVal: "Läuft" },
  journey: { ...en.journey, kicker: "Werdegang", title: "Eine überprüfbare Bilanz" },
  team: { ...en.team, kicker: "Struktur", title: "Ein Ökosystem, vier Bereiche" },
  achievements: { ...en.achievements, kicker: "Nachweise", title: "Dokumentierte Erfolge" },
  cta: { ...en.cta, kicker: "Kontakt", title: "Bauen wir das nächste gemeinsam" },
  a11y: { theme: "Thema wechseln", language: "Sprache wechseln" },
};

const pt: Dict = {
  ...en,
  nav: { about: "Sobre", portfolio: "Portfólio", journey: "Trajetória", team: "Equipe", contact: "Contato", join: "Participar", menu: "Menu" },
  hero: { ...en.hero, kicker: "Sob a UKM E-Sport UAJM", title1: "Ideias de estudantes,", title2: "construídas até que", titleEm: "funcionem.",
    lede: "O Blockchain Club da Universidade Atma Jaya Makassar atua sob a UKM E-Sport UAJM. Os estudantes moldam a ideia e acompanhamos o desenvolvimento até o produto funcionar de verdade. Iniciado pelo Superteam Campus Club, Superteam Indonesia.",
    ctaPrimary: "Ver portfólio", ctaSecondary: "Sobre nós", recordTitle: "Registro da organização",
    rows: { parent: "Entidade principal", status: "Situação", initiator: "Iniciador", campus: "Campus", network: "Rede" },
    rowVals: { ...en.hero.rowVals, status: "Registrado, estatuto arquivado" } },
  stats: ["Produtos MVP", "Membros e diretoria", "Histórico de hackathons", "Encontro de builders"],
  about: { ...en.about, kicker: "Visão e missão", title: "Por que a BCC existe",
    vision: "Tornar a Universidade Atma Jaya Makassar um polo de desenvolvedores Web3 no leste da Indonésia, onde estudantes aprendem a criar produtos digitais reais, testados e duradouros." },
  portfolio: { ...en.portfolio, kicker: "Portfólio", title: "Seis produtos de um único encontro", thNo: "N.º", thProduct: "Produto", thField: "Área", thStatus: "Situação", statusVal: "Em operação" },
  journey: { ...en.journey, kicker: "Trajetória", title: "Um histórico verificável" },
  team: { ...en.team, kicker: "Estrutura", title: "Um ecossistema, quatro divisões" },
  achievements: { ...en.achievements, kicker: "Credenciais", title: "Conquistas documentadas" },
  cta: { ...en.cta, kicker: "Contato", title: "Vamos construir o próximo juntos" },
  a11y: { theme: "Alternar tema", language: "Mudar idioma" },
};

const ar: Dict = {
  ...en,
  nav: { about: "عن النادي", portfolio: "الأعمال", journey: "المسيرة", team: "الفريق", contact: "التواصل", join: "انضم", menu: "القائمة" },
  hero: { ...en.hero, kicker: "تحت مظلة UKM E-Sport UAJM", title1: "أفكار الطلاب،", title2: "نبنيها حتى", titleEm: "تعمل.",
    lede: "نادي البلوكتشين بجامعة أتما جايا ماكاسار يعمل تحت مظلة UKM E-Sport UAJM. الطلاب يصوغون الفكرة، ونرافق التطوير حتى يعمل المنتج فعلياً. بمبادرة من Superteam Campus Club، Superteam Indonesia.",
    ctaPrimary: "استعرض الأعمال", ctaSecondary: "من نحن", recordTitle: "سجل المنظمة",
    rows: { parent: "الجهة الأم", status: "الحالة", initiator: "المبادر", campus: "الحرم الجامعي", network: "الشبكة" },
    rowVals: { ...en.hero.rowVals, status: "مسجّل، النظام الأساسي محفوظ" } },
  stats: ["منتجات MVP", "الأعضاء والإداريون", "سجل الهاكاثون", "لقاء المطورين"],
  about: { ...en.about, kicker: "الرؤية والرسالة", title: "لماذا وُجد BCC",
    vision: "جعل جامعة أتما جايا ماكاسار مركزاً لمطوّري Web3 في شرق إندونيسيا، حيث يتعلم الطلاب بناء منتجات رقمية حقيقية ومُختبرة وقابلة للاستمرار." },
  portfolio: { ...en.portfolio, kicker: "الأعمال", title: "ستة منتجات من لقاء واحد", thNo: "الرقم", thProduct: "المنتج", thField: "المجال", thStatus: "الحالة", statusVal: "قيد التشغيل" },
  journey: { ...en.journey, kicker: "المسيرة", title: "سجل يمكن التحقق منه" },
  team: { ...en.team, kicker: "الهيكل", title: "منظومة واحدة، أربعة أقسام" },
  achievements: { ...en.achievements, kicker: "الاعتمادات", title: "إنجازات موثّقة" },
  cta: { ...en.cta, kicker: "التواصل", title: "لنبنِ المنتج القادم معاً" },
  a11y: { theme: "تبديل السمة", language: "تغيير اللغة" },
};

export const DICTS: Record<Locale, Dict> = { id, en, zh, ja, ko, es, fr, de, pt, ar };
