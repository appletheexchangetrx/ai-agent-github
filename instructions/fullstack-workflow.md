# Fullstack Engineering Workflow v1.2

Read [approval policy](approval-policy.md), [general workflow](developer-workflow.md), [Fullstack Skill](../skills/fullstack-developer/SKILL.md) and [catalog](../references/fullstack-engineering-catalog.md).

1. Discover architecture, stack, runtime, package manager, APIs, database, integrations, tests and deployment.
2. Map user-to-data flow, actors, permissions, trust boundaries and failure states.
3. Audit frontend/backend boundaries and Supabase if relevant.
4. Define UI/API contracts, data flow, synchronization, error propagation, retry/timeout and compatibility.
5. Map authentication and authorization across layers.
6. Define business workflows, invariants, transactions, idempotency and concurrency.
7. Assess security, performance, observability and readiness.
8. Define E2E acceptance, exact paths/resources, dependency order, risks and rollback.
9. Obtain approval for complete bounded scope.
10. Implement data/API/security foundations before dependent UI where appropriate.
11. Implement frontend against verified contracts.
12. Add unit, integration, contract and E2E tests where supported.
13. Verify success, validation, authorization, failure, retry, timeout, concurrency and partial failure.
14. QA independently assesses critical flows.
15. Review complete diff and report integrated evidence and limitations.

E-commerce when relevant: registration, discovery, variants, cart, checkout, payment, fulfillment, inventory, refunds and customer account. Supabase optional; remote mutations, production migrations, deployment and destructive actions separately gated.
