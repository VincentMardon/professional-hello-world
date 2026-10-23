# 4.6.2 — The Corridors Undergo Inspection

**Release preparation — October 23, 2026. Not published.** The implementation is published in commit #110. Package and both root lockfile version fields are aligned to 4.6.2. Vincent confirms lint, catalogue inspection, type checking, the full test suite, reference freshness, link inspection, and production build pass after alignment. The preparation commit must pass its own CI and Pages deployment before tagging; no v4.6.2 tag or stable release is claimed here.

## Scope

- Add Markdown-aware extraction of links, images, and defined references with source positions.
- Inspect repository files and directories, declared reader routes, permitted application routes, and public image destinations.
- Handle the deployment prefix, matching absolute site URLs, queries, encoded paths, and trailing slashes.
- Check lexical and real filesystem containment for repository destinations.
- Add the read-only `npm run docs:links:check` command, with aggregated diagnostics and a nonzero exit code on errors.
- Run this gate after generated-reference freshness and before construction in CI.
- Declare direct parser dependencies and add extraction and destination tests.
- Correct an unintended Markdown hyperlink in the audio lifecycle guide by marking its code expression as inline code.

The Inspectorate of Corridors can now reject a doorway leading nowhere before the Ministry opens for visitors. It cannot yet certify the plaque inside every room.

## Verified implementation

Implementation commit #110 is `6a994486120d9e3ce2c4216faf5235a7219aeea4`. Its [CI run and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39924728591) succeeded, including the new link-inspection step.

The integrated local inspection covered nine documents: 117 local destinations checked, nine external destinations not fetched, zero non-file destinations skipped, two fragment checks deferred, and zero errors. These are occurrence counts, not a count of distinct files.

All 32 documentation-validation tests passed across catalogue validation, extraction, and destination inspection. Biome passed on 66 files. Vincent supplied a successful production build; the Intel One Mono fallback warning did not prevent compilation or static export. Next.js remains locked at 16.4.0.

These results describe the implementation checkpoint before version alignment. They do not replace checks on the preparation commit.

## Boundaries

External sites are not fetched. Fragment existence, raw HTML links, undefined reference-like text, and browser rendering are outside this inspection. Dedicated symlink fixtures and CLI process-level failure coverage are not established. The local filesystem checks do not constitute a complete security audit.

This capability changes documentation tooling. It adds no new reader controls or audio behavior. Visual design remains deferred. See [the inspection record](LOCAL-LINK-INSPECTION.md) for its detailed contract and evidence.

## Remaining publication steps

Version alignment and local release checks are complete. After Vincent reviews and publishes the preparation commit, verify that exact commit's CI and Pages deployment. Only then create its annotated tag and publish a stable GitHub release. Record the actual tag target and publication time afterward without moving earlier tags.
