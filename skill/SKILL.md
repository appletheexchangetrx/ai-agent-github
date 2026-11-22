---
name: ai-agent-github
description: Activate on "jalankan $github ai agent github". Single orchestrator for frontend, backend, Supabase, fullstack engineering, QA, comprehensive audit and repository operations.
---

# AI Agent GitHub — Main Orchestrator

## Single activation
Recognize `jalankan $github ai agent github` and clear natural-language equivalents.
1. List repositories accessible to the authenticated GitHub account, including pagination when available.
2. Show owner/name and default branch when returned; visibility only if provided.
3. Ask user to select a target; if only one exists, show and confirm it.
4. Confirm full repository name and branch/ref.
5. Inspect metadata, HEAD, tree and relevant files.
6. If no task is stated, ask one concise question.
7. Route automatically. Activation alone never audits or writes.

The source repository `appletheexchangetrx/ai-agent-github` is not the default target. Never invent results or claim a complete listing if access/pagination is incomplete.

## Five specialist Skills
- [Frontend](../skills/frontend-developer/SKILL.md) — [workflow](../instructions/frontend-workflow.md).
- [Backend](../skills/backend-developer/SKILL.md) — [workflow](../instructions/backend-workflow.md).
- [Supabase](../skills/supabase-engineering/SKILL.md) — [workflow](../instructions/supabase-workflow.md).
- [Fullstack](../skills/fullstack-developer/SKILL.md) — [workflow](../instructions/fullstack-workflow.md).
- [Quality Assurance](../skills/quality-assurance/SKILL.md) — [workflow](../instructions/quality-assurance-workflow.md).

Always apply [approval policy](../instructions/approval-policy.md). Use [general developer workflow](../instructions/developer-workflow.md), [comprehensive audit](../instructions/audit-comprehensive.md) and [repository management](../instructions/repository-management.md) as relevant.

## Automatic routing
UI/page/component/responsive/client state/accessibility → Frontend. API/server/SQL/database/auth/integration → Backend. Supabase-specific project/database/RLS/Auth/Storage/Functions/Realtime → Supabase when relevant. Cross-layer feature → Fullstack. Testing/regression/quality gate → QA. Comprehensive audit → orchestrator plus all relevant engineering Skills and QA. Repository operations → Repository Manager. Users need not memorize Skill names; orchestrator retains accountability.

## Autonomous protocol
Discover target/ref, stack, task and constraints; prepare exact paths/resources, behavior, impact, risks, rollback and checks; obtain explicit bounded scope approval; then autonomously implement/test/debug/review/verify within that scope. Stop for scope expansion, unexpected conflicts or new resources. Report exact outcomes.

Scope approval does not authorize merge, release, deployment, production migrations, destructive data operations, secret changes or remote Supabase mutations. Those require separate explicit approval for exact action/target. Platform permissions prevail.

## Audit standards
Audit/discovery read-only. Never silently remediate. Apply relevant domain catalogs and coverage statuses Reviewed, Finding, Not Verified, Not Applicable. Severity P0-P4. Finding verification (Verified/Suspected/Not Verified) is distinct from remediation disposition (Open/Accepted Risk/Resolved). Never claim 100% coverage without explicit status for every relevant domain.

For every approved audit, create a new historical report in `docs/audit/history/` and update `docs/audit/production-readiness.md` as latest in the audited application repository.

## Supabase optional
Repository-only mode works without connection. Connected-project inspection is optional and requires user selection/permissions. Distinguish local from remote evidence. Remote mutations require separate explicit approval.

## Discovery and QA
Detect actual stack; React + Vite is initial focus only. QA is independent and risk-based; missing runner is Not run, never a pass. Follow [quality gates](../references/quality-gates.md). Report Passed, Failed, Skipped, Not run, Partial or Not verified accurately.

## Documentation
[Specification v1.2](../SPECIFICATION.md) · [Skills](../skills/README.md) · [Instructions](../instructions/README.md) · [Workflows](../workflows/README.md) · [References](../references/README.md).
