<script setup lang="ts">
// Kita akan membuat SopItem.vue di langkah selanjutnya
import SopItem from '../components/SopItem.vue';

// (Opsional tapi sangat direkomendasikan)
// Mendefinisikan 'bentuk' data kita dengan TypeScript Interface.
// Ini membantu mencegah error dan membuat kode lebih mudah dibaca.
interface Sop {
  id: number;
  title: string;
  date: string;
  size: string;
  previewUrl: string;
  downloadUrl: string;
}

// 1. Definisikan props: komponen ini menerima sebuah prop bernama 'sops'
//    yang merupakan sebuah array (ditandai dengan []) dari objek Sop.
defineProps<{
  sops: Sop[]
}>();


</script>

<template>
  <div class="space-y-4 max-h-88 overflow-y-auto pr-2">
    <SopItem v-for="sop in sops" :key="sop.id" :sop="sop" />
  </div>
</template>

<style scoped>
/* Menargetkan scrollbar untuk browser berbasis Webkit (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 8px; /* Lebar scrollbar */
}

/* Menargetkan 'track' atau jalur tempat scrollbar bergerak */
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px; /* Membuat sudutnya membulat (mirip rounded-md/lg) */
  border: 1px solid #303034; /* Border dengan warna zinc-700 */
}

/* Menargetkan 'thumb' atau pegangan scrollbar yang bisa digerakkan */
::-webkit-scrollbar-thumb {
  background-color: #18181b; /* Warna latar belakang 'main' (misal: zinc-900) */
  border: 1px solid #333336; /* Border dengan warna zinc-700 */
  border-radius:10px
}

/* Menambahkan efek hover pada pegangan scrollbar */
::-webkit-scrollbar-thumb:hover {
  background-color: #27272a; /* Warna sedikit lebih terang (misal: zinc-800) */
}
</style>