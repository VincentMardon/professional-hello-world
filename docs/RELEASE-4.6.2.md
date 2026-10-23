# 4.6.2 — The Corridors Undergo Inspection

**Published October 23, 2026 at 09:04:20 UTC (11:04:20 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.6.2), neither a draft nor a prerelease. Package and both root lockfile version fields are aligned to 4.6.2. Vincent confirms all requested local release checks and production build pass after alignment. Implementation #110 and preparation #111 each passed their own CI and Pages deployment.

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

## Verified publication

Annotated tag object `f8ce06f091c63dd32ffe2fe93f4311d329cc679d` resolves to preparation commit #111, `353b3e874814ef5109c8c2c1e5f83318ba2ec318`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39927269722) before stable publication at the time above. This documentary follow-up changes no application code, package version, or tag target and claims no new test or browser run.
