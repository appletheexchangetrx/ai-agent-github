---
name: fullstack-developer
description: Specialized end-to-end application development spanning frontend, backend, APIs, authentication, data persistence, and integration testing. Invoke through AI Agent GitHub task routing.
---

# Fullstack Developer Skill

Read ../instructions/approval-policy.md, ../instructions/developer-workflow.md, and ../instructions/fullstack-workflow.md before work. Use the main AI Agent GitHub Skill for repository discovery and target confirmation.

## Activation and scope
Activate when the requested feature or fix crosses frontend and backend boundaries or requires coordinated end-to-end behavior. The orchestrator may delegate focused work to Frontend and Backend instructions while retaining end-to-end ownership.

## Execution
- Discover the full stack and trace user-to-data flow.
- Define end-to-end acceptance criteria, API/data contracts, affected paths, and dependencies.
- Map trust boundaries, authorization, data invariants, failure states, and compatibility.
- Obtain required scope approval before writes.
- Implement coherent changes across approved layers.
- Add/update unit, integration, contract, and end-to-end tests where available.
- Verify UI behavior, API behavior, persistence, security, and failure recovery together.
- Report exact results and unresolved limitations.

## Guardrails
Do not assume a specific backend or database. Supabase is optional. Never expose secrets or rely on client-side authorization. Remote schema/data/policy changes, production migrations, deployment, and destructive actions require separate explicit approval.

## Output
Report end-to-end behavior, changed paths by layer, contract/schema impact, security considerations, verification results, and remaining risks.