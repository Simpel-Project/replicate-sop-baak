<script setup lang="ts">
// 1. Impor komponen sidebar yang baru
import SideNav from '../components/SideNav.vue' // Sesuaikan path jika perlu
import { sidebarLinks } from '../data/sidebarData.ts' 

// Data dan fungsi tetap berada di komponen induk, karena induk yang "memiliki" data ini.
const cardsData = [
  {
    title: 'Standar Operasional Akademik',
    description: 'Semua prosedur terkait kegiatan perkuliahan dan akademik.',
    path: '/sop/akademik'
  },
  {
    title: 'Standar Operasional Kemahasiswaan',
    description: 'Prosedur untuk beasiswa, organisasi, dan kegiatan mahasiswa.',
    path: '/sop/kemahasiswaan'
  },
  {
    title: 'Standar Operasional PDPT',
    description: 'Manajemen data dan pelaporan ke Pangkalan Data Pendidikan Tinggi.',
    path: '/sop/pdpt'
  },
  {
    title: 'Peta Proses Bisnis',
    description: 'Alur kerja dan proses bisnis layanan di lingkungan BAAK.',
    path: '/sop/bisnis-baak'
  }
];

const handleItemClick = (item: any) => {
  console.log('Sidebar item diklik:', item)
}
</script>

<template>
  <section class="bg-main text-white font-display">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-13 flex flex-col lg:flex-row gap-10 lg:gap-16">
      
      <div class="flex-1">
        
        <div class="mb-12 text-center md:text-left">
          <h2 class="text-5xl md:text-4xl font-bold mb-2 mr-4 lg:mr-20 align-middle">SOP BAAK</h2>
          <p class="text-lg uppercase inline-block justify-content align-middle mt-4 md:mt-0">
            Standar Operasional Prosedur (SOP) dan Peta Proses Bisnis Layanan BAAK
          </p>
        </div>

        <div class="mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <router-link v-for="card in cardsData" :key="card.title" :to="card.path"
              class="block p-6 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg 
                    transform transition-all duration-300 
                    hover:-translate-y-1 
                    hover:bg-zinc-700 
                    hover:border-secondary 
                    hover:shadow-lg hover:shadow-secondary/20">
              
              <h3 class="text-xl font-bold text-white mb-2">{{ card.title }}</h3>
              <p class="text-zinc-400 font-light leading-relaxed">{{ card.description }}</p>

            </router-link>
          </div>
        </div>

      </div>
    
      <SideNav 
      :items="sidebarLinks" 
       @item-click="handleItemClick" 
      />

    </div>
  </section>
</template>
