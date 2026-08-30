/* Copy for the certificate claim page.
 *
 * The site carries ten locales. This page is a member service that hands out
 * documents against a name, so it ships Indonesian, the language of record,
 * plus English for anyone reading the site in another locale. Personal names
 * are never translated.
 */
import type { Locale } from "./i18n";

export type CertDict = {
  meta: { title: string; back: string; home: string };
  entry: { label: string; hint: string };
  hero: { kicker: string; title: string; lede: string; scope: string };
  form: {
    legend: string;
    name: string;
    namePh: string;
    submit: string;
    working: string;
    hint: string;
  };
  err: { empty: string; notFound: string; emptyRegistry: string; cooldown: string; generic: string };
  res: {
    heading: string;
    one: string;
    many: string;
    issued: string;
    ref: string;
    source: string;
    formats: string;
    formatsNote: string;
    preparing: string;
    original: string;
    again: string;
    preview: string;
    noPreview: string;
  };
  help: { title: string; body: string; wa: string; ig: string };
  empty: { title: string; body: string; sibling: string; siblingHref: string };
  admin: {
    signIn: string;
    user: string;
    pass: string;
    enter: string;
    wrong: string;
    title: string;
    slots: string;
    slotsNote: string;
    add: string;
    edit: string;
    fName: string;
    fTitle: string;
    fEvent: string;
    fDate: string;
    fRef: string;
    fFile: string;
    fFileKeep: string;
    save: string;
    update: string;
    cancel: string;
    list: string;
    search: string;
    searchCount: string;
    listEmpty: string;
    download: string;
    del: string;
    delConfirm: string;
    exportJson: string;
    exportFiles: string;
    importJson: string;
    signedInAs: string;
    roleLead: string;
    roleSekretaris: string;
    rolePembina: string;
    dropHere: string;
    awaiting: string;
    rosterLabel: string;
    rosterPh: string;
    rosterAdd: string;
    rosterHint: string;
    signOut: string;
    saved: string;
    note: string;
    published: string;
    storage: string;
    publishHelp: string;
  };
};

