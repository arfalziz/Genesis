<template>
  <div class="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('select', category)"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap"
      :class="[
        activeCategory === category
          ? 'bg-primary text-white shadow-md'
          : 'bg-white text-gray-600 hover:bg-surface-container-high hover:text-primary'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    required: true
  }
});
defineEmits(['select']);
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
