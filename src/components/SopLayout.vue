<script setup lang="ts">
// 1. Impor komponen sidebar yang baru
import SideNav from '../components/SideNav.vue' // Sesuaikan path jika perlu

// Data dan fungsi tetap berada di komponen induk, karena induk yang "memiliki" data ini.
const sidebarItems = [
  'Informasi Pendaftaran Wisuda Online',
  'Panduan Penggunaan Absensi Kuliah Online',
  'Kartu Kontrol Absensi Dosen',
  'Panduan Mahasiswa Pra Registrasi (KRS-Online)',
  'Panduan Sister untuk Dosen',
  'Panduan Sister Untuk Karyawan'
]

const handleItemClick = (item: string) => {
  // Logika ini akan dijalankan ketika sidebar memancarkan event
  console.log('Event "itemClick" diterima dari anak dengan data:', item)
}
</script>

<template>
  <section class="bg-[#09090b] text-white font-display py-5 px-4">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

      <div class="flex-1">
        
        <div class="mb-16 text-center md:text-left">
          <h2 class="text-5xl md:text-4xl font-bold inline-block mr-4 lg:mr-20 align-middle">SOP BAAK</h2>
          <p class="text-xl uppercase inline-block max-w-sm align-middle mt-4 md:mt-0">
            Standar Operasional Prosedur (SOP) dan Peta Proses Bisnis Layanan BAAK
          </p>
        </div>

        <div class="mt-25">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <a href="/sop" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b58302] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Akademik
            </a>

            <a href="/sop" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Kemahasiswaan
            </a>

            <a href="/sop" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan PDPT
            </a>
            <a href="/sop" class="
                  block rounded-full bg-gradient-to-b from-secondary to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 transform hover:scale-99 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              PETA PROSES BISNIS<br>
              LAYANAN BAAK
            </a>
          </div>
        </div>

      </div>
    <!-- sidebar nav -->
     <SideNav 
        :items="sidebarItems" 
        @item-click="handleItemClick" 
      />

    </div>
  </section>
</template>