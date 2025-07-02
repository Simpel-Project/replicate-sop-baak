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
  <div class="space-y-4">
    <SopItem v-for="sop in sops" :key="sop.id" :sop="sop" />
  </div>
</template>