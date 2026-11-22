# Frontend Project Preparation

## Purpose

A read-only preparation workflow that turns a frontend request into an evidence-based project model, requirements, architecture proposal and bounded implementation plan. Preparation is the default; repository writes require explicit approval.

## Discovery checklist

Inspect, where present:
- Repository metadata, branch/ref, base SHA, tree and contribution conventions.
- package manifests, lockfiles, scripts, runtime versions and build configuration.
- Entry points, app providers, route definitions, layouts, page modules and error boundaries.
- Component directories, hooks, services, feature modules and shared utilities.
- Styling system, tokens, themes, fonts, assets, icon library and UI component library.
- State management, forms/validation, API clients, authentication/session and data contracts.
- Unit/component/integration/E2E tests, lint, type checking, CI and deployment configuration.
- Browser/device support, accessibility expectations, performance budgets and security constraints.

Do not infer implementation behavior from filenames alone. Inspect imports, call sites and route wiring.

## Required analysis outputs

Adapt these artifacts to project size; if an artifact is unnecessary, mark it Not Applicable with a reason:
1. `project-analysis.md` — actual stack, repository conventions, strengths, constraints and evidence.
2. `project-requirements.md` — actors, goals, functional/non-functional requirements and acceptance criteria.
3. `user-flows.md` — primary journeys, alternate paths, failure and recovery paths.
4. `page-inventory.md` — route/page list, hierarchy, purpose, shell classification and status.
5. `component-catalog.md` — existing, reusable, missing and proposed components.
6. `design-system.json` — semantic token model and component conventions, only when a Design System deliverable is needed.
7. `responsive-specification.md` — mobile/tablet/desktop behavior and breakpoints.
8. `application-architecture.md` — AppShell, StandalonePages, Overlay, route groups and feature boundaries.
9. `component-dependency-map.md` — dependency relationships, ownership and implementation order.
10. `implementation-plan.md` — bounded file scope, sequence, dependencies and acceptance criteria.
11. `frontend-qa-plan.md` — functional, responsive, accessibility, visual, performance and browser verification.
12. `implementation-risks.md` — risk, likelihood, impact, mitigation, rollback and unresolved assumptions.

These are proposed deliverables, not automatic files. Creating or updating them requires inclusion in the approved write scope.

## Decision rules

- Preserve a viable existing stack; React + Vite is the default only for a new project without a chosen framework.
- Prefer extending existing components, shell and route patterns over parallel implementations.
- Separate confirmed evidence, assumptions and unknowns.
- Do not add dependencies merely for convenience.
- Map every requested capability to a page, component, service/API contract and verification case.
- Prioritize foundations and high-dependency work before leaf pages.
- Keep scope minimal while satisfying acceptance criteria; list exclusions explicitly.

## Approval gate

Before implementation, present target repository/ref and base SHA; exact create/update/delete paths; behavior and architecture changes; dependency sequence; data/API impact; accessibility/security/performance implications; risks; rollback; and verification plan. Wait for explicit approval. A preparation report written into the repository is also a write.
