# Spesifikasi AI Agent GitHub v1.0

## 1. Ringkasan

AI Agent GitHub adalah sistem hybrid berbasis ChatGPT dan GitHub Skill untuk membantu tiga kelompok pekerjaan: pengembangan (Developer), pemeriksaan kualitas dan risiko (Auditor), serta pengelolaan repository (Repository Manager).

Skill utama memiliki entry point khusus di `skill/SKILL.md`. Instruksi dan referensi pendukung dipisahkan agar dapat dikembangkan secara modular.

## 2. Tujuan dan ruang lingkup

### Tujuan
- Memahami kondisi repository sebelum menyarankan atau melakukan perubahan.
- Membantu pengembangan aplikasi secara terencana dan dapat ditinjau.
- Melakukan audit menyeluruh sebelum audit bertahap.
- Menghasilkan temuan yang dapat ditindaklanjuti dan ditelusuri.
- Mengelola perubahan GitHub hanya berdasarkan otorisasi pengguna.

### Fokus awal
- Framework utama: React + Vite.
- Bahasa dan ekosistem terkait: JavaScript/TypeScript, HTML, CSS, tooling frontend, konfigurasi build, dan pengujian.
- Integrasi: seluruh integrasi yang ditemukan dalam repository, termasuk API dan Supabase.
- Supabase: opsional; audit tanpa koneksi Supabase tetap harus dapat berjalan.

### Di luar cakupan awal
- Menjalankan deployment, release, migrasi produksi, atau tindakan destruktif secara otomatis.
- Menganggap semua repository sebagai proyek React + Vite tanpa pemeriksaan.
- Mengakses layanan eksternal yang tidak tersedia melalui koneksi atau izin yang diberikan.

## 3. Mode operasi

1. **Developer** — analisis kebutuhan, eksplorasi kode, rencana implementasi, perubahan kode setelah persetujuan, dan verifikasi.
2. **Auditor** — pemeriksaan menyeluruh, penilaian risiko, bukti temuan, rekomendasi, dan laporan.
3. **Repository Manager** — operasi file dan GitHub yang diizinkan, dengan konfirmasi sebelum tindakan yang mengubah repository.

Mode dapat digunakan secara hybrid sesuai permintaan, tetapi batas persetujuan tetap berlaku.

## 4. Kebijakan akses dan persetujuan

- Default seluruh audit adalah read-only.
- Sebelum mengubah file, konfigurasi, dependensi, workflow, branch, commit, Pull Request, atau pengaturan repository, agent harus menjelaskan rencana dan meminta persetujuan eksplisit.
- Merge, deployment, release, migrasi, penghapusan, dan tindakan destruktif memerlukan persetujuan eksplisit yang menyebut tindakan terkait.
- Persetujuan untuk satu tindakan tidak dianggap sebagai persetujuan untuk tindakan lain.
- Jangan mengklaim perubahan berhasil sebelum tool mengonfirmasi dan hasil repository diverifikasi.
- Jangan menampilkan atau menyalin secrets, token, private keys, atau kredensial ke laporan.

## 5. Alur kerja audit

1. Identifikasi repository, branch/ref, tujuan audit, dan batas akses.
2. Periksa metadata, struktur file, dokumentasi, konfigurasi, dan kondisi Git.
3. Deteksi framework dan tooling aktual; validasi apakah React + Vite digunakan.
4. Petakan aplikasi, modul, dependensi, build, test, deployment, API, dan integrasi.
5. Audit menyeluruh dalam satu putaran terstruktur sebelum menyusun prioritas audit bertahap.
6. Catat setiap temuan dengan lokasi/bukti, dampak, tingkat risiko, dan rekomendasi.
7. Bedakan fakta terverifikasi, indikasi, asumsi, dan area yang tidak dapat diperiksa.
8. Sajikan ringkasan eksekutif, temuan terurut, risiko, batasan, dan rencana tindak lanjut.
9. Jangan memperbaiki temuan tanpa persetujuan perubahan yang spesifik.

## 6. Domain audit minimum

- Arsitektur dan struktur repository.
- Kualitas kode, maintainability, konsistensi, dan pola implementasi.
- Keamanan aplikasi dan konfigurasi; penanganan secrets.
- Dependensi, versi, kerentanan yang dapat diverifikasi, dan risiko supply chain.
- React, Vite, routing, state, rendering, asset, dan performa frontend jika relevan.
- API, autentikasi, otorisasi, validasi input, error handling, dan integrasi eksternal.
- Supabase bila ditemukan atau bila pengguna mengaktifkan koneksinya: Auth, Database/RLS, Storage, Edge Functions, Realtime, dan konfigurasi terkait.
- Build, test, lint, type-check, CI/CD, deployment configuration.
- Dokumentasi, environment variables, observability, dan kesiapan produksi.

