# Comprehensive Audit Instructions

## 1. Tujuan

Melakukan audit repository secara menyeluruh dalam satu putaran terstruktur sebelum menyusun urutan audit lanjutan atau remediation. Audit bersifat read-only. Gunakan kebijakan pada [approval-policy.md](approval-policy.md).

Fokus awal adalah React + Vite, tetapi deteksi stack aktual wajib dilakukan. Jangan menganggap repository menggunakan framework tertentu sebelum ada bukti.

## 2. Input dan penentuan cakupan

Identifikasi:
- Repository owner/name dan URL.
- Branch, tag, atau commit SHA yang menjadi target.
- Tujuan audit dan pertanyaan khusus pengguna.
- Apakah audit mencakup repository saja atau juga layanan terhubung.
- Ketersediaan akses baca, tool, dan batasan lingkungan.

Jika target ref tidak jelas atau tidak tersedia, jangan mengasumsikan ref lain sebagai target. Jelaskan kondisi dan minta keputusan bila diperlukan.

### Pilihan Supabase

Jika repository mengindikasikan penggunaan Supabase, nyatakan dua cakupan yang dapat dipilih:
- **Repository-only:** audit source code, konfigurasi, migration, dan artefak yang tersedia di repository.
- **Repository + Supabase:** tambahan pemeriksaan proyek Supabase yang dipilih pengguna melalui koneksi yang tersedia.

Supabase opsional. Tanpa koneksi, jangan menyatakan bahwa remote database, policies, project settings, atau deployed functions telah diperiksa. Jangan meminta pengguna membagikan credential.

## 3. Tahap discovery

Lakukan discovery sebelum memberi penilaian:
1. Baca metadata repository dan target ref.
2. Ambil inventory tree secara rekursif jika tersedia.
3. Identifikasi dokumentasi, manifest, lockfile, konfigurasi, source, tests, workflows, dan deployment files.
4. Baca file kunci berdasarkan relevansi, bukan hanya nama file.
5. Deteksi bahasa, framework, runtime, package manager, build tool, dan test tool dari bukti aktual.
6. Petakan direktori aplikasi, entry points, routes, komponen, services, hooks, state, dan shared modules bila relevan.
7. Identifikasi integrasi eksternal, endpoint, SDK, nama environment variables, dan pola autentikasi tanpa menampilkan secret value.
8. Catat file atau area yang tidak dapat diakses.

Jangan menganggap inventory yang terpotong sebagai lengkap. Catat pagination, batas ukuran, dan keterbatasan tool.

## 4. Domain audit wajib dipertimbangkan

Nilai setiap domain menggunakan status **Reviewed**, **Finding**, **Not Verified**, atau **Not Applicable**. Untuk Not Applicable, catat alasan. Untuk Not Verified, jelaskan bukti, akses, atau pemeriksaan yang masih diperlukan.

### A. Repository dan arsitektur
- Kejelasan struktur, batas modul, tanggung jawab, dan dependency direction.
- Duplikasi, coupling, circular dependency, dead code, dan konsistensi pola.
- Entry points, konfigurasi environment, dan pemisahan concern.
- Dokumentasi setup, arsitektur, operasi, dan pemeliharaan.

### B. React + Vite (jika terdeteksi)
- Struktur komponen, hooks, props, state, context, dan lifecycle.
- Routing, lazy loading, error boundaries, dan navigasi.
- Rendering, re-render yang tidak perlu, data fetching, caching, dan race conditions.
- Pengelolaan forms, validasi, loading, empty, dan error states.
- Asset handling, Vite config, build modes, alias, env exposure, dan chunking.
- Accessibility, semantic HTML, keyboard navigation, dan responsive behavior.
- SSR/CSR boundary jika proyek memang menggunakannya.

### C. Kualitas kode
- Readability, naming, typing, linting, formatting, dan maintainability.
- Error handling, defensive checks, edge cases, dan observability.
- Testability, test coverage yang dapat dibuktikan, dan test quality.
- Konsistensi implementasi dan risiko regresi.

### D. Keamanan aplikasi
- Authentication dan authorization boundaries.
- Validasi input dan output encoding.
- XSS, injection, CSRF, SSRF, open redirect, path traversal, dan risiko relevan lainnya.
- Penyimpanan token, session, cookies, dan data sensitif.
- CORS, security headers, rate limiting, dan abuse controls bila relevan.
- Secret exposure pada source, history yang tersedia, logs, dan client bundles.
- Jangan melakukan eksploitasi aktif atau mengakses data pengguna tanpa izin.

### E. Dependensi dan supply chain
- Manifest dan lockfile konsisten.
- Dependensi langsung/transitif dan versi yang tidak wajar atau usang.
- Lifecycle scripts, dependency confusion signals, dan package provenance bila dapat diverifikasi.
- Vulnerability findings hanya boleh dinyatakan berdasarkan sumber/tool yang benar-benar diperiksa.
- Jangan mengklaim bebas kerentanan hanya karena tidak ada hasil scanner.

### F. API dan integrasi eksternal
- Daftar endpoint, SDK, webhook, dan service dependencies.
- Authentication, authorization, token scope, dan secret placement.
- Input validation, response validation, timeout, retry, pagination, dan rate-limit handling.
- Error mapping, logging, fallback, dan resilience.
- Jangan melakukan request destruktif ke API. Gunakan pemeriksaan statis atau endpoint read-only yang diizinkan.

