# Frontend Engineering Workflow v1.3

Read [approval policy](approval-policy.md), [general workflow](developer-workflow.md), [Frontend Skill](../skills/frontend-developer/SKILL.md), [engineering catalog](../references/frontend-engineering-catalog.md), and the references linked below.

## Phase 1 — Preparation (read-only by default)

1. Confirm repository, branch/ref and base commit. Inspect current tree and working conventions.
2. Detect framework, runtime, package manager, build tool, router, styling, UI libraries, state, forms, API clients, tests and supported browsers from manifests, lockfiles, entry points and source.
3. Map application entry points, page hierarchy, route inventory, navigation and user journeys.
4. Classify each page as AppShell page, StandalonePage or Overlay-driven experience. Record shared shell boundaries, shell variants, route groups and exceptions.
5. Trace existing components, hooks, services, tokens, feature modules and dependencies. Identify reuse, duplication and ownership.
6. Build the storefront page inventory and component catalog where ecommerce is in scope.
7. Assess responsive behavior by mobile/tablet/desktop; identify adaptive interaction needs, safe-area handling, touch targets and overflow.
8. Inspect Design System tokens, themes, typography, spacing, breakpoints, component variants and accessibility.
9. Inspect state, forms, API contracts, auth boundaries, async cancellation, loading/empty/error/success/offline states.
10. Assess security, browser compatibility, performance, test coverage, build/deployment configuration and operational risks.
11. Produce preparation artifacts from [project preparation](../references/frontend-project-preparation.md), adapted to the task and actual repository.
12. Present findings, acceptance criteria, exact proposed paths, dependency order, risks, rollback and verification plan.
13. Stop for explicit bounded implementation approval.

Preparation outputs should distinguish Verified, Assumed, Not Verified and Not Applicable. Do not infer unseen behavior from filenames alone.

## Phase 2 — Approved implementation

1. Recheck branch/ref, base SHA and target file state immediately before writes.
2. Confirm every intended path is within the approved list. Stop on unexpected changes or concurrent edits.
3. Implement shared foundations before dependent pages/components; preserve established framework, router, design system and conventions.
4. Extend existing AppShell, StandalonePages, navigation and Overlay infrastructure before creating alternatives.
5. Build complete ecommerce flows only to the approved product scope; preserve authoritative server contracts for price, stock, payment and authorization.
6. Implement adaptive mobile/tablet/desktop patterns; do not merely shrink desktop layouts.
7. Implement the approved zoom policy only where appropriate and retain accessibility caveats.
8. Add/update tests for behavior, edge cases, accessibility and responsive states.
9. Run incremental checks after logical batches, then the complete applicable verification plan.
10. Review diff for scope, secrets, accessibility, regressions, dependency changes and documentation links.
11. Report changed paths, outcomes, evidence, skipped checks, limitations and residual risks.

## Architecture analysis requirements

Use [page architecture](../references/frontend-page-architecture.md) and [navigation analysis](../references/frontend-navigation-analysis.md). At minimum, produce:
- Page/route inventory and hierarchy.
- Route-to-shell matrix (AppShell, StandalonePage, Overlay association).
- AppShell composition and shared layout ownership.
- Standalone page rationale and shared service dependencies.
- Overlay inventory with trigger, dismissal, focus behavior and layering.
- Navigation map with entry/exit paths, guards, deep links and fallback.
- Shared component map and proposed feature placement.
- Reuse/extension/creation decisions with evidence.

## Responsive and zoom verification

Follow [adaptive mobile UI guidelines](../references/adaptive-mobile-ui-guidelines.md) and [zoom policy](../references/frontend-zoom-policy.md). Verify representative narrow mobile, wide mobile, tablet and desktop viewports; keyboard and touch interactions; safe areas; orientation; text scaling; and no unintended horizontal overflow. Record browser/device limitations accurately.

## E-commerce coverage

When relevant, cover discovery, categories, search, product details and variants, wishlist, cart, checkout, address/shipping/payment steps, confirmation, tracking, customer profile and order history. Use [storefront page catalog](../references/storefront-page-catalog.md) and [component catalog](../references/frontend-component-catalog.md). Mark out-of-scope pages rather than silently omitting them.

## Performance and quality

Prefer route-level code splitting, lazy loading, optimized responsive images, appropriate caching, reduced unnecessary renders and minimal dependencies. Measure Core Web Vitals; targets are not guarantees. Run applicable lint/type/unit/component/integration/E2E/build checks and record exact outcomes. QA independently reviews critical/high-risk journeys where available.

## E-commerce and security invariants

Verify price, stock, discounts, payment status and order state against authoritative server APIs. Client validation and route guards are not authorization. Never expose secrets in browser code. Sanitize untrusted content and validate redirect/upload boundaries. Never claim remote services or production behavior were tested without evidence.
