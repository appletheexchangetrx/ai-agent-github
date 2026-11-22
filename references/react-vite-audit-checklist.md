# React + Vite Audit Checklist

## Purpose and applicability
Gunakan checklist ini hanya setelah discovery mengonfirmasi React dan Vite. Catat versi, package manager, entry points, build scripts, dan test tooling aktual. Tandai area yang tidak relevan sebagai N/A beserta alasannya.

## 1. Project structure and architecture
- [ ] Entry point aplikasi, routing, layout, feature/module boundaries teridentifikasi.
- [ ] Pemisahan UI, domain/business logic, data access, dan utilities masuk akal.
- [ ] Komponen memiliki tanggung jawab yang jelas; duplikasi dan komponen terlalu besar dicatat.
- [ ] Import path, alias, circular dependency, dan dependency direction ditinjau.
- [ ] Konvensi penamaan, struktur folder, dan konfigurasi konsisten.
- [ ] Error boundary dan fallback state digunakan pada area yang sesuai.

## 2. React correctness
- [ ] Hooks dipanggil sesuai Rules of Hooks; dependency effect ditinjau.
- [ ] State ditempatkan pada level yang tepat; derived state tidak disimpan tanpa alasan.
- [ ] Keys pada list stabil dan unik.
- [ ] Controlled/uncontrolled inputs konsisten.
- [ ] Effect tidak digunakan untuk kalkulasi yang dapat dilakukan saat render.
- [ ] Context/global state tidak menyebabkan coupling atau rerender yang tidak perlu.
- [ ] Async effects menangani cancellation/race condition bila relevan.
- [ ] Suspense, lazy loading, memoization digunakan berdasarkan kebutuhan dan bukti, bukan secara membabi buta.

## 3. Vite and build configuration
- [ ] Vite config, plugins, aliases, public assets, dan base path ditinjau.
- [ ] Mode development/production dan pemuatan environment variables dipahami.
- [ ] Hanya variabel dengan prefix publik yang sesuai diekspos ke client; tidak ada secret di bundle.
- [ ] Build output, chunking, asset handling, dan source map policy ditinjau.
- [ ] Proxy dan CORS development tidak disalahartikan sebagai kontrol keamanan production.
- [ ] Scripts build, preview, lint, typecheck, dan test dibandingkan dengan konfigurasi aktual.

## 4. UI, accessibility, and UX
- [ ] Semantic HTML dan landmark digunakan dengan benar.
- [ ] Navigasi keyboard, focus visibility, label form, dan accessible name diperiksa.
- [ ] Kontras, ukuran target interaksi, dan reduced-motion dipertimbangkan.
- [ ] Loading, empty, error, success, dan offline states ditangani.
- [ ] Layout diuji secara konseptual pada viewport kecil dan besar; overflow dicatat.
- [ ] Gambar memiliki ukuran/format yang sesuai dan alt text kontekstual.
- [ ] Interaksi kritis tidak bergantung hanya pada warna, hover, atau pointer.

## 5. Performance
- [ ] Bundle size dan dependency berat diidentifikasi.
- [ ] Route/feature splitting digunakan bila memberi manfaat.
- [ ] Render loops, expensive calculations, dan unnecessary rerenders ditinjau.
- [ ] Data fetching menghindari request berulang dan race conditions.
- [ ] Caching, pagination/virtualization, dan image optimization dievaluasi.
- [ ] Core Web Vitals hanya dinilai dari pengukuran yang benar-benar tersedia.

## 6. Security and data handling
- [ ] Rendering HTML mentah dan penggunaan dangerouslySetInnerHTML ditinjau.
- [ ] Input/output validation dan encoding dilakukan pada boundary yang tepat.
- [ ] Auth state, token storage, session expiry, dan logout behavior ditinjau.
- [ ] Client-side checks tidak dianggap sebagai authorization.
- [ ] Redirect, URL handling, file upload, dan external links ditinjau.
- [ ] Secrets tidak berada pada source, public assets, atau client bundle.
- [ ] Dependency scripts dan package provenance dipertimbangkan.

## 7. Tests and maintainability
- [ ] Unit/component/integration/e2e test coverage untuk alur kritis dipetakan.
- [ ] Test menguji perilaku, bukan detail implementasi yang rapuh.
- [ ] Mock tidak menyembunyikan kontrak integrasi atau error penting.
- [ ] Lint, typecheck, build, dan test commands dicatat beserta status aktual.
- [ ] TypeScript strictness dan penggunaan unsafe types ditinjau bila berlaku.
- [ ] Dokumentasi setup, env example, dan troubleshooting cukup.

## Evidence and result
Untuk setiap temuan, catat path dan simbol/baris bila benar-benar tersedia, bukti ringkas yang tidak mengandung secret, dampak, severity, confidence, dan rekomendasi. Gunakan status **Verified**, **Suspected**, **Not checked**, atau **N/A**. Jangan menyatakan command berhasil jika tidak dijalankan. Lihat [finding template](finding-template.md) dan [audit report template](audit-report-template.md).
