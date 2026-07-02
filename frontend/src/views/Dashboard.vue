<template>
  <div class="min-h-screen bg-surface flex flex-col md:flex-row font-sans text-gray-800">
    <!-- Left Sidebar -->
    <SidebarNav />

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32">
      <header class="mb-10 flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">
              <span class="font-normal text-gray-400">Halo,</span> {{ profile.name }}
            </h2>
          </div>
         <p class="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
          Ini adalah ruang amanmu untuk memahami diri.
        </p>
        </div>
        <!-- Optional mobile menu trigger here -->
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Center Column (Main Dash Content) -->
        <div class="lg:col-span-2 space-y-6">
          <DailyAffirmation />
          <RecentJournals />
          <QuickStats />
        </div>

        <!-- Right Column (Next Session) -->
        <div class="space-y-6">
          <NextSession />
          
          <!-- Optional placeholder for additional right column content like progress or goals -->
          <div class="bg-white rounded-2xl p-6 shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] animate-fade-in-up" style="animation-delay: 0.4s;">
            <div class="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <h4 class="text-xs font-bold text-gray-800 tracking-wider uppercase">Status Pemulihan</h4>
            </div>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="font-semibold text-gray-700">Level Fokus</span>
                  <span class="text-primary font-bold">75%</span>
                </div>
                <div class="w-full bg-surface-container-high rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" style="width: 75%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1 mt-4">
                  <span class="font-semibold text-gray-700">Stabilitas Mood</span>
                  <span class="text-emerald-500 font-bold">Baik</span>
                </div>
                <div class="w-full bg-surface-container-high rounded-full h-2">
                  <div class="bg-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { userProfile } from '@/data/dummyData';
import SidebarNav from '@/components/dashboard/SidebarNav.vue';
import DailyAffirmation from '@/components/dashboard/DailyAffirmation.vue';
import RecentJournals from '@/components/dashboard/RecentJournals.vue';
import NextSession from '@/components/dashboard/NextSession.vue';
import QuickStats from '@/components/dashboard/QuickStats.vue';
import { ref } from 'vue';

const profile = ref(userProfile);
</script>
