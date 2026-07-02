<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style="animation-delay: 0.3s;">
    <div 
      v-for="stat in stats" 
      :key="stat.id"
      class="bg-surface-container-lowest p-5 rounded-lg shadow-indigo flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-md transition-all"
    >
      <div class="w-12 h-12 rounded-full bg-accent text-primary-container flex items-center justify-center text-2xl mb-3">
        <div v-html="stat.icon"></div>
      </div>
      <p class="text-2xl font-bold text-on-surface mb-1">{{ stat.value }}</p>
      <p class="text-xs font-medium text-on-surface-variant">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { quickStats } from '@/data/dummyData';
import { ref } from 'vue';

const stats = ref(quickStats);
</script>
