# React + Vite Audit Checklist v1.2

Use only when discovery confirms React + Vite. Record actual versions, package manager, scripts, routes, tests and browser targets. For each relevant domain record Reviewed, Finding, Not Verified or Not Applicable.

## Architecture and React
- [ ] Entry points, routes, layouts, feature boundaries and data flow mapped.
- [ ] Component responsibilities, reuse, duplication and dependency direction reviewed.
- [ ] Hooks rules, effect dependencies/cleanup, state ownership and rerenders reviewed.
- [ ] Stable list keys, controlled inputs, async cancellation and race handling.
- [ ] Error boundaries, loading fallbacks and lazy routes assessed.

## TypeScript and UI
- [ ] Strictness, unsafe any/casts, nullability and API types reviewed.
- [ ] Semantic HTML, labels, landmarks, accessible names and error associations.
- [ ] Keyboard, focus, contrast, reduced motion and assistive technology.
- [ ] Design tokens, typography, component variants and CSS leakage.
- [ ] Responsive overflow, touch targets and viewport behavior.
- [ ] Loading, empty, error, success, disabled and offline states.

## Routing, state, forms and APIs
- [ ] Deep links, redirects, route guards and not-found behavior.
- [ ] State ownership, cache invalidation and persistence safety.
- [ ] Form validation, async errors and server-side validation boundary.
- [ ] API contracts, cancellation, timeout, retry, pagination and stable errors.
- [ ] Auth/session expiry and logout behavior.

## Security and performance
- [ ] Raw HTML/XSS, URL/redirect, upload and external link handling.
- [ ] No secrets in client env, public assets or bundle.
- [ ] Bundle size, route splitting, rendering, network, caching and image optimization.
- [ ] Core Web Vitals only from actual measurements.

## Testing and operations
- [ ] Unit/component/integration/E2E coverage maps to critical journeys.
- [ ] Tests cover behavior and meaningful failures.
- [ ] Browser/device support matches project target.
- [ ] Lint/type/test/build outcomes recorded accurately.
- [ ] Vite modes, env exposure, base path, proxy, CI and deployment reviewed.

E-commerce when applicable: listing/detail, variants, gallery, search/filter, cart, wishlist, checkout, orders, profile and inventory presentation. Record evidence; never claim an unrun check passed.
