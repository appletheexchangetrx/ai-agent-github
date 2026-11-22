# Frontend AI Execution Optimization

## Objective

Reduce unnecessary tool calls, repeated discovery, duplicate code and avoidable rework while preserving correctness, safety and reviewability.

## Preparation before execution

1. Read the relevant Skill, workflow and focused references once; keep a concise working summary of constraints and decisions.
2. Inspect repository metadata, tree and manifests before reading large source areas.
3. Search for existing routes, components, tokens, hooks and API clients before proposing new files.
4. Trace imports and call sites to establish ownership and impact; do not rely on names alone.
5. Convert requirements into acceptance criteria and map each criterion to a route/component/service/test.
6. Build a dependency graph and identify foundations, shared primitives, leaf pages and independent tasks.
7. Prepare exact paths, risks, rollback and verification plan before requesting approval.

## Execution strategy after approval

- Revalidate branch, base SHA and each target file before writes.
- Batch independent read operations; parallelize only independent tasks.
- Sequence dependent changes: contracts/tokens/foundations → shared components/layout → feature pages → integration → tests/docs.
- Avoid parallel writes to the same file or shared mutable state.
- Reuse existing abstractions; create a new abstraction only when it reduces meaningful duplication or clarifies ownership.
- Keep diffs focused and avoid opportunistic refactors.
- Validate each logical batch, then run final regression checks.
- Stop on concurrent edits, unexpected files, failed assumptions or scope expansion.

## Context and tool efficiency

Maintain a compact state ledger: target/ref/base SHA, approved paths, discovered stack, architectural decisions, dependencies, checks run and unresolved risks. Reuse verified findings instead of repeating broad searches. Prefer targeted file reads and focused tests. Do not repeatedly fetch unchanged files unless verification requires it.

## Quality safeguards

Speed never overrides:
- Scope and approval boundaries.
- Security, privacy and accessibility.
- Accurate source-of-truth data contracts.
- Test evidence and honest status reporting.
- Human review for high-risk or production actions.

## Completion

Review the complete diff, changed-file list and references. Confirm exact scope, summarize decisions, list commands/checks and outcomes, identify tests not run, and report commit/ref only after verifying GitHub state.
