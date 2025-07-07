<script setup lang="ts">
// 1. Impor 'tipe data' SidebarLink agar komponen ini tahu bentuk datanya
import type { SidebarLink } from '../data/sidebarData.ts';

// 2. Ubah 'props' untuk menerima array dari objek SidebarLink, bukan lagi string[]
defineProps<{
  items: SidebarLink[]
}>();

const emit = defineEmits(['itemClick']);
</script>

<template>
  <aside class="w-full lg:w-80 flex-shrink-0 space-y-4">
    <div v-for="item in items" :key="item.title">
      
      <a 
        v-if="item.isExternal"
        :href="item.url" 
        target="_blank" 
        rel="noopener noreferrer"
        @click="emit('itemClick', item)"
        class="block cursor-pointer p-4 rounded-lg border-2 border-secondary bg-transparent text-white hover:bg-secondary hover:text-black transition-all duration-300 transform hover:scale-101">
        <p class="text-sm font-medium leading-relaxed">{{ item.title }}</p>
      </a>

      <router-link
        v-else
        :to="item.url"
        @click="emit('itemClick', item)"
        class="block cursor-pointer p-4 rounded-lg border-2 border-secondary bg-transparent text-white hover:bg-secondary hover:text-black transition-all duration-300 transform hover:scale-101">
        <p class="text-sm font-medium leading-relaxed">{{ item.title }}</p>
      </router-link>

    </div>
  </aside>
</template>