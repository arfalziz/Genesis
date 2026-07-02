<template>
  <div class="min-h-screen bg-surface flex flex-col md:flex-row font-sans text-gray-800 transition-all duration-300">
    <!-- Left Sidebar -->
    <transition name="slide-fade">
      <SidebarNav v-show="!isZenMode" />
    </transition>

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32 transition-all duration-500">
      <header class="mb-10 flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">
              Mind Journal
            </h2>
          </div>
          <div class="flex items-center gap-2 mt-1 text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
            <span>124 Days of Self-Care</span>
          </div>
        </div>
        
        <!-- Zen Mode Toggle -->
        <div class="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] border border-gray-100">
          <span class="text-sm font-bold text-gray-700">Zen Mode</span>
          <button 
            @click="toggleZenMode"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
            :class="isZenMode ? 'bg-primary' : 'bg-gray-300'"
          >
            <span 
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm"
              :class="isZenMode ? 'translate-x-6' : 'translate-x-1'"
            ></span>
          </button>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Center Column (Writing Area) -->
        <div 
          class="transition-all duration-500 flex flex-col space-y-6"
          :class="isZenMode ? 'lg:col-span-3' : 'lg:col-span-2'"
        >
          <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
            <DailySpark />
          </div>
          <div class="flex-grow flex flex-col animate-fade-in-up" style="animation-delay: 0.3s;">
            <JournalEditor class="flex-grow min-h-[400px]" />
          </div>
        </div>

        <!-- Right Column (Recent Reflections) -->
        <transition name="slide-fade-right">
          <div v-show="!isZenMode" class="space-y-6">
            <RecentReflections />
          </div>
        </transition>
        
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarNav from '@/components/dashboard/SidebarNav.vue';
import DailySpark from '@/components/diary/DailySpark.vue';
import JournalEditor from '@/components/diary/JournalEditor.vue';
import RecentReflections from '@/components/diary/RecentReflections.vue';

const isZenMode = ref(false);

const toggleZenMode = () => {
  isZenMode.value = !isZenMode.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  width: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
  width: 0;
}
</style>
