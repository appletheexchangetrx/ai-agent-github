# API and Supabase Integration Audit Checklist

## Scope
Inventarisasi seluruh integrasi yang ditemukan: REST/GraphQL/RPC, webhook, SDK pihak ketiga, Supabase, dan service internal. Bedakan bukti repository dari pemeriksaan layanan jarak jauh. Supabase bersifat opsional.

## 1. Integration inventory
- [ ] Base URLs, endpoint paths, SDKs, generated clients, and call sites dipetakan.
- [ ] Authentication mechanism, credential source, dan trust boundaries diidentifikasi.
- [ ] Request/response schemas, serialization, timeout, retry, dan cancellation ditinjau.
- [ ] Environment variable names dicatat tanpa menampilkan nilainya.
- [ ] Webhook signature verification dan replay protection diperiksa bila relevan.
- [ ] Data classification, personal/sensitive data flow, dan third-party exposure dicatat.

## 2. API security and reliability
- [ ] Authentication dibedakan dari authorization pada setiap operasi.
- [ ] Server-side authorization diterapkan; client checks tidak dianggap proteksi.
- [ ] Input validation, output encoding, dan schema validation ditinjau.
- [ ] Rate limiting, quotas, abuse controls, dan pagination diperiksa.
- [ ] CORS, CSRF, SSRF, injection, mass assignment, dan insecure direct object reference dipertimbangkan sesuai konteks.
- [ ] Error responses tidak membocorkan stack trace, secrets, atau data internal.
- [ ] TLS, timeout, retry/backoff, idempotency, dan failure handling ditinjau.
- [ ] Logging menghindari token, credential, dan payload sensitif.

## 3. Supabase repository-level checks
Lakukan meskipun koneksi Supabase tidak diaktifkan, sepanjang bukti tersedia di repository.
- [ ] Supabase project references/configuration dan client initialization diidentifikasi.
- [ ] Pemisahan anon/publishable key dan service-role/secret key dipastikan; secret key tidak boleh berada di browser.
- [ ] Auth flows, session persistence, redirect URLs, and logout behavior ditinjau.
- [ ] Database access paths dan query usage dipetakan.
- [ ] RLS migrations/policies yang ada di repository ditinjau untuk coverage dan least privilege.
- [ ] Storage buckets, object access, upload constraints, dan policies ditinjau.
- [ ] Edge Functions, JWT verification settings, CORS, validation, dan error handling ditinjau.
- [ ] Realtime subscriptions, channel authorization, cleanup, dan data exposure ditinjau.
- [ ] Migration ordering, seed data, generated types, and schema drift risks dicatat.
- [ ] Supabase local config dan deployment config dibandingkan bila keduanya tersedia.

## 4. Optional connected-project review
Hanya jika pengguna memilih audit repository + Supabase dan koneksi/tool yang sesuai tersedia:
- [ ] Pastikan project target yang dipilih pengguna sebelum membaca.
- [ ] Gunakan operasi read-only untuk memeriksa Auth, database schema/policies, Storage, Functions, dan konfigurasi yang diizinkan.
- [ ] Catat bagian yang tidak dapat diakses karena permission atau keterbatasan tool.
- [ ] Jangan mengubah schema, data, policy, function, secrets, atau settings selama audit.
- [ ] Jangan menyatakan remote project telah diperiksa jika hanya membaca repository.

## 5. Findings and limitations
Setiap temuan harus mengidentifikasi apakah sumbernya **Repository evidence**, **Connected project evidence**, atau **External observation**. Jangan menebak konfigurasi remote dari file lokal. Redaksi semua credential. Tandai area yang tidak diperiksa secara eksplisit. Gunakan [finding template](finding-template.md).
