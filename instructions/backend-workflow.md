# Backend Engineering Workflow v1.2

Read [approval policy](approval-policy.md), [general workflow](developer-workflow.md), [Backend Skill](../skills/backend-developer/SKILL.md) and [catalog](../references/backend-engineering-catalog.md).

1. Discover runtime/framework, package manager, entry points, API style, database, migrations, env names, tests and deployment.
2. Trace route/controller → service/domain → persistence/integrations.
3. Map actors, trust boundaries, permissions, sensitive data, invariants and failures.
4. Review API contracts, validation, errors, pagination, versioning, rate limits, timeout/retry and idempotency.
5. Review schema normalization, keys/constraints, indexes/query plans, transactions/isolation, migration compatibility and recovery.
6. Review authentication/session/JWT/OAuth and server-side authorization/RBAC.
7. Review business logic, integrations, storage, security, performance, observability and reliability.
8. Define acceptance, exact paths/resources, contract/schema impact, risks, rollback and verification.
9. Obtain bounded approval before writes.
10. Implement validation, authorization, business invariants, safe persistence and consistent errors.
11. Add tests for success, invalid input, unauthorized/missing resources, concurrency and dependency failures.
12. Run safe lint/type/test/build and migration checks; no production mutation.
13. Review diff, data integrity, logs and rollback; coordinate QA.
14. Report exact outcomes and limitations.

E-commerce when applicable: products/variants, inventory/reservations, cart, checkout, orders, payments/refunds, shipping, discounts, tax and customers. Consider idempotency and concurrent stock updates. Supabase optional; remote mutations and production operations separately gated.
