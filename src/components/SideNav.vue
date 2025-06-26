<script setup lang="ts">
// 1. Definisikan 'props' yang akan diterima dari komponen induk.
//    Di sini, kita mengharapkan sebuah prop bernama 'items' yang merupakan array of string.
defineProps<{
  items: string[]
}>()

// 2. Definisikan 'event' yang akan dikirim (emit) oleh komponen ini ke induknya.
//    Ini adalah praktik yang baik untuk deklarasi eksplisit.
const emit = defineEmits(['itemClick'])
</script>

<template>
  <aside class="w-full lg:w-80 flex-shrink-0 space-y-4">
    <div 
      v-for="item in items" 
      :key="item" 
      @click="emit('itemClick', item)"
      class="cursor-pointer p-4 rounded-sm border-2 border-secondary bg-transparent text-white hover:bg-secondary hover:text-black transition-all duration-300 transform hover:scale-101">
      <p class="text-sm font-medium leading-relaxed">
        {{ item }}
      </p>
    </div>
  </aside>
</template>