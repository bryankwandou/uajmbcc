# UAJM BCC — Universitas Atma Jaya Makassar Blockchain Club

Situs showcase resmi UAJM BCC, klub blockchain kampus di bawah **UKM E-Sport UAJM**, diinisiasi **Superteam Campus Club (Superteam Indonesia)**.

Tema: Web3 / blockchain profesional. Fitur unggulan: verifikator **live** yang memanggil RPC Solana Devnet secara nyata (`api.devnet.solana.com`) — slot bergerak real-time, cek akun/program on-chain.

## Stack
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3 · Framer Motion
- Solana Devnet JSON-RPC (tanpa dependency berat)

## Jalankan lokal
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Build produksi
```bash
npm run build && npm start
```

## Konten
Seluruh angka & klaim bersumber dari dokumen resmi (SK, AD/ART, respons pendaftaran) dan sertifikat pada arsip organisasi. Tidak ada metrik fiktif.

---
Ekosistem: UKM E-Sport UAJM · [uajmesport.vercel.app](https://uajmesport.vercel.app)

## Periode otomatis

Angka periode tidak pernah diketik tangan. `src/lib/period.ts` menghitungnya dari
kalender (WITA) dan berganti setiap 1 Agustus:

| Token di teks | Contoh (Sep 2026) | Contoh (Agu 2027) |
|---|---|---|
| `{REG}` pendaftaran | 2026/2027 | 2027/2028 |
| `{TERM}` kepengurusan | 2025/2026 | 2026/2027 |
| `{TERM_NO}` kepengurusan ke- | 2 | 3 |

Tulis token itu di `src/lib/i18n.ts` atau `src/lib/content.ts`; `Providers` dan
`withPeriod()` mengisinya. Situs ini menampilkan periode di judul galeri.

## Galeri dokumentasi

Dikelola tanpa kode: `/sertifikat` → **Masuk pengurus** → tab **Galeri** →
**+ Post baru** → pilih foto → Berikutnya → keterangan & kategori → **Bagikan**.
Foto dikompres di browser (maks. 1440 px, JPEG) lalu disimpan di Neon.

- Tampilan depan: `src/components/gallery/GalleryFeed.tsx`
- Editor dasbor: `src/components/gallery/GalleryEditor.tsx`
- API: `src/app/api/gallery/*` (publik), `src/app/api/admin/gallery/*`
- Kategori: `GALLERY_CATEGORIES` di `src/lib/gallery.ts` dan `CATEGORIES` di `src/lib/galleryserver.ts`

## Akun dan izin

- Akun pengurus: env `CERT_ACCOUNTS` (`user:pass:role,...`).
- Pengelola izin: nama lengkap *Vincentius Bryan Kwandou* (huruf besar/kecil
  bebas). Kata sandinya hanya disimpan sebagai hash scrypt di `src/lib/db.ts`.
  Akun ini hanya melihat panel izin.
- Izin per akun (tabel `admin_perms`): galeri dan sertifikat masing-masing
  `none` / `post` (terbitkan saja) / `full` (plus edit & hapus). Akun yang belum
  diatur bernilai `full`. Semua route admin memeriksa izin lewat `guard()` di
  `src/lib/perms.ts`.
- Tabel baru dibuat otomatis saat pertama dipakai; `node scripts/db-setup.mjs`
  juga membuatnya.

Komponen di `src/components/{gallery,admin,ui}` dan `src/lib/{period,perms,gallery,galleryserver,adminclient}.ts`
identik di repo uajmesport dan uajmbcc. Warnanya lewat token `--ui-*` di `globals.css`.
