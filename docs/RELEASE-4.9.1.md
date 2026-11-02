# 4.9.1 — The Register Refuses an Unassigned Contract

**Published November 2, 2026 at 20:47:55 UTC (21:47:55 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.9.1), neither a draft nor a prerelease. Package and both root lockfile version fields are aligned to 4.9.1. Preparation #134 passed exact-commit CI and Pages deployment.

## Capability

The new `npm run docs:reference:coverage` command compares Markdown files beneath `docs/generated/reference` with reference sources declared in the documentation catalogue. It rejects generated pages without a declaration, registered reference sources absent from the output, and an empty generated inventory.

The Register previously knew whether its papers matched Git and whether declared rooms were valid. It now also asks whether every generated paper has applied for accommodation. An impeccable filing cabinet is no longer sufficient evidence that all its occupants possess an address.

## Responsibilities

The runner recursively inventories Markdown files and expresses their paths relative to `docs`, with forward slashes. Symbolic entries encountered during traversal are rejected; directory-read failures produce a failed inspection. The pure validator compares canonical, case-sensitive paths and returns diagnostics without accessing the filesystem.

Authored guides and the archived reference pilot are outside this comparison. The command does not generate reference, validate routes, inspect navigation, fetch external links, or measure test coverage. Catalogue and navigation validation retain their existing responsibilities. Reference freshness remains a separate Git-state check.

CI now declares the coverage step immediately after `docs:reference:check` and before local-link inspection. Generation therefore precedes inventory comparison when earlier steps succeed. The coverage step passed in the preparation commit's verified GitHub workflow.

## Verification evidence

Six focused validator tests cover complete registration, an unregistered generated page, a missing registered source, exclusion of authored and archived sources, diagnostics in both directions, and an empty inventory. Vincent's supplied full-suite results confirm all six pass, within 104 passing tests across fifteen files (10.15 seconds wall time).

Vincent demonstrated the real runner accepting twelve generated Markdown pages, rejecting a temporary thirteenth unregistered page, and accepting twelve again after its removal. This demonstrates the filesystem inventory and refusal diagnostic; it is not evidence of remote CI execution or comprehensive filesystem-error testing.

Vincent's supplied results confirm Biome, TypeScript, all 104 tests, twenty catalogue declarations, generated-reference freshness, twelve-page reference coverage, local-link inspection with zero errors, and the production build. The assistant also inspected all three version fields at 4.9.1. The test environment emits the existing search-element recognition warning; the successful build reports missing Intel One Mono fallback override values. Neither is a failed assertion or build failure. Preparation #134 subsequently passed exact-commit CI and Pages deployment, as recorded below. Generated-reference freshness may intentionally fail while reviewed generated changes remain uncommitted; do not weaken that check to obtain a green result.

## Compatibility and scope

This adds contributor verification and a CI refusal condition. Existing reader routes, search, diagrams, TypeDoc entry points, dependencies, and visual design are unchanged by the inspected implementation. The check requires every generated reference page to have at least one catalogue declaration; it does not enforce one declaration per source file.

PHW's artistic versioning assigns this new tooling capability the third-number increment. It is not a strict SemVer classification. The consolidated documentation-check command remains proposed for 4.9.2; the visual redesign remains reserved for Part IX.

## Verified publication

Annotated tag object `0eb0b23a359b48f71e1a1068b9fd0531e531ba81` resolves to preparation #134, `dd95197d838587b01c97fae7f7c1b2cf41f0a5ef`. Its [CI run 41514463300](https://github.com/VincentMardon/professional-hello-world/actions/runs/41514463300) succeeded, including reference coverage, sanity, and publish / deploy. Stable v4.9.1 was published on November 2, 2026 at 20:47:55 UTC (21:47:55 in Paris).

This publication-record follow-up changes prose only. It does not move the tag, change application behavior or versions, or claim new local checks or browser testing.