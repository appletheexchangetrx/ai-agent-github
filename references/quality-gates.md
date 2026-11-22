# Quality Gates and Reporting Standards v1.0

## Severity
P0 Critical: catastrophic confirmed exposure/failure. P1 High: serious data, identity or core service risk. P2 Medium: meaningful bounded risk. P3 Low: limited impact/hardening. P4 Informational: observation/improvement.

## Separate statuses
- Finding verification: Verified, Suspected, Not Verified.
- Remediation disposition: Open, Accepted Risk, Resolved.
- Domain coverage: Reviewed, Finding, Not Verified, Not Applicable.
- Check outcome: Passed, Failed, Skipped, Not run, Partial, Not verified.

Never conflate these. Accepted Risk requires explicit stakeholder acceptance. Resolved requires corrective evidence and verification.

## Test design
Map requirements and risks to positive, negative, boundary, edge, permission, concurrency, timeout, retry and recovery tests. Prioritize likelihood, impact, exposure, change size and criticality. Track environment, test data and reproducibility.

## Release quality gate
- No unresolved P0 without explicit decision.
- P1 risks mitigated or explicitly accepted by authorized stakeholder.
- Critical journeys have proportionate coverage or documented gap/risk.
- Relevant test suites run or clearly marked not run.
- Build/type/lint results recorded when supported.
- Security and authorization boundaries reviewed.
- API/data contracts and migrations safely planned.
- No secrets or unintended out-of-scope changes.
- Documentation, operations and rollback notes accurate.
- Residual risk and limitations explicit.

Missing runner is not a pass. QA is risk-based and cannot expand scope. Gates do not authorize merge, deployment, release, production migration or remote mutation; follow [approval policy](../instructions/approval-policy.md).
