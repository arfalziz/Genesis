<template>
  <div key="waiting" class="max-w-xl mx-auto w-full flex flex-col items-center py-10 animate-fade-in-up font-['Plus_Jakarta_Sans',_sans-serif]">
    <div class="relative w-32 h-32 mb-8 flex items-center justify-center">
      <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
      <div class="absolute inset-2 bg-primary/40 rounded-full animate-pulse"></div>
      <div class="relative z-10 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
    </div>
    
    <h2 class="text-3xl font-semibold leading-[1.3] text-gray-900 mb-2">Sesi Anda Segera Dimulai</h2>
    <p class="text-base font-normal leading-[1.6] text-gray-500 mb-8 max-w-md text-center">
      Ambil napas dalam-dalam. Psikolog Anda, <span class="font-semibold text-gray-700">{{ store.selectedPsychologist?.name }}</span>, sedang mempersiapkan diri untuk sesi Anda.
    </p>

    <div class="bg-white p-6 rounded-2xl shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-100 w-full mb-8">
      <div class="text-center">
        <span class="text-sm font-medium leading-[1.4] tracking-[0.01em] text-gray-400 uppercase block mb-2">Sisa Waktu Menuju Sesi</span>
        <div class="text-4xl md:text-5xl font-bold leading-[1.2] tracking-[-0.02em] text-primary tabular-nums">
          {{ formatTime(timeLeft) }}
        </div>
      </div>
    </div>

    <button 
      @click="enterChat"
      class="w-full py-4 bg-primary text-white rounded-lg text-xs font-semibold leading-none hover:bg-primary/90 active:scale-95 transition-all shadow-lg flex justify-center items-center gap-2"
    >
      Masuk Ruang Konseling
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </button>
    <p class="text-sm font-medium leading-[1.4] tracking-[0.01em] text-gray-400 mt-4 text-center">(Simulasi: Anda dapat langsung melewati waktu tunggu dengan mengklik tombol di atas)</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useConsultationStore } from '@/stores/consultationStore';

const store = useConsultationStore();

const timeLeft = ref(900); // 15 menit
let timerInterval = null;

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m} : ${s}`;
};

const enterChat = () => {
  store.setStage('CHAT');
};

const startTimer = () => {
  timeLeft.value = 900;
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--;
    else clearInterval(timerInterval);
  }, 1000);
};

const clearTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearTimer(); // Memperbaiki issue memory leak
});
</script>
