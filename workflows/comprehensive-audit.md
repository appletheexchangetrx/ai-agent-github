# Workflow: Comprehensive Repository Audit

## Objective
Melakukan audit menyeluruh dalam satu putaran terstruktur sebelum menyusun audit bertahap atau remediation.

## Preconditions
- Discovery selesai menggunakan [repository discovery](repository-discovery.md).
- Repository/ref dan commit SHA target tercatat.
- Scope audit dan batas akses disepakati.
- Jika Supabase relevan, pilihan repository-only atau repository + connected project telah ditentukan.
- Mode audit tetap read-only.

## Audit sequence
1. **Architecture:** struktur, entry points, boundaries, coupling, configuration, and documentation.
2. **Stack-specific quality:** gunakan [React + Vite checklist](../references/react-vite-audit-checklist.md) jika stack cocok; untuk stack lain, audit berdasarkan teknologi yang ditemukan.
3. **Security:** secrets, authn/authz, input/output boundaries, session handling, permissions, data exposure, and security-sensitive configuration.
4. **Dependencies:** direct/transitive dependencies where evidence exists, lockfile consistency, outdated/unsupported packages, known vulnerabilities only when verified, and supply-chain risk.
5. **API and integrations:** gunakan [API/Supabase checklist](../references/api-supabase-audit-checklist.md); map trust boundaries, contracts, errors, retries, webhooks, and external dependencies.
6. **Supabase (conditional):** audit repository evidence always when relevant; inspect connected project only when user opts in and authorized read access is available.
7. **Quality and tests:** inspect test design, lint/typecheck/build scripts, coverage evidence, and critical flows. Run checks only if runtime/tool permissions allow and execution is safe.
8. **CI/CD and operations:** inspect workflows, deployment configuration, environment handling, migrations, release controls, observability, and rollback documentation.
9. **Production readiness:** evaluate resilience, accessibility/performance where applicable, backup/recovery evidence, monitoring, documentation, and operational ownership.
10. **Synthesize findings:** deduplicate, validate evidence, assign severity/status/confidence, and map dependencies.
11. **Prioritize roadmap:** group remediation into ordered phases without applying fixes.
12. **Deliver report:** complete [audit report template](../references/audit-report-template.md), including exclusions and checks not run.

## Finding quality gate
For every finding:
- Use [finding template](../references/finding-template.md).
- Provide traceable evidence and source type.
- Separate confirmed fact from suspicion.
- Explain impact and realistic prerequisites.
- Do not invent line numbers, CVEs, test outcomes, or remote state.
- Mark severity and confidence separately.

## Completion criteria
- All relevant domains were considered; N/A has a reason.
- Repository and ref are unambiguous.
- Findings and limitations are explicit.
- Executive summary and remediation priorities are present.
- No state-changing action was performed.
- No finding was silently fixed.

## Next step
Present findings and proposed staged remediation. Any implementation must follow [approved remediation and verification](approved-remediation-verification.md) and the [approval policy](../instructions/approval-policy.md).
