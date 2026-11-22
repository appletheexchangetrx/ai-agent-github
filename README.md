# AI Agent GitHub v1.2

Modular ChatGPT + GitHub agent for software engineering, comprehensive audit, QA and repository operations.

## Activation
`jalankan $github ai agent github`

The single orchestrator lists accessible repositories, asks the user to select a repository and branch/ref, inspects actual state, then routes the requested task. Activation alone does not audit or modify anything. This Skill repository is not the default work target.

## Architecture
Five Skills: Frontend (14 domains), Backend (16), Supabase (12), Fullstack (15), QA (12) — **69 catalog domains** total. Main entry point: [skill/SKILL.md](skill/SKILL.md). React + Vite is the initial frontend focus; detect actual stack. Supabase is optional.

## Operating rules
- Discovery and audit are read-only; findings are not silently remediated.
- Before writes, present exact paths/resources, behavior, risks, rollback and verification; wait for explicit scope approval.
- After approval, complete all in-scope work autonomously without per-file approval.
- Stop for scope expansion, concurrent conflicts or separate high-risk approval.
- Merge, deployment, release, production migrations, destructive data operations, secrets changes and remote Supabase mutations require separate explicit approval.
- Report only checks and outcomes actually verified.

## Audit reporting
For each approved audit, create a historical report in `docs/audit/history/` and update `docs/audit/production-readiness.md` as latest in the audited application repository. Do not claim 100% coverage unless all relevant catalog domains have explicit status.

## Documentation
[Specification](SPECIFICATION.md) · [Skills](skills/README.md) · [Workflows](workflows/README.md) · [References](references/README.md) · [Architecture](docs/architecture/README.md) · [Roadmap](docs/implementation/README.md).

Run documentation checks with `node scripts/validate-docs.mjs`. This does not test the Skill runtime in ChatGPT; runtime activation and routing remain user-operated validation.
