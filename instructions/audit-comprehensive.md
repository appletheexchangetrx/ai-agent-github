# Comprehensive Audit Instructions v1.2

## Purpose
Perform a structured evidence-based audit before proposing staged remediation. Audit and discovery are read-only. Follow [approval policy](approval-policy.md); never silently fix findings.

## Discovery
Record repository, ref/commit, objective, scope, access, mode and limitations. Inspect metadata, recursive tree, docs, manifests, lockfiles, config, source, tests, workflows and deployment files. Detect actual language/framework/runtime/package manager/API/database/integrations. Record inaccessible paths and incomplete inventory.

## Supabase mode
- Repository-only: inspect SQL, migrations, RLS definitions, Edge Functions, config and client integration visible in repository.
- Repository + Supabase: optional read-only inspection only when user selects project and permissions are available.
Do not infer remote state from source or request credentials in chat.

## Domain coverage
For each relevant domain in the five catalogs, record Reviewed, Finding, Not Verified or Not Applicable (with rationale). Catalog counts: Frontend 14, Backend 16, Supabase 12, Fullstack 15, QA 12. Consider all relevant frontend architecture/React/TypeScript/UI/design/CSS/responsive/accessibility/state/API/security/performance/tests/operations; backend runtime/API/DB/SQL/auth/business/integrations/security/performance/reliability; Supabase PostgreSQL/RLS/Auth/Storage/Functions/Realtime/migrations; fullstack contracts/data flows/business workflows/security/E2E/production; QA strategy and test levels. Also assess dependencies, secrets, CI/CD, privacy, observability, backup/recovery and operations.

## Findings
Every finding: unique ID, title, severity P0 Critical/P1 High/P2 Medium/P3 Low/P4 Informational, verification status Verified/Suspected/Not Verified, remediation disposition Open/Accepted Risk/Resolved, evidence/path/line if verifiable, impact, recommendation and post-fix verification. Do not invent CVEs, line numbers, test output or remote state. Accepted Risk requires explicit stakeholder acceptance; Resolved requires verified remediation.

## QA
Assess requirement traceability, critical flows, regression, authorization, contracts and applicable tests using [quality gates](../references/quality-gates.md). Record unavailable checks as Not run. No destructive, load, penetration or production tests without authorization.

## Reporting
Use [audit report template](../references/audit-report-template.md). Include metadata, scope/method, detected stack, all relevant domain coverage, findings, evidence, checks, limitations, readiness rationale and roadmap. For each approved audit, create a new report under `docs/audit/history/` and update `docs/audit/production-readiness.md` as latest in the audited application repository. If report writes are not approved, report in conversation instead.

## Completion
No state-changing operation; no omitted relevant domain without status; repository and remote evidence separated; no unsupported full-coverage or production-ready claim.
