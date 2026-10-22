# 4.6.0 — The Catalogue Allocates the Rooms

**Published October 22, 2026 at 09:11:19 UTC (11:11:19 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.6.0), neither a draft nor a prerelease. The catalogue foundation is deployed, and package and both root lockfile version fields are aligned to 4.6.0. Vincent confirms the requested local checks, build, and manual reading checks. Preparation commit #105 passed its own CI and Pages deployment before publication.

## Scope

- Centralize selected documents, source files, navigation labels, metadata, and slug segments in a typed catalogue.
- Derive public documentation paths from slug segments.
- Replace six repetitive route wrappers with one generic catch-all route using static parameter generation and catalogue-driven metadata.
- Keep reception explicit and connect its metadata to the same catalogue.
- Preserve established URLs and support the nested hook-reference route.
- Add trust-boundary and dependency guides, bringing the selected document set to nine.
- Update authored guidance to describe the new document-addition workflow.

A new selected page requires its Markdown and a catalogue entry, rather than another copied page component. Explicit selection remains the publication boundary: this is not automatic discovery of every Markdown file.

## Verification record

Implementation commit #104, `670b98326aa657570ce443229c9e10af49c2bd35`, passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39745092346). Vincent confirms local checks after Next route-type regeneration resolved validators still referencing the deleted wrappers. Biome passed on 58 files and diff whitespace checks passed. Export inspection found all nine documentation destinations.

On October 22, 2026, HTTP inspection of the deployed reception, architecture, sound lifecycle, operations, frontend, workshop, trust boundaries, dependencies, and nested hook reference returned 200 for each with the expected page title. This is response and HTML evidence, not an independent browser interaction or accessibility audit. Vincent subsequently confirms the requested navigation, nested-route reload, theme, and diagram-control checks. These are his reported browser results, not an independent assistant accessibility audit.

These results cover the implementation state. Vincent confirms lint, type checks, reference freshness, tests, and build after version alignment. Preparation commit #105 passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39753005557).

## Boundaries and follow-up

Systematic catalogue validation and Markdown-aware local-link checking remain planned for 4.6.1 and 4.6.2. The typed declarations do not yet enforce every path rule or reject duplicate destinations through a dedicated gate. Source paths, metadata, and selection remain maintained project inputs.

Existing reader presentation, theme behavior, Mermaid interaction, audio behavior, and the single-hook extraction boundary are preserved. This release does not redesign the documentation or broaden TypeDoc coverage. Meaningful code comments and generated-reference expansion follow the remaining 4.6 work under the [Part VII roadmap](DOCUMENTATION-PART-VII-ROADMAP.md).

## Verified publication

Annotated tag object `9d5029df88e81fb8f15e5c9c5d562253f0e2c9cd` resolves to preparation commit #105, `ac488d4f16332b826b2a2ed85d7cb5a7ff3ad314`. Its exact CI and Pages deployment succeeded before the stable release was published at the time recorded above.

This documentary follow-up changes no application code, package version, or tag target and claims no new tests, build, or browser inspection.

The reading rooms retain their addresses. Their catalogue now carries the paperwork formerly copied into every doorway.
