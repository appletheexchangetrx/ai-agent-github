# Comprehensive Audit Report

> Salin template ini untuk setiap audit. Hapus instruksi dalam tanda kurung setelah mengisi. Jangan menyimpan secrets atau data sensitif yang tidak diperlukan.

## 1. Audit metadata
- **Repository:** owner/repository
- **Ref:** branch / tag / commit SHA
- **Audit date:** YYYY-MM-DD (sertakan zona waktu bila diketahui)
- **Audit mode:** Repository-only / Repository + connected Supabase
- **Auditor scope:** (cakupan dan batas akses)
- **Application stack:** (hasil discovery, bukan asumsi)

## 2. Executive summary
- **Overall readiness:** Ready / Ready with conditions / Not ready / Inconclusive
- **Risk summary:** (ringkasan berbasis temuan)
- **Critical / High / Medium / Low / Informational:** (jumlah)
- **Top priorities:** (maksimal beberapa prioritas utama)

Readiness adalah penilaian kualitatif berdasarkan bukti yang tersedia, bukan sertifikasi keamanan.

## 3. Scope and methodology
- Repository areas, integrations, and services included.
- Files/configuration and tools inspected.
- Checks or commands actually executed.
- Explicit exclusions and reasons.
- Supabase selection and whether remote project access was used.

## 4. Coverage matrix
Gunakan satu status coverage untuk setiap domain:
- **Reviewed:** domain diperiksa dan tidak ada finding yang dicatat.
- **Finding:** satu atau lebih finding dicatat pada domain.
- **Not Verified:** pemeriksaan belum dapat diselesaikan atau bukti tidak cukup.
- **Not Applicable:** domain tidak relevan; sertakan alasan.

| Domain | Coverage status | Evidence / notes |
|---|---|---|
| Architecture and structure | Reviewed / Finding / Not Verified / Not Applicable | |
| Code quality and maintainability | | |
| Security and secrets | | |
| Dependencies and supply chain | | |
| React + Vite (if applicable) | | |
| APIs and external integrations | | |
| Supabase repository evidence | | |
| Connected Supabase project | | |
| Build, tests, lint, typecheck | | |
| CI/CD and deployment configuration | | |
| Production readiness and observability | | |

## 5. Findings
Urutkan berdasarkan severity, lalu exploitability/impact. Gunakan format [finding template](finding-template.md). Setiap finding harus memiliki ID stabil, finding verification status, dan remediation disposition terpisah.

### Critical
(Tidak ada / daftar temuan)

### High
(Tidak ada / daftar temuan)

### Medium
(Tidak ada / daftar temuan)

### Low and Informational
(Tidak ada / daftar temuan)

## 6. Verification results
| Check | Command/tool | Result | Evidence |
|---|---|---|---|
| Build | | Passed / Failed / Skipped / Not run | |
| Tests | | Passed / Failed / Skipped / Not run | |
| Lint | | Passed / Failed / Skipped / Not run | |
| Type check | | Passed / Failed / Skipped / Not run | |
| Other | | | |

Jangan menulis Passed kecuali pemeriksaan benar-benar dijalankan dan hasilnya tersedia.

## 7. Limitations and assumptions
- Missing permissions, inaccessible services, unavailable runtime, or incomplete source.
- Unverified assumptions and suspected findings.
- Remote service state not inspected (if applicable).

## 8. Remediation roadmap
| Priority | Finding IDs | Proposed action | Dependencies | Approval required |
|---|---|---|---|---|
| P0 | | | | Yes |
| P1 | | | | Yes |
| P2 | | | | Yes |

Roadmap bukan otorisasi perubahan. Ajukan approval terpisah sesuai [approval policy](../instructions/approval-policy.md).

## 9. Conclusion
Ringkas status kesiapan, risiko residual, keputusan yang perlu diambil, dan langkah audit berikutnya.

---
**Report integrity:** Fakta, indikasi, rekomendasi, coverage status, finding verification status, dan remediation disposition harus dibedakan. Cantumkan ref/commit yang diperiksa agar laporan dapat direproduksi.
