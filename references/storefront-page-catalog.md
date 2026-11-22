# Complete Ecommerce Storefront Page Catalog

Use this catalog to assess completeness, not as a mandate to implement every route. Mark each item In scope, Existing, Proposed, Not applicable or Deferred, with owner and acceptance criteria.

## Storefront and discovery
- Home / storefront landing.
- Product listing / all products.
- Category and subcategory listing.
- Search results and search suggestions.
- Product detail.
- Brand landing.
- Collection / curated range.
- Promotional or campaign landing.
- Wishlist / saved products.
- Compare products, if the domain requires it.

## Shopping and checkout
- Cart.
- Checkout overview.
- Customer/contact details.
- Address selection and address entry.
- Shipping/delivery method.
- Payment method and payment handoff.
- Order review.
- Order confirmation / receipt.
- Order tracking / fulfillment status.
- Cancellation, return or refund status where supported.

## Customer account
- Sign in.
- Registration.
- Forgot/reset password.
- Profile and personal details.
- Order history.
- Order detail.
- Address book.
- Wishlist.
- Account/security settings.
- Sign out and session-expired states.

## Supporting and system pages
- About, contact and store information.
- FAQ / help center.
- Shipping and delivery policy.
- Returns and refunds policy.
- Privacy policy and terms.
- Warranty/support information where relevant.
- 404 not found.
- 403/unauthorized.
- 500/general error.
- Offline/network failure.
- Maintenance or service unavailable.

## Cross-page states

Assess loading/skeleton, empty, validation, error, retry, success, disabled, unavailable/out-of-stock, price/stock change, session expiry and responsive states. Define cart persistence and checkout recovery behavior.

## Ecommerce invariants

- Price, discounts, tax, stock, shipping quote, payment result and order status come from authoritative services.
- Client-side totals are previews, not financial authority.
- Payment flows must not imply success until the server/provider confirms it.
- Preserve cart state safely through sign-in, refresh and recoverable failures.
- Protect account/order routes with server-side authorization.
- Handle unavailable variants, stale stock and changed prices explicitly.

## Acceptance matrix

For each in-scope page record route, audience, shell classification, primary action, data/API dependencies, reusable components, responsive variants, accessibility requirements, loading/empty/error/success behavior and tests. Link the page to the relevant user flow and implementation milestone.