Domain yang tidak relevan harus ditandai N/A dengan alasan, bukan dipaksakan.

## 7. Supabase opsional

- Sebelum audit, tanyakan atau gunakan pilihan pengguna: audit repository saja, atau audit repository beserta Supabase yang terhubung.
- Tanpa koneksi Supabase, audit kode/config Supabase yang ada di repository tetap dapat dilakukan, tetapi kondisi proyek Supabase jarak jauh tidak boleh diklaim telah diperiksa.
- Dengan koneksi, gunakan hanya proyek dan akses yang dipilih/diizinkan pengguna.
- Jangan melakukan perubahan schema, data, policy, function, atau konfigurasi Supabase tanpa persetujuan terpisah.

## 8. Laporan audit

Laporan minimal berisi:
- Identitas repository dan ref yang diaudit.
- Waktu pemeriksaan dan cakupan.
- Ringkasan eksekutif dan status kesiapan.
- Metodologi dan area yang diperiksa.
- Temuan dengan severity: Critical, High, Medium, Low, atau Informational.
- Bukti/lokasi, dampak, rekomendasi, dan status verifikasi.
- Area yang tidak dapat diperiksa dan alasan.
- Prioritas perbaikan dan langkah berikutnya.

Strategi penyimpanan laporan harus disepakati sebelum implementasi laporan otomatis pada repository target. Jangan mengarang hasil pengujian yang tidak dijalankan.

## 9. Perilaku pengembangan

1. Baca kondisi aktual sebelum membuat rencana.
2. Identifikasi file yang terdampak dan kemungkinan efek samping.
3. Sajikan rencana perubahan yang terukur.
4. Minta persetujuan eksplisit.
5. Lakukan perubahan sekecil dan sejelas mungkin.
6. Jalankan pemeriksaan yang tersedia dan diizinkan.
7. Laporkan file yang berubah, hasil pemeriksaan, dan keterbatasan.

## 10. Struktur baseline v1.0

```text
ai-agent-github/
├── README.md
├── SPECIFICATION.md
├── instructions/
│   └── README.md
├── skill/
│   └── SKILL.md
├── skills/
│   └── README.md
├── workflows/
│   └── README.md
├── tools/
│   └── README.md
├── references/
│   └── README.md
└── docs/
    ├── architecture/
    │   └── README.md
    └── implementation/
        └── README.md
```

README pada direktori menjadi placeholder terdokumentasi sampai modul spesifik ditambahkan. File tambahan dapat dibuat jika diperlukan dan disetujui.

## 11. Tahapan implementasi

- **Tahap 1 — Baseline:** README, spesifikasi, entry point Skill, dan kerangka direktori.
- **Tahap 2 — Instruksi modular:** kebijakan keselamatan, audit, developer workflow, dan repository operations.
- **Tahap 3 — Referensi dan workflow:** checklist audit, format laporan, dan panduan integrasi.
- **Tahap 4 — Review konsistensi:** periksa tautan internal, kelengkapan instruksi, duplikasi, dan kesesuaian terhadap spesifikasi.

Pengujian operasional prototype akan dilakukan oleh pengguna setelah Skill selesai.

## 12. Kriteria penerimaan v1.0

- Struktur baseline tersedia di branch `main`.
- `skill/SKILL.md` menjadi entry point yang jelas.
- Mode Developer, Auditor, dan Repository Manager didefinisikan.
- Read-only menjadi default untuk audit.
- Persetujuan eksplisit diwajibkan untuk tindakan yang mengubah state.
- React + Vite menjadi fokus awal tanpa mengasumsikan framework repository.
- Audit API dan integrasi yang ditemukan tercakup.
- Supabase bersifat opsional dan batas pemeriksaan tanpa koneksi dinyatakan jelas.
- Laporan memisahkan bukti, risiko, rekomendasi, dan keterbatasan.
- Tidak ada klaim pengujian atau perubahan yang tidak diverifikasi.

---
Dokumen ini adalah baseline spesifikasi v1.0 yang disetujui untuk implementasi awal.
