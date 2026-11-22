# Audit Finding Template

Gunakan satu blok untuk setiap temuan. Jangan mengisi nilai yang tidak didukung bukti. Pisahkan status validitas temuan dari status penyelesaian remediation.

## Required fields
- **ID:** ID unik dalam laporan, misalnya AUD-001.
- **Title:** Ringkasan masalah yang spesifik.
- **Severity:** Critical / High / Medium / Low / Informational.
- **Finding verification status:** Verified / Suspected / Not Verified.
- **Remediation disposition:** Open / Accepted Risk / Resolved.
- **Confidence:** High / Medium / Low.
- **Evidence source:** Repository / Connected service / External observation.
- **Location:** Path, symbol, endpoint, resource, atau referensi yang dapat ditelusuri.
- **Evidence:** Kutipan atau observasi minimum yang relevan; redaksi secrets.
- **Impact:** Dampak teknis, keamanan, operasional, atau pengguna.
- **Recommendation:** Tindakan korektif yang spesifik.
- **Verification:** Cara membuktikan perbaikan dan hasil pemeriksaan aktual.
- **Limitations:** Konteks yang belum diketahui atau tidak dapat diperiksa.

## Status definitions

### Finding verification status
- **Verified:** Bukti langsung yang memadai mendukung temuan.
- **Suspected:** Ada indikasi yang masuk akal, tetapi bukti belum cukup untuk konfirmasi.
- **Not Verified:** Validitas temuan belum dapat ditentukan karena bukti atau pemeriksaan tidak memadai.

### Remediation disposition
- **Open:** Belum diperbaiki atau belum ada bukti verifikasi yang cukup untuk menutupnya.
- **Accepted Risk:** Risiko diterima secara eksplisit oleh pihak berwenang. Catat rujukan/persetujuan dan tanggal jika tersedia; jangan menyimpulkan penerimaan dari diamnya pengguna.
- **Resolved:** Perbaikan telah dilakukan dan pemeriksaan yang relevan mendukung bahwa masalah telah ditangani. Catat bukti verifikasi.

Status ini tidak saling menggantikan. Finding dapat tetap Verified dan Open sampai remediation selesai; jangan menggunakan Resolved sebagai status validitas temuan.

## Severity guidance
- **Critical:** Eksploitasi atau kegagalan berdampak sangat besar dan segera, dengan bukti kuat.
- **High:** Risiko besar terhadap keamanan, data, layanan, atau fungsi utama.
- **Medium:** Risiko bermakna tetapi terbatas, memerlukan kondisi tertentu, atau memiliki mitigasi parsial.
- **Low:** Dampak terbatas atau praktik yang perlu diperbaiki.
- **Informational:** Observasi, improvement, atau hardening tanpa risiko langsung yang terbukti.

Severity bukan ukuran confidence. Jangan menaikkan severity hanya karena ketidakpastian. Jelaskan exploitability, prerequisites, scope, dan impact bila relevan.

## Copyable finding block
~~~markdown
### [AUD-001] Judul temuan
- **Severity:** Medium
- **Finding verification status:** Verified
- **Remediation disposition:** Open
- **Confidence:** High
- **Evidence source:** Repository
- **Location:** src/path/file.ts:line (hanya jika nomor baris terverifikasi)
- **Evidence:** Bukti minimum, tanpa secret.
- **Impact:** Dampak yang dapat dijelaskan.
- **Recommendation:** Perbaikan yang disarankan.
- **Verification:** Pemeriksaan yang diperlukan dan hasil aktual.
- **Limitations:** Batas pemeriksaan atau asumsi.
~~~

## Rules
1. Satu temuan mewakili satu masalah yang dapat ditindaklanjuti.
2. Pisahkan gejala, akar masalah, dan dampak.
3. Jangan mengarang CVE, nomor baris, exploit, hasil test, atau konfigurasi.
4. Temuan suspected harus menjelaskan bukti tidak langsung dan validasi lanjutan.
5. Duplikasi temuan digabungkan atau saling direferensikan.
6. Rekomendasi tidak berarti izin untuk melakukan perubahan.
7. Hanya pihak berwenang yang dapat menerima risiko; rekomendasi agent bukan persetujuan.
