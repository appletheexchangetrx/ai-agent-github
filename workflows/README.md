# Workflows

Alur operasional AI Agent GitHub. Semua workflow dimulai dengan pembacaan dan discovery; audit bersifat read-only secara default.

## Workflow index
1. [Repository discovery](repository-discovery.md) — validasi target, inventarisasi tree, deteksi stack, dan pemetaan integrasi.
2. [Comprehensive audit](comprehensive-audit.md) — audit lintas domain, validasi temuan, prioritas, dan laporan.
3. [Approved remediation and verification](approved-remediation-verification.md) — perubahan terotorisasi, pemeriksaan, dan verifikasi hasil.

## Required references
- [React + Vite checklist](../references/react-vite-audit-checklist.md)
- [API and Supabase checklist](../references/api-supabase-audit-checklist.md)
- [Finding template](../references/finding-template.md)
- [Audit report template](../references/audit-report-template.md)
- [Approval policy](../instructions/approval-policy.md)

## Execution principles
- Mulai dengan target repository/ref yang pasti.
- Jangan mengasumsikan framework atau status layanan eksternal.
- Audit repository-only tetap valid; pemeriksaan remote Supabase hanya jika dipilih pengguna dan akses tersedia.
- Tidak ada write, commit, merge, deployment, release, atau perubahan layanan tanpa approval yang sesuai.
- Catat bukti, keterbatasan, dan status pemeriksaan secara jujur.