const id: CertDict = {
  meta: { title: "Klaim Sertifikat", back: "Kembali ke beranda", home: "UAJM Blockchain Club" },
  entry: { label: "Klaim sertifikat", hint: "Untuk peserta kelas dan kegiatan UAJM BCC." },
  hero: {
    kicker: "Layanan peserta",
    title: "Klaim sertifikat kegiatan.",
    lede: "Masukkan nama lengkap persis seperti saat mendaftar kegiatan. Sertifikat yang terdaftar atas nama tersebut akan terbuka dan dapat diunduh dalam format apa pun.",
    scope: "Halaman ini untuk peserta UAJM Blockchain Club. Tanpa nama yang cocok, tidak ada berkas yang ditampilkan.",
  },
  form: {
    legend: "Verifikasi nama",
    name: "Nama lengkap",
    namePh: "Nama lengkap sesuai data pendaftaran",
    submit: "Buka sertifikat saya",
    working: "Memeriksa…",
    hint: "Huruf besar-kecil, spasi ganda dan tanda baca tidak berpengaruh.",
  },
  err: {
    empty: "Isi nama lengkap terlebih dahulu.",
    notFound: "Tidak ada sertifikat atas nama tersebut. Periksa ejaan nama, lalu coba lagi.",
    emptyRegistry: "Registry situs ini masih kosong, jadi belum ada berkas yang bisa dicocokkan. Ejaan nama Anda bukan penyebabnya.",
    cooldown: "Terlalu banyak percobaan. Coba lagi dalam {s} detik.",
    generic: "Terjadi kesalahan saat membuka berkas.",
  },
  res: {
    heading: "Sertifikat ditemukan",
    one: "1 sertifikat terdaftar atas nama ini.",
    many: "{n} sertifikat terdaftar atas nama ini.",
    issued: "Tanggal terbit",
    ref: "Nomor",
    source: "Berkas",
    formats: "Unduh sebagai",
    formatsNote: "Berkas dikonversi di peramban Anda. Tidak ada dokumen yang dikirim ke layanan lain.",
    preparing: "Menyiapkan…",
    original: "Unduh berkas asli",
    again: "Cari nama lain",
    preview: "Pratinjau",
    noPreview: "Pratinjau tidak tersedia untuk jenis berkas ini. Unduh berkas asli untuk membukanya.",
  },
  help: {
    title: "Sertifikat belum muncul?",
    body: "Sertifikat baru tampil setelah pengurus memasukkannya ke registry. Hubungi pengurus jika nama Anda seharusnya terdaftar.",
    wa: "Grup WhatsApp",
    ig: "Instagram",
  },
  empty: {
    title: "Registry sertifikat masih kosong",
    body: "Belum ada sertifikat yang dimasukkan pengurus. Formulir di atas tetap berfungsi dan akan menemukan berkas begitu registry terisi.",
    sibling: "Sertifikat keanggotaan UKM E-Sport UAJM ada di halaman klaim UKM E-Sport.",
    siblingHref: "https://uajmesport.vercel.app/sertifikat",
  },
  admin: {
    signIn: "Masuk pengurus",
    user: "Nama pengguna",
    pass: "Kata sandi",
    enter: "Masuk",
    wrong: "Nama pengguna atau kata sandi salah.",
    title: "Dasbor pengurus",
    slots: "{n} dari {t} slot terisi",
    slotsNote: "Kapasitas 2.000 sertifikat pada database Neon Postgres.",
    add: "Tambah sertifikat",
    edit: "Ubah sertifikat",
    fName: "Nama lengkap penerima",
    fTitle: "Judul sertifikat",
    fEvent: "Kegiatan / penerbit",
    fDate: "Tanggal terbit",
    fRef: "Nomor sertifikat (opsional)",
    fFile: "Berkas sertifikat (PDF, JPG, PNG, WEBP) — boleh dikosongkan dulu",
    fFileKeep: "Biarkan kosong untuk mempertahankan berkas lama.",
    save: "Simpan sertifikat",
    update: "Simpan perubahan",
    cancel: "Batal",
    list: "Sertifikat terdaftar",
    search: "Cari nama atau judul sertifikat",
    searchCount: "menampilkan {n} dari {t}",
    listEmpty: "Belum ada entri. Tempel daftar nama di atas, lalu seret berkas sertifikat ke barisnya.",
    download: "Unduh",
    del: "Hapus",
    delConfirm: "Hapus sertifikat ini dari registry?",
    exportJson: "Ekspor registry (JSON)",
    exportFiles: "Unduh semua berkas",
    importJson: "Impor registry (JSON)",
    signedInAs: "Masuk sebagai",
    roleLead: "Ketua BCC",
    roleSekretaris: "Sekretaris",
    rolePembina: "Dosen Pembina",
    dropHere: "Seret berkas sertifikat ke baris ini",
    awaiting: "Menunggu berkas",
    rosterLabel: "Tambah banyak peserta sekaligus",
    rosterPh: "Nama Lengkap\nNama Lengkap",
    rosterAdd: "Tambah dari daftar",
    rosterHint: "Satu baris satu nama.",
    signOut: "Keluar",
    saved: "Tersimpan.",
    note: "Gerbang masuk ini berjalan di peramban, bukan di server. Cukup untuk memisahkan pengurus dari pengunjung, bukan untuk menahan penyerang. Ketua BCC, Sekretaris, dan Dosen Pembina memakai akun terpisah dengan hak yang sama persis.",
    published: "Tersimpan",
    storage: "{mb} MB terpakai",
    publishHelp:
      "Sertifikat tersimpan di database Neon Postgres, jadi apa yang diunggah di satu perangkat langsung dapat diklaim dari perangkat mana pun. Ekspor registry dan Unduh semua berkas hanya untuk arsip cadangan; berkas JSON itu tidak memuat nama, hanya sidik SHA-256.",
  },
};

