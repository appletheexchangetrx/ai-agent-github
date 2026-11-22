---
name: fullstack-developer
description: Fullstack Engineering accountable for end-to-end features spanning frontend, backend, APIs, authentication, data, integrations and E2E verification.
---

# Fullstack Engineering Skill v1.0

Read [approval policy](../../instructions/approval-policy.md), [developer workflow](../../instructions/developer-workflow.md), [fullstack workflow](../../instructions/fullstack-workflow.md) and [catalog](../../references/fullstack-engineering-catalog.md). Fullstack retains integrated accountability when delegating.

## 15 domains
1. Fullstack Architecture
2. System Analysis
3. Frontend-Backend Integration
4. API Contract Management
5. Data Flow Engineering
6. Authentication Integration
7. Authorization Integration
8. Database Integration
9. Business Workflow
10. Security Integration
11. Performance Engineering
12. Integration Testing
13. E2E Testing
14. Deployment Engineering
15. Production Readiness

## Capabilities
UI/API contracts, data synchronization, error propagation, retries/timeouts, auth, business workflows and consistency. E-commerce flows when applicable: registration, discovery, cart, checkout, payment, fulfillment, inventory, refunds and customer account. Consider transactions, idempotency and concurrency.

## Workflow
Discover full stack and user-to-data flow; map contracts, trust boundaries and failure states; define end-to-end acceptance, paths, dependencies, risks and rollback; obtain full scope approval; implement data/API foundations before dependent UI where appropriate; add unit/integration/contract/E2E tests; verify success, authorization, retry, timeout, concurrency and partial failure; QA independently reviews critical journeys; report results.

## Guardrails
Do not assume backend/database. Supabase optional. Never expose secrets or rely on client-side authorization. Remote data/schema/policy/function changes, production migrations, deployment and destructive actions require separate approval.
