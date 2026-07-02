import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useConsultationStore = defineStore('consultation', () => {
  // State
  const currentStage = ref('LIST'); // LIST, FORM, PAYMENT, WAITING_ROOM, CHAT
  const selectedPsychologist = ref(null);
  const selectedDate = ref('');
  const selectedSlot = ref('');
  const rolePaper = ref('');
  
  // Payment State
  const paymentStatus = ref('pending'); // pending, paid
  const voucherCode = ref('');

  // Load state from sessionStorage if exists
  const loadState = () => {
    const savedState = sessionStorage.getItem('consultationState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        currentStage.value = parsed.currentStage || 'LIST';
        selectedPsychologist.value = parsed.selectedPsychologist || null;
        selectedDate.value = parsed.selectedDate || '';
        selectedSlot.value = parsed.selectedSlot || '';
        rolePaper.value = parsed.rolePaper || '';
        paymentStatus.value = parsed.paymentStatus || 'pending';
        voucherCode.value = parsed.voucherCode || '';
      } catch (e) {
        console.error("Failed to parse consultation state");
      }
    }
  };

  // Save state to sessionStorage
  const saveState = () => {
    sessionStorage.setItem('consultationState', JSON.stringify({
      currentStage: currentStage.value,
      selectedPsychologist: selectedPsychologist.value,
      selectedDate: selectedDate.value,
      selectedSlot: selectedSlot.value,
      rolePaper: rolePaper.value,
      paymentStatus: paymentStatus.value,
      voucherCode: voucherCode.value
    }));
  };

  // Watchers to auto-save state
  watch(
    [currentStage, selectedPsychologist, selectedDate, selectedSlot, rolePaper, paymentStatus, voucherCode],
    () => {
      saveState();
    },
    { deep: true }
  );

  // Initialize
  loadState();

  // Actions
  const setStage = (stage) => {
    currentStage.value = stage;
  };

  const selectPsychologist = (psy) => {
    selectedPsychologist.value = psy;
    selectedDate.value = '';
    selectedSlot.value = '';
    rolePaper.value = '';
    paymentStatus.value = 'pending';
    voucherCode.value = '';
    setStage('FORM');
  };

  const endSession = () => {
    selectedPsychologist.value = null;
    selectedDate.value = '';
    selectedSlot.value = '';
    rolePaper.value = '';
    paymentStatus.value = 'pending';
    voucherCode.value = '';
    setStage('LIST');
  };

  // Mock Payment API
  const processPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        paymentStatus.value = 'paid';
        resolve({ status: 200, message: 'Pembayaran berhasil' });
      }, 1500);
    });
  };

  // Mock Voucher Validation API
  const validateVoucher = (code) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code === 'UAPGENESIS2026') {
          paymentStatus.value = 'paid';
          voucherCode.value = code;
          resolve({ status: 200, message: 'Token berhasil diverifikasi! Sesi kamu sepenuhnya ditanggung oleh Universitas Aisyah Pringsewu.' });
        } else {
          reject({ status: 400, message: 'Kode voucher tidak valid atau kuota instansi telah habis.' });
        }
      }, 1000);
    });
  };

  return {
    currentStage,
    selectedPsychologist,
    selectedDate,
    selectedSlot,
    rolePaper,
    paymentStatus,
    voucherCode,
    setStage,
    selectPsychologist,
    endSession,
    processPayment,
    validateVoucher
  };
});