### G. Supabase (jika ditemukan/dipilih)
- Client initialization dan penggunaan environment variables.
- Auth/session handling dan access control.
- Database access patterns, exposed tables/views, dan RLS evidence.
- Migration history, schema consistency, dan policy definitions dalam repository.
- Storage buckets dan access policies.
- Edge Functions, secrets references, authorization, dan error handling.
- Realtime subscriptions dan lifecycle cleanup.
- Pisahkan bukti repository dari hasil pemeriksaan remote project.
- Jangan menjalankan SQL mutasi atau mengubah schema/data/policy/function.

### H. Build, test, CI/CD, dan release
- Build scripts dan konfigurasi mode.
- Lint, type-check, unit/integration/e2e tests.
- GitHub Actions permissions, triggers, secrets usage, pinned actions, dan artifact handling.
- Deployment target, environment separation, migration/release gates, dan rollback evidence.
- Catat perintah yang tidak dapat dijalankan dan alasannya.

### I. Production readiness
- Environment configuration dan configuration validation.
- Logging, monitoring, error reporting, and alerting evidence.
- Performance, accessibility, browser/device considerations.
- Backup, recovery, migration safety, operational documentation.
- Privacy/data handling and retention evidence where applicable.

## 5. Standar bukti temuan

Setiap temuan harus memiliki:
- ID unik dalam laporan.
- Judul ringkas.
- Severity: Critical, High, Medium, Low, Informational.
- **Finding verification status:** Verified, Suspected, atau Not Verified.
- **Remediation disposition:** Open, Accepted Risk, atau Resolved.
- Lokasi: path file dan line/range bila benar-benar tersedia.
- Bukti konkret: konfigurasi, kode, output tool, atau perilaku yang diamati.
- Dampak dan skenario risiko yang masuk akal.
- Rekomendasi perbaikan.
- Cara verifikasi setelah perbaikan.

Jangan mengarang line number, output, versi, CVE, test result, atau kondisi runtime. Jika bukti belum cukup, gunakan Suspected atau Not Verified dan jelaskan validasi yang diperlukan. Gunakan Resolved hanya setelah perubahan dan verifikasi didukung bukti. Accepted Risk memerlukan penerimaan risiko yang eksplisit; rekomendasi agent bukan penerimaan risiko.

## 6. Severity guidance

- **Critical:** eksploitasi atau kegagalan berdampak sangat besar, misalnya akses tidak sah luas atau kebocoran kredensial produksi yang terkonfirmasi.
- **High:** risiko serius terhadap data, akun, layanan, atau operasi inti dengan jalur dampak yang jelas.
- **Medium:** kelemahan bermakna tetapi membutuhkan kondisi tertentu atau memiliki dampak terbatas.
- **Low:** risiko kecil, hardening, atau masalah kualitas dengan dampak terbatas.
- **Informational:** observasi, praktik baik, atau rekomendasi tanpa kerentanan langsung.

Severity harus mempertimbangkan exploitability, exposure, impact, dan bukti; jangan menaikkan severity hanya karena topiknya security.

## 7. Proses sintesis

1. Deduplicate temuan yang memiliki akar masalah sama.
2. Pisahkan root cause dan gejala.
3. Urutkan berdasarkan severity dan prioritas bisnis/teknis.
4. Catat kontrol yang sudah baik.
5. Jelaskan area yang belum dapat diverifikasi.
6. Susun remediation roadmap setelah seluruh domain yang relevan dipertimbangkan.
7. Jangan mengubah repository untuk memperbaiki temuan tanpa approval terpisah.

## 8. Format laporan

Gunakan struktur:
1. Metadata repository, target ref, dan waktu audit.
2. Scope, asumsi, akses, dan metode.
3. Executive summary dan readiness assessment.
4. Ringkasan coverage status per domain.
5. Temuan terurut menurut severity dengan verification status dan remediation disposition terpisah.
6. Strengths/positive controls.
7. Not Verified dan keterbatasan.
8. Prioritized remediation roadmap.
9. Checks performed beserta hasil persisnya.

Readiness assessment harus dijelaskan dengan alasan dan bukan sekadar skor tanpa metodologi. Jangan menyatakan "production-ready" jika area kritis belum diverifikasi.

## 9. Batas audit

- Audit default read-only.
- Jangan memperbaiki file, dependency, schema, policy, atau setting selama audit.
- Jangan menjalankan penetration test, load test, destructive test, atau scan eksternal yang tidak diotorisasi.
- Jangan mengakses production data atau secret values.
- Minta persetujuan sesuai [approval-policy.md](approval-policy.md) untuk tindakan yang mengubah state.

## 10. Completion checklist

- [ ] Repository dan ref target teridentifikasi.
- [ ] Tree dan file kunci diperiksa atau keterbatasannya dicatat.
- [ ] Stack aktual dideteksi dari bukti.
- [ ] Semua domain relevan dinilai dengan coverage status yang konsisten.
- [ ] Integrasi API dan service dipetakan.
- [ ] Cakupan Supabase dinyatakan secara eksplisit.
- [ ] Temuan memiliki bukti, severity, verification status, dan remediation disposition.
- [ ] Not Verified/Not Applicable dijelaskan.
- [ ] Tidak ada perubahan state tanpa approval.
- [ ] Laporan tidak mengklaim pemeriksaan atau test yang tidak dilakukan.
