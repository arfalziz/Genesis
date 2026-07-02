<template>
  <div class="min-h-screen bg-surface flex flex-col md:flex-row font-sans text-gray-800">
    <!-- Left Sidebar -->
    <SidebarNav />

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32">
      <header class="mb-10 flex items-center gap-4">
        <router-link to="/diary" class="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </router-link>
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">
            Riwayat <span class="text-primary">Jurnal</span>
          </h2>
          <p class="text-xs md:text-sm text-gray-500 font-medium leading-relaxed mt-1">
            Lihat kembali catatan perjalanan pikiran dan perasaan Anda.
          </p>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        <div 
          v-for="entry in historyEntries" 
          :key="entry.id"
          class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-50/50 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 group"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-primary-container text-on-primary-container rounded-full">{{ entry.date }}</span>
            <div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary" v-html="entry.icon || '📝'"></div>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">{{ entry.title }}</h3>
          <p class="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-grow">{{ entry.preview }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarNav from '@/components/dashboard/SidebarNav.vue';

// Use dummy data similar to recent reflections
const historyEntries = ref([
  {
    id: 1,
    date: 'Hari ini',
    title: 'Menemukan kedamaian di tengah kekacauan',
    preview: 'Saya mencoba bernapas dalam-dalam ketika rapat tadi terasa sangat membebani. Ternyata itu cukup membantu untuk menjernihkan pikiran dan kembali fokus.',
    icon: '🧘‍♀️'
  },
  {
    id: 2,
    date: 'Kemarin',
    title: 'Merasa sedikit kewalahan',
    preview: 'Banyak tugas yang menumpuk. Saya merasa seperti kehilangan kendali, tapi saya menulis ini untuk memetakan apa saja yang harus dikerjakan.',
    icon: '🌧️'
  },
  {
    id: 3,
    date: '15 Juni 2026',
    title: 'Momen kecil yang kusyukuri',
    preview: 'Pagi ini aku menyempatkan diri untuk membuat kopi kesukaan dan duduk sebentar di teras. Langitnya sangat cerah.',
    icon: '☀️'
  },
  {
    id: 4,
    date: '12 Juni 2026',
    title: 'Langkah pertama yang berat',
    preview: 'Memulai rutinitas baru ternyata tidak semudah yang kubayangkan. Tapi aku akan terus mencoba.',
    icon: '🌱'
  },
  {
    id: 5,
    date: '10 Juni 2026',
    title: 'Sesi konseling yang mencerahkan',
    preview: 'Banyak hal yang akhirnya bisa aku lepaskan setelah berbicara dengan psikolog. Rasanya lega sekali.',
    icon: '💡'
  }
]);
</script>
