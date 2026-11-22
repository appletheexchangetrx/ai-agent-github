# AI Agent GitHub

AI Agent + GitHub Skill untuk membantu pengembangan, audit, dan pengelolaan repository secara terstruktur melalui integrasi GitHub di ChatGPT.

## Aktivasi sederhana

Untuk memulai, pengguna cukup memberikan instruksi:

`jalankan $github ai agent github`

Setelah aktif, AI Agent menggunakan koneksi GitHub untuk mengambil dan menampilkan daftar repository yang dapat diakses akun pengguna. Agent meminta pengguna memilih repository terlebih dahulu, lalu mengonfirmasi branch/ref sebelum memeriksa kondisi repository dan menjalankan tugas.

Repository `appletheexchangetrx/ai-agent-github` adalah repository sumber Skill, bukan target kerja default. Repository tersebut hanya boleh menjadi target jika dipilih secara eksplisit oleh pengguna.

Jika koneksi GitHub tidak tersedia atau daftar repository tidak dapat diambil secara lengkap, agent harus menjelaskan keterbatasannya dan meminta pengguna menghubungkan GitHub atau menyebut repository yang dimaksud. Agent tidak boleh mengarang daftar atau memilih repository secara diam-diam.

Aktivasi dan pemilihan repository tidak otomatis menjalankan audit atau mengubah repository. Semua kebijakan read-only dan persetujuan eksplisit tetap berlaku.

## Status

- **Versi:** v1.0
- **Status implementasi:** Implementasi struktur dan dokumentasi selesai; menunggu pengujian operasional oleh pengguna.
- **Branch kerja:** main
- **Framework fokus awal:** React + Vite, dengan deteksi stack aktual.
- **Supabase:** Integrasi dan audit proyek terhubung bersifat opsional.

## Kapabilitas

1. **Developer** — memahami kebutuhan, menganalisis repository, merencanakan, dan mengimplementasikan perubahan setelah persetujuan.
2. **Auditor** — melakukan audit menyeluruh terhadap arsitektur, kualitas kode, keamanan, konfigurasi, dependensi, API, dan integrasi yang ditemukan.
3. **Repository Manager** — membantu mengelola file dan operasi GitHub dengan persetujuan eksplisit.

## Prinsip keselamatan

- Audit berjalan dalam mode read-only secara default.
- Tidak ada perubahan file, konfigurasi, dependensi, Git, Pull Request, merge, deployment, atau release tanpa persetujuan eksplisit sesuai cakupan tindakan.
- Temuan audit harus memisahkan bukti, status verifikasi, dampak, dan rekomendasi.
- Supabase bersifat opsional; audit repository tetap dapat dilakukan tanpa koneksi Supabase.
- Semua operasi GitHub harus diverifikasi dari hasil aktual, bukan diasumsikan berhasil.
- Pengujian operasional belum diklaim selesai; pengujian tersebut akan dilakukan oleh pengguna.

## Struktur dan dokumentasi

- [Spesifikasi v1.0](SPECIFICATION.md) — tujuan, ruang lingkup, kebijakan, struktur aktual, dan kriteria penerimaan.
- [Skill entry point](skill/SKILL.md) — instruksi utama, termasuk aktivasi sederhana.
- [Modular instructions](instructions/README.md) — approval policy dan mode kerja.
- [Workflows](workflows/README.md) — discovery, comprehensive audit, dan remediation.
- [References](references/README.md) — checklist dan template audit.

## Status tahapan

- [x] Tahap 1 — Baseline repository.
- [x] Tahap 2 — Instruksi modular.
- [x] Tahap 3 — Referensi dan workflow.
- [x] Tahap 4 — Review konsistensi dan finalisasi dokumentasi.
- [ ] Pengujian operasional oleh pengguna.

Implementasi v1.0 dinyatakan selesai pada tingkat struktur dan dokumentasi setelah seluruh file diverifikasi di branch main. Status ini tidak menyatakan bahwa runtime Skill, integrasi ChatGPT, atau perilaku operasional telah diuji.

## Pengembangan

Perubahan lanjutan dilakukan berdasarkan spesifikasi dan approval yang relevan. Jangan menganggap status implementasi selesai sebagai izin untuk melakukan perubahan, merge, deployment, atau release.
