# General Developer Workflow

## 1. Purpose

Shared lifecycle for software implementation. Route specialized work to [Frontend](frontend-workflow.md), [Backend](backend-workflow.md), or [Fullstack](fullstack-workflow.md). Detect the actual stack; React + Vite is an initial focus, not an assumption.

All writes follow [approval-policy.md](approval-policy.md).

## 2. Task intake and routing

Understand the desired outcome, current/expected behavior, actors, constraints, acceptance criteria, target repository, and branch/ref. Ask only clarifying questions that materially block safe implementation.

Automatic routing:
- UI, page, component, responsive behavior, client state, accessibility → Frontend.
- API, server logic, authentication/authorization, database, integrations → Backend.
- Feature/fix spanning frontend and backend or multiple layers → Fullstack.
- Mixed scope may combine specialist workflows under one orchestrator and one acceptance plan.

## 3. Repository reconnaissance

1. Inspect repository metadata, target ref, tree, and relevant file state.
2. Read README, manifests, lockfiles, configuration, and relevant documentation.
3. Detect framework, runtime, package manager, lint/test/build commands, API and database patterns.
4. Trace existing implementation before introducing new patterns.
5. Identify affected modules, services, API contracts, data stores, and integrations.
6. Check for concurrent changes and record assumptions/unknowns.

Do not assume npm/yarn/pnpm/bun; use evidence from lockfiles and project documentation.

## 4. Implementation plan

Explain:
- Technical approach and why it fits existing architecture.
- Exact files/resources to create/update/delete.
- Data flow and API/state/schema impacts.
- User-visible behavior and loading/empty/success/error/disabled states where relevant.
- Accessibility, responsive behavior, compatibility, and performance.
- Security implications, risks, dependencies, and rollback.
- Tests/checks and explicit exclusions.

Choose the smallest coherent change that meets acceptance criteria.

## 5. Approval and autonomous execution

Before writes, present the bounded scope and verification plan and obtain explicit approval as defined in [approval-policy.md](approval-policy.md). After approval, autonomously complete all in-scope implementation, tests, debugging, and verification without per-file approval. Stop for additional approval if scope materially expands or a high-risk/production action is required.

## 6. Implementation standards

- Follow repository conventions and reuse existing components/services where appropriate.
- Keep changes focused; avoid unrelated refactors and unnecessary dependencies.
- Never add credentials or secrets to source.
- Validate untrusted input at the correct trust boundary.
- Enforce authorization on trusted server/database boundaries; client checks are not authorization.
- Handle errors consistently without leaking sensitive internals.
- Update docs/tests when behavior or setup changes.
- Do not modify paths outside the approved scope.

## 7. React + Vite considerations

When confirmed:
- Follow existing component, hook, service, and domain boundaries.
- Avoid side effects during render and follow Rules of Hooks.
- Clean up effects and subscriptions.
- Validate route params and external input.
- Keep secrets out of client-exposed environment variables.
- Use lazy loading/code splitting when justified.
- Cover loading, error, empty, and success states.
- Preserve established build and routing configuration unless the approved scope requires a change.

## 8. API, database, and Supabase

Understand request/response contracts, error patterns, validation, server-side authorization, timeout/retry/pagination/rate limits, and cancellation. Supabase is optional. If present, assess RLS and relevant Auth/Database/Storage/Edge Function/Realtime use. Remote schema, data, RLS, function, or project changes require separate explicit approval. Without remote access, limit claims to repository-visible code/config.

## 9. Verification

Use project-supported formatting/lint, type-check, unit/integration/e2e tests, build, and acceptance checks. Before commands, verify they are documented and consider filesystem/network/secrets/service side effects; obtain additional approval for unsafe state changes.

Record Passed, Failed, Skipped, or Not run with reasons. Review final diff for scope, secrets, debug output, edge cases, docs, and regressions.

## 10. Completion report

Report summary, specialists used, changed paths, key decisions, API/schema impact, checks and exact outcomes, skipped checks and reasons, commit/PR references only if created and verified, risks, and remaining work. Do not merge, deploy, or release without separate approval.
