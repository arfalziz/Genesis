# Genesis + : Progressive Web Application (PWA) Implementation Plan

Dokumen ini berisi spesifikasi teknis dan rencana implementasi (planning) untuk project Progressive Web Application (PWA) **Genesis +**. Dokumen ini disusun secara rinci dan terstruktur agar mudah dipahami serta dapat langsung dieksekusi langkah demi langkah oleh Junior Programmer maupun AI Code Generator.

---

## 1. Teknologi (Tech Stack)

*   **Frontend**: Vite (Direkomendasikan menggunakan framework React atau Vue.js dengan TypeScript)
*   **Backend**: Node.js (Direkomendasikan menggunakan framework Express.js atau Fastify)
*   **Database**: MySQL
*   **ORM (Object Relational Mapping)**: Drizzle ORM

---

## 2. Struktur Modul & Fitur Utama

Aplikasi Genesis + memiliki 6 komponen UI/UX dan fungsionalitas utama yang harus dibangun:

### A. Landing Page (Long Landing Page Form)
*   **Deskripsi**: Halaman utama yang dirancang bergaya *long-form* untuk menjelaskan *value proposition* aplikasi secara detail dan persuasif kepada pengunjung sebelum mereka mendaftar.
*   **Komponen UI yang dibutuhkan**:
    *   **Hero Section**: Judul utama yang menarik, sub-judul, dan Call-to-Action (CTA) "Daftar Sekarang".
    *   **Features Section**: Penjelasan visual dari fitur utama (Video/Lagu, Diary, Konsultasi Psikolog).
    *   **Testimonial / Trust Section**: Alasan mengapa Genesis+ aman dan terpercaya.
    *   **Long Form CTA Form**: Form pendaftaran yang diletakkan langsung di bagian bawah halaman (inline form) untuk konversi yang cepat.

### B. Form Register & Login
*   **Deskripsi**: Sistem autentikasi dan manajemen sesi pengguna.
*   **Backend (Node.js)**:
    *   Endpoint `POST /api/auth/register` (wajib mengenkripsi/hash password menggunakan bcrypt atau argon2).
    *   Endpoint `POST /api/auth/login` (mengembalikan JWT token untuk otorisasi endpoint selanjutnya).
*   **Frontend**:
    *   Halaman khusus Login dan Register dengan validasi input (contoh: email harus valid, password minimal 8 karakter).
    *   Mekanisme penyimpanan JWT token dengan aman (di localStorage atau HttpOnly Cookies).

### C. Dashboard
*   **Deskripsi**: Halaman *home* bagi pengguna setelah berhasil login. Karena berkonsep PWA, desain harus *mobile-friendly* layaknya aplikasi native.
*   **Komponen UI**:
    *   Navigasi (Sidebar untuk Desktop, Bottom Navigation untuk Mobile).
    *   Header dengan profil pengguna dan notifikasi.
    *   Widget/Card Ringkasan: Menampilkan aktivitas terbaru (contoh: status konsultasi terakhir, tombol cepat untuk menulis diary).

### D. Modul Video dan Lagu
*   **Deskripsi**: Modul hiburan atau relaksasi untuk pengguna.
*   **Backend**:
    *   Endpoint `GET /api/media` untuk mengambil daftar katalog video dan lagu.
*   **Frontend**:
    *   Tampilan Grid/List view untuk memilih konten.
    *   **Pemutar Video (Video Player)** bawaan atau kustom.
    *   **Pemutar Audio (Audio Player)** untuk memutar lagu dengan UI kontrol musik standar (Play, Pause, Next).

### E. Diary Secrets
*   **Deskripsi**: Modul jurnal pribadi pengguna. Karena bernama "Secrets", aspek keamanan dan privasi sangat diutamakan.
*   **Fitur CRUD**:
    *   Create: Form untuk menulis catatan harian baru.
    *   Read: Daftar catatan harian sebelumnya beserta fitur pencarian/filter.
    *   Update: Mengedit isi diary.
    *   Delete: Menghapus diary.
