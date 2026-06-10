# Project Plan: Progressive Web Application (PWA) Kesehatan Mental

## 1. Overview Project
Aplikasi web progresif (PWA) yang ditujukan untuk memberikan layanan kesehatan mental, modul video/audio, journaling rahasia (diary), dan layanan konsultasi dengan psikolog. Aplikasi ini dirancang agar responsif (mobile-first) dan dapat diinstal di perangkat pengguna selayaknya aplikasi native.

## 2. Tech Stack
- **Frontend Framework:** Vue.js (Direkomendasikan menggunakan Vue 3 + Composition API + Vite)
- **Backend:** Node.js (Menggunakan framework seperti Express.js atau Fastify)
- **Database:** MySQL
- **ORM:** Drizzle ORM

## 3. Arsitektur & Infrastruktur
- PWA terkonfigurasi dengan service worker untuk kapabilitas offline dasar (caching asset statis) dan Web Manifest untuk instalasi (Add to Home Screen).
- RESTful API digunakan untuk komunikasi antara Frontend Vue.js dan Backend Node.js.
- Autentikasi berbasis **JWT (JSON Web Tokens)** untuk keamanan sesi pengguna.

---

## 4. Spesifikasi Halaman & Fitur Utama

### 4.1. Landing Page (Long Landing Page Form)
- **Deskripsi:** Halaman utama beranda publik untuk menarik calon pengguna. Disusun secara memanjang (long-form) dengan struktur copywriting yang persuasif.
- **Komponen Frontend:**
  - **Hero Section:** Headline menarik, sub-headline, dan tombol Call to Action (CTA).
  - **Problem & Solution:** Seksi yang menjelaskan masalah target audiens dan bagaimana aplikasi ini menjadi solusinya.
  - **Features Showcase:** Penjelasan singkat mengenai fitur Video, Diary, dan Konsultasi.
  - **Long Form / Lead Magnet:** Formulir di bagian tengah atau bawah halaman untuk langsung mendaftar atau mengumpulkan email (newsletter/waitlist).
  - **Footer:** Tautan ke kebijakan privasi, syarat dan ketentuan, dll.

### 4.2. Form Register & Login
- **Deskripsi:** Sistem autentikasi agar pengguna dapat mengakses fitur-fitur personal.
- **Komponen Frontend:**
  - **Register:** Formulir input Nama, Email, Password, Konfirmasi Password. Harus ada validasi email dan kekuatan password di sisi klien.
  - **Login:** Formulir input Email dan Password.
- **Komponen Backend:**
  - Endpoint `POST /api/auth/register`: Menyimpan user baru dengan hashing password (menggunakan `bcrypt` atau `argon2`).
  - Endpoint `POST /api/auth/login`: Validasi kredensial dan mengembalikan JWT Token.

### 4.3. Dashboard
- **Deskripsi:** Halaman utama pengguna (Private Route) setelah berhasil login.
- **Komponen Frontend:**
  - **Welcome Banner:** Menyapa nama pengguna.
  - **Quick Metrics / Tracker:** (Opsional) Menampilkan mood hari ini atau progress aktivitas.
  - **Navigation Grid:** Menu cepat (Cards) menuju modul Video/Lagu, Diary Secrets, dan Layanan Konsultasi.
  - Sidebar atau Bottom Navigation untuk mempermudah akses antar menu (PWA friendly).

### 4.4. Modul Video dan Lagu (Relaksasi/Meditasi)
- **Deskripsi:** Katalog media yang berisi video atau lagu untuk membantu relaksasi atau meditasi pengguna.
- **Komponen Frontend:**
  - **Media Library:** Tampilan daftar (Grid/List) lagu dan video yang bisa difilter (misal: "Untuk Tidur", "Fokus", "Penghilang Stres").
  - **Media Player:** Custom audio/video player di dalam aplikasi.
- **Komponen Backend:**
  - Endpoint `GET /api/media`: Mengembalikan daftar URL media beserta metadatanya (judul, durasi, kategori). (URL media idealnya merujuk ke layanan storage eksternal seperti AWS S3 atau Cloudinary).

