    // File: src/services/apiService.ts

    import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

    // 1. Impor 'tipe data' lengkap dari file terpisah kita
    import type { Category, SopItem } from '../type/api'

    // 2. Konfigurasi dasar untuk Axios (API Client Anda)
    const apiClient = axios.create({
    baseURL: 'http://192.168.22.23:3000',
    headers: {
        'Content-Type': 'application/json'
    }
    });

    // 3. Fungsi 'request' generik untuk menangani semua panggilan dan error
    const request = async <T>(config: AxiosRequestConfig): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await apiClient.request(config);
        return response.data;
    } catch (error) {
        // Menangani error secara terpusat
        if (axios.isAxiosError(error)) {
        console.error('API request failed (Axios Error):', error.response?.data || error.message);
        } else {
        console.error('API request failed (Unknown Error):', error);
        }
        // Lemparkan error lagi agar komponen yang memanggilnya tahu ada masalah
        throw new Error('Gagal berkomunikasi dengan server.');
    }
    };

    // 4. Fungsi spesifik untuk mengambil daftar kategori (sekarang menggunakan tipe Category)
    export const getCategories = async (): Promise<Category[]> => {
    // Beri tahu 'request' bentuk data yang kita harapkan: { result: Category[] }
    const data = await request<{ result: Category[] }>({
        url: '/getCategory',
        method: 'GET',
    });
    // Jika data null (error) atau tidak ada result, kembalikan array kosong
    return data?.result || [];
    };

    // 5. Fungsi spesifik untuk mengambil item SOP berdasarkan ID kategori
    export const getSopItemsByCategory = async (categoryId: number): Promise<SopItem[]> => {
    const data = await request<{ result: SopItem[] }>({
        url: '/getData',
        method: 'GET',
        params: {
        category_id: categoryId // Axios akan mengubah ini menjadi ?category_id=...
        }
    });
    return data?.result || [];
    };
