# Frontend Engineering Catalog — 14 Domains

For each relevant domain record evidence, coverage (Reviewed / Finding / Not Verified / Not Applicable), risk, recommendation and verification status. Use stack-specific references only after detecting the actual stack.

1. **Frontend Architecture** — entry points, feature boundaries, page hierarchy, AppShell, StandalonePages, overlays, composition and dependency direction.
2. **React Engineering** — components, hooks, lifecycle, state, effects, cleanup, rendering, concurrency and async races.
3. **TypeScript Engineering** — strictness, type boundaries, nullability, unsafe casts and runtime validation.
4. **UI/UX Engineering** — user journeys, interaction consistency, feedback states, information hierarchy and usability.
5. **Design System Engineering** — semantic tokens, typography, spacing, themes, component variants and reusable primitives.
6. **CSS & Styling Engineering** — CSS architecture, specificity, global leakage, responsive styling, maintainability and motion.
7. **Responsive Engineering** — mobile/tablet/desktop adaptation, safe areas, overflow, touch targets and adaptive navigation.
8. **Accessibility Engineering** — semantic HTML, labels, keyboard, focus, contrast, text scaling, reduced motion and assistive technology.
9. **State Management Engineering** — local/global/server state, caching, derived state, persistence and invalidation.
10. **Frontend API Integration** — contracts, validation, fetch lifecycle, cancellation, timeout, retry and errors.
11. **Frontend Security** — XSS, raw HTML, URL/redirect, token exposure, file input and client trust boundaries.
12. **Frontend Performance** — bundle/chunks, rendering, assets, caching, layout shifts and measured Core Web Vitals.
13. **Frontend Testing** — unit, component, integration, E2E, accessibility, visual, responsive and browser tests.
14. **Frontend Deployment & Operations** — build/env config, static hosting, routing fallback, CI, source maps and readiness.

## Cross-cutting architecture lenses

- **Navigation:** route tree, navigation hierarchy, active state, deep links, guards, redirects, history behavior, not-found and error routes.
- **AppShell:** global chrome, persistent navigation, header/footer, responsive shell variants, providers and shared layout ownership.
- **StandalonePages:** pages outside the primary shell, intentional reasons, shared providers/services and independent responsive/accessibility behavior.
- **Overlay:** modal, drawer, bottom sheet, popover, dropdown, toast and notification lifecycle; trigger, dismissal, focus trap/return, Escape, scroll lock and z-index.
- **Storefront completeness:** use [storefront page catalog](storefront-page-catalog.md) and [component catalog](frontend-component-catalog.md).
- **Adaptive UI:** use [adaptive mobile guidelines](adaptive-mobile-ui-guidelines.md); mobile is not a scaled desktop.
- **Zoom behavior:** use [zoom policy](frontend-zoom-policy.md); record browser/OS limitations and accessibility impact.
- **Preparation:** use [project preparation](frontend-project-preparation.md) and [AI execution optimization](frontend-ai-execution-optimization.md).

E-commerce when relevant: listing/detail, variants, gallery, search/filter/sort, cart, wishlist, checkout, orders, profile and inventory presentation. React + Vite is a preferred starting point for new projects, not an assumption for existing repositories.
