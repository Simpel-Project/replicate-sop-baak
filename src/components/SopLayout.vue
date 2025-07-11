<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 1. Impor fungsi dari file layanan kita
import { getCategories } from '../services/apiService';
// 2. Impor 'tipe data' dari file terpisah
import type { Category } from '../type/api';
import CardSkeleton from './CardSkeleton.vue';

// Impor komponen lain yang dibutuhkan
import SideNav from './SideNav.vue';
import { sidebarLinks } from '../data/sidebarData';

// 3. State untuk menampung data, loading, dan error
const categories = ref<Category[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

// 4. Fungsi fetchCategories sekarang menjadi sangat bersih
const fetchCategories = async () => {
  try {
    // Panggil fungsi getCategories() dari layanan kita
    const data = await getCategories();
    if (data) {
      categories.value = data;
    }
  } catch (e: any) {
    // Tangkap error yang dilempar dari apiService
    console.error(e);
    error.value = e.message || "Gagal memuat data kategori.";
  } finally {
    isLoading.value = false;
  }
};

// 5. onMounted tetap sama, ia akan memanggil fungsi di atas
onMounted(() => {
  fetchCategories();
});

const handleItemClick = (item: any) => {
  console.log('Sidebar item diklik:', item);
};

</script>

<template>
  <section class="bg-main text-white font-display">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-13">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div class="flex-1">
          <div class="mb-12 text-center md:text-left">
            <h2 class="text-5xl md:text-4xl font-bold mb-2 mr-4 lg:mr-20 align-middle">SOP BAAK</h2>
            <p class="text-lg uppercase inline-block justify-content align-middle mt-4 md:mt-0">
              Standar Operasional Prosedur (SOP) dan Peta Proses Bisnis Layanan BAAK
            </p>
          </div>

          <!-- Bagian ini yang diperbaiki -->
          <div class="mt-12 min-h-[300px]">
            
            <!-- 1. Tampilkan pesan loading -->
          <div v-if="!isLoading && !error" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <router-link v-for="category in categories" :key="category.id" :to="'/sop/' + category.slug"
                class="block p-6 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg 
                       transform transition-all duration-300 
                       hover:-translate-y-1 
                       hover:bg-zinc-700 
                       hover:border-secondary 
                       hover:shadow-lg hover:shadow-secondary/20">
                
                <h3 class="text-xl font-bold text-white mb-2">{{ category.title }}</h3>
                <p class="text-zinc-400 font-light leading-relaxed">{{ category.description }}</p>
              </router-link>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CardSkeleton v-for="n in 4" :key="n" />
            </div>  

          </div>
        </div>
    
        <SideNav 
          :items="sidebarLinks" 
          @item-click="handleItemClick" 
        />
      </div>
    </div>
  </section>
</template>