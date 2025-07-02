// File: src/data/sopData.ts

import { ssrIncludeBooleanAttr } from "vue/server-renderer";

// Kita tambahkan 'export' di sini
export const allSopData = {
  kemahasiswaan: {
    title: "SOP BIDANG KEMAHASISWAAN",
    items: [
      { 
        id: 1, 
        title: 'Penerimaan Mahasiswa Baru PLAI', 
        date: 'Selasa, 06 Mei 2025 16:12', 
        size: '1.5MB',
        previewUrl: 'https://drive.google.com/file/d/1vZhHrIo-H9TnZFWqD3fb3z2l9AJl911w/preview', 
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1vZhHrIo-H9TnZFWqD3fb3z2l9AJl911w' 
      },
      { 
        id: 2, 
        title: 'Registrasi dan Heregistrasi PLAI', 
        date: 'Senin, 05 Mei 2025 10:00', 
        size: '1.2MB', 
        previewUrl: 'https://drive.google.com/file/d/1AiiNEnPCT8ZCDNIAKaJcBrSdBd4Aieqn/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1AiiNEnPCT8ZCDNIAKaJcBrSdBd4Aieqn'
      },
      { 
        id: 3, 
        title: 'Peringatan dan Pemberhentian Mahasiswa PLAI', 
        date: 'Senin, 05 Mei 2025 10:00', 
        size: '1.2MB', 
        previewUrl: 'https://drive.google.com/file/d/1-D9fJDaiCearRGNmYMAn606lbe1F8riT/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1-D9fJDaiCearRGNmYMAn606lbe1F8riT'
      },
      { 
        id: 4, 
        title: 'Surat Keterangan Aktif Kuliah PLAI', 
        date: 'Senin, 05 Mei 2025 10:00', 
        size: '1.2MB', 
        previewUrl: 'https://drive.google.com/file/d/1jeGWDWj5v41Sskgk5gLFBaVOTFgU50FE/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1jeGWDWj5v41Sskgk5gLFBaVOTFgU50FE'
      },
      { 
        id: 5, 
        title: 'Penerimaan Beasiswa PLAI', 
        date: 'Senin, 05 Mei 2025 10:00', 
        size: '1.2MB', 
        previewUrl: 'https://drive.google.com/file/d/1VgdUMDX_eeu_v-Xpe4SBggyaSQBL8zlt/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1VgdUMDX_eeu_v-Xpe4SBggyaSQBL8zlt'
      }
    ]
  },
  akademik: {
    title: "SOP BIDANG AKADEMIK",
    items: [
      { 
        id: 6, 
        title: 'Pelaksanaan Ujian Akhir Semester PLAI', 
        date: 'Rabu, 07 Mei 2025 09:30', 
        size: '2.1MB', 
        previewUrl: 'https://drive.google.com/file/d/1jm58P2dAzi1lbTffV-UjvRu0YNtjYBX8/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1jm58P2dAzi1lbTffV-UjvRu0YNtjYBX8'
      },
      { 
        id: 7, 
        title: 'Rencana Studi Semester Pendek PLAI', 
        date: 'Rabu, 07 Mei 2025 09:30', 
        size: '2.1MB', 
        previewUrl: 'https://drive.google.com/file/d/1SNgD71m8JLlcYGoQkQWUZuyv73Oa0OiX/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1SNgD71m8JLlcYGoQkQWUZuyv73Oa0OiX'
      },
      { 
        id: 8, 
        title: 'Pelaksanaan Wisuda PLAI', 
        date: 'Rabu, 07 Mei 2025 09:30', 
        size: '2.1MB', 
        previewUrl: 'https://drive.google.com/file/d/1HJ-vqN0OWqvKZuTs_A9mhc7ARHpRfOGy/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1HJ-vqN0OWqvKZuTs_A9mhc7ARHpRfOGy'
      },
      { 
        id: 9, 
        title: 'Pengurusan Istirahat Kuliah PLAI', 
        date: 'Rabu, 07 Mei 2025 09:30', 
        size: '2.1MB', 
        previewUrl: 'https://drive.google.com/file/d/1VFqjcIMCjFyUC7OdR7sIaD30Mz6MSqbI/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1VFqjcIMCjFyUC7OdR7sIaD30Mz6MSqbI'
      },
      { 
        id: 10, 
        title: 'Pelaksanaan Ujian Tengah Semester PLAI', 
        date: 'Rabu, 07 Mei 2025 09:30', 
        size: '2.1MB', 
        previewUrl: 'https://drive.google.com/file/d/1uVGy3-QQ8AMDawhf8QWlND-fdgRnInPe/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1uVGy3-QQ8AMDawhf8QWlND-fdgRnInPe'
    }
]
},
pdpt: {
    title: "SOP BIDANG PDPT",
    items: [
        { 
          id:11, 
          title: 'Pengisian Pangkalan Data Perguruan Tinggi PLAI', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1mEWRYVNpOg3lqJv0YKZHVkqzkKV5imAh/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1mEWRYVNpOg3lqJv0YKZHVkqzkKV5imAh'
        },
        { 
          id:12, 
          title: 'SOP Pelaporan PDDIKTI', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1eg4Epy5F6jmpMZlK5yMal3lY7TjbIKjv/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1eg4Epy5F6jmpMZlK5yMal3lY7TjbIKjv'
        },
        { 
          id:13, 
          title: 'SOP Pengajuan NIDN', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1nH-mCno4lHfIt6fY6H9yYrmK6CQi8YGd/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1nH-mCno4lHfIt6fY6H9yYrmK6CQi8YGd'
        },
        { 
          id:14, 
          title: 'SOP Perbaikan Data Mahasiswa dan Lulusan', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1zgKTDpDFVCVx64s9t7A6yB2bXuI6578A/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1zgKTDpDFVCVx64s9t7A6yB2bXuI6578A'
        },
        { 
          id:15, 
          title: 'SOP PIN', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1qLSY7IHfV9vov8pO2cnvRv0226l6iz4l/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1qLSY7IHfV9vov8pO2cnvRv0226l6iz4l'
        }
    ]
},
'bisnis-baak': {
    title: "PETA PROSES BISNIS BAAK",
    items: [
      { 
          id: 16, 
          title: 'SOP Pengajuan Beasiswa Prestasi', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1kYpXA4gPiE8ynQi7OF_HWOF3Zs78CDm8/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1kYpXA4gPiE8ynQi7OF_HWOF3Zs78CDm8'
        },
        
      ]
    },
sidebar: {
    title: "",
    items: [
        { 
          id:11, 
          title: 'Pengisian Pangkalan Data Perguruan Tinggi PLAI', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1mEWRYVNpOg3lqJv0YKZHVkqzkKV5imAh/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1mEWRYVNpOg3lqJv0YKZHVkqzkKV5imAh'
        },
        { 
          id:12, 
          title: 'SOP Pelaporan PDDIKTI', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1eg4Epy5F6jmpMZlK5yMal3lY7TjbIKjv/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1eg4Epy5F6jmpMZlK5yMal3lY7TjbIKjv'
        },
        { 
          id:13, 
          title: 'SOP Pengajuan NIDN', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1nH-mCno4lHfIt6fY6H9yYrmK6CQi8YGd/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1nH-mCno4lHfIt6fY6H9yYrmK6CQi8YGd'
        },
        { 
          id:14, 
          title: 'SOP Perbaikan Data Mahasiswa dan Lulusan', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1zgKTDpDFVCVx64s9t7A6yB2bXuI6578A/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1zgKTDpDFVCVx64s9t7A6yB2bXuI6578A'
        },
        { 
          id:15, 
          title: 'SOP PIN', 
          date: 'Rabu, 07 Mei 2025 09:30', 
          size: '2.1MB', 
          previewUrl: 'https://drive.google.com/file/d/1qLSY7IHfV9vov8pO2cnvRv0226l6iz4l/preview',
          downloadUrl: 'https://drive.google.com/uc?export=download&id=1qLSY7IHfV9vov8pO2cnvRv0226l6iz4l'
        }
    ]
}
};

