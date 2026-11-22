# Developer Workflow Instructions

## 1. Tujuan

Mengubah kebutuhan pengguna menjadi perubahan software yang terencana, terbatas, dapat ditinjau, dan dapat diverifikasi. Fokus awal React + Vite, tetapi selalu ikuti stack yang benar-benar ditemukan.

Seluruh tindakan tulis tunduk pada [approval-policy.md](approval-policy.md).

## 2. Intake kebutuhan

Sebelum merencanakan implementasi, pahami:
- Masalah atau outcome yang ingin dicapai.
- Perilaku saat ini dan perilaku yang diharapkan.
- Pengguna/aktor dan alur yang terdampak.
- Batasan teknis, kompatibilitas, desain, aksesibilitas, dan performa.
- Kriteria penerimaan.
- Target repository dan branch/ref.

Ajukan hanya pertanyaan klarifikasi yang benar-benar menghalangi pekerjaan. Jangan meminta ulang informasi yang sudah tersedia.

## 3. Repository reconnaissance

1. Periksa metadata, branch/ref, tree, dan status file relevan.
2. Baca README, package manifest, lockfile, konfigurasi, dan dokumentasi terkait.
3. Identifikasi framework, runtime, package manager, lint/test/build commands.
4. Telusuri implementasi yang sudah ada sebelum membuat pola baru.
5. Identifikasi komponen, service, API, database, dan integrasi yang terpengaruh.
6. Periksa apakah ada perubahan terbaru yang dapat menyebabkan konflik.
7. Catat asumsi dan hal yang belum diketahui.

Jangan mengasumsikan perintah npm, yarn, pnpm, atau bun; gunakan package manager yang dibuktikan oleh lockfile dan dokumentasi proyek.

## 4. Rencana implementasi

Rencana harus menjelaskan:
- Pendekatan teknis dan alasan pemilihan.
- File yang akan dibuat/diubah/dihapus.
- Alur data dan dampak pada API/state/schema jika relevan.
- Perilaku UI termasuk loading, empty, success, error, dan disabled states.
- Accessibility, responsive behavior, dan kompatibilitas.
- Risiko regresi, security, dan performance.
- Test/check yang akan dilakukan.
- Hal yang tidak termasuk scope.

Pilih perubahan terkecil yang memenuhi acceptance criteria. Hindari refactor luas yang tidak diperlukan.

## 5. Approval gate

Sebelum menulis:
1. Tampilkan rencana dan daftar path.
2. Jelaskan apakah dependensi, konfigurasi, schema, atau layanan eksternal terpengaruh.
3. Jelaskan risiko dan rollback.
4. Minta persetujuan eksplisit.
5. Jangan melakukan perubahan sampai disetujui.

Jika implementasi menemukan kebutuhan baru di luar scope yang disetujui, berhenti dan minta persetujuan tambahan.

## 6. Implementasi

Setelah disetujui:
- Ikuti konvensi repository.
- Pertahankan perubahan tetap terfokus.
- Gunakan pola dan komponen yang sudah ada bila sesuai.
- Hindari menambah dependency jika kemampuan yang ada sudah memadai.
- Jangan menambahkan secret atau credential ke source.
- Validasi input di batas kepercayaan.
- Tangani error secara konsisten tanpa membocorkan detail sensitif.
- Perhatikan accessibility, semantic markup, keyboard support, dan responsive layout.
- Update dokumentasi bila perilaku atau setup berubah.
- Jangan mengubah file yang tidak termasuk scope tanpa approval.

### React + Vite considerations

Jika stack ini terdeteksi:
- Pertahankan pemisahan komponen, hooks, services, dan domain logic sesuai arsitektur proyek.
- Hindari side effect saat render.
- Pastikan hooks mengikuti Rules of Hooks.
- Kelola effect cleanup dan subscription lifecycle.
- Validasi route params dan external input.
- Hindari menaruh secret di variabel environment yang terekspos ke client.
- Gunakan lazy loading/code splitting bila sesuai.
- Pastikan UI menangani loading, error, empty, dan success states.
- Jangan mengubah build config atau routing strategy tanpa alasan dan persetujuan.

## 7. Integrasi API dan Supabase

- Pahami kontrak request/response dan pola error yang sudah ada.
- Jangan hardcode credential.
- Terapkan validasi dan authorization di server/trust boundary; client-side checks bukan pengganti authorization.
- Perhatikan timeout, retry yang aman, pagination, rate limits, dan cancellation.
- Untuk Supabase, periksa apakah operasi client-side dilindungi RLS dan policy yang sesuai.
- Jangan mengubah schema, migration, RLS policy, Edge Function, atau data tanpa approval khusus.
- Bila tidak ada akses remote, batasi klaim pada source/config yang tersedia.

## 8. Verifikasi

Pilih pemeriksaan yang sesuai dan tersedia:
- Format/lint.
- Type-check.
- Unit/integration/e2e tests.
- Build production.
- Pemeriksaan manual berbasis acceptance criteria.
- Review diff dan status repository.

Sebelum menjalankan command:
- Pastikan command berasal dari manifest/dokumentasi proyek atau telah diverifikasi.
- Pertimbangkan apakah command dapat mengubah file, mengakses jaringan, memakai secrets, atau memengaruhi layanan.
- Minta approval bila ada risiko perubahan state atau akses eksternal yang tidak tercakup.

Catat hasil dengan status:
- Passed.
- Failed.
- Skipped (dengan alasan).
- Not run (dengan alasan).

Jangan menyatakan test passed jika hanya membaca konfigurasi atau meninjau kode.

## 9. Review sebelum selesai

Periksa:
- Diff hanya berisi perubahan yang disetujui.
- Tidak ada secret, debug output, atau file sementara yang tidak disengaja.
- Error handling dan edge cases ditangani.
- Dokumentasi dan tipe sesuai perubahan.
- Tidak ada perubahan tidak terkait.
- Acceptance criteria terpenuhi atau kekurangannya dinyatakan.

## 10. Completion report

Laporkan:
1. Ringkasan perubahan.
2. File yang dibuat/diubah/dihapus.
3. Keputusan teknis penting.
4. Pemeriksaan yang dijalankan dan hasilnya.
5. Pemeriksaan yang tidak dijalankan dan alasannya.
6. Commit/PR reference jika benar-benar dibuat dan terverifikasi.
7. Risiko atau pekerjaan tersisa.

Jangan melakukan merge, deployment, atau release kecuali tindakan tersebut secara terpisah disetujui.
