# Analisis Kekurangan `Diary.vue` 

Berdasarkan perbandingan antara `Diary.vue` dengan `LandingPage.vue` dan `Dashboard.vue`, serta mengacu pada `DESIGN.md`, berikut adalah beberapa kekurangan atau inkonsistensi yang ditemukan pada `Diary.vue` (dan sub-komponennya):

## 1. Kurangnya Animasi Masuk (Entry Animations)
- **Kondisi di LandingPage & Dashboard**: Kedua halaman ini sangat memanfaatkan *class* animasi *utility* seperti `animate-fade-in-up` dengan variasi `animation-delay` untuk memberikan efek visual yang mulus dan elegan saat elemen halaman pertama kali dimuat (misal: kartu *Status Pemulihan* di Dashboard).
- **Kekurangan di Diary**: Walaupun `Diary.vue` memiliki animasi transisi Vue (`<transition name="slide-fade">`) yang sangat baik untuk fitur **Zen Mode**, halaman ini tidak memiliki animasi *fade-in-up* saat pertama kali di- *render*. Elemen-elemen seperti `Header`, `DailySpark`, dan `JournalEditor` muncul begitu saja tanpa transisi *delay* yang *smooth*.

## 2. Inkonsistensi Header & Mobile Trigger
- **Kondisi di Dashboard**: Memiliki *placeholder* atau struktur untuk pemicu menu navigasi di perangkat *mobile* (`<!-- Optional mobile menu trigger here -->`).
- **Kekurangan di Diary**: Tidak menyertakan *placeholder* atau tombol pemicu menu *mobile* yang sama. Selain itu, Header di `Diary.vue` menggunakan `sticky top-0 z-10` dengan `bg-surface`, sedangkan di `Dashboard.vue` headernya bersifat statis (`mb-10 flex...`). Walaupun *sticky header* bagus untuk Editor panjang, ini menciptakan perbedaan interaksi *scrolling* dengan halaman Dashboard.

## 3. Penerapan Bayangan (Shadows) pada Sub-Komponen
- **Aturan DESIGN.md & Dashboard**: Secara spesifik mewajibkan penggunaan *Indigo-Tinted Shadows* (`shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)]`) untuk memberikan kesan *Soft-Edge Modernism* yang mendalam.
- **Kekurangan di Komponen Diary**: Walaupun *toggle* Zen Mode dan kartu `RecentReflections` sudah menggunakan *shadow* ungu ini, komponen utama `JournalEditor.vue` hanya menggunakan `shadow-sm` bawaan Tailwind biasa. Hal ini membuat kedalaman visualnya tidak seragam dengan kartu-kartu lain di ekosistem aplikasi.

## 4. Pengelolaan State Global vs Lokal (SidebarNav)
- **Kondisi Saat Ini**: Di `Diary.vue`, komponen `SidebarNav` disembunyikan lewat direktif `v-show="!isZenMode"`. 
- **Kekurangan**: Karena `SidebarNav` di- *import* dan di- *render* secara mandiri di setiap halaman (Dashboard & Diary), tidak ada layout pembungkus global (*Global Layout Component*). Jika kita berada di *mobile*, interaksi menu (buka/tutup *sidebar*) harus diimplementasikan ulang di `Diary.vue`. 

## 5. Penggunaan Token Warna di Tailwind
- **Kondisi di LandingPage**: Menggunakan warna khusus seperti `text-textMain`, `text-textMuted`, dan `bg-bgOff`.
- **Kekurangan di Diary & Dashboard**: Menggunakan *utility class* warna standar dari Tailwind seperti `text-gray-900` dan `text-gray-500`. Hal ini menunjukkan adanya inkonsistensi sistem desain di tingkat *project* secara keseluruhan (terutama antara *Landing Page* dan *App Views*). Idealnya semua menggunakan token warna berbasis CSS Variable yang ada di `style.css` (seperti `text-on-surface` atau `text-on-surface-variant`).

## Kesimpulan / Rekomendasi
Untuk menyempurnakan `Diary.vue`, langkah selanjutnya yang direkomendasikan adalah:
1. Menambahkan atribut `animate-fade-in-up` dengan jeda (*delay*) bertahap pada komponen pembangunnya.
2. Memperbarui `shadow-sm` di `JournalEditor.vue` menjadi custom indigo shadow sesuai `DESIGN.md`.
3. Menyelaraskan struktur header *mobile* agar sejalan dengan kerangka kerja yang ada di `Dashboard.vue`.
4. ketika button diary di klik, samakan dengan warna yang muncul ketika button dashboard di klik

