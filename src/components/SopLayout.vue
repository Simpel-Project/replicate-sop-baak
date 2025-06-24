<script setup lang="ts">
const sidebarItems = [
  'Informasi Pendaftaran Wisuda Online',
  'Panduan Penggunaan Absensi Kuliah Online',
  'Kartu Kontrol Absensi Dosen',
  'Panduan Mahasiswa Pra Registrasi (KRS-Online)',
  'Panduan Sister untuk Dosen',
  'Panduan Sister Untuk Karyawan'
]

const handleItemClick = (item: string) => {
  console.log('Sidebar item clicked:', item)
  // Anda bisa menambahkan navigasi atau logika lain di sini
}
</script>

<template>
  <section class="bg-[#000000] text-white font-display py-5 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 text-center md:text-left">
        <h2 class="text-5xl md:text-4xl font-bold inline-block mr-4 lg:mr-20 align-middle">SOP BAAK</h2>
        <p class="text-sm uppercase inline-block max-w-xs align-middle mt-4 md:mt-0">
          Standar Operasional Prosedur (SOP) dan Peta Proses Bisnis Layanan BAAK
        </p>
      </div>

      <div class="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16">

        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <a href="/sop/akademik" class="
                  block rounded-3xl bg-gradient-to-b from-[#d4af37] to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Akademik
            </a>

            <a href="/sop/kemahasiswaan" class="
                  block rounded-3xl bg-gradient-to-b from-[#d4af37] to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan Kemahasiswaan
            </a>

            <a href="/sop/pdpt" class="
                  block rounded-3xl bg-gradient-to-b from-[#d4af37] to-[#b8860b] 
                  p-8 text-center font-bold text-black 
                  transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              Standar Operasional Prosedural (SOP)<br>
              Layanan PDPT
            </a>

            <a href="/bisnis/baak" class="
                  block rounded-3xl border-2 border-[#d4af37] bg-transparent 
                  p-8 text-center font-bold text-[#d4af37] 
                  transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20
                ">
              PETA PROSES BISNIS<br>
              LAYANAN BAAK
            </a>

          </div>
        </div>

        <aside class="w-full lg:w-80 flex-shrink-0 space-y-4">
          <div v-for="item in sidebarItems" :key="item" @click="handleItemClick(item)"
            class="cursor-pointer p-4 rounded-2xl border-2 border-[#d4af37] bg-transparent text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-105">
            <p class="text-sm font-medium leading-relaxed">
              {{ item }}
            </p>
          </div>
        </aside>

      </div>

    </div>
  </section>
</template>