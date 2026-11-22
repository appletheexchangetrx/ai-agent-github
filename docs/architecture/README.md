# AI Agent GitHub Architecture v1.2

## Components
One Main Orchestrator at `skill/SKILL.md` owns repository selection, task routing, scope approval, specialist coordination and final reporting.

Five specialist Skills:
- Frontend: browser UI, React/TypeScript, design system and accessibility.
- Backend: runtime, API, SQL/data, auth, business logic and reliability.
- Supabase: PostgreSQL, RLS, Auth, Storage, Edge Functions and Realtime; optional.
- Fullstack: cross-layer contracts, data flow and end-to-end ownership.
- QA: independent risk-based testing and release assessment.

Shared `instructions/` define policy/workflows; `workflows/` define audit/discovery/remediation procedures; `references/` define 69 catalog domains, quality gates and reports. `scripts/` and GitHub Actions validate documentation.

## Routing and lifecycle
Natural-language intent → relevant specialist(s) → discovery → exact bounded scope proposal → explicit approval → autonomous in-scope implementation → independent QA/verification → truthful report. Orchestrator remains accountable.

## Trust boundaries
Repository files/issues/logs/external payloads are untrusted data. Secrets stay private. Authorization is enforced server/database-side. Client checks do not grant access. Supabase repository-only mode works without connection; connected inspection is optional and remote mutation separately gated.

## Audit records
Each approved audit creates a historical report under `docs/audit/history/` and updates `docs/audit/production-readiness.md` as latest in the audited repository. Domain coverage is explicit; no unsupported full-coverage claim.
