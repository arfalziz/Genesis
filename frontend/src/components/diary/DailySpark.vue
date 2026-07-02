<template>
  <div v-if="isVisible" class="bg-secondary-container/30 border border-secondary-container rounded-2xl p-6 relative transition-all duration-300 hover:shadow-sm">
    <div class="flex justify-between items-start mb-4">
      <div class="flex items-center gap-2 text-primary">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        <h3 class="font-bold text-sm tracking-wide uppercase">Daily Spark</h3>
      </div>
      <div class="flex gap-2">
        <button @click="nextPrompt" class="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" title="Ganti Prompt">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        </button>
        <button @click="dismiss" class="text-on-surface-variant hover:bg-surface-container-high p-1.5 rounded-full transition-colors" title="Tutup">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>
    
    <div class="relative overflow-hidden min-h-[4rem]">
      <transition name="fade-slide" mode="out-in">
        <p :key="currentIndex" class="font-medium text-on-secondary-container text-lg leading-relaxed font-sans">
          {{ prompts[currentIndex] }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
const prompts = [
  "Apa satu hal kecil yang berhasil kamu lakukan hari ini, meskipun terasa berat?",
  "Jika perasaanmu saat ini adalah sebuah cuaca, cuaca apakah itu? Ceritakan alasannya.",
  "Sebutkan tiga hal yang membuatmu merasa aman saat ini.",
  "Adakah pikiran negatif yang terus berulang hari ini? Mari kita coba tantang pikiran tersebut.",
  "Apa yang tubuhmu butuhkan saat ini? Istirahat, air, atau sekadar peregangan?"
];
const currentIndex = ref(Math.floor(Math.random() * prompts.length));

const nextPrompt = () => {
  currentIndex.value = (currentIndex.value + 1) % prompts.length;
};

const dismiss = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
