<template>
  <aside 
    class="h-auto md:h-screen bg-[#EEF2FC] border-r border-outline-variant/40 flex flex-col justify-between shrink-0 fixed md:sticky top-0 bottom-0 z-50 transition-all duration-300 cursor-pointer"
    :class="isCollapsed ? 'w-full md:w-20' : 'w-full md:w-64'"
    @click="isCollapsed = !isCollapsed"
  >
    <div>
      <div class="p-6 border-b border-gray-100 flex items-center relative" :class="isCollapsed ? 'justify-center px-0' : 'justify-between'">
        <div class="flex items-center gap-2">
           <div v-if="isCollapsed" class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
           </div>
           <div v-else>
             <h1 class="text-xl font-extrabold text-primary-container tracking-tight transition-all">Portal Mitra</h1>
             <p class="text-[10px] font-bold text-primary tracking-widest uppercase">GENESIS+</p>
           </div>
        </div>
      </div>
      
      <!-- Nav items -->
      <nav class="p-4 space-y-1 cursor-default" :class="isCollapsed ? 'px-2' : ''" @click.stop>
        
        <a @click="$emit('change-tab', 'overview')" :class="[activeTab === 'overview' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer" :title="isCollapsed ? 'Dashboard Overview' : ''">
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span v-if="!isCollapsed" class="whitespace-nowrap">Dashboard Overview</span>
        </a>
        
        <a @click="$emit('change-tab', 'beli-kuota')" :class="[activeTab === 'beli-kuota' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer" :title="isCollapsed ? 'Beli Kuota (Top Up)' : ''">
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span v-if="!isCollapsed" class="whitespace-nowrap">Beli Kuota (Top Up)</span>
        </a>

        <a @click="$emit('change-tab', 'token')" :class="[activeTab === 'token' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer" :title="isCollapsed ? 'Manajemen Token' : ''">
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
          <span v-if="!isCollapsed" class="whitespace-nowrap">Manajemen Token</span>
        </a>

        <a @click="$emit('change-tab', 'riwayat')" :class="[activeTab === 'riwayat' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer" :title="isCollapsed ? 'Riwayat Pengguna' : ''">
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span v-if="!isCollapsed" class="whitespace-nowrap">Riwayat Pengguna</span>
        </a>

        <a @click="$emit('change-tab', 'invoice')" :class="[activeTab === 'invoice' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all cursor-pointer" :title="isCollapsed ? 'Invoice & Laporan' : ''">
          <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span v-if="!isCollapsed" class="whitespace-nowrap">Invoice & Laporan</span>
        </a>

      </nav>
    </div>

    <!-- Profile & Actions Section -->
    <div class="p-4 border-t border-gray-100 bg-surface-container-low transition-all cursor-default" :class="isCollapsed ? 'px-2' : ''" @click.stop>
      <div class="flex items-center mb-2" :class="isCollapsed ? 'justify-center' : 'gap-3 px-4 py-2'">
        <div class="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0 text-xs">
          UA
        </div>
        <div v-if="!isCollapsed" class="overflow-hidden">
          <p class="text-sm font-bold text-gray-800 truncate">Univ. Aisyah P.</p>
          <p class="text-xs text-gray-500">Administrator</p>
        </div>
      </div>
      
      <div class="space-y-1">
        <router-link to="/" class="w-full flex items-center px-4 py-2 text-sm text-error hover:bg-error/10 rounded-lg font-medium transition-colors mt-1" :class="isCollapsed ? 'justify-center' : 'gap-3'" :title="isCollapsed ? 'Keluar' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> 
          <span v-if="!isCollapsed" class="whitespace-nowrap">Keluar</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  activeTab: {
    type: String,
    default: 'overview'
  }
});

const emit = defineEmits(['change-tab']);

const isCollapsed = ref(false);
</script>
