<template>
  <!-- Mobile Header -->
  <div class="md:hidden flex items-center justify-between p-4 bg-[#EEF2FC] border-b border-gray-200 sticky top-0 z-40 w-full shrink-0">
    <div class="flex items-center gap-2">
      <img src="/images/logo.png" alt="Genesis+" class="w-8 h-8 object-contain shrink-0" />
      <h1 class="text-xl font-extrabold text-primary-container tracking-tight">GENESIS+</h1>
    </div>
    <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 p-2 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>

  <!-- Mobile Overlay -->
  <div v-if="mobileMenuOpen" @click="mobileMenuOpen = false" class="md:hidden fixed inset-0 bg-black/50 z-40"></div>

  <!-- Sidebar -->
  <aside 
    class="bg-[#EEF2FC] border-r border-outline-variant/40 flex flex-col justify-between shrink-0 fixed md:sticky top-0 bottom-0 z-50 transition-all duration-300 md:cursor-pointer"
    :class="[
      isCollapsed ? 'md:w-20' : 'md:w-64',
      mobileMenuOpen ? 'translate-x-0 w-64 shadow-2xl' : '-translate-x-full md:translate-x-0'
    ]"
    @click="handleAsideClick"
  >
    <div>
      <div class="p-6 border-b border-gray-100 flex items-center relative" :class="isCollapsed ? 'md:justify-center md:px-0' : 'gap-2'">
        <img v-if="!isCollapsed" src="/images/logo.png" alt="Genesis+" class="w-8 h-8 object-contain shrink-0 hidden md:block" />
        <h1 v-if="!isCollapsed" class="text-xl font-extrabold text-primary-container tracking-tight transition-all hidden md:block">GENESIS+</h1>
        <img v-else src="/images/logo.png" alt="Genesis+" class="w-8 h-8 object-contain shrink-0 hidden md:block" title="GENESIS+" />
        
        <!-- Mobile Logo in Sidebar -->
        <img src="/images/logo.png" alt="Genesis+" class="w-8 h-8 object-contain shrink-0 md:hidden" />
        <h1 class="text-xl font-extrabold text-primary-container tracking-tight md:hidden">GENESIS+</h1>
      </div>
      
      <!-- Nav items -->
      <nav class="p-4 space-y-1 cursor-default" :class="isCollapsed ? 'md:px-2' : ''" @click.stop>
        <router-link to="/dashboard" custom v-slot="{ navigate, isActive }">
          <a @click="() => { navigate(); mobileMenuOpen = false; }" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'md:justify-center md:border-r-0' : 'md:border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Dashboard' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Dashboard</span>
          </a>
        </router-link>
        <router-link to="/diary" custom v-slot="{ navigate, isActive }">
          <a @click="() => { navigate(); mobileMenuOpen = false; }" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'md:justify-center md:border-r-0' : 'md:border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Mind Journal' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Mind Journal</span>
          </a>
        </router-link>
        <router-link to="/consultation" custom v-slot="{ navigate, isActive }">
          <a @click="() => { navigate(); mobileMenuOpen = false; }" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'md:justify-center md:border-r-0' : 'md:border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Konseling' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Konseling</span>
          </a>
        </router-link>
        <router-link to="/media" custom v-slot="{ navigate, isActive }">
          <a @click="() => { navigate(); mobileMenuOpen = false; }" :class="[isActive ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high', isCollapsed ? 'md:justify-center md:border-r-0' : 'md:border-r-4 border-transparent']" class="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all" :title="isCollapsed ? 'Edukasi' : ''">
            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
            <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Edukasi</span>
          </a>
        </router-link>
      </nav>
    </div>

    <!-- Profile & Actions Section -->
    <div class="p-4 border-t border-gray-100 bg-surface-container-low transition-all cursor-default" :class="isCollapsed ? 'md:px-2' : ''" @click.stop>
      <div class="flex items-center mb-2" :class="isCollapsed ? 'md:justify-center' : 'gap-3 px-4 py-2'">
        <img :src="profile.avatar" alt="Avatar" class="w-10 h-10 rounded-full bg-accent shrink-0" />
        <div :class="isCollapsed ? 'md:hidden' : ''" class="overflow-hidden">
          <p class="text-sm font-bold text-gray-800 truncate">{{ profile.name }}</p>
          <p class="text-xs text-gray-500 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Online
          </p>
        </div>
      </div>
      
      <div class="space-y-1">
        <button class="w-full flex items-center px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium transition-colors" :class="isCollapsed ? 'md:justify-center' : 'gap-3'" :title="isCollapsed ? 'Pengaturan' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> 
          <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Pengaturan</span>
        </button>
        <button class="w-full flex items-center px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg font-medium transition-colors" :class="isCollapsed ? 'md:justify-center' : 'gap-3'" :title="isCollapsed ? 'Bantuan' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> 
          <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Bantuan</span>
        </button>
        <button @click="mobileMenuOpen = false" class="w-full flex items-center px-4 py-2 text-sm text-error hover:bg-error/10 rounded-lg font-medium transition-colors mt-1" :class="isCollapsed ? 'md:justify-center' : 'gap-3'" :title="isCollapsed ? 'Keluar Aplikasi' : ''">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> 
          <span :class="isCollapsed ? 'md:hidden' : ''" class="whitespace-nowrap">Keluar Aplikasi</span>
        </button>
      </div>
      
      <div :class="isCollapsed ? 'md:hidden' : ''" class="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-center gap-2 text-xs text-emerald-600/80 font-medium">
        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span class="whitespace-nowrap">E2E Encryption Active</span>
      </div>
      <div v-if="isCollapsed" class="hidden md:flex mt-4 pt-3 border-t border-gray-200/50 items-center justify-center text-xs text-emerald-600/80 font-medium" title="E2E Encryption Active">
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
const mobileMenuOpen = ref(false);

const handleAsideClick = () => {
  if (window.innerWidth >= 768) {
    isCollapsed.value = !isCollapsed.value;
  }
};
</script>
