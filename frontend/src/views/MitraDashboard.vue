<template>
  <div class="min-h-screen bg-[#F8F9FF] flex flex-col md:flex-row font-sans text-gray-800">
    
    <!-- B2B Admin Sidebar -->
    <MitraSidebar :activeTab="activeTab" @change-tab="activeTab = $event" />

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32 transition-all duration-500">
      
      <!-- HEADER -->
      <header class="mb-10 flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif] animate-fade-in-up">
              <span class="font-normal text-gray-400">Halo,</span> Universitas Aisyah Pringsewu
            </h2>
          </div>
          <p class="text-xs md:text-sm text-gray-500 font-medium leading-relaxed mt-1 animate-fade-in-up" style="animation-delay: 0.1s">
            {{ headerDescription }}
          </p>
        </div>
        
        <!-- Mobile Menu Trigger -->
        <button class="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </header>

      <!-- TAB 1: OVERVIEW -->
      <div v-if="activeTab === 'overview'" class="space-y-8">
        <!-- Dashboard Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-5 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#5B21B6]">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">Total Sesi Dibeli</p>
              <p class="text-3xl font-extrabold text-gray-900 mt-1">100</p>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-5 animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">Sesi Digunakan</p>
              <p class="text-3xl font-extrabold text-gray-900 mt-1">12</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-5 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">Sisa Kuota</p>
              <p class="text-3xl font-extrabold text-gray-900 mt-1">88</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 animate-fade-in-up" style="animation-delay: 0.5s">
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-[#5B21B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Aktivitas Konseling Mahasiswa (Real-time)
          </h3>
          <div class="flex items-center gap-4 bg-[#F9FAFB] p-4 rounded-xl border border-[#D8B4FE]">
             <div class="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
             <div>
               <p class="text-gray-800 font-bold">2 Mahasiswa</p>
               <p class="text-sm text-gray-500">sedang melangsungkan sesi konseling saat ini.</p>
             </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: BELI KUOTA -->
      <div v-if="activeTab === 'beli-kuota'" class="max-w-2xl">
        <div class="bg-white rounded-2xl p-8 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 animate-fade-in-up" style="animation-delay: 0.2s">
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            Pilih Paket Kuota Sesi
          </h3>
          
          <div class="space-y-4">
            <label class="relative block bg-white border-2 border-[#5B21B6] rounded-2xl p-5 cursor-pointer bg-[#F9FAFB] transition-colors">
              <input type="radio" name="package" class="peer sr-only" checked>
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-bold text-gray-900 text-lg">Paket 100 Sesi</p>
                  <p class="text-sm text-gray-500 mt-1">Berlaku untuk 1 tahun</p>
                </div>
                <div class="text-right">
                  <p class="font-extrabold text-[#5B21B6] text-xl">Rp 12.000.000</p>
                  <p class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded inline-block mt-1">Hemat 20%</p>
                </div>
              </div>
              <div class="absolute top-5 right-5 w-5 h-5 rounded-full border-2 border-[#5B21B6] flex items-center justify-center">
                <div class="w-2.5 h-2.5 bg-[#5B21B6] rounded-full"></div>
              </div>
            </label>

            <label class="relative block bg-white border border-[#D8B4FE] rounded-2xl p-5 cursor-pointer hover:border-[#5B21B6] transition-colors">
              <input type="radio" name="package" class="peer sr-only">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-bold text-gray-900 text-lg">Paket 50 Sesi</p>
                  <p class="text-sm text-gray-500 mt-1">Berlaku untuk 6 bulan</p>
                </div>
                <div class="text-right">
                  <p class="font-extrabold text-gray-900 text-xl">Rp 6.750.000</p>
                  <p class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded inline-block mt-1">Hemat 10%</p>
                </div>
              </div>
              <div class="absolute top-5 right-5 w-5 h-5 rounded-full border-2 border-[#D8B4FE]"></div>
            </label>
          </div>

          <button class="mt-8 w-full py-4 bg-[#5B21B6] text-white rounded-lg font-bold hover:bg-[#420093] transition-all shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] flex justify-center items-center gap-2">
            Lanjut ke Pembayaran Transaksi
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>
      </div>

      <!-- TAB 3: MANAJEMEN TOKEN -->
      <div v-if="activeTab === 'token'" class="max-w-2xl">
        <div class="bg-white rounded-2xl p-8 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 animate-fade-in-up" style="animation-delay: 0.2s">
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-[#5B21B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            Token Akses (Voucher) Aktif
          </h3>
          
          <div class="bg-[#F9FAFB] border border-[#D8B4FE] rounded-2xl p-6 mb-6">
            <p class="text-sm text-gray-600 font-medium mb-3">Kode Token Instansi Saat Ini</p>
            <div class="flex items-center gap-3">
              <div class="flex-1 bg-white border border-[#D8B4FE] rounded-lg px-5 py-4 text-xl font-mono font-bold tracking-widest text-[#5B21B6] text-center">
                UAPGENESIS2026
              </div>
              <button class="bg-white border border-[#D8B4FE] hover:bg-[#F3E8FF] text-[#5B21B6] p-4 rounded-lg transition-colors shadow-sm" aria-label="Salin Kode">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </button>
            </div>
            <div class="mt-4 flex justify-between items-center text-xs">
               <span class="text-gray-500">Berlaku Hingga: <strong class="text-gray-800">31 Des 2026</strong></span>
               <span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Status: Aktif</span>
            </div>
          </div>

          <div class="flex gap-4 mt-8">
             <button class="flex-1 py-3 border border-[#D8B4FE] text-[#5B21B6] bg-[#F9FAFB] hover:bg-[#F3E8FF] rounded-lg font-bold transition-colors">
               Nonaktifkan Token
             </button>
             <button class="flex-1 py-3 bg-[#5B21B6] text-white rounded-lg font-bold hover:bg-[#420093] transition-colors">
               Generate Token Baru
             </button>
          </div>
        </div>
      </div>

      <!-- TAB 4: RIWAYAT PENGGUNA -->
      <div v-if="activeTab === 'riwayat'" class="animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="bg-white rounded-2xl shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
           <div class="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 class="text-lg font-bold text-gray-900">Riwayat Penggunaan Kuota</h3>
              <button class="text-sm font-semibold text-[#5B21B6] hover:underline">Download CSV</button>
           </div>
           <div class="overflow-x-auto">
             <table class="w-full text-left text-sm text-gray-600">
               <thead class="bg-[#F9FAFB] text-xs uppercase text-gray-500 font-bold border-b border-gray-100">
                 <tr>
                   <th class="px-6 py-4">ID/Email Mahasiswa (Anonim)</th>
                   <th class="px-6 py-4">Tanggal Klaim Sesi</th>
                   <th class="px-6 py-4">Kode Token</th>
                   <th class="px-6 py-4">Status Sesi</th>
                 </tr>
               </thead>
               <tbody class="divide-y divide-gray-100">
                 <tr class="hover:bg-gray-50">
                   <td class="px-6 py-4 font-medium text-gray-900">mhs_anon***@aisyah.ac.id</td>
                   <td class="px-6 py-4">18 Jun 2026, 14:00</td>
                   <td class="px-6 py-4 font-mono text-xs">UAPGENESIS2026</td>
                   <td class="px-6 py-4"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Selesai</span></td>
                 </tr>
                 <tr class="hover:bg-gray-50">
                   <td class="px-6 py-4 font-medium text-gray-900">krywn_***@aisyah.ac.id</td>
                   <td class="px-6 py-4">18 Jun 2026, 09:30</td>
                   <td class="px-6 py-4 font-mono text-xs">UAPGENESIS2026</td>
                   <td class="px-6 py-4"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Selesai</span></td>
                 </tr>
                 <tr class="hover:bg-gray-50">
                   <td class="px-6 py-4 font-medium text-gray-900">mhs_anon2***@aisyah.ac.id</td>
                   <td class="px-6 py-4">19 Jun 2026, 10:00</td>
                   <td class="px-6 py-4 font-mono text-xs">UAPGENESIS2026</td>
                   <td class="px-6 py-4"><span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Sedang Berlangsung</span></td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div class="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 text-center">
             Menampilkan 3 penggunaan terakhir. Isi sesi (rekam medis/chat) disembunyikan untuk menjaga privasi pengguna.
           </div>
        </div>
      </div>

      <!-- TAB 5: INVOICE & LAPORAN -->
      <div v-if="activeTab === 'invoice'" class="animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="bg-white rounded-2xl shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
           <div class="p-6 border-b border-gray-100">
              <h3 class="text-lg font-bold text-gray-900">Riwayat Transaksi & Invoice</h3>
           </div>
           <div class="p-6 space-y-4">
             
             <!-- Invoice Item -->
             <div class="flex items-center justify-between border border-gray-100 p-4 rounded-xl hover:border-[#D8B4FE] transition-colors">
               <div class="flex items-center gap-4">
                 <div class="w-12 h-12 bg-[#F3E8FF] text-[#5B21B6] rounded-lg flex items-center justify-center">
                   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                 </div>
                 <div>
                   <p class="font-bold text-gray-900">INV-UAP-20260101</p>
                   <p class="text-xs text-gray-500">Paket 100 Sesi Konseling • 1 Jan 2026</p>
                 </div>
               </div>
               <div class="flex items-center gap-6">
                 <div class="text-right hidden sm:block">
                   <p class="font-bold text-gray-900">Rp 12.000.000</p>
                   <p class="text-xs text-emerald-600 font-semibold">Lunas</p>
                 </div>
                 <button class="p-2 text-[#5B21B6] bg-[#F3E8FF] hover:bg-[#D8B4FE] rounded-lg transition-colors" title="Download PDF">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                 </button>
               </div>
             </div>

           </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MitraSidebar from '@/components/dashboard/MitraSidebar.vue';

const activeTab = ref('overview');

const headerDescription = computed(() => {
  switch(activeTab.value) {
    case 'overview': return 'Ringkasan aktivitas dan penggunaan kuota konseling instansi Anda.';
    case 'beli-kuota': return 'Tambah paket kuota sesi untuk mahasiswa atau karyawan Anda.';
    case 'token': return 'Kelola token akses yang digunakan untuk mengklaim sesi gratis.';
    case 'riwayat': return 'Daftar anonim mahasiswa/karyawan yang telah menggunakan kuota sesi.';
    case 'invoice': return 'Unduh bukti transaksi untuk keperluan administrasi dan laporan keuangan.';
    default: return 'Manajemen Kuota Konseling & Token Akses Mahasiswa.';
  }
});
</script>
