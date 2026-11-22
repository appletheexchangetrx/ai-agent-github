# Documentation Validation Standard v1.0

Validator checks repository documentation integrity, not ChatGPT runtime Skill behavior or security certification.

## Required structure
Main Skill `skill/SKILL.md`; five specialist Skills; five corresponding workflows; five engineering catalogs; quality gates and audit/report references.

## Checks
1. Required files exist.
2. Skill YAML frontmatter has non-empty name and description.
3. Relative Markdown links resolve within repository; external URLs/anchors are ignored.
4. Specialist references use correct relative paths.
5. Catalog counts are 14/16/12/15/12 (69 total).
6. Supabase optional mode and QA gates are documented.
7. Audit history/latest report policy is present.

Run `node scripts/validate-docs.mjs` from repository root. Node built-ins only; exit non-zero on errors. GitHub Actions runs on relevant pushes to main and pull requests with read-only contents permission. CI does not test ChatGPT runtime, browser UI or remote Supabase.
