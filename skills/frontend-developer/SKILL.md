---
name: frontend-developer
description: Frontend Engineering for repository preparation, application architecture, React, TypeScript, complete ecommerce storefronts, adaptive responsive UI, design systems, accessibility, performance, security and testing.
---

# Frontend Engineering Skill v1.0

Read [approval policy](../../instructions/approval-policy.md), [developer workflow](../../instructions/developer-workflow.md), [frontend workflow](../../instructions/frontend-workflow.md), [engineering catalog](../../references/frontend-engineering-catalog.md), and the relevant references below. The main orchestrator owns repository selection and approval.

## Activation and framework strategy

Use for browser applications, page structure, navigation, AppShell, StandalonePages, overlays, components, styling, client state, forms, accessibility, API integration, browser compatibility, security, performance and frontend tests.

- Detect the actual framework and project conventions before proposing changes.
- For a new project with no established stack, prefer React + Vite unless the user specifies otherwise.
- For an existing project, preserve a viable framework, router, package manager, styling system and component library. Never migrate or replace them without explicit approval.
- React + Vite is a preferred starting point, not an assumption or requirement for existing repositories.

## Operating modes

1. **Preparation (default, read-only):** inspect the repository and produce the preparation artifacts defined in [project preparation](../../references/frontend-project-preparation.md). Do not modify application code.
2. **Implementation (approval-gated):** after explicit bounded approval, implement only the approved files and behavior, then verify and report.
3. **Hybrid:** prepare autonomously; stop at the approval gate; resume autonomous execution only within the approved scope.

Creating preparation documents in a repository is itself a write and requires inclusion in the approved file scope.

## Required analysis capabilities

Analyze and document:
- Application entry points, page hierarchy, route/page inventory and page-to-layout relationships.
- Navigation model, route transitions, active states, deep links, guards and fallback behavior.
- **AppShell:** shared application chrome and persistent layout boundaries.
- **StandalonePages:** pages intentionally rendered outside the main shell (e.g. authentication, focused checkout or error experiences); determine actual project conventions rather than forcing examples.
- **Overlay:** modal, drawer, bottom sheet, popover, toast and other layered experiences, including triggers, dismissal, focus and z-index ownership.
- Existing reusable components, duplicated patterns, design tokens, feature boundaries, data dependencies and opportunities to extend rather than duplicate.
- Where a proposed feature belongs, which existing structures it should reuse, and whether a new shell, route group, component or overlay is justified.

Use [page architecture](../../references/frontend-page-architecture.md) and [navigation analysis](../../references/frontend-navigation-analysis.md).

## Complete ecommerce storefront

When the target is an ecommerce storefront, assess the full page and component coverage in [storefront page catalog](../../references/storefront-page-catalog.md) and [frontend component catalog](../../references/frontend-component-catalog.md). Adapt the catalog to product scope; do not create irrelevant pages merely to satisfy a checklist.

## Adaptive responsive experience

Design mobile-first with adaptive, native-feeling web interaction patterns, not simply a reduced desktop layout. Follow [adaptive mobile UI guidelines](../../references/adaptive-mobile-ui-guidelines.md). Mobile, tablet and desktop may use different navigation, layout, density and interaction patterns while preserving content and task continuity.

## Design System

Define or extend a centralized, responsive Design System using semantic tokens for color, typography, spacing, sizing, breakpoints, radius, elevation, motion and z-index. Document component variants, themes, accessibility and usage. See [Design System guidelines](../../references/frontend-design-system-guidelines.md).

## Zoom policy

Apply the strictest practical application-level zoom prevention only when the product explicitly requires it. Follow [frontend zoom policy](../../references/frontend-zoom-policy.md), including accessibility caveats and device/browser verification. Never claim that a web application can override every browser, OS, assistive-technology or user accessibility zoom mechanism.

## AI execution optimization

Use [AI execution optimization](../../references/frontend-ai-execution-optimization.md): inspect before creating, reuse before duplicating, map dependencies, batch independent read operations, sequence dependent writes, validate incrementally and keep changes bounded.

## Quality and performance

Verify semantic UI, keyboard/focus behavior, contrast, reduced motion, touch targets, responsive overflow, loading/empty/error/success/offline states, API failures and browser support. Assess security boundaries and avoid exposing secrets in browser code.

Measure rather than guarantee performance. Reference targets: LCP <= 2.5 s, INP <= 200 ms and CLS <= 0.1 on an agreed field/lab methodology. Lighthouse scores >= 90 are aspirations, not acceptance guarantees unless explicitly adopted for the project.

Run applicable formatting, lint, type, unit, component, integration, E2E, accessibility, visual and production-build checks. Record Passed, Failed, Blocked, Skipped or Not run with evidence. Never claim an unexecuted check passed.

## Guardrails

- Read-only discovery and audit are allowed; writes require bounded approval.
- Preserve existing architecture and conventions; no unrelated refactor or dependency addition.
- Never treat client validation or route guards as server authorization.
- Never expose secrets in client bundles or public environment variables.
- Do not deploy, release, migrate production or change remote services without separate explicit approval.
- Stop and request approval if the actual change requires paths, behavior or risk beyond the approved scope.
