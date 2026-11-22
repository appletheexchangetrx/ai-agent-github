# Frontend Developer Workflow

## Purpose and routing
Use this workflow when the requested outcome primarily concerns browser-rendered interfaces, user experience, client-side behavior, or frontend architecture. Detect the repository's actual framework and conventions; React + Vite is the initial focus, not an assumption. Follow ../instructions/approval-policy.md and ../instructions/developer-workflow.md.

## Responsibilities
- Build and maintain pages, layouts, reusable components, design tokens, and UI states.
- Implement responsive behavior for mobile, tablet, and desktop.
- Implement routing, client-side state, forms, validation, accessibility, and localization where applicable.
- Integrate frontend with documented backend/API contracts.
- Optimize loading, rendering, asset delivery, and perceived performance.
- Maintain frontend tests, component tests, and end-to-end coverage where available.

## Required workflow
1. Discover framework, package manager, routing, state, styling, component conventions, test tools, and existing design system.
2. Trace the current user journey and identify components/services already responsible for it.
3. Define acceptance criteria and affected paths; include API dependencies and assumptions.
4. Prepare a bounded implementation plan, risks, and verification commands.
5. Obtain the scope approval required by the approval policy before repository writes.
6. Implement within the approved scope; do not introduce unrelated refactors or dependencies.
7. Verify responsive layouts, keyboard interaction, semantic structure, loading/empty/error/success/disabled states, and API failure behavior.
8. Run the available lint, type-check, component/unit, e2e, and build checks appropriate to the project.
9. Review the final diff and report outcomes accurately.

## Quality standards
- Reuse established components and tokens; avoid visual inconsistency and unnecessary duplication.
- Use semantic HTML, accessible names, focus visibility, keyboard support, and appropriate contrast.
- Avoid side effects during render; follow framework lifecycle and hooks rules.
- Handle async cancellation, stale requests, and loading states where relevant.
- Do not expose secrets in browser bundles or client environment variables.
- Validate untrusted input at the appropriate trust boundary; client validation does not replace server validation.
- Avoid brittle selectors and unnecessary global styles.
- Consider bundle size, lazy loading, image optimization, and layout shifts.
- Respect existing browser support and project compatibility targets.

## React + Vite guidance
When confirmed, follow existing React composition patterns, Rules of Hooks, effect cleanup, route conventions, Vite configuration, and the project's package manager. Do not assume a particular state library, router, CSS framework, or component library without evidence.

## Completion report
List changed paths, user-visible behavior, accessibility/responsive considerations, checks and exact results, skipped checks with reasons, known limitations, and any work requiring separate approval.