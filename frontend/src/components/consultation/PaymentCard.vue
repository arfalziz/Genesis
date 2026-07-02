<template>
  <div key="payment" class="font-['Plus_Jakarta_Sans',_sans-serif] w-full animate-fade-in-up">
    <div class="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(91,33,182,0.03)] border border-gray-100/80 w-full max-w-4xl mx-auto">
      
      <!-- Top Progress Tracker Step Indicator -->
      <div class="flex items-center justify-center gap-2 md:gap-3 mb-10">
        <div class="flex items-center gap-1 md:gap-2 text-gray-400 text-xs font-semibold">
          <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span class="hidden sm:inline">Pilih Psikolog</span>
        </div>
        <div class="w-8 md:w-12 h-[1px] bg-emerald-200"></div>
        <div class="flex items-center gap-1 md:gap-2 text-gray-400 text-xs font-semibold">
          <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span class="hidden sm:inline">Atur Waktu</span>
        </div>
        <div class="w-8 md:w-12 h-[1px] bg-gray-200"></div>
        <div class="flex items-center gap-1 md:gap-2 text-gray-900 text-xs font-bold">
          <span class="bg-[#5B21B6] text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px]">3</span>
          <span class="hidden sm:inline">Pembayaran</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <!-- Left Column: Summary -->
        <div class="bg-[#EEF2FC]/40 rounded-2xl p-6 border border-gray-100">
          <h3 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Ringkasan Sesi</h3>
          
          <div class="flex items-center gap-4 mb-6">
            <img :src="store.selectedPsychologist?.avatar" :alt="store.selectedPsychologist?.name" class="w-16 h-16 rounded-full object-cover ring-2 ring-white border border-gray-200" />
            <div>
              <p class="font-bold text-gray-900">{{ store.selectedPsychologist?.name }}</p>
              <p class="text-sm text-primary">{{ store.selectedPsychologist?.spec }}</p>
            </div>
          </div>
          
          <div class="space-y-3 text-sm mb-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-500">Tanggal</span>
              <span class="font-semibold text-gray-900">{{ formatDate(store.selectedDate) }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">Waktu</span>
              <span class="font-semibold text-gray-900">{{ store.selectedSlot }} WIB</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">Durasi</span>
              <span class="font-semibold text-gray-900">45 Menit</span>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between items-center">
              <span class="text-gray-900 font-bold">Total Tagihan</span>
              <div class="text-right">
                <span v-if="store.paymentStatus === 'paid' && isMitra" class="text-sm text-gray-400 line-through block">Rp 150.000</span>
                <span class="text-2xl font-extrabold text-primary" :class="{'text-emerald-600': store.paymentStatus === 'paid'}">
                  {{ store.paymentStatus === 'paid' && isMitra ? 'Rp 0' : 'Rp 150.000' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Payment Methods -->
        <div class="flex flex-col">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Metode Pembayaran</h3>

          <!-- Method Tabs -->
          <div class="flex p-1 bg-gray-100 rounded-xl mb-6">
            <button 
              @click="setMethod('personal')" 
              :class="['flex-1 py-2.5 text-sm font-bold rounded-lg transition-all', paymentMethod === 'personal' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700']"
            >
              Bayar Mandiri
            </button>
            <button 
              @click="setMethod('mitra')" 
              :class="['flex-1 py-2.5 text-sm font-bold rounded-lg transition-all', paymentMethod === 'mitra' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700']"
            >
              Mitra Instansi
            </button>
          </div>

          <div v-if="store.paymentStatus === 'paid'" class="flex flex-col items-center justify-center flex-1 bg-emerald-50 rounded-2xl border border-emerald-100 p-6 text-center animate-fade-in-up">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h4 class="text-lg font-bold text-emerald-800 mb-2">Pembayaran Sukses!</h4>
            <p class="text-sm text-emerald-600 mb-6">
              {{ isMitra ? 'Token berhasil diverifikasi! Sesi kamu sepenuhnya ditanggung oleh Instansi.' : 'Terima kasih, pembayaran Anda telah kami terima.' }}
            </p>
          </div>

          <div v-else class="flex-1">
            <!-- Jalur A: Bayar Mandiri -->
            <div v-if="paymentMethod === 'personal'" class="space-y-4 animate-fade-in-up">
              <div class="border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:border-primary cursor-pointer transition-colors">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xs">BCA</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Transfer BCA</p>
                  <p class="text-xs text-gray-500">Virtual Account</p>
                </div>
              </div>
              <div class="border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:border-primary cursor-pointer transition-colors border-primary bg-[#EEF2FC]/20">
                <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xs">QRIS</div>
                <div class="flex-1">
                  <p class="font-bold text-gray-900 text-sm">QRIS</p>
                  <p class="text-xs text-gray-500">Gopay, OVO, Dana, LinkAja</p>
                </div>
                <div class="w-4 h-4 rounded-full border-4 border-primary"></div>
              </div>
            </div>

            <!-- Jalur B: Mitra Instansi -->
            <div v-if="paymentMethod === 'mitra'" class="space-y-4 animate-fade-in-up">
              <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <label class="block text-sm font-bold text-gray-900 mb-2">Kode Akses / Token Instansi</label>
                <p class="text-xs text-gray-500 mb-4">Masukkan kode unik yang diberikan oleh kampus atau perusahaan Anda.</p>
                <input 
                  type="text" 
                  v-model="inputToken"
                  class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-center font-mono font-bold tracking-widest uppercase focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-2 transition-colors"
                  placeholder="MASUKKAN KODE"
                />
                <p v-if="errorMessage" class="text-xs text-red-500 font-medium animate-fade-in-up">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM ACTIONS -->
      <div class="flex flex-row justify-between items-center mt-8 pt-6 border-t border-gray-100">
        <button v-if="store.paymentStatus !== 'paid'" type="button" @click="store.setStage('FORM')" class="text-gray-500 text-sm font-semibold hover:text-gray-800 transition-colors">
          Kembali
        </button>
        <div v-else></div> <!-- Spacer -->
        
        <!-- Button based on state -->
        <button
          v-if="store.paymentStatus === 'paid'"
          @click="store.setStage('WAITING_ROOM')"
          class="bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center animate-fade-in-up"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
          Masuk Ruang Sesi
        </button>

        <button
          v-else-if="paymentMethod === 'mitra'"
          @click="handleVerifyToken"
          :disabled="isLoading || !inputToken.trim()"
          class="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          {{ isLoading ? 'Memverifikasi...' : 'Verifikasi Token' }}
        </button>

        <button
          v-else
          @click="handlePay"
          :disabled="isLoading"
          class="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          {{ isLoading ? 'Memproses...' : 'Lanjut ke Pembayaran' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useConsultationStore } from '@/stores/consultationStore';

const store = useConsultationStore();

const paymentMethod = ref('personal');
const inputToken = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const isMitra = computed(() => paymentMethod.value === 'mitra');

const setMethod = (method) => {
  paymentMethod.value = method;
  errorMessage.value = '';
};

const handleVerifyToken = async () => {
  if (!inputToken.value.trim()) return;
  
  isLoading.value = true;
  errorMessage.value = '';
  
  try {
    await store.validateVoucher(inputToken.value.toUpperCase());
    // Success state will be handled by UI reactivity (store.paymentStatus === 'paid')
  } catch (err) {
    errorMessage.value = err.message || 'Gagal memverifikasi token.';
  } finally {
    isLoading.value = false;
  }
};

const handlePay = async () => {
  isLoading.value = true;
  try {
    await store.processPayment();
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
};
</script>
