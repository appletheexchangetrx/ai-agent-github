# API, Backend and Supabase Audit Checklist v1.2

Supabase is optional. Distinguish repository evidence from remote project evidence. For each relevant domain record Reviewed, Finding, Not Verified or Not Applicable.

## API and integrations
- [ ] REST/GraphQL/RPC/webhooks, endpoints, SDKs and call sites mapped.
- [ ] Request/response schemas, validation, serialization and versioning.
- [ ] Authentication vs authorization for each protected operation.
- [ ] Pagination, rate limits, quotas, idempotency, timeout, retry/backoff and cancellation.
- [ ] Stable errors, webhook signatures/replay protection and failure recovery.
- [ ] Sensitive data flow and third-party exposure mapped.

## Backend security and data
- [ ] Input validation, output encoding, safe query patterns and server authorization.
- [ ] Injection, SSRF, CSRF, CORS, IDOR, mass assignment and path traversal considered.
- [ ] Secrets are not exposed or logged.
- [ ] Schema normalization, keys, constraints, indexes and query plans.
- [ ] Transactions, isolation, concurrency, migrations, rollback and recovery.
- [ ] Tenant isolation, least privilege and observability.

## Supabase repository checks
- [ ] Config, project references, client initialization and env names.
- [ ] Publishable/anon vs service-role/secret key separation.
- [ ] Auth providers, JWT/session, redirects and logout.
- [ ] Postgres schema, migrations, functions, triggers and generated types.
- [ ] RLS enabled where expected; policies cover CRUD, claims, ownership and tenant isolation.
- [ ] Storage buckets, object paths, upload limits and policies.
- [ ] Edge Functions: Deno, JWT verification, CORS, validation, secrets and errors.
- [ ] Realtime publication, channel authorization and cleanup.
- [ ] PostgREST/RPC, schema drift and local/deployed config.

## Optional connected-project review
Only after user selects project and read permissions exist. Confirm project identity; inspect only authorized schema/RLS/Auth/Storage/Functions/settings; record inaccessible areas; do not mutate remote resources. Never infer remote state from local source or request credentials in chat.
