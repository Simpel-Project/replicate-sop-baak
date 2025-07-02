<script setup lang="ts">
import { ref, computed } from 'vue';

// Hapus objek 'allSopData' yang besar dari sini
// dan ganti dengan baris import di bawah ini.
import { allSopData } from '../data/sopData.ts'; // Sesuaikan path jika perlu';
import SopList from '../components/SopList.vue';
import NavLayout from '../components/NavLayout.vue';
import FooterLayout from '../components/FooterLayout.vue';
import SideNav from '../components/SideNav.vue';
import { sidebarLinks } from '../data/sidebarData.ts';

const props = defineProps<{
    category: string;
}>();

// Sisa logika di bawah ini tidak perlu diubah sama sekali.
// Ia akan menggunakan 'allSopData' yang sudah kita impor.
const pageData = computed(() => {
    const categoryKey = props.category as keyof typeof allSopData;
    return allSopData[categoryKey] || { title: 'Kategori Tidak Ditemukan', items: [] };
});

const handleItemClick = (item: string) => {
  // Logika ini akan dijalankan ketika sidebar memancarkan event
  console.log('Event "itemClick" diterima dari anak dengan data:', item)
}
</script>

<template>
  <NavLayout/>
  <main class="bg-main text-white font-display min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-4 lg:px-6 py-14 flex flex-col lg:flex-row gap-10 lg:gap-16">
      
      <div class="flex-1">
        <h1 class="text-4xl font-bold mb-2">{{ pageData.title }}</h1>
        <p class="text-zinc-400 mb-10">STANDAR OPERASIONAL PROSEDUR (SOP) BIDANG {{ props.category.toUpperCase().replace('-', ' ') }}</p>
        
        <SopList :sops="pageData.items" />
      </div>

      <SideNav 
        :items="sidebarLinks" 
        @item-click="handleItemClick" 
      />
      
    </div>
  </main>
  <FooterLayout/>
</template>