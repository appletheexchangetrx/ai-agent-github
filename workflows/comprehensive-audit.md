# Comprehensive Repository Audit Workflow v1.2

## Preconditions
Run [repository discovery](repository-discovery.md); confirm repo/ref/commit, scope/access and mode. Follow [audit instructions](../instructions/audit-comprehensive.md). Audit is read-only.

## Sequence
1. Discover metadata, tree, docs, manifests, source, tests, CI/CD and deployment.
2. Detect actual stack, runtime, database and integrations.
3. Review Frontend 14-domain catalog when applicable.
4. Review Backend 16-domain catalog when applicable.
5. Review Supabase 12-domain catalog when relevant; repository-only mode is valid, remote review optional.
6. Review Fullstack 15-domain catalog for integrated workflows.
7. Review QA 12-domain catalog for test strategy and evidence.
8. Assess cross-cutting dependencies, secrets, CI permissions, privacy, observability and recovery.
9. Validate and deduplicate findings; distinguish facts and assumptions.
10. Assign P0-P4 severity, finding verification and remediation disposition separately.
11. Record coverage Reviewed/Finding/Not Verified/Not Applicable for every relevant domain.
12. Deliver [audit report](../references/audit-report-template.md) with evidence, limitations, checks and prioritized roadmap; do not apply fixes.

Every finding needs ID, severity, evidence, impact, verification status, remediation disposition, recommendation and verification method. Never invent line numbers, CVEs, test output or remote state.

For each approved audit, create a new report in `docs/audit/history/` and update `docs/audit/production-readiness.md` as latest in the audited repository. No 100% coverage claim without explicit domain statuses.
