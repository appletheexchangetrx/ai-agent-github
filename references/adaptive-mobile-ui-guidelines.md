# Adaptive Mobile UI Guidelines

## Principle

Mobile-first does not mean desktop UI shrunk to a narrow width. Adapt information hierarchy, navigation, density and interaction patterns to the device while keeping the same product capabilities and content integrity. These are responsive web patterns, not a claim of native iOS/Android implementation.

## Adaptive behavior

### Mobile
- Compact header with prioritized search, account and cart actions.
- Bottom navigation when it improves access to primary destinations; respect safe-area insets.
- Product grids commonly use two columns when card content remains legible.
- Product detail uses a single-column flow, clear gallery/variant selection and visible purchase action.
- Filters and sort open in a bottom sheet or full-height panel where appropriate.
- Cart is vertically stacked; checkout uses clear step progression and persistent but non-obstructive primary action.
- Use touch-friendly controls and avoid hover-only interactions.

### Tablet
- Adaptive navigation based on available width.
- Product grid commonly uses three columns when card dimensions permit.
- Filters may use a drawer, collapsible sidebar or full-width panel.
- Product detail may transition to two columns only when content remains usable.

### Desktop
- Full navigation/header where appropriate.
- Product grid commonly uses four or five columns according to content width.
- Product detail can use a two-column gallery/information layout.
- Filters may use a sidebar; cart and checkout can use multi-column layouts.
- Preserve keyboard navigation and visible focus.

## Responsive foundations

- Define breakpoints from content needs and existing design tokens, not device brand assumptions.
- Use fluid containers, grid/flex constraints and responsive typography.
- Avoid fixed widths that cause horizontal overflow.
- Respect `env(safe-area-inset-*)` where supported.
- Baseline touch target: 44 × 44 CSS px where practical; provide spacing between adjacent controls.
- Sticky bottom CTAs must not cover content, keyboard fields or system gestures.
- Account for virtual keyboard, orientation changes and dynamic viewport height.
- Support text enlargement and browser zoom unless a separately approved product requirement defines a carefully bounded zoom policy.
- Use reduced-motion preferences and avoid unnecessary animation.

## Interaction and accessibility

Use native semantic controls where possible. Ensure keyboard equivalents, accessible names, focus order, focus return, error association and screen-reader status announcements. Bottom sheets and drawers require managed focus, Escape/back dismissal where appropriate, scroll locking and accessible dialog semantics. Do not make swipe the only way to complete an action.

## Verification matrix

Test at representative narrow and wide mobile widths, tablet portrait/landscape and desktop. Include real iOS Safari and Android Chrome checks when those browsers are in scope. Verify no unintended horizontal scroll, readable text, touch targets, safe areas, sticky actions, overlays, forms with virtual keyboard, orientation and accessibility settings. Record exact devices/browser versions and outcomes; emulation is not equivalent to real-device testing.
