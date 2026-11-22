# React + Vite Audit Checklist v1.3

Use only when discovery confirms React + Vite. Record actual versions, package manager, scripts, router, styling, tests and browser targets. For every relevant item record evidence and Reviewed / Finding / Not Verified / Not Applicable.

## Architecture, page hierarchy and navigation
- [ ] Entry points, providers, route tree, page hierarchy and feature boundaries mapped.
- [ ] AppShell composition, shared chrome, responsive shell variants and layout ownership mapped.
- [ ] StandalonePages identified with rationale and shared dependencies.
- [ ] Overlay inventory includes trigger, dismissal, focus, scroll lock and z-index ownership.
- [ ] Route-to-shell matrix and navigation hierarchy documented.
- [ ] Deep links, active navigation, guards, redirects, history and not-found behavior verified.
- [ ] Proposed feature placement reuses existing shell/routes/components where appropriate.
- [ ] Component responsibilities, reuse, duplication and dependency direction reviewed.

## React, TypeScript and UI
- [ ] Hooks rules, effect dependencies/cleanup, state ownership and rerenders reviewed.
- [ ] Stable list keys, controlled inputs, async cancellation and race handling.
- [ ] Error boundaries, loading fallbacks and lazy routes assessed.
- [ ] TypeScript strictness, unsafe any/casts, nullability and API types reviewed.
- [ ] Semantic HTML, labels, landmarks, accessible names and error associations.
- [ ] Keyboard, focus, focus return, contrast, reduced motion and assistive technology.
- [ ] Design tokens, typography, component variants and CSS leakage.
- [ ] Loading, empty, error, success, disabled and offline states.

## Responsive, adaptive and zoom behavior
- [ ] Mobile/tablet/desktop layouts and interaction patterns assessed independently.
- [ ] No unintended horizontal overflow at representative viewport widths.
- [ ] Touch targets, safe areas, sticky actions, orientation and keyboard behavior.
- [ ] Adaptive bottom navigation, drawers/bottom sheets and density appropriate to device.
- [ ] Text scaling and accessibility settings remain usable.
- [ ] If zoom prevention is a requirement, approved policy and browser/device test matrix are documented.
- [ ] App-level prevention does not claim control over browser chrome, OS magnification or accessibility overrides.

## State, forms and APIs
- [ ] State ownership, cache invalidation and persistence safety.
- [ ] Form validation, async errors and server-side validation boundary.
- [ ] API contracts, cancellation, timeout, retry, pagination and stable errors.
- [ ] Auth/session expiry and logout behavior.
- [ ] Price, stock, discounts, payment and order status use authoritative server data.

## Security and performance
- [ ] Raw HTML/XSS, URL/redirect, upload and external link handling.
- [ ] No secrets in client env, public assets or bundle.
- [ ] Bundle size, route splitting, rendering, network, caching and image optimization.
- [ ] Core Web Vitals only from actual measurements; methodology recorded.

## Testing and operations
- [ ] Unit/component/integration/E2E coverage maps to critical journeys.
- [ ] Tests cover behavior and meaningful failures.
- [ ] Browser/device support matches project target.
- [ ] Lint/type/test/build outcomes recorded accurately.
- [ ] Vite modes, env exposure, base path, proxy, CI and deployment reviewed.

E-commerce when applicable: validate complete page and component coverage against [storefront page catalog](storefront-page-catalog.md) and [component catalog](frontend-component-catalog.md). Record evidence; never claim an unrun check passed.
