# References

Dokumen referensi untuk audit AI Agent GitHub. Gunakan setelah repository discovery dan sesuaikan checklist dengan stack serta bukti yang benar-benar tersedia.

## Audit checklists
- [React + Vite audit checklist](react-vite-audit-checklist.md) — struktur, React correctness, Vite/build, accessibility, performance, security, dan tests.
- [API and Supabase integration checklist](api-supabase-audit-checklist.md) — API security/reliability, integrasi eksternal, Supabase repository evidence, dan pemeriksaan connected project yang opsional.

## Reporting standards
- [Finding template](finding-template.md) — format temuan, severity, confidence, evidence, impact, dan verification.
- [Audit report template](audit-report-template.md) — laporan menyeluruh, coverage matrix, hasil pemeriksaan, keterbatasan, dan roadmap.

## Usage rules
1. Deteksi stack aktual sebelum memilih checklist.
2. Tandai domain yang tidak relevan sebagai N/A dengan alasan.
3. Pisahkan repository evidence dari connected-service evidence.
4. Jangan mengarang hasil pengujian, CVE, nomor baris, atau kondisi remote.
5. Template dan rekomendasi tidak memberikan izin untuk mengubah repository atau layanan; ikuti [approval policy](../instructions/approval-policy.md).

Workflow terkait tersedia di [workflows](../workflows/README.md).