const en: CertDict = {
  meta: { title: "Certificate Claim", back: "Back to home", home: "UAJM Blockchain Club" },
  entry: { label: "Claim certificate", hint: "For UAJM BCC class and event participants." },
  hero: {
    kicker: "Participant service",
    title: "Claim your event certificate.",
    lede: "Enter your full name exactly as you registered for the event. Any certificate issued under that name unlocks and can be downloaded in any format.",
    scope: "This page is for UAJM Blockchain Club participants. Without a matching name, no file is shown.",
  },
  form: {
    legend: "Name check",
    name: "Full name",
    namePh: "Full name as given at registration",
    submit: "Open my certificate",
    working: "Checking…",
    hint: "Letter case, double spaces and punctuation make no difference.",
  },
  err: {
    empty: "Enter your full name first.",
    notFound: "No certificate is registered under that name. Check the spelling and try again.",
    emptyRegistry: "This site's registry is still empty, so there is nothing to match against. Your spelling is not the problem.",
    cooldown: "Too many attempts. Try again in {s} seconds.",
    generic: "Something went wrong while opening the file.",
  },
  res: {
    heading: "Certificate found",
    one: "1 certificate is registered under this name.",
    many: "{n} certificates are registered under this name.",
    issued: "Issued",
    ref: "Number",
    source: "File",
    formats: "Download as",
    formatsNote: "Conversion runs in your browser. No document is sent to another service.",
    preparing: "Preparing…",
    original: "Download original file",
    again: "Look up another name",
    preview: "Preview",
    noPreview: "No preview is available for this file type. Download the original to open it.",
  },
  help: {
    title: "Certificate not showing?",
    body: "A certificate appears once the board has entered it into the registry. Contact the board if your name should already be there.",
    wa: "WhatsApp group",
    ig: "Instagram",
  },
  empty: {
    title: "The certificate registry is still empty",
    body: "The board has not entered any certificate yet. The form above already works and will find a file the moment the registry is filled.",
    sibling: "UKM E-Sport UAJM membership certificates live on the UKM E-Sport claim page.",
    siblingHref: "https://uajmesport.vercel.app/sertifikat",
  },
  admin: {
    signIn: "Board sign-in",
    user: "Username",
    pass: "Password",
    enter: "Sign in",
    wrong: "Wrong username or password.",
    title: "Board dashboard",
    slots: "{n} of {t} slots filled",
    slotsNote: "2,000 certificates of capacity on the Neon Postgres database.",
    add: "Add certificate",
    edit: "Edit certificate",
    fName: "Recipient full name",
    fTitle: "Certificate title",
    fEvent: "Event / issuer",
    fDate: "Issue date",
    fRef: "Certificate number (optional)",
    fFile: "Certificate file (PDF, JPG, PNG, WEBP) — may be left empty for now",
    fFileKeep: "Leave empty to keep the existing file.",
    save: "Save certificate",
    update: "Save changes",
    cancel: "Cancel",
    list: "Registered certificates",
    search: "Search name or certificate title",
    searchCount: "showing {n} of {t}",
    listEmpty: "No entry yet. Paste a name list above, then drop each certificate file on its row.",
    download: "Download",
    del: "Delete",
    delConfirm: "Remove this certificate from the registry?",
    exportJson: "Export registry (JSON)",
    exportFiles: "Download every file",
    importJson: "Import registry (JSON)",
    signedInAs: "Signed in as",
    roleLead: "BCC lead",
    roleSekretaris: "Secretary",
    rolePembina: "Faculty supervisor",
    dropHere: "Drop the certificate file on this row",
    awaiting: "Awaiting file",
    rosterLabel: "Add several participants at once",
    rosterPh: "Full Name\nFull Name",
    rosterAdd: "Add from list",
    rosterHint: "One name per line.",
    signOut: "Sign out",
    saved: "Saved.",
    note: "This gate runs in the browser, not on a server. It separates the board from visitors; it does not hold off an attacker. The BCC lead, the secretary and the faculty supervisor sign in separately and share one dashboard with identical rights.",
    published: "Stored",
    storage: "{mb} MB used",
    publishHelp:
      "Certificates live in the Neon Postgres database, so what is uploaded on one device is claimable from any other straight away. Export registry and Download every file are for an offline backup only; that JSON carries no name, just a SHA-256.",
  },
};

export function certDict(locale: Locale): CertDict {
  return locale === "id" ? id : en;
}

export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}
