<template>
  <div class="relative bg-secondary-container rounded-lg p-6 md:p-8 overflow-hidden shadow-indigo animate-fade-in-up">
    <!-- Decorative sparkles -->
    <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
    <div class="absolute right-10 bottom-10 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
    
    <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div class="flex items-start gap-4 text-left">
        <div class="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shrink-0 shadow-sm">
          <svg class="w-6 h-6 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
        </div>
        <div>
          <h2 class="text-sm font-extrabold text-primary uppercase tracking-wider mb-1">Daily Affirmation</h2>
          <p class="text-lg md:text-xl font-medium text-on-secondary-container">
            "{{ affirmation.quote }}"
          </p>
        </div>
      </div>
      
      <router-link 
        to="/diary"
        class="bg-primary-container text-white px-6 py-3 rounded font-semibold shadow-md hover:bg-primary-container/90 transition-all active:scale-95 whitespace-nowrap w-full md:w-auto mt-2 md:mt-0 text-center block"
      >
        Catat Mood
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { dailyAffirmation } from '@/data/dummyData';
import { ref } from 'vue';

const affirmation = ref(dailyAffirmation);
</script>
