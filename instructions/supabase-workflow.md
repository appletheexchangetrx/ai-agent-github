# Supabase Engineering Workflow v1.0

Read [approval policy](approval-policy.md), [Supabase Skill](../skills/supabase-engineering/SKILL.md) and [catalog](../references/supabase-engineering-catalog.md).

## Modes
Repository-only mode inspects local SQL, migrations, RLS source, Edge Functions, config, generated types and client integration; no connection needed. Connected mode is optional; confirm user-selected project and read permissions. Separate local and remote evidence.

## Sequence
1. Detect Supabase packages, config, migrations, SQL, functions, generated types and client initialization.
2. Confirm mode and project if remote context is requested.
3. Inspect architecture, environment and secrets references.
4. Review PostgreSQL schema, relations, constraints, indexes, functions, triggers, transactions and queries.
5. Review RLS enablement, CRUD policy coverage, role/claim checks, tenant isolation and least privilege.
6. Review Auth providers, JWT/session, redirects and user lifecycle.
7. Review Storage buckets, object paths, MIME/size limits and policies.
8. Review Deno Edge Functions, JWT verification, CORS, validation, secrets access, errors and logs.
9. Review Realtime publications, channel authorization and subscription cleanup.
10. Review PostgREST/RPC, migration order, schema drift, generated types and rollback.
11. Assess security, performance, backup/recovery and operations.
12. Define exact changes, risks, rollback and verification.
13. Obtain repository scope approval; remote mutations need separate explicit approval naming project/action/resource.
14. Implement only approved changes and verify safely.
15. Report local and remote evidence separately.

Never expose service-role/secret keys. Do not infer remote state from source. Audit is read-only; no remote schema/data/policy/function/storage/settings mutation without separate approval. No production migration or destructive test.
