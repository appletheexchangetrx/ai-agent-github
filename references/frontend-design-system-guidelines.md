# Frontend Design System Guidelines

## Purpose

Create or extend a coherent, responsive and accessible system of semantic design tokens and reusable component patterns. Prefer the repository's existing source of truth; do not create a parallel token system.

## Token groups

Use semantic names and centralize values:
- Color: canvas/surface, elevated surface, text primary/secondary, border, accent, interactive, success, warning, danger and focus.
- Typography: font family, size scale, weight, line height, letter spacing and responsive heading/body styles.
- Spacing: consistent scale for gaps, padding and section rhythm.
- Sizing: content widths, control heights, icon sizes and touch target minimums.
- Breakpoints: content-driven mobile/tablet/desktop transitions.
- Radius: control, card, panel and pill variants.
- Elevation: shadow/layer conventions that work in each theme.
- Motion: duration, easing and reduced-motion alternatives.
- Z-index: documented layers for app chrome, sticky elements, dropdowns, drawers, dialogs and notifications.

## Semantic tokens

Prefer intent-based tokens (for example, `text-primary`, `surface-raised`, `border-subtle`) over raw color names in components. Components should not independently invent colors, spacing or shadow values when a token exists.

## Themes and responsive behavior

Support light/dark themes only when product requirements and existing architecture justify them. Maintain contrast and semantic meaning across themes. Use fluid type/spacing where appropriate and document breakpoints and exceptions. Avoid breakpoints tied to a single device model.

## Component contracts

Document variants, sizes, states, responsive behavior, accessibility, interaction and composition for shared components. Tokens should map to implementation format already used by the project (CSS variables, theme objects, utility config or equivalent). A JSON artifact should be valid JSON and should not be a competing runtime source unless explicitly chosen.

## Accessibility and governance

- Meet WCAG contrast expectations for text and controls.
- Provide visible focus indicators and disabled/error states.
- Honor reduced motion and text scaling.
- Do not convey status by color alone.
- Define token ownership, naming, deprecation and review process.
- Verify visual consistency across representative viewports and themes.

## Suggested JSON shape

```json
{
  "version": "1.0.0",
  "themes": ["light"],
  "tokens": {
    "color": {},
    "typography": {},
    "spacing": {},
    "sizing": {},
    "breakpoint": {},
    "radius": {},
    "elevation": {},
    "motion": {},
    "zIndex": {}
  },
  "components": {}
}
```

Populate values from the product's approved visual direction; do not invent brand values during repository audit.
