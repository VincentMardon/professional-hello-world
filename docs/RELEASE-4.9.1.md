# 4.9.1 — The Register Refuses an Unassigned Contract

**Local preparation — November 2, 2026. Not published.** The coverage checker and CI integration are present in the working tree. Package and both root lockfile version fields are aligned to 4.9.1. Vincent has supplied successful local release-check results. The preparation commit, remote CI, and publication remain pending.

## Capability

The new `npm run docs:reference:coverage` command compares Markdown files beneath `docs/generated/reference` with reference sources declared in the documentation catalogue. It rejects generated pages without a declaration, registered reference sources absent from the output, and an empty generated inventory.

The Register previously knew whether its papers matched Git and whether declared rooms were valid. It now also asks whether every generated paper has applied for accommodation. An impeccable filing cabinet is no longer sufficient evidence that all its occupants possess an address.

## Responsibilities

The runner recursively inventories Markdown files and expresses their paths relative to `docs`, with forward slashes. Symbolic entries encountered during traversal are rejected; directory-read failures produce a failed inspection. The pure validator compares canonical, case-sensitive paths and returns diagnostics without accessing the filesystem.

Authored guides and the archived reference pilot are outside this comparison. The command does not generate reference, validate routes, inspect navigation, fetch external links, or measure test coverage. Catalogue and navigation validation retain their existing responsibilities. Reference freshness remains a separate Git-state check.

CI now declares the coverage step immediately after `docs:reference:check` and before local-link inspection. Generation therefore precedes inventory comparison when earlier steps succeed. This workflow edit has been inspected locally; its execution on GitHub has not yet been verified.

## Evidence and remaining checks

Six focused validator tests cover complete registration, an unregistered generated page, a missing registered source, exclusion of authored and archived sources, diagnostics in both directions, and an empty inventory. Vincent's supplied full-suite results confirm all six pass, within 104 passing tests across fifteen files (10.15 seconds wall time).

Vincent demonstrated the real runner accepting twelve generated Markdown pages, rejecting a temporary thirteenth unregistered page, and accepting twelve again after its removal. This demonstrates the filesystem inventory and refusal diagnostic; it is not evidence of remote CI execution or comprehensive filesystem-error testing.

Vincent's supplied results confirm Biome, TypeScript, all 104 tests, twenty catalogue declarations, generated-reference freshness, twelve-page reference coverage, local-link inspection with zero errors, and the production build. The assistant also inspected all three version fields at 4.9.1. The test environment emits the existing search-element recognition warning; the successful build reports missing Intel One Mono fallback override values. Neither is a failed assertion or build failure. Verify exact-commit CI and Pages deployment before creating the annotated tag and stable release. Generated-reference freshness may intentionally fail while reviewed generated changes remain uncommitted; do not weaken that check to obtain a green result.

## Compatibility and scope

This adds contributor verification and a CI refusal condition. Existing reader routes, search, diagrams, TypeDoc entry points, dependencies, and visual design are unchanged by the inspected implementation. The check requires every generated reference page to have at least one catalogue declaration; it does not enforce one declaration per source file.

PHW's artistic versioning assigns this new tooling capability the third-number increment. It is not a strict SemVer classification. The consolidated documentation-check command remains proposed for 4.9.2; the visual redesign remains reserved for Part IX.
