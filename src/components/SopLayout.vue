<script setup lang="ts">
// 1. Impor komponen sidebar yang baru
import SideNav from '../components/SideNav.vue' // Sesuaikan path jika perlu
import { sidebarLinks } from '../data/sidebarData.ts' 

// Data dan fungsi tetap berada di komponen induk, karena induk yang "memiliki" data ini.


const handleItemClick = (item: string) => {
  // Logika ini akan dijalankan ketika sidebar memancarkan event
  console.log('Event "itemClick" diterima dari anak dengan data:', item)
}
</script>

<template>
  <section class="bg-main text-white font-display">
    <div class="max-w-6xl mx-auto px-4 sm:px-4 lg:px-6 py-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

      <div class="flex-1">
        
        <div class="mb-12 text-center md:text-left">
          <h2 class="text-5xl md:text-4xl font-bold mb-2 mr-4 lg:mr-20 align-middle">SOP BAAK</h2>
          <p class="text-lg uppercase inline-block justify-content align-middle mt-4 md:mt-0">
            Standar Operasional Prosedur (SOP) dan Peta Proses Bisnis Layanan BAAK
          </p>
        </div>

        <div class="mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <router-link to="/sop/akademik" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b58302] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Akademik
            </router-link>

            <router-link to="/sop/kemahasiswaan" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Kemahasiswaan
            </router-link>

            <router-link to="/sop/pdpt" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan PDPT
            </router-link>
            
            <router-link to="/sop/bisnis-baak" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              PETA PROSES BISNIS<br>
              LAYANAN BAAK
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
