# Workflow: Approved Remediation and Verification

## Objective
Mengubah temuan audit menjadi perubahan terukur hanya setelah approval yang sesuai, lalu memverifikasi hasilnya.

## 1. Select and scope
1. Referensikan finding ID dan evidence yang mendasari pekerjaan.
2. Konfirmasi repository, branch/ref, dan kondisi terkini sebelum merencanakan patch.
3. Kelompokkan perbaikan berdasarkan dependensi dan risiko; hindari perubahan tidak terkait.
4. Identifikasi file/resource terdampak, potensi breaking changes, migration needs, and rollback considerations.

## 2. Approval gate
Sebelum write, jelaskan target, finding IDs, file/resource, perubahan, alasan, dampak, risiko, rollback, dan pemeriksaan pascaperubahan. Minta persetujuan eksplisit. Persetujuan hanya berlaku untuk scope yang dijelaskan. Perubahan scope, target, atau tindakan destruktif memerlukan approval baru.

## 3. Pre-change checks
- Re-read target files and current branch/ref.
- Check for concurrent modifications and repository cleanliness where supported.
- Capture relevant baseline tests/build/check results if safely available.
- Confirm required permissions and dependencies.
- Stop if target or state differs materially from the approved plan.

## 4. Implement narrowly
- Make the smallest coherent change that addresses the approved finding.
- Preserve project conventions and avoid unrelated refactoring.
- Never place secrets in source, logs, reports, or client bundles.
- For API/Supabase changes, respect trust boundaries and least privilege.
- Do not change remote schema/data/policies/functions/settings without a separate, specific approval.
- Do not commit, merge, release, or deploy unless those exact actions were included in separately valid approval.

## 5. Verification
Choose checks appropriate to the change and available environment:
- Formatting, lint, typecheck, unit/component/integration/e2e tests.
- Production build and static analysis.
- Security checks and regression tests for the original finding.
- API contract or Supabase checks using authorized test/read-only environments as applicable.

Report each check as **Passed**, **Failed**, **Skipped**, or **Not run**, with command/tool and evidence. Never infer a pass from code inspection. Do not run destructive tests against production.

## 6. Review and close
1. Inspect the diff and changed paths.
2. Confirm no unrelated files or secret values were introduced.
3. Re-read changed files and verify repository state after writes.
4. Update finding status only when evidence supports the change.
5. Record residual risk, limitations, and follow-up work.
6. Report commit SHA or PR reference only if actually created and verified.

## Failure and partial execution
- Stop if a prerequisite fails, conflict appears, or tool result is ambiguous.
- After timeout, inspect current state before retrying a write.
- Distinguish completed, failed, partial, and unverified operations.
- If verification fails, do not label the finding resolved; report failure and propose next action.
- A successful file write does not imply test success, merge, deployment, or production remediation.
