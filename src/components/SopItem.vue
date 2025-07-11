<script setup lang="ts">
import { ref } from 'vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import Calendar from 'vue-material-design-icons/Calendar.vue';
import Download from 'vue-material-design-icons/Download.vue';


// Definisikan kembali Interface Sop untuk kejelasan props
interface Sop {
  id: number;
  title: string;
  date: string;
  size: string;
  previewUrl: string;
  downloadUrl: string;
}

// 1. Komponen ini menerima satu objek 'sop' sebagai prop dari SopList.vue
defineProps<{
  sop: Sop
}>();

// 2. Setiap SopItem memiliki state 'terbuka/tertutup'-nya sendiri.
//    `isExpanded` adalah variabel lokal untuk setiap item.
const isExpanded = ref(false);

// 3. Fungsi untuk mengubah state saat item di-klik
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="border border-zinc-600 rounded-lg overflow-hidden transition-all duration-300" :class="{'bg-zinc-800': isExpanded}">
    
    <div 
      class="flex justify-between items-center p-4 cursor-pointer hover:bg-zinc-700/50" 
      @click="toggleExpand"
    >
      <div class="flex items-center gap-4">
        <ChevronRight 
          class="text-zinc-400 transition-transform duration-300" 
          :class="{'rotate-90': isExpanded}" 
          :size="20" 
        />
        <h3 class="font-semibold text-white">{{ sop.title }}</h3>
      </div>
    </div>

    <div v-if="isExpanded" class="bg-main p-4 border-t border-zinc-700">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        <div class="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
          <div class="flex items-center gap-2">
            <Calendar :size="16" />
            <span>{{ sop.date }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Download :size="16" />
            <span>{{ sop.size }}</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <a :href="sop.previewUrl" target="_blank" class="px-4 py-2 text-sm bg-zinc-600 hover:bg-zinc-500 rounded-md transition-colors">Preview</a>
          <a :href="sop.downloadUrl" class="px-4 py-2 text-sm bg-secondary text-black font-bold hover:bg-opacity-90 rounded-md transition-colors">Download</a>
        </div>
        
      </div>
    </div>
  </div>
</template>