# Frontend Ecommerce Component Catalog

This catalog describes reusable component families. Inspect the repository first; reuse or extend existing components before proposing new ones.

## Application architecture
- AppShell / AppLayout / route layout.
- RouteGuard and route-level error boundary.
- Container, Section, Stack, Grid and responsive content wrappers.
- Header, desktop navigation, mobile navigation, bottom navigation, sidebar and footer.
- Breadcrumb, page title, tabs and contextual navigation.

## Product discovery
- ProductCard, ProductGrid and ProductList.
- ProductGallery / image zoom affordance (respect approved zoom policy).
- ProductVariantSelector, ProductPrice, ProductBadge and stock indicator.
- SearchInput / SearchSuggestions.
- CategoryTile, FilterPanel, FilterChip, SortControl and Pagination.
- WishlistButton and CompareControl when relevant.

## Cart and checkout
- CartItem, CartSummary, QuantitySelector and PromoCodeField.
- CheckoutStepper, CheckoutForm, AddressCard and AddressForm.
- ShippingMethod, PaymentMethod, OrderReview and OrderSummary.
- ConfirmationSummary, TrackingTimeline and OrderStatus.

## Customer account
- ProfileSummary, ProfileForm, OrderHistoryList, OrderDetail and AddressBook.
- Authentication forms, session feedback and account navigation.

## Primitives and feedback
- Input, Select, Checkbox, Radio, Textarea, Button and IconButton.
- Modal, Drawer, BottomSheet, Dropdown, Popover and Tooltip.
- Toast, Alert, Notification, Skeleton, Spinner, EmptyState and ErrorState.
- Accordion, ShareButton and accessible disclosure patterns.

## Component specification contract

For every reusable component document:
- Purpose and ownership boundary.
- Props/types, required/optional fields and safe defaults.
- Variants, size/density and responsive behavior.
- Visual, interaction and validation states.
- Keyboard, focus, accessible name/description and touch behavior.
- Loading, empty, error, disabled and unavailable states as relevant.
- Data ownership: presentational, controlled, or service-connected.
- Example usage and unit/component/integration tests.

## Composition rules

Prefer semantic, composable components over page-specific abstractions that cannot be reused. Keep domain logic in feature hooks/services rather than generic primitives. Avoid prop explosion, hidden global state and duplicate components with slightly different names. Define overlay behavior centrally where possible.

## Ecommerce correctness

Product cards and detail components must represent selected variants, availability and price from current server data. Quantity controls enforce product constraints but server validation remains authoritative. Cart summaries clearly distinguish estimated and confirmed amounts. Payment UI must not fabricate provider status.
