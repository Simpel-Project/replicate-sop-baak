<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { getSopItemsByCategory } from '../services/apiService';
import type { SopItem as ApiSopItem } from '../type/api';

// Impor komponen lain...
import NavLayout from '../components/NavLayout.vue';
import FooterLayout from '../components/FooterLayout.vue';
import SopList from '../components/SopList.vue';
import SideNav from '../components/SideNav.vue';
import BreadcrumbNav from '../components/BreadCrumbNav.vue';
import { sidebarLinks } from '../data/sidebarData';

const props = defineProps<{
  category: string;
}>();

// =======================================================
// PERBAIKAN DI SINI: Samakan kunci dengan 'slug' dari API
// =======================================================
const categoryMap = {
  bidang_akademik: { id: 1, title: "SOP BIDANG AKADEMIK" },
  bidang_kemahasiswaan: { id: 2, title: "SOP BIDANG KEMAHASISWAAN" },
  bidang_pdpt: { id: 3, title: "SOP BIDANG PDPT" },
  peta_proses_bisnis: { id: 4, title: "PETA PROSES BISNIS BAAK" }
};

// State untuk data, loading, dan error
const sopItems = ref<any[]>([]);
const pageTitle = ref('');
const isLoading = ref(true);
const error = ref<string | null>(null);

// Fungsi fetchSopItems (tidak perlu diubah)
const fetchSopItems = async (categorySlug: string) => {
  isLoading.value = true;
  error.value = null;
  const targetCategory = categoryMap[categorySlug as keyof typeof categoryMap];

  if (!targetCategory) {
    error.value = "Kategori tidak ditemukan.";
    isLoading.value = false;
    return;
  }

  pageTitle.value = targetCategory.title;

  try {
    const data = await getSopItemsByCategory(targetCategory.id);
    
    if (data) {
      sopItems.value = data.map((item: ApiSopItem) => ({
        id: item.id,
        title: item.title,
        date: item.date,
        size: `${item.size} KB`, // Anda bisa memformat ini nanti
        previewUrl: item.previewUrl,
        downloadUrl: item.downloadUrl
      }));
    }
  } catch (e: any) {
    error.value = e.message || "Gagal memuat data SOP.";
  } finally {
    isLoading.value = false;
  }
};

watchEffect(() => {
  if (props.category) {
    fetchSopItems(props.category);
  }
});

const handleItemClick = (item: any) => {
  console.log('Sidebar item diklik:', item);
};
</script>

<template>
  <!-- Template Anda tidak perlu diubah -->
  <NavLayout/>
  <main class="bg-main text-white font-display min-h-screen">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-13">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div class="flex-1">
          <BreadcrumbNav :currentPage="pageTitle" class="mb-8" />
          <div class="min-h-[400px]">
            <div v-if="isLoading">Memuat data SOP...</div>
            <div v-else-if="error">{{ error }}</div>
            <div v-else>
              <h1 class="text-4xl font-bold mb-2">{{ pageTitle }}</h1>
              <p class="text-zinc-400 mb-10">STANDAR OPERASIONAL PROSEDUR (SOP)</p>
              <SopList :sops="sopItems" />
            </div>
          </div>
        </div>
        <SideNav :items="sidebarLinks" @item-click="handleItemClick" />
      </div>
    </div>
  </main>
  <FooterLayout/>
</template>
