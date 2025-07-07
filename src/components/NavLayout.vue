<template>
  <nav class="bg-primary text-white shadow-md font-display relative z-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-10 lg:px-15">
      <div class="flex items-center justify-between h-20">
        
        <div class="flex-shrink-0">
          <router-link to="/">
            <img class="h-8 md:h-10 w-auto" src="../assets/PLAI-LOGO.png" alt="PLAI BMD">
          </router-link>
        </div>
        
        <div class="hidden md:block">
          <ul class="flex items-baseline space-x-6">
            <li v-for="item in navItems" :key="item.name" class="relative">
              <template v-if="item.subItems">
                <button @click="toggleDropdown(item.name)" class="flex items-center text-sm hover:text-secondary ...">
                  <span>{{ item.title }}</span>
                  <svg class="w-3 h-3 ml-1.5" :class="{'rotate-180': activeDropdown === item.name}" viewBox="0 0 10 5" fill="currentColor"><polygon points="0,0 10,0 5,5"></polygon></svg>
                </button>
                <div v-if="activeDropdown === item.name" class="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-zinc-900">
                  <div v-for="subItem in item.subItems" :key="subItem.title" class="py-1">
                    <router-link :to="subItem.path" class="block px-4 py-2 text-sm hover:bg-zinc-950 hover:text-secondary">{{ subItem.title }}</router-link>
                  </div>
                </div>
              </template>
              <template v-else>
                <router-link :to="item.path" class="text-sm hover:text-secondary">{{ item.title }}</router-link>
              </template>
            </li>
          </ul>
        </div>
        
        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="p-2 rounded-md text-white hover:text-secondary focus:outline-none">
            <span class="sr-only">Buka menu utama</span>
            
            <CloseIcon v-if="isMobileMenuOpen" :size="28" />
            
            <MenuIcon v-else :size="28" />

          </button>
        </div>
        
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden absolute w-full bg-primary shadow-lg">
      <ul class="px-2 pt-2 pb-3 space-y-2">
        <li v-for="item in navItems" :key="item.name">
          
          <template v-if="item.subItems">
            <button @click="toggleDropdown(item.name)" class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800">
              <span>{{ item.title }}</span>
              <svg class="w-4 h-4 transform transition-transform" :class="{'rotate-90': activeDropdown === item.name}" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </button>
            <div v-if="activeDropdown === item.name" class="mt-2 pl-4 space-y-2">
              <router-link v-for="subItem in item.subItems" :key="subItem.title" :to="subItem.path" @click="closeMobileMenu" class="block px-3 py-2 rounded-md text-sm hover:bg-zinc-800">{{ subItem.title }}</router-link>
            </div>
          </template>

          <template v-else>
            <router-link :to="item.path" @click="closeMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-800">{{ item.title }}</router-link>
          </template>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';

const activeDropdown = ref('');
const isMobileMenuOpen = ref(false);

const navItems = [
  {
    name: 'profil',
    title: 'Profil',
    subItems: [
      { title: 'Visi & Misi', path: '/profil/visi-misi' },
      { title: 'Struktur Organisasi', path: '/profil/struktur' },
    ]
  },
  {
    name: 'karyawan',
    title: 'Karyawan',
    subItems: [
      { title: 'Data Karyawan', path: '/karyawan/data' },
      { title: 'Absensi', path: '/karyawan/absensi' },
    ]
  },
  {
    name: 'kalender',
    title: 'Kalender',
    subItems: [
      { title: 'Kalender Akademik', path: '/kalender-akademik' }
    ]
  },
  {
    name: 'akademik',
    title: 'Akademik',
    subItems: [
      { title: 'Jadwal Kuliah', path: '/akademik/jadwal' }
    ]
  },
  {
    name: 'statistik', // Nama unik untuk item non-dropdown
    title: 'Data Statistik',
    path: '/data-statistik' // Item ini tidak punya subItems, jadi akan dirender sebagai link biasa
  },
  {
    name: 'beasiswa',
    title: 'Beasiswa',
    subItems: [
      { title: 'Info Beasiswa', path: '/beasiswa/info' }
    ]
  },
  {
    name: 'organisasi',
    title: 'Organisasi',
    subItems: [
      { title: 'BEM & HIMA', path: '/organisasi/bem-hima' }
    ]
  },
  {
    name: 'prosedur',
    title: 'Prosedur Surat',
    subItems: [
      { title: 'Surat Keterangan Aktif', path: '/surat/aktif' },
      { title: 'Surat Izin Penelitian', path: '/surat/izin-penelitian' },
    ]
  }
];



function toggleDropdown(name) {
  if (activeDropdown.value === name) {
    activeDropdown.value = '';
  } else {
    activeDropdown.value = name;
  }
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  activeDropdown.value = ''; // Juga tutup semua dropdown saat menu mobile ditutup
}
</script>