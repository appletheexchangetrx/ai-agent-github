# Frontend Page Architecture Analysis

## Objective

Understand how the application is composed before adding pages or features. The analysis must reveal where a feature belongs, what should be reused, and whether a new layout or component is actually necessary.

## Required inventories

### 1. Entry points and providers
Map HTML/bootstrap entry, application root, global providers, router provider, state/query providers, theme, localization, authentication and error boundaries. Record initialization order and ownership.

### 2. Page hierarchy
For each route/page record:
- Route path/pattern and route identifier.
- Page component and feature/domain owner.
- Parent route, nested children and layout wrapper.
- Purpose, user role/permission and primary journey.
- Data/services/API dependencies.
- Loading, empty, error, success and not-found states.
- Responsive behavior and accessibility considerations.
- Existing tests and verification gaps.

### 3. AppShell classification
AppShell is the shared application frame, not a synonym for every page. Inspect actual code and identify persistent elements such as global header, navigation, footer, content container, account context, providers and responsive variants.

Record:
- Shell component(s), route groups and nesting.
- Shared versus optional regions.
- Mobile/tablet/desktop variants and navigation behavior.
- State ownership and route transitions.
- Which pages inherit the shell and which intentionally do not.
- Existing shell extension points and duplication risks.

Do not introduce a second shell when a variant or composition slot is sufficient.

### 4. StandalonePages classification
StandalonePages render outside the primary AppShell for a deliberate reason (for example, focused authentication, special checkout, onboarding, maintenance or error pages). These are examples, not mandatory classifications.

For each standalone page record its rationale, shared providers/services, navigation escape paths, responsive layout, accessibility, session behavior and whether it shares visual primitives without inheriting global chrome.

### 5. Overlay architecture
Inventory overlays separately from route pages. Include modal, drawer, bottom sheet, popover, dropdown, command surface, toast and notification patterns where present.

For each overlay record trigger/source, owner, content, dismissal rules, route/history interaction, focus entry/return, Escape behavior, scroll lock, stacking/z-index, mobile adaptation and tests. Determine whether an overlay is local to a feature or global infrastructure.

## Analysis artifacts

- Page hierarchy tree.
- Route-to-layout matrix: AppShell / StandalonePage / overlay association.
- AppShell component map and ownership.
- StandalonePages list with rationale.
- Overlay inventory and lifecycle map.
- Feature boundaries and shared dependency map.
- Existing-versus-proposed component matrix.
- Recommended placement for each requested feature with evidence.

## Architecture decision criteria

Prefer:
1. Existing feature module when ownership matches.
2. Existing AppShell route group when page shares global chrome.
3. Existing StandalonePage pattern when global chrome is intentionally absent.
4. Existing overlay infrastructure for transient contextual tasks.
5. A new component/layout only when reuse or extension is not viable and the reason is documented.

Avoid giant monolithic pages, circular imports, duplicated global navigation, duplicated shell state, route logic hidden inside presentational components and overlays used for durable navigable pages.

## Verification

Confirm route resolution, nested layout behavior, direct deep links, refresh, back/forward, guards, fallback routes, overlay dismissal/focus, responsive shell behavior and absence of unintended duplicate chrome. Record unverified paths explicitly.
