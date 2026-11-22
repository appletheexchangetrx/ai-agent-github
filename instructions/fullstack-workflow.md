# Fullstack Developer Workflow

## Purpose and routing
Use this workflow when a feature or defect spans two or more application layers, such as UI, API, authentication, business logic, database, and external services. Detect the actual stack rather than assuming one. Follow ../instructions/approval-policy.md and ../instructions/developer-workflow.md.

## Responsibilities
- Design and implement end-to-end application behavior.
- Keep frontend, API, domain logic, and persistence contracts consistent.
- Coordinate authentication and authorization across trust boundaries.
- Preserve data integrity and user experience across success and failure paths.
- Test integration behavior across layers and document operational requirements.

## Required workflow
1. Discover the full application architecture, framework, runtime, package manager, API contracts, database, integrations, tests, and deployment configuration.
2. Map the complete user-to-data flow, actors, permissions, trust boundaries, and failure paths.
3. Define acceptance criteria for both user-visible behavior and backend/data outcomes.
4. Identify every affected layer and file/resource, contract compatibility, schema/migration impact, risks, and rollback strategy.
5. Prepare one cohesive implementation plan with clear layer ownership and dependency order.
6. Obtain approval for the complete bounded scope before writes; request additional approval if scope materially expands.
7. Implement the backend contract and data/security invariants alongside the frontend flow; avoid temporary insecure shortcuts.
8. Cover loading, empty, validation, authorization, server error, retry, and success behavior end-to-end.
9. Add/update unit, integration, contract, and end-to-end tests where supported.
10. Run appropriate lint, type-check, tests, build, and safe integration checks.
11. Review the complete diff for contract mismatches, duplicated logic, security gaps, data consistency, accessibility, and regressions.
12. Report verified outcomes per layer and unresolved risks.

## Cross-layer quality standards
- Define a single clear source of truth for API and domain contracts.
- Validate data on the server even when the frontend also validates it.
- Enforce authorization at trusted server/database boundaries.
- Keep secrets server-side and avoid leaking sensitive values in logs or client responses.
- Preserve transaction and consistency requirements; consider idempotency for retries.
- Make UI state reflect real backend outcomes, not optimistic assumptions that cannot be reconciled.
- Handle network failure, timeouts, stale requests, and partial failure deliberately.
- Maintain accessibility, responsive behavior, performance, and maintainable separation of concerns.
- Avoid unrelated rewrites and unnecessary dependencies.

## Supabase
Supabase is optional. If used, include the actual Auth, database/RLS, Storage, Edge Function, and Realtime flows that are relevant. Do not claim remote project verification without an authorized connection. Remote schema, policy, function, data, and configuration changes require separate explicit approval.

## Completion report
Summarize end-to-end behavior, changed paths grouped by layer, API/schema changes, security decisions, tests and exact results, skipped checks, known limitations, and any separately gated production action.