*   **Catatan Keamanan (Penting)**: User hanya boleh mengakses diary miliknya sendiri. (Validasi *user_id* dari JWT).

### F. Layanan Konsultasi ke Psikolog
*   **Deskripsi**: Platform penghubung antara pengguna dengan profesional (Psikolog).
*   **Fitur Utama**:
    *   Daftar Psikolog: Tampilan daftar psikolog, spesialisasi, dan jadwal yang tersedia.
    *   Sistem Booking/Appointment: Form bagi user untuk memilih jadwal konsultasi.
    *   Status Konsultasi: Halaman untuk melihat status (Menunggu Konfirmasi, Disetujui, atau Selesai).

---

## 3. Rencana Desain Database (MySQL + Drizzle ORM)

Sebagai panduan awal bagi Drizzle ORM, berikut adalah entitas yang dibutuhkan:

1.  **Tabel `users`**
    *   `id` (int, PK, auto-increment)
    *   `name` (varchar)
    *   `email` (varchar, unique)
    *   `password_hash` (varchar)
    *   `created_at` (timestamp)
2.  **Tabel `media`**
    *   `id` (int, PK)
    *   `type` (enum: 'video', 'audio')
    *   `title` (varchar)
    *   `url` (varchar)
3.  **Tabel `diaries`**
    *   `id` (int, PK)
    *   `user_id` (int, FK references users.id)
    *   `title` (varchar)
    *   `content` (text)
    *   `created_at` (timestamp)
4.  **Tabel `consultations`**
    *   `id` (int, PK)
    *   `user_id` (int, FK references users.id)
    *   `psychologist_name` (varchar)
    *   `scheduled_time` (datetime)
    *   `status` (enum: 'pending', 'approved', 'completed')

---

## 4. Panduan Eksekusi Step-by-Step (Untuk Developer / AI)

Ikuti urutan *milestone* berikut untuk membangun aplikasi secara terstruktur:

### Milestone 1: Setup & Inisialisasi
1.  Inisialisasi Frontend dengan `npm create vite@latest`.
2.  Tambahkan `vite-plugin-pwa` ke dalam konfigurasi Vite untuk mengaktifkan fitur Progressive Web App (manifest.json, service workers).
3.  Inisialisasi Backend Node.js dan install Drizzle ORM beserta *driver* `mysql2`.
4.  Buat file `schema.ts` di backend berdasarkan rencana desain database di atas, lalu lakukan *Drizzle push/migrate* ke database MySQL.

### Milestone 2: Sistem Autentikasi
1.  Buat struktur tabel `users` di Drizzle.
2.  Buat route dan controller untuk `/register` dan `/login` di Node.js.
3.  Di Frontend, buat form Landing Page & Login, lalu sambungkan (fetch) ke API Backend. Terapkan penyimpanan JWT.

### Milestone 3: Routing Frontend & Dashboard
1.  Buat setup *Routing* (misal dengan React Router).
2.  Pisahkan jalur publik (Landing, Login, Register) dan jalur privat (Dashboard, Diary, dll).
3.  Bangun antarmuka Dashboard utama.

### Milestone 4: Modul Fitur Inti
1.  **Diary Secrets**: Buat skema tabel, API CRUD di backend, dan halaman editor di frontend.
2.  **Layanan Konsultasi**: Buat form penjadwalan dan daftar riwayat jadwal.
3.  **Video & Lagu**: Buat tabel *seeder* di DB untuk contoh data media, lalu tampilkan pemutarnya di frontend.

### Milestone 5: PWA Polish & Testing
1.  Pastikan aplikasi *fully responsive* untuk mobile device.
2.  Pastikan Service Worker berhasil melakukan *caching* sehingga aplikasi tetap bisa dimuat cepat, dan muncul prompt "Install App" di perangkat mobile/desktop pengguna.
3.  Lakukan *End-to-End Testing* dari pendaftaran sampai membuat jadwal konsultasi.
