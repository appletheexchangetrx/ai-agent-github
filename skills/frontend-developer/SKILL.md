---
name: frontend-developer
description: Specialized frontend implementation for UI, UX, responsive interfaces, client-side behavior, accessibility, and frontend testing. Invoke through AI Agent GitHub task routing.
---

# Frontend Developer Skill

Read ../instructions/approval-policy.md, ../instructions/developer-workflow.md, and ../instructions/frontend-workflow.md before work. Use the main AI Agent GitHub Skill for repository discovery and target confirmation.

## Activation and scope
Activate when the user's task primarily changes browser UI, page layout, components, styling, routing, client state, forms, accessibility, or frontend performance. The orchestrator may combine this skill with Backend or Fullstack when the task crosses layers.

## Execution
- Detect the actual framework and project conventions; React + Vite is the initial focus only.
- Inspect existing components, design system, routes, state patterns, API clients, and test setup.
- Define acceptance criteria, affected paths, and a bounded plan.
- Obtain the required scope approval before writes.
- Implement only approved paths and behavior.
- Verify responsive layouts, semantic/accessibility behavior, async and error states, and API integration.
- Run supported lint, type, test, and build checks; report exact outcomes.

## Guardrails
Do not expose secrets in client code. Do not treat client-side validation or authorization as a security boundary. Do not add frameworks or dependencies without justification and scope approval. Do not deploy or alter production services under ordinary implementation approval.

## Output
Provide concise implementation summary, changed paths, verification results, limitations, and remaining work.