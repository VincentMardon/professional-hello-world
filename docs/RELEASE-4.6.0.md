# 4.6.0 — The Catalogue Allocates the Rooms

**Release preparation — not published.** The catalogue foundation is deployed, and package and both root lockfile version fields are aligned to 4.6.0. Vincent confirms the requested local checks, build, and manual reading checks. Exact preparation-commit CI remains pending. No new tag or GitHub release is created by this document.

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

These results cover the implementation state. Vincent confirms lint, type checks, reference freshness, tests, and build after version alignment. The preparation commit still requires its own exact-commit CI and deployment before tagging.

## Boundaries and follow-up

Systematic catalogue validation and Markdown-aware local-link checking remain planned for 4.6.1 and 4.6.2. The typed declarations do not yet enforce every path rule or reject duplicate destinations through a dedicated gate. Source paths, metadata, and selection remain maintained project inputs.

Existing reader presentation, theme behavior, Mermaid interaction, audio behavior, and the single-hook extraction boundary are preserved. This release does not redesign the documentation or broaden TypeDoc coverage. Meaningful code comments and generated-reference expansion follow the remaining 4.6 work under the [Part VII roadmap](DOCUMENTATION-PART-VII-ROADMAP.md).

## Remaining publication steps

Version alignment and the requested local and manual checks are complete. Vincent reviews and publishes the preparation commit. After that exact commit passes CI and Pages deployment, create an annotated v4.6.0 tag on its explicit SHA and publish the stable GitHub release with the verified scope and limitations. Do not move existing published tags.

The reading rooms retain their addresses. Their catalogue now carries the paperwork formerly copied into every doorway.
