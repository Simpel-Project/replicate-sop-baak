<template>
  <nav class="bg-primary text-white shadow-md font-display">
    <div class="max-w-7xl mx-auto mr-20 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-20">
        
        <div class="flex-shrink-0">
          <img class="h-10 ml-5 w-auto" src="../assets/PLAI-LOGO.png" alt="PLAI BMD">
        </div>

        <div class="hidden md:block ml-auto">
          <ul class="flex items-baseline space-x-6">
            
            <li class="relative">
              <button @click="toggleDropdown('profil')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Profil</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'profil'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'profil'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Visi & Misi</a></div>
                <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Struktur Organisasi</a></div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('karyawan')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Karyawan</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'karyawan'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'karyawan'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Data Karyawan</a></div>
                <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Absensi</a></div>
              </div>
            </li>
            
            <li class="relative">
              <button @click="toggleDropdown('kalender')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Kalender</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'kalender'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'kalender'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Kalender Akademik</a></div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('akademik')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Akademik</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'akademik'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'akademik'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                 <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Jadwal Kuliah</a></div>
              </div>
            </li>

            <li>
              <a href="#" class="text-sm hover:text-secondary transition-colors duration-200">Data Statistik</a>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('beasiswa')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Beasiswa</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'beasiswa'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'beasiswa'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                 <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Info Beasiswa</a></div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('organisasi')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Organisasi</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'organisasi'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'organisasi'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                 <div class="py-1"><a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">BEM & HIMA</a></div>
              </div>
            </li>

            <li class="relative">
              <button @click="toggleDropdown('prosedur')" class="flex items-center text-sm hover:text-secondary transition-colors duration-200">
                <span>Prosedur Surat</span>
                <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === 'prosedur'}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
              </button>
              <div v-if="activeDropdown === 'prosedur'" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Surat Keterangan Aktif</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">Surat Izin Penelitian</a>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const activeDropdown = ref('');

function toggleDropdown(name) {
  if (activeDropdown.value === name) {
    activeDropdown.value = '';
  } else {
    activeDropdown.value = name; 
  }
}
</script>