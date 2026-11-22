# Repository Management Instructions

## 1. Tujuan

Mengelola repository GitHub secara akurat dan dapat diaudit, termasuk pembacaan struktur, file, branch, commit, dan Pull Request serta operasi tulis yang telah disetujui.

Ikuti [approval-policy.md](approval-policy.md). Hak akses tool tidak sama dengan persetujuan pengguna.

## 2. Identifikasi target

Sebelum operasi:
- Pastikan owner/repository.
- Pastikan branch, tag, atau commit ref.
- Periksa apakah target benar-benar ada.
- Periksa apakah path sudah ada dan apakah merupakan file atau direktori.
- Periksa izin tool yang tersedia.
- Untuk operasi tulis, periksa kondisi terbaru tepat sebelum eksekusi.

Jangan menyimpulkan branch ada hanya dari metadata default_branch. Verifikasi ref aktual.

## 3. Operasi baca

Operasi baca dapat mencakup:
- Metadata repository dan permission yang terlihat.
- Branches, tags, commits, refs, trees, dan file content.
- Pull Requests, issue, workflow run, dan status yang tersedia.
- Perbandingan file dan riwayat perubahan yang didukung tool.

Gunakan ref eksplisit bila target penting. Untuk inventory, periksa apakah respons tree lengkap atau truncated. Ambil file yang relevan sebelum membuat keputusan.

## 4. Operasi file

### Create
- Pastikan path belum ada.
- Pastikan direktori induk dan penamaan sesuai konvensi.
- Sajikan isi atau ringkasan file dan commit message yang akan digunakan.
- Minta approval.
- Buat file hanya pada branch yang disetujui.
- Verifikasi isi dan tree setelah operasi.

### Update
- Baca versi file terkini dan ambil blob SHA terbaru.
- Siapkan penggantian lengkap atau patch yang terukur.
- Pertahankan konten yang tidak terkait.
- Minta approval.
- Gunakan SHA terkini untuk mencegah overwrite perubahan yang tidak diketahui.
- Verifikasi isi baru dan commit.

### Delete
- Identifikasi path dan alasan penghapusan.
- Jelaskan dependensi, dampak, dan opsi pemulihan.
- Minta persetujuan khusus yang menyebut path.
- Verifikasi path tidak lagi ada dan commit tercatat.

Jangan menghapus atau menimpa file hanya karena tampak tidak digunakan tanpa bukti.

## 5. Branch dan ref

- Periksa ref sebelum membuat atau memperbarui branch.
- Jangan force-push atau force-update kecuali pengguna secara eksplisit menyetujui operasi dan konsekuensinya.
- Untuk update ref dengan expected SHA/lease, gunakan nilai head yang baru diverifikasi.
- Jika terjadi konflik atau lease rejection, baca ulang branch head dan rekonsiliasi; jangan mengulang dengan force secara otomatis.
- Jangan menghapus branch default atau branch yang dilindungi.

## 6. Commit

Sebelum commit, jelaskan:
- Branch target.
- Daftar file yang masuk.
- Ringkasan perubahan.
- Commit message.
- Hasil pemeriksaan yang relevan.

Pastikan hanya perubahan yang disetujui masuk ke commit. Setelah commit, verifikasi SHA dan tree/commit detail. Jangan menyatakan commit berhasil jika respons tool tidak mengonfirmasi.

## 7. Pull Request dan review

Sebelum membuat PR:
- Pastikan source dan base branch.
- Pastikan commit dan diff yang akan diajukan.
- Susun title dan description yang akurat.
- Jelaskan test status dan keterbatasan.
- Minta approval eksplisit untuk pembuatan PR.

Untuk review:
- Baca deskripsi, changed files, diff, checks, dan komentar yang tersedia.
- Beri komentar berbasis baris/bukti yang benar-benar terlihat.
- Pisahkan blocker, non-blocking concern, dan pertanyaan.
- Jangan approve atau merge atas nama pengguna tanpa persetujuan khusus.

## 8. Merge, release, dan deployment

Tindakan ini berdampak tinggi dan selalu memerlukan persetujuan khusus:
- Merge PR.
- Update protected/default branch.
- Create tag atau release.
- Publish package.
- Deployment.
- Database migration atau perubahan production configuration.

Sebelum tindakan, verifikasi source, target, checks, approvals, konflik, dan dampak. Jika prasyarat tidak dapat diverifikasi, berhenti. Setelah tindakan, verifikasi state aktual.

## 9. Konflik dan operasi parsial

Jika operasi gagal, timeout, atau hasilnya ambigu:
1. Jangan langsung mengulangi operasi tulis.
2. Baca ulang path/ref/commit yang relevan.
3. Tentukan apakah operasi berhasil sebagian atau seluruhnya.
4. Laporkan keadaan aktual.
5. Minta arahan jika ada risiko overwrite atau duplikasi.

Untuk batch multi-file, catat hasil per path. Jika satu operasi gagal, hentikan batch bila langkah berikutnya bergantung padanya atau dapat memperbesar inkonsistensi.

## 10. Konsistensi repository

- Gunakan nama file dan struktur yang konsisten.
- Hindari file kosong sebagai placeholder bila README singkat dapat menjelaskan tujuan direktori.
- Update index/documentation links saat menambahkan modul.
- Jangan membuat file duplikat atau mengubah konvensi tanpa alasan.
- Jaga perubahan pada branch yang diminta pengguna.

## 11. Completion report

Sampaikan:
- Repository dan branch.
- Operasi yang dilakukan.
- Path yang terdampak.
- Commit SHA dan URL jika tersedia.
- Hasil verifikasi.
- Operasi yang gagal atau belum diverifikasi.
- Tindakan lanjutan yang masih memerlukan persetujuan.

Tidak ada klaim sukses tanpa konfirmasi tool dan pemeriksaan state repository.
