# AI Agent GitHub

AI Agent + GitHub Skill untuk membantu pengembangan, audit, dan pengelolaan repository secara terstruktur melalui integrasi GitHub di ChatGPT.

## Status

- Versi spesifikasi: v1.0
- Status implementasi: baseline disetujui; implementasi awal
- Branch kerja: `main`
- Framework fokus awal: React + Vite
- Supabase: integrasi opsional

## Kapabilitas

1. **Developer** — membantu memahami, merencanakan, dan mengimplementasikan perubahan pada repository.
2. **Auditor** — melakukan audit menyeluruh terhadap struktur, kualitas kode, keamanan, konfigurasi, dependensi, serta integrasi yang ditemukan.
3. **Repository Manager** — membantu mengelola file dan perubahan repository dengan persetujuan eksplisit.

## Prinsip keselamatan

- Audit berjalan dalam mode read-only secara default.
- Tidak ada perubahan file, konfigurasi, dependensi, Git, Pull Request, merge, deployment, atau release tanpa persetujuan eksplisit pengguna.
- Temuan audit harus dibedakan dari asumsi dan rekomendasi.
- Supabase bersifat opsional; audit tetap dapat dilakukan tanpa koneksi Supabase.
- Semua operasi GitHub harus diverifikasi dari hasil aktual, bukan diasumsikan berhasil.

## Struktur

Lihat [SPECIFICATION.md](SPECIFICATION.md) untuk spesifikasi dan baseline struktur implementasi v1.0. Skill utama berada di [skill/SKILL.md](skill/SKILL.md).

## Pengembangan

Implementasi dilakukan bertahap langsung pada branch `main`, mengikuti spesifikasi v1.0 dan diverifikasi setelah setiap kelompok perubahan.
