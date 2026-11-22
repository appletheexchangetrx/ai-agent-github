# Workflows

Operational workflows for AI Agent GitHub. Discovery and audit are read-only by default. Software implementation is autonomous only after the bounded scope is approved.

## Workflow index
1. [Repository discovery](repository-discovery.md) — validate target, inventory tree, detect stack, map integrations.
2. [Comprehensive audit](comprehensive-audit.md) — cross-domain audit, evidence validation, prioritization, reporting.
3. [Approved remediation and verification](approved-remediation-verification.md) — implement authorized audit remediation and verify outcomes.

## Developer specialist workflows
- [Frontend Developer](../instructions/frontend-workflow.md) — UI, UX, responsive design, accessibility, client behavior.
- [Backend Developer](../instructions/backend-workflow.md) — APIs, server logic, authentication, database, integrations.
- [Fullstack Developer](../instructions/fullstack-workflow.md) — end-to-end implementation across application layers.
- [General Developer Workflow](../instructions/developer-workflow.md) — shared intake, discovery, scope approval, implementation, verification.

## Required references
- [React + Vite checklist](../references/react-vite-audit-checklist.md)
- [API and Supabase checklist](../references/api-supabase-audit-checklist.md)
- [Finding template](../references/finding-template.md)
- [Audit report template](../references/audit-report-template.md)
- [Approval policy](../instructions/approval-policy.md)

## Execution principles
- Confirm repository and ref before work.
- Detect actual stack and integrations; do not assume.
- Repository-only work/audit is supported; remote Supabase inspection is optional and permission-bound.
- Get bounded scope approval before writes; after approval, complete in-scope work autonomously.
- Merge, deployment, release, production migrations, destructive operations, and remote production changes require separate explicit approval.
- Record evidence, limitations, and check outcomes honestly.
