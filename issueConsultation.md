# Analisis Kekurangan `Consultation.vue`

Berdasarkan implementasi saat ini, berikut adalah analisis mengenai kekurangan, area yang perlu diperbaiki, serta rekomendasi penambahan fitur pada modul `Consultation.vue`.

## 1. Beban Komponen (Component Overload)
- **Kondisi:** Saat ini, `Consultation.vue` menangani 3 tahapan sekaligus di dalam satu file (Daftar Psikolog, Form Pemesanan, dan Ruang Tunggu). Hanya Ruang Chat yang sudah dipisah (`CounselingChat.vue`).
- **Masalah:** File menjadi sangat panjang (lebih dari 250 baris) dan sulit dikelola (*maintainability* rendah).
- **Rekomendasi:** Ekstrak setiap tahapan menjadi komponen terpisah.
  - `components/consultation/PsychologistList.vue`
  - `components/consultation/BookingForm.vue`
  - `components/consultation/WaitingRoom.vue`

## 2. Pengelolaan State (State Management)
- **Kondisi:** Variabel penting seperti `currentStage`, `selectedPsychologist`, `selectedDate`, dan `rolePaper` disimpan sebagai *local state* (menggunakan `ref` biasa).
- **Masalah:** Jika pengguna tidak sengaja me-refresh browser (*F5*) atau pindah ke menu lain lalu kembali, semua progres pemesanan dan isi *Role Paper* akan hilang.
- **Rekomendasi:** Gunakan **Pinia Store** (misal: `useConsultationStore`) atau minimal simpan *state* sementara menggunakan `sessionStorage` agar data pemesanan aman sebelum sesi benar-benar selesai.

## 3. Logika Jadwal yang Masih Statis
- **Kondisi:** Daftar jam (`availableTimeSlots`) bersifat *hardcoded* (`['09:00', '10:30', ...]`) untuk semua tanggal dan semua psikolog.
- **Masalah:** Di dunia nyata, setiap psikolog memiliki jadwal kosong yang berbeda-beda setiap harinya.
- **Rekomendasi:** Buat simulasi fungsi filter atau *mock API call* yang mengembalikan jam berbeda berdasarkan `selectedPsychologist.id` dan `selectedDate.value`.

## 4. Potensi Kebocoran Memori (Memory Leak) pada Timer
- **Kondisi:** Fungsi hitung mundur (*countdown*) menggunakan `setInterval` yang disimpan di variabel `timerInterval`. Fungsi ini dihentikan (*cleared*) melalui *watcher* jika `currentStage` berubah.
- **Masalah:** Jika pengguna berada di `WAITING_ROOM` (timer sedang berjalan) lalu menekan tombol *Back* pada browser atau berpindah ke halaman lain melalui URL, komponen akan dihancurkan (*unmounted*) tanpa mengubah `currentStage`. Akibatnya, `setInterval` akan terus berjalan di latar belakang (*memory leak*).
- **Rekomendasi:** Tambahkan *lifecycle hook* `onBeforeUnmount` untuk memastikan interval selalu dibersihkan ( `clearInterval(timerInterval)` ) saat keluar dari halaman.

## 5. UI/UX Form Pemesanan
- **Kondisi:** Tombol **"Konfirmasi Jadwal"** langsung di- *disable* (tidak bisa diklik) jika ada data yang kosong.
- **Masalah:** Pengguna mungkin bingung mengapa tombol tidak bisa diklik jika mereka terlewat mengisi sesuatu.
- **Rekomendasi:** Biarkan tombol tetap bisa diklik, namun berikan validasi visual (seperti teks peringatan merah "Harap pilih jam terlebih dahulu") untuk memandu pengguna dengan lebih baik.

## 6. Absennya Pemicu Menu Mobile (Mobile Menu Trigger)
- **Kondisi:** Header hanya berisi teks "Layanan Konseling".
- **Masalah:** Jika dibuka di layar HP, pengguna tidak memiliki tombol *Hamburger Menu* untuk membuka `SidebarNav` yang tersembunyi.
- **Rekomendasi:** Tambahkan tombol pemicu menu responsif di pojok header, konsisten dengan standar *Dashboard* pada layar *mobile*.
