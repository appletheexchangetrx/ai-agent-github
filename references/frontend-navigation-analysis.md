# Frontend Navigation Analysis

## Scope

Analyze navigation as an application system: information architecture, route definitions, visible navigation controls, transitions, guards and fallback behavior.

## Inventory

For each route capture:
- Path, route name, page component and route parameters.
- Parent/child nesting and layout/AppShell classification.
- Navigation entry points and expected exit paths.
- Authentication/authorization requirements and redirect behavior.
- Query parameters, filters, pagination and deep-link semantics.
- Breadcrumb and active-navigation behavior.
- Loading, error, not-found and unauthorized behavior.
- Mobile/tablet/desktop navigation presentation.
- Analytics or external link behavior when relevant.

## Navigation surfaces

Inspect global header/nav, desktop sidebar, mobile bottom navigation, category navigation, breadcrumbs, tabs, in-page anchors, contextual actions and footer links. Identify duplicated menus, dead links, inaccessible controls and routes that are not discoverable.

## Route transition map

Represent primary user journeys as source → action → destination, including:
- Direct URL entry and page refresh.
- Internal navigation and browser back/forward.
- Authentication-required redirect and return-to path.
- Deep links to products, categories, orders and account sections.
- Search/filter/sort/pagination state persistence.
- Overlay open/close and route/history interaction.
- 404, 403/unauthorized, 500 and offline recovery.

## AppShell and StandalonePages

Create a route-to-shell matrix. Record shell ownership, nested route layouts, routes intentionally outside the main shell and shared provider requirements. Do not assume every route must appear in global navigation.

## Recommendations

For each requested navigation change, state whether to reuse, extend, configure or create. Specify exact route owner and menu location; avoid duplicate route definitions and navigation state. Preserve accessible names, keyboard operation, focus visibility and current-page semantics.

## Verification checklist

- Every intended route resolves on direct load and refresh.
- Internal links point to valid routes and preserve expected parameters.
- Active state, breadcrumbs and nested navigation are correct.
- Guards enforce UX flow while server authorization remains authoritative.
- Back/forward behavior is predictable.
- Unknown routes and failures have useful recovery paths.
- Mobile navigation supports touch, safe areas and keyboard/screen-reader access.
- Overlays do not create inaccessible navigation traps.