### 4.5. Diary Secrets (Jurnal Rahasia)
- **Deskripsi:** Ruang personal bagi pengguna untuk mencatat jurnal harian. Data dijamin rahasia.
- **Komponen Frontend:**
  - **Diary Editor:** Text area (atau Rich Text Editor sederhana) untuk menulis jurnal.
  - **Mood Selector:** Pemilihan emoticon untuk mewakili perasaan hari itu.
  - **History/Timeline:** Daftar entri jurnal yang telah lalu, diurutkan berdasarkan tanggal terbaru.
- **Komponen Backend & Security:**
  - Endpoint CRUD (`GET, POST, PUT, DELETE /api/diary`).
  - **CRITICAL:** Data isi jurnal (content) **HARUS** dienkripsi sebelum disimpan ke MySQL (menggunakan algoritma enkripsi simetris seperti AES-256) agar tidak bisa dibaca langsung dari database.

### 4.6. Layanan Konsultasi ke Psikolog
- **Deskripsi:** Fitur untuk mencari dan membuat janji temu (appointment) dengan psikolog.
- **Komponen Frontend:**
  - **Directory Psikolog:** Daftar psikolog beserta foto, keahlian spesifik, tarif, dan ketersediaan waktu.
  - **Booking System:** Antarmuka pemilihan tanggal dan jam untuk konsultasi.
  - **My Appointments:** Halaman untuk melihat jadwal konsultasi yang akan datang atau histori konsultasi.
- **Komponen Backend:**
  - Endpoint `GET /api/psychologists`: Mengambil daftar psikolog.
  - Endpoint `POST /api/appointments`: Memesan jadwal. Perlu validasi agar tidak ada bentrok jadwal (double booking).

---

## 5. Panduan Skema Database (Drizzle ORM & MySQL)
Berikut adalah referensi skema tabel awal yang harus diimplementasikan dengan Drizzle ORM:

1. **`users`**
   - `id` (PK, UUID/Serial)
   - `name` (Varchar)
   - `email` (Varchar, Unique)
   - `password_hash` (Varchar)
   - `created_at` (Timestamp)

2. **`media`**
   - `id` (PK)
   - `title` (Varchar)
   - `type` (Enum: 'video', 'audio')
   - `url` (Varchar)
   - `category` (Varchar)

3. **`diaries`**
   - `id` (PK)
   - `user_id` (FK to users)
   - `content_encrypted` (Text)
   - `mood_tag` (Varchar)
   - `created_at` (Timestamp)

4. **`psychologists`**
   - `id` (PK)
   - `name` (Varchar)
   - `specialization` (Varchar)
   - `bio` (Text)

5. **`appointments`**
   - `id` (PK)
   - `user_id` (FK to users)
   - `psychologist_id` (FK to psychologists)
   - `schedule_time` (Datetime)
   - `status` (Enum: 'pending', 'confirmed', 'completed', 'cancelled')

---

## 6. Langkah-Langkah Pengerjaan (Step-by-Step)
Instruksi untuk AI / Junior Developer saat memulai:

1. **Inisialisasi Proyek:**
   - Setup Node.js backend (npm init, install express, drizzle-orm, mysql2).
   - Setup Vue frontend (Vite create vue). Tambahkan plugin `vite-plugin-pwa`.
2. **Setup Database:**
   - Konfigurasi koneksi MySQL di Node.js.
   - Definisikan skema Drizzle sesuai panduan poin 5.
   - Jalankan proses `drizzle-kit generate` dan migrasi ke MySQL.
3. **Pengembangan Frontend (Vue.js):**
   - Buat file routing (`vue-router`).
   - Selesaikan UI Landing Page (Long form) dan Form Register/Login.
   - Selesaikan UI Dashboard pengguna.
   - Integrasikan halaman dengan API Backend menggunakan `fetch` atau `axios`.
5. **Konfigurasi PWA:**
   - Daftarkan manifest.json (ikon, warna tema, nama aplikasi).
   - Konfigurasi service worker untuk caching dasar agar aplikasi bisa terbuka walau koneksi tidak stabil.

   intinya inisialisasi dulu, abis itu langsung fokus ke Frontendnya!!
   
