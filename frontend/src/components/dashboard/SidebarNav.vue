<template>
  <aside 
    class="h-auto md:h-screen bg-[#EEF2FC] border-r border-outline-variant/40 flex flex-col justify-between shrink-0 fixed md:sticky top-0 bottom-0 z-50 transition-all duration-300 cursor-pointer"
    :class="isCollapsed ? 'w-full md:w-20' : 'w-full md:w-64'"
    @click="isCollapsed = !isCollapsed"
  >
    <div>
      <div class="p-6 border-b border-gray-100 flex items-center relative" :class="isCollapsed ? 'justify-center px-0' : 'justify-between'">
        <h1 v-if="!isCollapsed" class="text-xl font-extrabold text-primary-container tracking-tight transition-all">GENESIS+</h1>
        <h1 v-else class="text-xl font-extrabold text-primary-container tracking-tight transition-all" title="GENESIS+">G+</h1>
      </div>
      
      <!-- Nav items -->
      <nav class="p-4 space-y-1 cursor-default" :class="isCollapsed ? 'px-2' : ''" @click.stop>
        <router-link to="/dashboard" custom v-slot="{ navigate, isActive }">
          <a @click="navigate" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Dashboard' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span v-if="!isCollapsed" class="whitespace-nowrap">Dashboard</span>
          </a>
        </router-link>
        <router-link to="/diary" custom v-slot="{ navigate, isActive }">
          <a @click="navigate" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Mind Journal' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            <span v-if="!isCollapsed" class="whitespace-nowrap">Mind Journal</span>
          </a>
        </router-link>
        <router-link to="/consultation" custom v-slot="{ navigate, isActive }">
          <a @click="navigate" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Konseling' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span v-if="!isCollapsed" class="whitespace-nowrap">Konseling</span>
          </a>
        </router-link>
        <router-link to="/media" custom v-slot="{ navigate, isActive }">
          <a @click="navigate" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'justify-center border-r-0' : 'border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Edukasi' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
            <span v-if="!isCollapsed" class="whitespace-nowrap">Edukasi</span>
          </a>
        </router-link>
      </nav>
    </div>

    <!-- Profile & Actions Section -->
    <div class="p-4 border-t border-gray-100 bg-surface-container-low transition-all cursor-default" :class="isCollapsed ? 'px-2' : ''" @click.stop>
      <div class="flex items-center mb-2" :class="isCollapsed ? 'justify-center' : 'gap-3 px-4 py-2'">
        <img :src="profile.avatar" alt="Avatar" class="w-10 h-10 rounded-full bg-accent shrink-0" />
        <div v-if="!isCollapsed" class="overflow-hidden">
          <p class="text-sm font-bold text-gray-800 truncate">{{ profile.name }}</p>
          <p class="text-xs text-gray-500 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Online
          </p>
        </div>
      </div>
      
      <div class="space-y-1">
        <button class="w-full flex items-center px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium transition-colors" :class="isCollapsed ? 'justify-center' : 'gap-3'" :title="isCollapsed ? 'Pengaturan' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> 
          <span v-if="!isCollapsed" class="whitespace-nowrap">Pengaturan</span>
        </button>
        <button class="w-full flex items-center px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium transition-colors" :class="isCollapsed ? 'justify-center' : 'gap-3'" :title="isCollapsed ? 'Bantuan' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> 
          <span v-if="!isCollapsed" class="whitespace-nowrap">Bantuan</span>
        </button>
        <button class="w-full flex items-center px-4 py-2 text-sm text-error hover:bg-error/10 rounded-lg font-medium transition-colors mt-1" :class="isCollapsed ? 'justify-center' : 'gap-3'" :title="isCollapsed ? 'Keluar Aplikasi' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> 
          <span v-if="!isCollapsed" class="whitespace-nowrap">Keluar Aplikasi</span>
        </button>
      </div>
      
      <div v-if="!isCollapsed" class="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-center gap-2 text-xs text-emerald-600/80 font-medium">
        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span class="whitespace-nowrap">E2E Encryption Active</span>
      </div>
      <div v-else class="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-center text-xs text-emerald-600/80 font-medium" title="E2E Encryption Active">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { userProfile } from '@/data/dummyData';
import { ref } from 'vue';

const profile = ref(userProfile);
const isCollapsed = ref(false);
</script>
