<template>
  <div class="min-h-screen bg-surface flex flex-col md:flex-row font-sans text-gray-800">
    <!-- Left Sidebar -->
    <SidebarNav />

    <!-- Main Content Area -->
    <main class="flex-grow p-6 md:p-8 md:pr-4 overflow-y-auto w-full max-w-7xl mx-auto pb-32">
      <header class="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 font-['Plus_Jakarta_Sans',_sans-serif]">
            Modul <span class="text-primary">Pembelajaran</span>
          </h2>
          <p class="text-xs md:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
            Akses materi edukasi seksual dan pencegahan perilaku LGBT melalui video interaktif, podcast, dan panduan audio untuk mendukung proses pemahaman dan pemulihanmu.
          </p>
        </div>
        
        <!-- Admin Add Button -->
        <button 
          v-if="userProfile.role === 'admin'"
          @click="openAddModal"
          class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-container transition-colors shadow-sm font-medium text-sm shrink-0"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          Tambah Modul
        </button>
      </header>

      <!-- Category Filter Tabs -->
      <div class="mb-8">
        <CategoryTabs 
          :categories="['Semua', 'Edukasi Seksual', 'Kisah Inspiratif', 'Relaksasi']" 
          :activeCategory="activeCategory"
          @select="activeCategory = $event"
        />
      </div>

      <!-- Media Grid -->
      <div v-if="filteredMedia.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up" style="animation-duration: 0.5s;">
        <MediaCard 
          v-for="item in filteredMedia" 
          :key="item.id" 
          :media="item"
          @play="openPlayer"
          @edit="handleEditModule"
          @delete="handleDeleteModule"
        />
      </div>
      
      <!-- Empty State -->
      <div v-else class="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm animate-fade-in-up">
        <div class="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Belum Ada Modul</h3>
        <p class="text-gray-500 text-sm">Modul untuk kategori ini sedang disiapkan.</p>
      </div>

    </main>
    
    <!-- Player Modal -->
    <MediaPlayerModal 
      :isOpen="isPlayerOpen"
      :media="selectedMedia"
      @close="closePlayer"
    />

    <!-- Admin Add/Edit Module Modal -->
    <AddModuleModal
      :isOpen="isAddModalOpen"
      :moduleToEdit="moduleToEdit"
      @close="isAddModalOpen = false"
      @save="handleSaveModule"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SidebarNav from '@/components/dashboard/SidebarNav.vue';
import CategoryTabs from '@/components/media/CategoryTabs.vue';
import MediaCard from '@/components/media/MediaCard.vue';
import MediaPlayerModal from '@/components/media/MediaPlayerModal.vue';
import AddModuleModal from '@/components/media/AddModuleModal.vue';
import { mediaItems, userProfile } from '@/data/dummyData';

const activeCategory = ref('Semua');
const isPlayerOpen = ref(false);
const selectedMedia = ref(null);
const isAddModalOpen = ref(false);
const moduleToEdit = ref(null);

// Use a local reactive array so we can add/edit/delete items without reloading
const localMediaItems = ref([...mediaItems]);

const filteredMedia = computed(() => {
  if (activeCategory.value === 'Semua') {
    return localMediaItems.value;
  }
  return localMediaItems.value.filter(item => item.category === activeCategory.value);
});

const openPlayer = (media) => {
  selectedMedia.value = media;
  isPlayerOpen.value = true;
};

const closePlayer = () => {
  isPlayerOpen.value = false;
  setTimeout(() => {
    selectedMedia.value = null;
  }, 300);
};

const openAddModal = () => {
  moduleToEdit.value = null;
  isAddModalOpen.value = true;
};

const handleEditModule = (media) => {
  moduleToEdit.value = media;
  isAddModalOpen.value = true;
};

const handleDeleteModule = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus modul ini?')) {
    localMediaItems.value = localMediaItems.value.filter(item => item.id !== id);
  }
};

const handleSaveModule = (moduleData) => {
  if (moduleToEdit.value) {
    // Edit existing
    const index = localMediaItems.value.findIndex(item => item.id === moduleData.id);
    if (index !== -1) {
      localMediaItems.value[index] = moduleData;
    }
  } else {
    // Add new
    localMediaItems.value.unshift(moduleData);
    activeCategory.value = 'Semua';
  }
  moduleToEdit.value = null;
};
</script>
