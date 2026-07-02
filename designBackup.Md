# Backup Desain (Tahap 1-3)

Dokumen ini berisi rangkuman spesifikasi desain antarmuka (UI) yang **sudah kita implementasikan** pada komponen Dashboard sebelum pembaruan besar berdasarkan `DESIGN.md` yang baru.

## 1. Global & Typography
- **Font Utama**: Plus Jakarta Sans (`font-['Plus_Jakarta_Sans',_sans-serif]` / `font-sans`).
- **Heading**: Menggunakan bobot `font-extrabold` dengan kepadatan `tracking-tight` dan warna `text-gray-950`.
- **Bottom Spacing**: `<main>` wrapper memiliki `pb-32` untuk memastikan baris Quick Stats terbawah memiliki ruang napas agar tidak terpotong tepi layar.
- **Iconography**: Menggunakan SVG *outline* dengan `stroke-width="2"` (tanpa emoji).

## 2. Struktur Layout
- Tata letak dua kolom: Sidebar di sebelah kiri dan konten utama (*scrollable*) di sebelah kanan.

## 3. Spesifikasi Komponen

### A. SidebarNav
- **Latar Belakang**: Biru-lilac lembut (`#EEF2FC`).
- **Menu Aktif (Dashboard)**: Warna ungu solid (`#6D28D9`), teks putih, dengan kelengkungan `rounded-xl` dan bayangan lembut (`shadow-sm`).
- **Menu Bantuan & Logout**: Menggunakan gaya ringkas (ikon + teks di sebelah kiri).

### B. Daily Affirmation (Afirmasi Hari Ini)
- **Struktur**: `flex-row justify-between items-center` dengan *gap* 6 dan padding kanan tambahan.
- **Elemen Teks**: Teks kutipan dan ikon *sparkles* berada di sebelah kiri rata-kiri (`text-left`).
- **Tombol**: Menggunakan `rounded-2xl` dan diletakkan murni di sebelah kanan.

### C. Recent Journals (Jurnal Terakhir)
- **Baris Item**: Memiliki efek transisi `hover:bg-gray-50 hover:translate-x-1 duration-300` agar terasa hidup.
- **Teks**: Judul menggunakan `text-gray-800` untuk menjaga keterbacaan yang tinggi pada latar belakang putih.
- **Ikon**: Berada dalam wadah `bg-accent` berbentuk kotak dengan sudut membulat.

### D. Next Session (Sesi Konseling Berikutnya)
- **Latar Belakang**: Menggunakan gradasi vertikal `bg-gradient-to-b from-[#5B21B6] to-[#4C1D95]`.
- **Timer Widget**: Menggunakan teks `font-mono` (contoh: "24 : 05 : 00") di dalam kotak kaca tembus pandang (`bg-white/10 backdrop-blur-sm`).
- **Tombol "Masuk Ruang Sesi"**: Berwarna putih dengan teks ungu (`text-primary`), memiliki `rounded-2xl`.

### E. Quick Stats (Statistik Cepat)
- Ditampilkan dalam format Grid, ditempatkan di atas ruang `pb-32` terbawah.
- Ikon SVG di-*render* langsung di atas lingkaran berwarna aksen.
