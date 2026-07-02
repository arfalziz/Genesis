<template>
  <div 
    class="bg-white rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(91,33,182,0.05)] cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
    @click="$emit('play', media)"
  >
    <!-- Thumbnail Area -->
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="media.thumbnailUrl" 
        :alt="media.title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Overlay Play Button -->
      <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
          <svg class="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <!-- Duration Badge -->
      <div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
        {{ media.duration }}
      </div>
      <!-- Type Icon Badge -->
      <div class="absolute top-2 left-2 bg-white/90 text-primary text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm shadow-sm">
        <svg v-if="media.type === 'video'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2" ry="2"/></svg>
        <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        {{ media.type === 'video' ? 'Video' : 'Audio' }}
      </div>
      
      <!-- Admin Actions -->
      <div v-if="userProfile.role === 'admin'" class="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button @click.stop="$emit('edit', media)" class="p-1.5 bg-white/90 text-primary hover:bg-white rounded-md backdrop-blur-sm shadow-sm transition-colors" title="Edit Modul">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
        </button>
        <button @click.stop="$emit('delete', media.id)" class="p-1.5 bg-white/90 text-red-500 hover:bg-white hover:text-red-600 rounded-md backdrop-blur-sm shadow-sm transition-colors" title="Hapus Modul">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    </div>
    
    <!-- Content Area -->
    <div class="p-4">
      <div class="text-xs text-secondary font-semibold mb-1 uppercase tracking-wider">{{ media.category }}</div>
      <h3 class="text-gray-900 font-bold text-sm md:text-base leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">
        {{ media.title }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { userProfile } from '@/data/dummyData';

defineProps({
  media: {
    type: Object,
    required: true
  }
});
defineEmits(['play', 'edit', 'delete']);
</script>
