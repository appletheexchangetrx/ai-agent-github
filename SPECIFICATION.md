# Spesifikasi AI Agent GitHub v1.0

## 1. Ringkasan

AI Agent GitHub adalah sistem hybrid berbasis ChatGPT dan GitHub Skill untuk membantu tiga kelompok pekerjaan: pengembangan (Developer), pemeriksaan kualitas dan risiko (Auditor), serta pengelolaan repository (Repository Manager).

Skill utama memiliki entry point khusus di skill/SKILL.md. Instruksi, workflow, dan referensi pendukung dipisahkan agar dapat dipelihara secara modular.

## 2. Aktivasi dan pemilihan repository

Pengguna memulai AI Agent GitHub dengan satu instruksi:

`jalankan $github ai agent github`

Skill harus mengenali frasa tersebut dan variasi bahasa alami yang jelas bermaksud mengaktifkan AI Agent GitHub.

### Alur wajib setelah aktivasi

1. Mengambil daftar repository yang dapat diakses akun GitHub terautentikasi melalui konektor GitHub.
2. Mengambil halaman berikutnya jika tersedia agar daftar tidak berhenti pada halaman pertama.
3. Menampilkan daftar repository yang berhasil diambil, menggunakan owner/name dan default branch jika tersedia. Informasi visibility hanya ditampilkan jika disediakan konektor.
4. Meminta pengguna memilih repository target. Jika hanya satu repository tersedia, tampilkan dan minta konfirmasi; jangan memilih diam-diam.
5. Setelah dipilih, konfirmasi full repository name dan branch/ref target, kemudian periksa metadata dan kondisi aktual repository.
6. Jika pengguna belum menyebutkan tugas, tanyakan secara ringkas apa yang ingin dikerjakan pada repository tersebut.
7. Setelah tujuan diketahui, pilih mode dan workflow yang sesuai secara otomatis.

### Batasan dan aturan pemilihan

- Repository `appletheexchangetrx/ai-agent-github` adalah repository sumber Skill dan dokumentasinya, bukan target kerja default.
- Repository sumber Skill hanya boleh menjadi target jika dipilih secara eksplisit oleh pengguna.
- Jika GitHub belum terhubung, listing gagal, akses terbatas, atau pagination tidak dapat dituntaskan, jelaskan keterbatasannya. Jangan mengarang repository atau mengklaim daftar lengkap.
- Gunakan hanya repository yang benar-benar dikembalikan oleh konektor atau secara eksplisit diberikan pengguna.
- Aktivasi, listing, dan pemilihan repository bukan otorisasi untuk audit, perubahan, atau tindakan yang mengubah state.

Pengguna tidak diwajibkan menghafal nama mode, workflow, atau perintah teknis. Seluruh approval policy tetap berlaku.

## 3. Tujuan dan ruang lingkup

### Tujuan
- Memahami kondisi repository sebelum menyarankan atau melakukan perubahan.
- Membantu pengembangan aplikasi secara terencana dan dapat ditinjau.
- Melakukan audit menyeluruh sebelum menyusun remediation bertahap.
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

## 4. Mode operasi

1. **Developer** — analisis kebutuhan, eksplorasi kode, rencana implementasi, perubahan kode setelah persetujuan, dan verifikasi.
2. **Auditor** — pemeriksaan menyeluruh, penilaian risiko, bukti temuan, rekomendasi, dan laporan.
3. **Repository Manager** — operasi file dan GitHub yang diizinkan, dengan persetujuan sebelum tindakan yang mengubah repository.

Mode dapat digunakan secara hybrid sesuai permintaan, tetapi batas persetujuan tetap berlaku. Agent memilih mode/workflow berdasarkan tujuan yang disampaikan pengguna; pengguna tidak harus menyebut nama mode.

## 5. Kebijakan akses dan persetujuan

- Default seluruh audit adalah read-only.
- Sebelum mengubah file, konfigurasi, dependensi, workflow, branch, commit, Pull Request, atau pengaturan repository, agent harus menjelaskan rencana dan meminta persetujuan eksplisit.
- Merge, deployment, release, migrasi, penghapusan, dan tindakan destruktif memerlukan persetujuan eksplisit yang menyebut tindakan terkait.
- Persetujuan untuk satu tindakan tidak dianggap sebagai persetujuan untuk tindakan lain.
- Jangan mengklaim perubahan berhasil sebelum tool mengonfirmasi dan hasil repository diverifikasi.
- Jangan menampilkan atau menyalin secrets, token, private keys, atau kredensial ke laporan.

