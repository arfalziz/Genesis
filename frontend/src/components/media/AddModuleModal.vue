<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="close">
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" @click="close"></div>
    
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-fade-in-up" style="animation-duration: 0.3s;">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-5 border-b border-gray-100 bg-surface">
        <h3 class="text-lg font-bold text-gray-900">{{ isEditMode ? 'Edit Modul' : 'Tambah Modul Baru' }}</h3>
        <button @click="close" class="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Form Area -->
      <div class="p-6 max-h-[70vh] overflow-y-auto">
        <form @submit.prevent="submitForm" class="space-y-4">
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Judul Modul</label>
            <input v-model="form.title" type="text" required class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Misal: Pentingnya Menjaga Batasan" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select v-model="form.category" class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                <option value="Edukasi Seksual">Edukasi Seksual</option>
                <option value="Kisah Inspiratif">Kisah Inspiratif</option>
                <option value="Relaksasi">Relaksasi</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tipe Media</label>
              <select v-model="form.type" class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                <option value="video">Video</option>
                <option value="audio">Audio / Podcast</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Durasi</label>
            <input v-model="form.duration" type="text" required class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Misal: 15:30" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL Thumbnail (Gambar)</label>
            <input v-model="form.thumbnailUrl" type="url" required class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="https://images.unsplash.com/..." />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL Media (Video / Audio Embed)</label>
            <input v-model="form.url" type="url" required class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="https://youtube.com/..." />
          </div>

        </form>
      </div>
      
      <!-- Footer Actions -->
      <div class="p-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
        <button @click="close" class="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors">
          Batal
        </button>
        <button @click="submitForm" class="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary-container shadow-md transition-colors">
          {{ isEditMode ? 'Simpan Perubahan' : 'Simpan Modul' }}
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  moduleToEdit: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close', 'save']);

const isEditMode = computed(() => !!props.moduleToEdit);

const form = reactive({
  id: null,
  title: '',
  category: 'Edukasi Seksual',
  type: 'video',
  duration: '',
  thumbnailUrl: '',
  url: ''
});

// Sync form data when modal opens or when moduleToEdit changes
watch(() => [props.isOpen, props.moduleToEdit], ([newIsOpen, newModule]) => {
  if (newIsOpen) {
    if (newModule) {
      form.id = newModule.id;
      form.title = newModule.title;
      form.category = newModule.category;
      form.type = newModule.type;
      form.duration = newModule.duration;
      form.thumbnailUrl = newModule.thumbnailUrl;
      form.url = newModule.url;
    } else {
      form.id = null;
      form.title = '';
      form.category = 'Edukasi Seksual';
      form.type = 'video';
      form.duration = '';
      form.thumbnailUrl = '';
      form.url = '';
    }
  }
});

const close = () => {
  emit('close');
};

const submitForm = () => {
  if (!form.title || !form.duration || !form.url) return;
  
  // Clone form data to emit
  const moduleData = { ...form };
  if (!moduleData.id) {
    moduleData.id = Date.now();
  }
  emit('save', moduleData);
  close();
};
</script>
