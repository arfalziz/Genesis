<template>
  <div key="list" class="font-['Plus_Jakarta_Sans',_sans-serif]">
    <div class="mb-6">
      <h3 class="text-xl font-medium leading-[1.4] text-gray-900">Pilih Psikolog Pendampingmu</h3>
      <p class="text-base font-normal leading-[1.6] text-gray-500 mt-1">Pilih profesional yang paling sesuai dengan kebutuhan pemulihanmu hari ini.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="psy in psychologistsList" 
        :key="psy.id"
        class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-100 flex flex-col hover:border-primary/30 transition-colors animate-fade-in-up"
      >
        <div class="flex gap-4 items-start mb-4">
          <img :src="psy.avatar" :alt="psy.name" class="w-16 h-16 rounded-xl bg-surface-container-low object-cover" />
          <div>
            <h4 class="text-xl font-medium leading-[1.4] text-gray-900">{{ psy.name }}</h4>
            <p class="text-sm font-medium leading-[1.4] tracking-[0.01em] text-primary mb-1">{{ psy.title }}</p>
            <div class="flex items-center gap-1 text-sm font-medium leading-[1.4] tracking-[0.01em] text-amber-500">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span>{{ psy.rating }} ({{ psy.reviews }} ulasan)</span>
            </div>
          </div>
        </div>
        
        <div class="mb-5 flex-grow">
          <div class="inline-block px-3 py-1 bg-surface-container-low text-gray-600 text-sm font-medium leading-[1.4] tracking-[0.01em] rounded-lg">
            Fokus: {{ psy.spec }}
          </div>
        </div>
        
        <button 
          @click="store.selectPsychologist(psy)"
          class="w-full py-2.5 bg-primary-container text-white rounded-lg text-xs font-semibold leading-none hover:bg-primary active:scale-95 transition-all shadow-sm"
        >
          Mulai Konsultasi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { psychologists } from '@/data/dummyData';
import { useConsultationStore } from '@/stores/consultationStore';

const store = useConsultationStore();
const psychologistsList = ref(psychologists);
</script>
