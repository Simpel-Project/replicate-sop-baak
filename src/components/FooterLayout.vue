<template>
  <footer class="bg-main text-zinc-200 font-display">
    <div class="container mx-auto px-6 py-16">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        
        <div>
          <img 
            :src="logoUrl" 
            alt="Logo BAAK Universitas" 
            class="h-20 mb-7"
          >
          <p class="mt-2 text-zinc-400 leading-relaxed">
            Pusat layanan administrasi akademik dan kemahasiswaan untuk mendukung kelancaran studi Anda.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Layanan Utama</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="/akademik/kalender" class="hover:text-secondary transition-colors">Kalender Akademik</a></li>
            <li><a href="/kemahasiswaan/beasiswa" class="hover:text-secondary transition-colors">Informasi Beasiswa</a></li>
            <li><a href="/akademik/wisuda" class="hover:text-secondary transition-colors">Pendaftaran Wisuda</a></li>
            <li><a href="/layanan/transkrip" class="hover:text-secondary transition-colors">Layanan Transkrip</a></li>
            <li><a href="https://siakad.namauniv.ac.id" target="_blank" class="hover:text-secondary transition-colors">SIAKAD</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Navigasi</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="/" class="hover:text-secondary transition-colors">Beranda</a></li>
            <li><a href="/tentang" class="hover:text-secondary transition-colors">Tentang BAAK</a></li>
            <li><a href="/sop" class="hover:text-secondary transition-colors">SOP Layanan</a></li>
            <li><a href="/berita" class="hover:text-secondary transition-colors">Berita & Pengumuman</a></li>
            <li><a href="/faq" class="hover:text-secondary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Hubungi Kami</h4>
          <ul class="mt-4 space-y-2 text-zinc-400">
            <li class="leading-relaxed">Gedung Rektorat Lt. 1, Kampus Terpadu</li>
            <li class="leading-relaxed">Jl. Pendidikan No. 1, Depok, Yogyakarta</li>
            <li>Telepon: (0274) 123-456</li>
            <li>Email: baak@namauniv.ac.id</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-zinc-800 text-center">
        <p class="text-sm text-zinc-500">
          &copy; {{ currentYear }} BAAK Universitas [Nama Universitas]. Hak Cipta Dilindungi.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
// Ganti 'logo-baak.png' dengan nama file logo Anda yang sebenarnya
import logoUrl from '../assets/BMD-LOGO.png'; 

const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Scoped styles jika diperlukan */
</style>