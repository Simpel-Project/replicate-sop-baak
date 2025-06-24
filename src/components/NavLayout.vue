<template>
  <nav class="bg-primary text-white shadow-md font-display">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0">
          <img class="h-10 w-auto" src="../assets/PLAI-LOGO.png" alt="PLAI BMD">
        </div>

        <div class="hidden md:block">
          <ul class="ml-10 flex items-center space-x-8">
            
            <li class="relative">
              <button @click="toggleDropdown('profil')" class="flex items-center hover:text-secondary transition-colors duration-200">
                <span>Profil</span>
                <svg 
                  class="w-3 h-3 ml-2 transform transition-transform duration-200" 
                  :class="{'rotate-180': activeDropdown === 'profil'}"
                  viewBox="0 0 10 5"
                  fill="currentColor"
                  aria-hidden="true">
                  <polygon points="0,0 10,0 5,5"></polygon>
                </svg>
              </button>
              <div v-if="activeDropdown === 'profil'" class="absolute z-10 mt-2 w-48 rounded-b-sm shadow-lg bg-zinc-800">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 2</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 1</a>
                </div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('profil-2')" class="flex items-center hover:text-secondary transition-colors duration-200">
                <span>Profil 2</span>
                <svg 
                  class="w-3 h-3 ml-2 transform transition-transform duration-200" 
                  :class="{'rotate-180': activeDropdown === 'profil-2'}"
                  viewBox="0 0 10 5"
                  fill="currentColor"
                  aria-hidden="true">
                  <polygon points="0,0 10,0 5,5"></polygon>
                </svg>
              </button>
              <div v-if="activeDropdown === 'profil-2'" class="absolute z-10 mt-2 w-48 rounded-b-sm shadow-lg bg-zinc-800">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 2</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 1</a>
                </div>
              </div>
            </li>
            
            <li class="relative">
               <button @click="toggleDropdown('profil-3')" class="flex items-center hover:text-secondary transition-colors duration-200">
                <span>Profil 3</span>
                <svg 
                  class="w-3 h-3 ml-2 transform transition-transform duration-200" 
                  :class="{'rotate-180': activeDropdown === 'profil-3'}"
                  viewBox="0 0 10 5"
                  fill="currentColor"
                  aria-hidden="true">
                  <polygon points="0,0 10,0 5,5"></polygon>
                </svg>
              </button>
              <div v-if="activeDropdown === 'profil-3'" class="absolute z-10 mt-2 w-48 rounded-b-sm shadow-lg bg-zinc-800">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 2</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 1</a>
                </div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('profil-4')" class="flex items-center hover:text-secondary transition-colors duration-200">
                <span>Profil 4</span>
                <svg 
                  class="w-3 h-3 ml-2 transform transition-transform duration-200" 
                  :class="{'rotate-180': activeDropdown === 'profil-4'}"
                  viewBox="0 0 10 5"
                  fill="currentColor"
                  aria-hidden="true">
                  <polygon points="0,0 10,0 5,5"></polygon>
                </svg>
              </button>
              <div v-if="activeDropdown === 'profil-4'" class="absolute z-10 mt-2 w-48 rounded-b-sm shadow-lg bg-zinc-800">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 2</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary" role="menuitem">Sub Menu 1</a>
                </div>
              </div>
            </li>
            
            <li>
              <a href="#" class="hover:text-secondary transition-colors duration-200">Data Statistik</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// State untuk melacak dropdown mana yang sedang terbuka.
// Kita hanya akan mengizinkan satu dropdown terbuka pada satu waktu untuk UX yang lebih bersih.
// Nilainya akan berupa nama dropdown yang aktif (misal: 'profil', 'karyawan', dll.)
const activeDropdown = ref('');

// Fungsi untuk membuka/menutup dropdown.
// Jika dropdown yang sama diklik lagi, ia akan tertutup.
// Jika dropdown lain diklik, dropdown yang lama akan tertutup dan yang baru akan terbuka.
function toggleDropdown(name) {
  if (activeDropdown.value === name) {
    activeDropdown.value = ''; // Tutup jika sudah terbuka
  } else {
    activeDropdown.value = name; // Buka yang baru
  }
}
</script>

<style lang="scss" scoped>

</style>