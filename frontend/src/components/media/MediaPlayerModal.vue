<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="close">
    <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" @click="close"></div>
    
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden transform transition-all animate-fade-in-up" style="animation-duration: 0.3s;">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-100">
        <div>
          <h3 class="text-lg font-bold text-gray-900 line-clamp-1 pr-4">{{ media?.title }}</h3>
          <p class="text-xs text-gray-500 font-medium mt-0.5">{{ media?.category }}</p>
        </div>
        <button @click="close" class="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Player Area -->
      <div class="bg-black aspect-video relative flex items-center justify-center">
        <!-- If it's a YouTube embed video -->
        <iframe 
          v-if="media?.type === 'video' && isYouTube" 
          :src="embedUrl" 
          class="w-full h-full" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        
        <!-- If it's an audio or non-embed video, show placeholder player -->
        <div v-else class="text-center w-full h-full relative group overflow-hidden">
          <img :src="media?.thumbnailUrl" class="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-105" />
          <div class="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-xl mb-4">
               <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-white/10">
              Simulasi {{ media?.type === 'audio' ? 'Audio Player' : 'Video Player' }}
            </div>
          </div>
          <!-- Audio progress bar simulation -->
          <div v-if="media?.type === 'audio'" class="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-800">
             <div class="h-full bg-primary w-1/3 relative">
                <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
             </div>
          </div>
        </div>
      </div>
      
      <!-- Footer Info -->
      <div class="p-4 sm:p-6 bg-surface-container-lowest">
        <p class="text-sm text-gray-600 leading-relaxed">
          Modul ini dirancang untuk memberikan edukasi dan panduan praktis terkait {{ media?.category?.toLowerCase() || 'materi' }}.
          Silakan ikuti sesi ini dengan seksama untuk pemahaman yang lebih baik.
        </p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  media: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);

const isYouTube = computed(() => {
  return props.media?.url?.includes('youtube.com') || props.media?.url?.includes('youtu.be');
});

const embedUrl = computed(() => {
  if (!props.media?.url) return '';
  let url = props.media.url;
  if (url.includes('youtube.com/watch?v=')) {
    url = url.replace('watch?v=', 'embed/');
  }
  return `${url}?autoplay=1`;
});

const close = () => {
  emit('close');
};
</script>
