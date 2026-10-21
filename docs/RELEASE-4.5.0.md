# 4.5.0 — The Registry Opens Its Source Office

**Published October 21, 2026 at 20:35:49 UTC (22:35:49 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.5.0), neither a draft nor a prerelease. Version 4.5.0 identifies the first source-reference generation capability within PHW's documentation era. Package and root lockfile metadata are aligned to 4.5.0. Vincent confirms lint, type checks, tests, and production build for that aligned state. The annotated tag targets verified preparation commit #98.

## Scope

- Extract the `useBeepEngine` signature and its English documentation comment with TypeDoc and typedoc-plugin-markdown.
- Keep the generated Markdown in `docs/generated/api-pilot/README.md` for repository readers.
- Present it at `/doc/reference/use-beep-engine` through the existing reader, navigation, and themes.
- Resolve relative links from each document's source location, including nested generated documents.
- Provide `npm run docs:reference` and invoke it through `prebuild` before Next.js construction.
- Generate source links against `main`, with the moving-branch limitation explicitly recorded.

The milestone is the generation pipeline and reader integration, not the mere addition of a Next.js page. The existing hook implementation, audio generation, and playback behavior remain unchanged. PHW's artistic numbering does not imply a new public API stability promise.

## Included documentary work since 4.4.2

The sound-lifecycle guide adds initialization rejection, a playback-method rejection, and a graph distinguishing sample data from live audio connections. The guide explains stale-state guards, retained readiness, and shared gain. These additions are content work using the existing Mermaid renderer, not separate capability releases. The visual review remains deferred until the essential documentation provides a broader view.

Publication records for 4.4.2 and the rule covering every published main-repository commit are also included in the interval. Wiki maintenance does not recursively trigger another chronicle.

## Verification and boundaries

Implementation commit #97, `23e51be63e4fd2306cdc049521ab4b1616c668c0`, passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39662104965). Vincent confirmed local lint, type checks, tests, build, the expected source-link URL, and generation order. These results cover the implementation state. Version-aligned preparation commit #98 subsequently passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39665481830).

The pilot covers one hook. Dedicated stale-output enforcement, obsolete-file cleanup, general heading-anchor support, broader extraction, and immutable source provenance remain future work. Source links follow `main`; generated documents are not historical source snapshots. No independent assistant browser accessibility audit is claimed.

## Verified publication

Annotated tag object `ec610a04d951f8bf889ca953d50a8691ba5676a3` resolves to preparation commit #98, `9505a7a806aaaeeae0734fce009f07b5d466c7a7`. Its CI and Pages deployment succeeded before the release was published. Package and both root lockfile version fields are 4.5.0; unrelated dependency versions are unchanged.

The stable GitHub release was published at the time recorded above. This documentary follow-up changes no application code, package version, or tag target and claims no new test execution.

The Registry has opened one source office. It has not acquired ownership of every function in the building.
