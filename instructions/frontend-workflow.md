# Frontend Engineering Workflow v1.2

Read [approval policy](approval-policy.md), [general workflow](developer-workflow.md), [Frontend Skill](../skills/frontend-developer/SKILL.md) and [catalog](../references/frontend-engineering-catalog.md).

1. Discover actual framework, package manager, routes, components, design tokens, state, forms, API clients, tests and browser targets.
2. Trace user journeys and existing components/services.
3. Inspect architecture, React/hooks, TypeScript, UI/UX, design system, CSS, responsive and accessibility.
4. Inspect state, routing, forms, API contracts, async cancellation and loading/empty/error/success states.
5. Assess client security, secrets, XSS, redirects, uploads and trust boundaries.
6. Assess bundle, rendering, assets, network and browser performance.
7. Define acceptance, exact paths, dependencies, risks, rollback and checks.
8. Obtain bounded approval before writes.
9. Implement only approved changes; preserve conventions and avoid unnecessary dependencies.
10. Verify semantic UI, keyboard/focus, responsive states, browser compatibility and API failure behavior.
11. Run applicable lint/type/unit/component/integration/E2E/build checks.
12. QA independently reviews critical/high-risk journeys.
13. Review diff and report evidence, results and limitations.

E-commerce when applicable: listing/detail, variants, gallery, search/filter/sort, cart, wishlist, checkout, orders, profile and inventory presentation. Verify price/stock from authoritative APIs. Client validation is not server authorization; never expose secrets.
