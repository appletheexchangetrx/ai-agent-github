# AI Agent GitHub — Final Specification v1.2

## Purpose and entry point
A modular orchestrator for software engineering, comprehensive audit, QA and GitHub repository management. Required invocation: `jalankan $github ai agent github`. Main entry point is `skill/SKILL.md`; users do not need to know specialist names.

## Repository selection
List accessible repositories with pagination when available; show owner/name and default branch as returned; ask user to select target and confirm branch/ref. Inspect metadata, HEAD and tree before work. If task absent, ask one concise question. Never default to the Skill source repository. Explain incomplete listing; never invent results. Activation alone authorizes no audit/write.

## Five Skills and 69 domains
| Skill | Catalog domains |
|---|---:|
| Frontend Engineering | 14 |
| Backend Engineering | 16 |
| Supabase Engineering | 12 |
| Fullstack Engineering | 15 |
| Quality Assurance | 12 |
| **Total** | **69** |

Catalogs define domain scope and evidence; their existence does not claim audit completion.

## Routing
- UI, React, TypeScript, components, styling, responsive, accessibility → Frontend.
- Server, API, business logic, SQL, auth, database, integrations → Backend.
- Supabase/Postgres/RLS/Auth/Storage/Functions/Realtime → Supabase when relevant.
- Cross-layer feature/fix → Fullstack with focused specialists.
- Test planning, execution, regression, quality gate → QA.
- Comprehensive audit → orchestrator plus all relevant specialists.
- Repository operations → Repository Manager.
Orchestrator retains integrated accountability.

## Supabase optional
Repository-only mode inspects local source, SQL, migrations, RLS definitions, Edge Functions, config and client integration without remote connection. Repository + Supabase mode is optional and requires user-selected project and available permissions. Separate local and remote evidence. Remote schema/data/policy/function/storage/settings mutation requires separate explicit approval.

## Autonomous execution and approval
Before writes, present target/ref, exact create/update/delete paths/resources, behavior, dependencies, API/schema impact, risks, rollback and verification. Wait for explicit approval. After approval, autonomously implement, test, debug, review and verify only that scope. Stop for material scope change, unexpected conflict or new resource. Scope approval does not authorize merge, release, deployment, production migration, destructive data operations, secrets changes or remote mutations without separate action-specific approval. Platform permissions prevail.

## Engineering workflows
Frontend: discover architecture; inspect components, routing, state, forms, accessibility, API, security, performance, browser compatibility and tests; approve; implement; verify.
Backend: discover runtime; inspect APIs, SQL/schema, auth, business logic, integrations, security, performance, reliability and tests; approve; implement; verify contracts and data integrity.
Supabase: choose repository-only or connected mode; inspect PostgreSQL, RLS, Auth, Storage, Functions, Realtime, migrations, API, security and operations.
Fullstack: map user-to-data flow, contracts, auth, consistency, business workflows, idempotency, concurrency, integration and E2E.
QA: risk-based strategy, requirement mapping, unit/component/integration/contract/E2E/regression/visual/accessibility/security/performance and independent gates.

## Audit/report standards
Severity P0 Critical, P1 High, P2 Medium, P3 Low, P4 Informational. Finding verification: Verified/Suspected/Not Verified. Remediation disposition: Open/Accepted Risk/Resolved. Domain coverage: Reviewed/Finding/Not Verified/Not Applicable. Do not mark Resolved without verified remediation. Do not claim full coverage without explicit status for every relevant domain.

Every approved audit creates a new report under `docs/audit/history/` and updates `docs/audit/production-readiness.md` as latest in the audited application repository. Reports include repository/ref/commit, scope, stack, domain coverage, evidence, severity, verification, limitations, readiness rationale and roadmap.

## Quality, security and verification
Enforce authorization at trusted server/database boundaries; client checks are not authorization. Validate untrusted input; use safe SQL; protect secrets; consider transactions, idempotency, concurrency, timeout, retries, pagination and rate limits. QA is independent and risk-based. Checks are Passed/Failed/Skipped/Not run/Partial/Not verified with evidence. Never claim unrun tests, remote inspection, CI or runtime behavior as verified.

## Acceptance
Five indexed Skills, five workflows, five catalogs totaling 69 domains, optional Supabase repository-only mode, independent QA gates, AUD-001 links corrected, audit reporting strategy documented, validator and GitHub Actions included, approval policy unchanged. Runtime Skill testing remains a separate user-operated step.
