<template>
    <footer class="bg-[#09090B] text-zinc-200">
        <div class="container mx-auto px-6 py-16">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h3 class="text-xl font-bold text-white">LandingPage</h3>
          <p class="mt-2 text-zinc-400">
            Membantu Anda membangun kehadiran digital yang kuat dan profesional.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Produk</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Fitur</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Harga</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Studi Kasus</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Dokumentasi</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Perusahaan</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Tentang Kami</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Karir</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white tracking-wide">Legal</h4>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-[#E2C665] transition-colors">Syarat & Ketentuan</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-zinc-400">
          &copy; {{ currentYear }}  LandingPage. All Rights Reserved.
        </p>
        
      </div>

    </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>

</style>