## 6. Alur kerja audit

1. Identifikasi repository, branch/ref, tujuan audit, dan batas akses.
2. Periksa metadata, struktur file, dokumentasi, konfigurasi, dan kondisi Git.
3. Deteksi framework dan tooling aktual; validasi apakah React + Vite digunakan.
4. Petakan aplikasi, modul, dependensi, build, test, deployment, API, dan integrasi.
5. Audit menyeluruh dalam satu putaran terstruktur sebelum menyusun prioritas remediation.
6. Catat setiap temuan dengan lokasi/bukti, dampak, severity, dan rekomendasi.
7. Bedakan fakta terverifikasi, indikasi, asumsi, dan area yang tidak dapat diperiksa.
8. Sajikan ringkasan eksekutif, coverage per domain, temuan terurut, risiko, batasan, dan rencana tindak lanjut.
9. Jangan memperbaiki temuan tanpa persetujuan perubahan yang spesifik.

## 7. Domain audit minimum

- Arsitektur dan struktur repository.
- Kualitas kode, maintainability, konsistensi, dan pola implementasi.
- Keamanan aplikasi dan konfigurasi; penanganan secrets.
- Dependensi, versi, kerentanan yang dapat diverifikasi, dan risiko supply chain.
- React, Vite, routing, state, rendering, asset, dan performa frontend jika relevan.
- API, autentikasi, otorisasi, validasi input, error handling, dan integrasi eksternal.
- Supabase bila ditemukan atau bila pengguna mengaktifkan koneksinya: Auth, Database/RLS, Storage, Edge Functions, Realtime, dan konfigurasi terkait.
- Build, test, lint, type-check, CI/CD, deployment configuration.
- Dokumentasi, environment variables, observability, dan kesiapan produksi.

Domain yang tidak relevan harus ditandai Not Applicable dengan alasan, bukan dipaksakan. Domain yang tidak dapat diverifikasi karena bukti atau akses tidak tersedia harus ditandai Not Verified.

## 8. Standar status audit

Gunakan status sesuai objek yang dinilai; jangan mencampur status coverage domain, status verifikasi finding, dan status remediation.

### Domain coverage
- **Reviewed:** domain telah diperiksa dan tidak ada finding yang dicatat pada domain tersebut.
- **Finding:** satu atau lebih finding dicatat pada domain tersebut.
- **Not Verified:** pemeriksaan tidak dapat diselesaikan atau bukti tidak cukup.
- **Not Applicable:** domain tidak relevan, disertai alasan.

### Finding verification
- **Verified:** bukti langsung yang memadai mendukung temuan.
- **Suspected:** indikasi ada, tetapi bukti belum cukup untuk konfirmasi.
- **Not Verified:** validitas temuan belum dapat ditentukan.

### Remediation disposition
- **Open:** perbaikan belum diselesaikan atau belum diverifikasi.
- **Accepted Risk:** risiko secara eksplisit diterima oleh pihak berwenang; catat siapa/rujukan persetujuannya jika tersedia.
- **Resolved:** perbaikan telah dilakukan dan bukti verifikasi mendukung penutupan.

Status remediation tidak menggantikan status verifikasi finding. Jangan menandai temuan Resolved hanya karena rekomendasi telah diberikan atau perubahan telah ditulis.

## 9. Supabase opsional

- Sebelum audit, tentukan pilihan pengguna: audit repository saja, atau audit repository beserta Supabase yang terhubung.
- Tanpa koneksi Supabase, audit kode/config Supabase yang ada di repository tetap dapat dilakukan, tetapi kondisi proyek Supabase jarak jauh tidak boleh diklaim telah diperiksa.
- Dengan koneksi, gunakan hanya proyek dan akses baca yang dipilih/diizinkan pengguna.
- Jangan melakukan perubahan schema, data, policy, function, atau konfigurasi Supabase tanpa persetujuan terpisah.

## 10. Laporan audit

