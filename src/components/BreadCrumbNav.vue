<script setup lang="ts">
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

// Komponen ini menerima satu prop: nama halaman saat ini
defineProps<{
  currentPage: string;
}>();
</script>

<template>
  <nav aria-label="breadcrumb" class="flex items-center space-x-2 text-sm text-zinc-400">
    
    <router-link to="/" class="hover:text-white transition-colors">
      Home
    </router-link>

    <ChevronRightIcon :size="16" />

    <span class="font-semibold text-white">
      {{ currentPage }}
    </span>
    
  </nav>
</template>