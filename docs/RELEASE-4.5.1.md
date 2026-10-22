# 4.5.1 — The Registry Checks Its Own Memory

**Published October 22, 2026 at 03:28:24 UTC (05:28:24 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.5.1), neither a draft nor a prerelease. This milestone adds a freshness gate for the single tracked reference introduced in 4.5.0. Package and both root lockfile version fields are aligned to 4.5.1. Vincent confirms the freshness check, lint, type checks, tests, and production build for that state. Preparation commit #101 passed its own CI and Pages deployment.

## Scope

- Add `npm run docs:reference:check`, which regenerates the pilot Markdown and compares its tracked README with HEAD.
- Fail on a generated difference or a generation error.
- Run the gate after tests and before the CI production build, preventing the job from building and publishing an inconsistent committed reference.
- Document that generation writes the working reference and that staged changes also differ from HEAD.

This milestone adds no reader controls, source entry points, or audio behavior. It follows PHW's artistic numbering for a small documentation-tooling capability.

## Verification

Vincent confirms the local baseline passes, a temporary source-comment change makes the regenerated reference differ and the check fail, and removing the change restores success. The temporary probe is absent from the final source and reference. Biome and diff whitespace checks pass for the implementation.

Implementation commit #100, `f53e6b8d1d33944ca2f34a9253fdedc5959d4825`, passed [CI run 39675056415](https://github.com/VincentMardon/professional-hello-world/actions/runs/39675056415). The new freshness step passed before the build; artifact packaging and Pages deployment also succeeded. The failing scenario was exercised locally, not as a deliberate remote failure.

These results cover the implementation commit. Version-aligned preparation commit #101, `669c94f0e11a5d56f03205cde93466606d750e21`, subsequently passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39682375280), including the freshness gate.

## Boundaries

The comparison covers only `docs/generated/api-pilot/README.md`. It does not inventory new untracked output, remove obsolete files, validate the truth of comments, or supply immutable source links. The command regenerates output in place; it is not read-only and performs no reset, staging, or commit.

An intentional source-and-reference change can fail locally until both are committed, because HEAD is the baseline. Placing the check before the build avoids unnecessary construction on failure; comparing with HEAD would still reveal a difference after a build. Build-time regeneration alone was the missing safeguard in 4.5.0.

## Verified publication

Annotated tag object `3eace1695e16ada802211affad67f974ab0b6696` resolves to preparation commit #101, `669c94f0e11a5d56f03205cde93466606d750e21`. Its CI and Pages deployment succeeded before the stable release was published at the time recorded above.

This publication-record follow-up changes no application code, package version, or tag target and claims no new test execution. The released version remains 4.5.1.

The Registry can now refuse to certify a manuscript it has just contradicted. Its memory remains limited to one officially inspected file.
