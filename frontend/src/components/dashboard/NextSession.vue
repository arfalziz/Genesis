<template>
  <div class="bg-primary-container text-white rounded-lg p-6 shadow-indigo animate-fade-in-up" style="animation-delay: 0.2s;">
    <h3 class="text-sm font-semibold text-on-primary-container mb-4">Sesi Konseling Berikutnya</h3>
    
    <div class="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
      <p class="text-xs text-on-primary-container mb-1">Berlangsung dalam:</p>
      <div class="text-2xl font-bold tracking-tight font-mono">
        {{ session.timeRemaining }}
      </div>
    </div>
    
    <div class="space-y-4 mb-6">
      <div class="flex items-start gap-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <div>
          <p class="text-xs text-on-primary-container">Psikolog</p>
          <p class="font-semibold">{{ session.psychologist }}</p>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <div>
          <p class="text-xs text-on-primary-container">Jadwal</p>
          <p class="font-semibold">{{ session.date }}</p>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <div>
          <p class="text-xs text-on-primary-container">Tipe Sesi</p>
          <p class="font-semibold">{{ session.type }}</p>
        </div>
      </div>
    </div>
    
    <router-link 
      to="/consultation" 
      class="w-full bg-white text-primary-container font-bold py-3 rounded hover:bg-surface-container-low transition-colors shadow-sm text-center block"
    >
      Masuk ke Ruang Sesi
    </router-link>
  </div>
</template>

<script setup>
import { nextSession } from '@/data/dummyData';
import { ref } from 'vue';

const session = ref(nextSession);
</script>
