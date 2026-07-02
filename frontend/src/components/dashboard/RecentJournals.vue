<template>
  <div class="bg-surface-container-lowest rounded-lg p-6 shadow-indigo animate-fade-in-up" style="animation-delay: 0.1s;">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-lg font-bold text-gray-800">Jurnal Terakhir</h3>
      <button class="text-sm font-semibold text-on-surface-variant border border-dashed border-outline-variant px-4 py-2 rounded hover:border-primary-container hover:text-primary-container transition-colors">
        + Entri Baru
      </button>
    </div>
    
    <div class="space-y-3">
      <div 
        v-for="journal in journals" 
        :key="journal.id"
        class="flex items-center gap-4 p-3 rounded hover:bg-surface-container-low cursor-pointer transition-all duration-300 hover:translate-x-1 group"
      >
        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-container shrink-0 group-hover:scale-105 transition-transform">
          <div v-html="journal.icon"></div>
        </div>
        <div class="flex-grow">
          <h4 class="font-bold text-on-surface group-hover:text-primary-container transition-colors">{{ journal.title }}</h4>
          <p class="text-xs text-gray-500 mt-0.5">{{ journal.date }}</p>
        </div>
        <div class="text-outline-variant group-hover:text-primary-container transition-colors">
          →
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { recentJournals } from '@/data/dummyData';
import { ref } from 'vue';

const journals = ref(recentJournals);
</script>