Laporan minimal berisi:
- Identitas repository dan ref/commit yang diaudit.
- Waktu pemeriksaan dan cakupan.
- Ringkasan eksekutif dan penilaian readiness beserta alasannya.
- Metodologi dan coverage status per domain.
- Temuan dengan severity: Critical, High, Medium, Low, atau Informational.
- Bukti/lokasi, impact, finding verification status, remediation disposition, dan rekomendasi.
- Area yang tidak dapat diperiksa dan alasannya.
- Prioritas perbaikan dan langkah berikutnya.
- Hasil pemeriksaan yang benar-benar dijalankan.

Strategi penyimpanan laporan harus disepakati sebelum implementasi laporan otomatis pada repository target. Jangan mengarang hasil pengujian yang tidak dijalankan.

## 11. Perilaku pengembangan

1. Baca kondisi aktual sebelum membuat rencana.
2. Identifikasi file yang terdampak dan kemungkinan efek samping.
3. Sajikan rencana perubahan yang terukur.
4. Minta persetujuan eksplisit sesuai approval policy.
5. Lakukan perubahan sekecil dan sejelas mungkin.
6. Jalankan pemeriksaan yang tersedia dan diizinkan.
7. Laporkan file yang berubah, hasil pemeriksaan, dan keterbatasan.

## 12. Struktur aktual implementasi v1.0

- README.md
- SPECIFICATION.md
- instructions/README.md
- instructions/approval-policy.md
- instructions/audit-comprehensive.md
- instructions/developer-workflow.md
- instructions/repository-management.md
- skill/SKILL.md
- skills/README.md
- workflows/README.md
- workflows/repository-discovery.md
- workflows/comprehensive-audit.md
- workflows/approved-remediation-verification.md
- tools/README.md
- references/README.md
- references/react-vite-audit-checklist.md
- references/api-supabase-audit-checklist.md
- references/finding-template.md
- references/audit-report-template.md
- docs/architecture/README.md
- docs/implementation/README.md

README placeholder di direktori pendukung tetap dipertahankan untuk dokumentasi lanjutan. Daftar ini menggambarkan file implementasi yang diverifikasi pada branch main.

## 13. Tahapan implementasi dan status

- **Tahap 1 — Baseline:** selesai; repository, spesifikasi awal, entry point Skill, dan kerangka direktori dibuat.
- **Tahap 2 — Instruksi modular:** selesai; approval policy, audit, developer workflow, dan repository management tersedia.
- **Tahap 3 — Referensi dan workflow:** selesai; checklist audit, template finding/laporan, discovery, comprehensive audit, dan remediation verification tersedia.
- **Tahap 4 — Review konsistensi dan finalisasi:** selesai; dokumentasi status dan terminologi audit diselaraskan.
- **Pengujian operasional:** belum dilakukan; menjadi tanggung jawab pengguna setelah implementasi dokumentasi selesai.

## 14. Kriteria penerimaan v1.0

- Struktur aktual tersedia di branch main.
- skill/SKILL.md menjadi entry point yang jelas dan mendokumentasikan aktivasi sederhana.
- Instruksi `jalankan $github ai agent github` dikenali sebagai permintaan aktivasi.
- Setelah aktivasi, agent memandu pengguna tanpa mengharuskan pengguna menyebut mode/workflow.
- Aktivasi tidak otomatis memicu audit atau tindakan perubahan.
- Mode Developer, Auditor, dan Repository Manager didefinisikan.
- Read-only menjadi default untuk audit.
- Persetujuan eksplisit diwajibkan untuk tindakan yang mengubah state.
- React + Vite menjadi fokus awal tanpa mengasumsikan framework repository.
- Audit API dan integrasi yang ditemukan tercakup.
- Supabase bersifat opsional dan batas pemeriksaan tanpa koneksi dinyatakan jelas.
- Workflow discovery, comprehensive audit, dan approved remediation tersedia.
- Checklist dan template audit menggunakan terminologi status yang konsisten.
- Laporan memisahkan bukti, risiko, rekomendasi, status verifikasi, dan keterbatasan.
- Tidak ada klaim pengujian atau perubahan yang tidak diverifikasi.
- Pengujian operasional dicatat sebagai belum dilakukan sampai pengguna menyelesaikannya.

---

**Status dokumen:** Spesifikasi v1.0 dan implementasi dokumentasinya telah difinalisasi. Status ini bukan klaim bahwa runtime Skill atau integrasi operasional telah diuji.
