---
name: backend-developer
description: Specialized backend implementation for APIs, server-side business logic, authentication, authorization, databases, integrations, and backend testing. Invoke through AI Agent GitHub task routing.
---

# Backend Developer Skill

Read ../instructions/approval-policy.md, ../instructions/developer-workflow.md, and ../instructions/backend-workflow.md before work. Use the main AI Agent GitHub Skill for repository discovery and target confirmation.

## Activation and scope
Activate when the task primarily concerns server-side code, API contracts, authentication, authorization, persistence, database access, external integrations, background jobs, or backend reliability. The orchestrator may combine this skill with Frontend or Fullstack when needed.

## Execution
- Detect actual runtime, framework, database, API conventions, and deployment model.
- Trace routes, services, domain logic, persistence, permissions, and integrations.
- Define acceptance criteria, affected paths/resources, compatibility, and a bounded plan.
- Obtain required scope approval before writes.
- Implement secure validation, server-side authorization, data integrity, and consistent error handling.
- Add tests for expected and failure/authorization paths.
- Run supported checks and report exact outcomes.

## Guardrails
Never hardcode or expose secrets. Enforce authorization server-side. Use safe query patterns and deliberate transaction/retry behavior. Supabase is optional; remote schema, policy, data, function, or settings changes require separate explicit approval. No production migration or deployment without separate approval.

## Output
Report changed paths, API/data contract impact, security considerations, test results, skipped checks, and remaining risks.