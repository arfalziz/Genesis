<template>
  <aside class="w-full lg:w-72 hidden lg:flex flex-col gap-4">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-bold text-gray-800 tracking-tight">Refleksi Terakhir</h3>
      <router-link to="/diary/history" class="text-xs font-semibold text-primary hover:text-primary-container transition-colors">Lihat Semua</router-link>
    </div>

    <div class="space-y-4">
      <div 
        v-for="entry in recentEntries" 
        :key="entry.id"
        class="bg-white rounded-xl p-5 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-50/50 cursor-pointer transition-all duration-300 hover:translate-x-1 hover:bg-surface-container-low"
      >
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-medium text-gray-400">{{ entry.date }}</span>
        </div>
        <h4 class="font-semibold text-gray-800 mb-1 leading-snug">{{ entry.title }}</h4>
        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">{{ entry.preview }}</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const recentEntries = ref([
  {
    id: 1,
    date: 'Hari ini',
    title: 'Menemukan kedamaian di tengah kekacauan',
    preview: 'Saya mencoba bernapas dalam-dalam ketika rapat tadi terasa sangat membebani. Ternyata itu cukup membantu untuk menjernihkan...',
  
  },
  {
    id: 2,
    date: 'Kemarin',
    title: 'Merasa sedikit kewalahan',
    preview: 'Banyak tugas yang menumpuk. Saya merasa seperti kehilangan kendali, tapi saya menulis ini untuk memetakan apa saja yang harus dikerjakan.',
  },
  {
    id: 3,
    date: '15 Juni',
    title: 'Momen kecil yang kusyukuri',
    preview: 'Pagi ini aku menyempatkan diri untuk membuat kopi kesukaan dan duduk sebentar di teras. Langitnya sangat cerah.',
  }
]);
</script>
