// Definisikan "bentuk" dari setiap item link di sidebar
export interface SidebarLink {
  title: string;
  url: string;
  isExternal: boolean; // true jika link ke Google Drive, false jika ke halaman lain di situs
}

// Inilah daftar link sidebar Anda dengan URL yang sudah diperbarui
export const sidebarLinks: SidebarLink[] = [
  {
    title: 'Informasi Pendaftaran Wisuda Online',
    url: '/pendaftaran/wisuda', // Ini adalah link internal, tidak diubah
    isExternal: false
  },
  {
    title: 'Panduan Penggunaan Absensi Kuliah Online',
    url: 'https://drive.google.com/file/d/194wZy44hpdSN9cMFEIfDPth5WGp7jDS7/view?usp=drive_link',
    isExternal: true
  },
  {
    title: 'Kartu Kontrol Absensi Dosen',
    url: 'https://drive.google.com/file/d/1wtTXAzJS5CWBzWBp8M6mdM9z5sII5Hsy/view?usp=drive_link',
    isExternal: true
  },
  {
    title: 'Panduan Mahasiswa Pra Registrasi (KRS-Online)',
    url: 'https://drive.google.com/file/d/1qdFAmLkubHVRbBg8rIDUhcFH7e6odpeU/view?usp=drive_link',
    isExternal: true
  },
  {
    title: 'Panduan Sister untuk Dosen',
    url: 'https://drive.google.com/file/d/1yEf_0YNAPFONvyz_O5LE9EfHJZrY8H3l/view?usp=drive_link',
    isExternal: true
  },
  {
    title: 'Panduan Sister Untuk Karyawan',
    url: 'https://drive.google.com/file/d/1tPdnCO7ugW3j5SH_ilye5SUrLFkJhQ2s/view?usp=drive_link',
    isExternal: true
  }
];