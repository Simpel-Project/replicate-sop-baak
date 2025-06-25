# Cara Push ke GitHub Repository

## Persiapan Awal
Lakukan langkah ini jika belum ada folder `.git` pada folder project-mu:
```bash
git init
git add .
git commit -m 'TULIS_PESAN'
git remote add NAMA_REMOTE URL_REPOSITORY
```

## Ambil Update Project
Jika repository project di GitHub mengalami perubahan (olehmu di komputer lain atau oleh orang lain),
gunakan perintah berikut untuk mengambil dan menggabungkan perubahan terbaru ke dalam project localmu:
```bash
git pull NAMA_REMOTE NAMA_BRANCH
```
Ini akan mengambil perubahan dari branch yang kamu tuju, menggunakan remote yang
telah di tentukan lalu menggabungkan-nya ke branch local mu saat ini.
### Catatan
```md
⚠️ Pastikan kamu berada di branch local yang sesuai sebelum menjalankan `git pull`, 
agar tidak terjadi konflik saat penggabungan ⚠️
```

## Push
Push project ke repository setelah melakukan persiapan awal:
```bash
git push NAMA_REMOTE NAMA_BRANCH
```
### Catatan
```md
⚠️ Pastikan kamu sudah pindah branch sebelum di push, misal di
 branch dev1 ⚠️
```

## Pindah Branch 
Pindah ke branch lain jika mau tambahakan fitur atau beri update:
```bash
git checkout NAMA_BRANCH
```

## Buat Branch Baru
Buat branch baru jika mau menambah fitur dan branch yang
ada sekarang sedang di gunakan:
```bash
git branch NAMA_BRANCH
```

## Melihat Status
Lihat status ini hanya dipakai jika kalian lupa sudah sampai
langkah mana:
```bash
git status
```
