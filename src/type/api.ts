// File: src/types/api.ts

// Mendefinisikan bentuk objek Kategori yang akan kita terima dari API
// Ini adalah versi ideal yang seharusnya dikembalikan oleh /getCategory
export interface Category {
  id: number;
  slug: string;
  title: string;
  description: string;
}

// Mendefinisikan bentuk objek Item SOP dari API teman Anda
export interface SopItem {
  id: number;
  title: string;
  size: number;
  previewUrl: string;
  downloadUrl: string;
  date: string;
  category_id: number;
}