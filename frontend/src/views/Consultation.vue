<template>
  <div class="min-h-screen bg-[#F8F9FF] flex flex-col md:flex-row font-sans text-gray-800">
    <!-- Left Sidebar -->
    <SidebarNav />

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32 transition-all duration-500">
      
      <!-- HEADER -->
      <header class="mb-10 flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">
              Layanan Konseling
            </h2>
          </div>
        </div>
        
        <!-- Mobile Menu Trigger -->
        <button class="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </header>

      <!-- MULTI-STAGE CONTENT -->
      <transition name="fade" mode="out-in">
        
        <PsychologistList v-if="store.currentStage === 'LIST'" />
        
        <BookingForm v-else-if="store.currentStage === 'FORM'" />

        <PaymentCard v-else-if="store.currentStage === 'PAYMENT'" />
        
        <WaitingRoom v-else-if="store.currentStage === 'WAITING_ROOM'" />

        <!-- STAGE 5: CHAT -->
        <div v-else-if="store.currentStage === 'CHAT'" key="chat" class="w-full h-[calc(100vh-120px)] min-h-[500px]">
          <CounselingChat 
            :psychologist="store.selectedPsychologist" 
            :role-paper="store.rolePaper" 
            @end-session="handleEndSession"
          />
        </div>

      </transition>

    </main>
  </div>
</template>

<script setup>
import { useConsultationStore } from '@/stores/consultationStore';
import SidebarNav from '@/components/dashboard/SidebarNav.vue';
import PsychologistList from '@/components/consultation/PsychologistList.vue';
import BookingForm from '@/components/consultation/BookingForm.vue';
import PaymentCard from '@/components/consultation/PaymentCard.vue';
import WaitingRoom from '@/components/consultation/WaitingRoom.vue';
import CounselingChat from '@/components/consultation/CounselingChat.vue';

const store = useConsultationStore();

const handleEndSession = () => {
  if(confirm('Apakah Anda yakin ingin mengakhiri sesi ini? Data percakapan simulasi ini tidak akan disimpan secara permanen.')) {
    store.endSession();
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
