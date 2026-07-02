<template>
  <div key="form" class="font-['Plus_Jakarta_Sans',_sans-serif] w-full animate-fade-in-up">
    <div class="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(91,33,182,0.03)] border border-gray-100/80 w-full max-w-5xl mx-auto">
      
      <!-- Top Progress Tracker Step Indicator -->
      <div class="flex items-center justify-center gap-2 md:gap-3">
        <div class="flex items-center gap-1 md:gap-2 text-gray-400 text-xs font-semibold">
          <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span class="hidden sm:inline">Pilih Psikolog</span>
        </div>
        <div class="w-8 md:w-12 h-[1px] bg-gray-200"></div>
        <div class="flex items-center gap-1 md:gap-2 text-gray-900 text-xs font-bold">
          <span class="bg-[#5B21B6] text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px]">2</span>
          <span>Atur Waktu & Cerita</span>
        </div>
        <div class="w-8 md:w-12 h-[1px] bg-gray-200"></div>
        <div class="flex items-center gap-1 md:gap-2 text-gray-300 text-xs font-medium">
          <span class="border border-gray-300 text-gray-300 w-5 h-5 flex items-center justify-center rounded-full text-[10px]">3</span>
          <span class="hidden sm:inline">Pembayaran</span>
        </div>
      </div>

      <form @submit.prevent="confirmBooking">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          
          <!-- LEFT SIDEBAR COLUMN -->
          <div class="lg:col-span-1 flex flex-col">
            <!-- Doctor's Profile Card -->
            <div class="bg-[#EEF2FC]/60 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <img :src="store.selectedPsychologist?.avatar" :alt="store.selectedPsychologist?.name" class="w-20 h-20 rounded-full object-cover ring-4 ring-white border border-[#5B21B6]" />
              <div>
                <h3 class="text-lg font-bold text-gray-900 leading-snug">{{ store.selectedPsychologist?.name }}</h3>
                <p class="text-sm font-medium text-primary mt-1">{{ store.selectedPsychologist?.spec }}</p>
              </div>
            </div>

            <!-- Date Picker -->
            <div class="mt-6">
              <label class="block text-xs font-semibold leading-none text-gray-700 mb-2">Tanggal Sesi</label>
              <input 
                type="date" 
                v-model="store.selectedDate"
                class="rounded-xl border border-gray-200 p-3 text-sm focus:outline-none w-full mt-4 bg-white text-gray-700 focus:border-[#5B21B6] transition-colors" 
                required
              />
            </div>

            <!-- Time Picker -->
            <div class="mt-6">
              <label class="block text-xs font-semibold leading-none text-gray-700 mb-2">Waktu Sesi</label>
              <select 
                v-model="store.selectedSlot"
                class="rounded-xl border border-gray-200 p-3 text-sm focus:outline-none w-full mt-4 bg-white text-gray-700 focus:border-[#5B21B6] transition-colors appearance-none"
                required
              >
                <option value="" disabled>Pilih jam tersedia...</option>
                <option v-for="time in computedAvailableSlots" :key="time" :value="time">{{ time }} WIB</option>
              </select>
              <p v-if="store.selectedDate && computedAvailableSlots.length === 0" class="text-xs text-gray-500 mt-2">Tidak ada jadwal tersedia untuk tanggal ini.</p>
            </div>
          </div>

          <!-- RIGHT TEXTAREA COLUMN -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              <h3 class="text-base font-bold text-gray-900">Lembar Latar Belakang</h3>
            </div>
            <p class="text-xs text-gray-500 font-medium mb-3">Ceritakan apa yang sedang mengganjal di pikiranmu saat ini...</p>
            
            <textarea 
              v-model="store.rolePaper"
              class="rounded-2xl border border-gray-200/80 p-5 w-full min-h-[300px] text-sm focus:outline-none focus:border-[#5B21B6] bg-transparent mt-4 resize-none transition-colors placeholder:text-gray-300 text-gray-800 leading-relaxed"
              placeholder="Saya merasa akhir-akhir ini..."
              required
            ></textarea>
          </div>
        </div>

        <!-- BOTTOM ACTIONS ALIGNMENT -->
        <div class="flex flex-row justify-between items-center mt-8 pt-6 border-t border-gray-50">
          <button type="button" @click="store.setStage('LIST')" class="text-gray-500 text-sm font-semibold hover:text-gray-800 transition-colors">
            Kembali
          </button>
          
          <button
            type="submit"
            class="bg-[#5B21B6] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#4C1D95] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!store.selectedDate || !store.selectedSlot || !store.rolePaper.trim()"
          >
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useConsultationStore } from '@/stores/consultationStore';

const store = useConsultationStore();

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for(let i=0; i<7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      value: d.toISOString().split('T')[0],
      dayName: i === 0 ? 'Hari ini' : i === 1 ? 'Besok' : d.toLocaleDateString('id-ID', { weekday: 'short' }),
      dateNum: d.getDate(),
      monthStr: d.toLocaleDateString('id-ID', { month: 'short' })
    });
  }
  return dates;
};

const availableDates = generateDates();

// Simulasi logika dinamis: mengacak slot berdasarkan seed dari tanggal & id psikolog
const computedAvailableSlots = computed(() => {
  if (!store.selectedDate || !store.selectedPsychologist) return [];
  
  const allSlots = ['09:00', '10:00', '11:30', '13:00', '14:30', '16:00', '19:00', '20:00'];
  const seed = parseInt(store.selectedDate.replace(/-/g, '')) + store.selectedPsychologist.id;
  const numSlots = (seed % 4) + 3; // 3 to 6 slots
  
  const shuffled = [...allSlots].sort((a, b) => {
    const aVal = parseInt(a.replace(':', ''));
    const bVal = parseInt(b.replace(':', ''));
    return (aVal * seed % 13) - (bVal * seed % 13);
  });
  
  return shuffled.slice(0, numSlots).sort();
});

const confirmBooking = () => {
  if (store.selectedDate && store.selectedSlot && store.rolePaper.trim()) {
    store.setStage('PAYMENT');
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
