---
name: supabase-engineering
description: Supabase Engineering for PostgreSQL, RLS, Auth, Storage, Edge Functions, Realtime, database functions, migrations, API security and operations. Supabase is optional.
---

# Supabase Engineering Skill v1.0

Read [approval policy](../../instructions/approval-policy.md), [Supabase workflow](../../instructions/supabase-workflow.md) and [catalog](../../references/supabase-engineering-catalog.md). Invoke only when repository/task indicates Supabase relevance.

## Modes
- Repository-only: inspect local SQL, migrations, RLS source, Edge Function code, config, generated types and client integration. No connection required.
- Repository + Supabase: optional read inspection of the user-selected connected project with granted permissions. Separate remote evidence from repository evidence.

## 12 domains
1. Supabase Architecture
2. PostgreSQL Engineering
3. Row Level Security
4. Supabase Auth
5. Supabase Storage
6. Edge Functions
7. Supabase Realtime
8. Database Functions
9. Database Migrations
10. Supabase API
11. Supabase Security
12. Supabase Operations

## Workflow
Detect project use; confirm mode and target; inspect project config and environments; assess PostgreSQL schema, constraints, indexes, functions and transactions; verify RLS CRUD coverage, role claims and tenant isolation; review Auth/JWT/session; Storage policies; Deno Edge Functions, JWT/CORS/validation; Realtime authorization and cleanup; PostgREST/RPC; migration order/schema drift; security, performance, backup and operations. Define exact changes, risk, rollback and verification; obtain repository approval and separate remote mutation approval; implement only authorized changes and verify in safe environments.

## Guardrails
Never expose service-role/secret keys. Presence of client SDK does not prove RLS safety. No remote schema/data/policy/function/storage/settings mutation without separate explicit approval. No production migration or destructive test.
