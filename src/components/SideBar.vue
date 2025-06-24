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
}
</script>

<template>
  <aside class="w-full lg:w-80 space-y-4">
    <div
      v-for="item in sidebarItems"
      :key="item"
      @click="handleItemClick(item)"
      class="sidebar-item cursor-pointer p-4 rounded-2xl border-2 border-primary-gold bg-transparent text-primary-gold hover:bg-primary-gold hover:text-dark-primary transition-all duration-300 transform hover:scale-105"
    >
      <p class="text-sm font-medium leading-relaxed">
        {{ item }}
      </p>
    </div>
  </aside>
</template>