# AI Agent GitHub

AI Agent + GitHub Skill untuk pengembangan software, audit menyeluruh, dan pengelolaan repository melalui integrasi GitHub di ChatGPT.

## Aktivasi sederhana

`jalankan $github ai agent github`

Setelah aktif, agent mengambil daftar repository yang dapat diakses, meminta pengguna memilih target dan branch/ref, lalu menanyakan atau menjalankan tujuan yang dinyatakan. Aktivasi tidak otomatis memicu audit atau perubahan.

Repository `appletheexchangetrx/ai-agent-github` adalah sumber Skill, bukan target kerja default. Gunakan sebagai target hanya jika dipilih secara eksplisit. Jika listing GitHub gagal atau tidak lengkap, jelaskan keterbatasannya dan jangan mengarang daftar.

## Status

- **Versi:** v1.1
- **Branch implementasi:** main
- **Framework fokus awal:** React + Vite, dengan deteksi stack aktual.
- **Supabase:** opsional.
- **Model eksekusi:** autonomous setelah persetujuan scope; tindakan berisiko tinggi tetap memiliki approval gate tersendiri.
- **Pengujian runtime Skill:** harus dilakukan pengguna; dokumentasi dan repository checks tidak membuktikan integrasi runtime ChatGPT telah diuji.

## Kapabilitas

1. **Frontend Developer** — UI/UX, React, responsive design, component architecture, client state, accessibility, dan frontend testing.
2. **Backend Developer** — API, server-side business logic, authentication, authorization, database, integrations, security, dan backend testing.
3. **Fullstack Developer** — implementasi end-to-end lintas UI, API, business logic, database, dan integration testing.
4. **Auditor** — comprehensive audit arsitektur, kualitas kode, keamanan, konfigurasi, dependensi, API, dan integrasi.
5. **Repository Manager** — operasi file dan GitHub sesuai otorisasi.

Orchestrator memilih satu atau beberapa spesialisasi secara otomatis berdasarkan tujuan pengguna. Pengguna tidak perlu menghafal mode atau nama workflow.

## Autonomous execution policy

- Agent melakukan discovery, analisis, pemilihan spesialisasi, perencanaan, implementasi dalam scope yang disetujui, testing, debugging, dan verifikasi secara mandiri.
- Sebelum batch implementasi, agent menyajikan target repository/ref, daftar file/resource, perubahan, dampak, risiko, rollback, dan pemeriksaan; pengguna menyetujui scope tersebut.
- Setelah scope disetujui, agent boleh menyelesaikan seluruh perubahan dalam scope tanpa meminta persetujuan per file.
- Perubahan material di luar scope membutuhkan persetujuan tambahan.
- Audit tetap read-only; temuan audit tidak otomatis diperbaiki.
- Merge, deployment, release, production migration, destructive data operations, secrets changes, dan tindakan produksi/berisiko tinggi memerlukan persetujuan khusus.
- Semua hasil tool dan state repository harus diverifikasi. Jangan mengklaim test atau perubahan berhasil tanpa bukti.

## Supabase optional

Repository-only development/audit tetap dapat dilakukan tanpa koneksi Supabase. Jika Supabase ditemukan dan koneksi diaktifkan, periksa hanya project yang dipilih/diizinkan. Tanpa koneksi, klaim dibatasi pada source/config yang tersedia di repository. Perubahan remote schema, data, RLS, functions, atau settings membutuhkan approval khusus.

## Dokumentasi

- [Spesifikasi v1.1](SPECIFICATION.md)
- [Main Skill entry point](skill/SKILL.md)
- [Modular instructions](instructions/README.md)
- [Specialized Skills](skills/README.md)
- [Workflows](workflows/README.md)
- [Audit references](references/README.md)

## Status tahapan

- [x] Baseline v1.0 dan instruksi modular.
- [x] Frontend, Backend, dan Fullstack specialization v1.1.
- [x] Autonomous scope approval dan execution policy.
- [x] Dokumentasi index dan cross-reference.
- [ ] Pengujian operasional oleh pengguna.

Status implementasi dokumentasi tidak menyatakan bahwa runtime Skill, koneksi ChatGPT, atau perilaku operasional telah diuji.
