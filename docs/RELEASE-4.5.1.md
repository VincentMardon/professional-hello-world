# 4.5.1 — The Registry Checks Its Own Memory

**Release preparation — not published.** This milestone adds a freshness gate for the single tracked reference introduced in 4.5.0. Package and both root lockfile version fields are aligned to 4.5.1. Vincent confirms the freshness check, lint, type checks, tests, and production build for that state. Exact preparation-commit CI remains pending.

## Scope

- Add `npm run docs:reference:check`, which regenerates the pilot Markdown and compares its tracked README with HEAD.
- Fail on a generated difference or a generation error.
- Run the gate after tests and before the CI production build, preventing the job from building and publishing an inconsistent committed reference.
- Document that generation writes the working reference and that staged changes also differ from HEAD.

This milestone adds no reader controls, source entry points, or audio behavior. It follows PHW's artistic numbering for a small documentation-tooling capability.

## Verification

Vincent confirms the local baseline passes, a temporary source-comment change makes the regenerated reference differ and the check fail, and removing the change restores success. The temporary probe is absent from the final source and reference. Biome and diff whitespace checks pass for the implementation.

Implementation commit #100, `f53e6b8d1d33944ca2f34a9253fdedc5959d4825`, passed [CI run 39675056415](https://github.com/VincentMardon/professional-hello-world/actions/runs/39675056415). The new freshness step passed before the build; artifact packaging and Pages deployment also succeeded. The failing scenario was exercised locally, not as a deliberate remote failure.

These results cover the implementation commit. The version-aligned preparation commit requires its own successful CI and Pages deployment before tagging.

## Boundaries

The comparison covers only `docs/generated/api-pilot/README.md`. It does not inventory new untracked output, remove obsolete files, validate the truth of comments, or supply immutable source links. The command regenerates output in place; it is not read-only and performs no reset, staging, or commit.

An intentional source-and-reference change can fail locally until both are committed, because HEAD is the baseline. Placing the check before the build avoids unnecessary construction on failure; comparing with HEAD would still reveal a difference after a build. Build-time regeneration alone was the missing safeguard in 4.5.0.

## Remaining publication steps

Version alignment and local checks are complete. Vincent reviews and publishes the preparation commit. After its exact CI and deployment succeed, create an annotated `v4.5.1` tag on that explicit SHA and publish the stable GitHub release. No tag or release is created by these notes.

The Registry can now refuse to certify a manuscript it has just contradicted. Its memory remains limited to one officially inspected file.
