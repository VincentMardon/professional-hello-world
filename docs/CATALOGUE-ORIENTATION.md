# Catalogue Orientation — The Reading Rooms Acquire a Directory

**Implementation verified; release preparation — October 24, 2026.** Implementation #122 passed exact-commit CI and Pages deployment, including committed-reference freshness. Grouped navigation, breadcrumbs, and bounded reading sequences are deployed. Package and both root lockfile version fields are aligned to 4.8.1, with all requested local release checks confirmed by Vincent. [4.8.1 preparation](RELEASE-4.8.1.md) awaits exact preparation-commit verification. Earlier checkpoints retain their historical verification boundaries.

## Editorial structure and source identity

The document catalogue continues to own source files, metadata, IDs, and public slugs. documentNavigation declares presentation groups independently of catalogue declaration order. It creates no new routes and changes no existing URL.

The Guides group contains the eight authored guides, starting at reception. Technical reference contains the twelve generated pages, starting at the reference index. A group's first document serves as its existing landing page. Previous/next navigation follows explicit order within that group, never crosses the boundary, and never wraps.

## Validation

The existing docs:catalogue:check command now runs navigation validation as well as catalogue validation. Selected documents must appear exactly once. Unknown IDs, omitted documents, repeated assignments, invalid or duplicate group IDs, blank titles, and empty groups produce diagnostics.

The initial declaration omitted catalogueValidationReference; it was restored to the reference group. A duplicate-group test then exposed the wrong diagnostic text in that rejection branch, which was corrected without weakening the expectation. Eight navigation-validator tests cover the maintained inventory and refusal cases.

The validator checks declared structure rather than editorial quality. Choosing a useful sequence remains a maintained decision. The helper assumes validated groups; rendering throws when the current document has no group rather than silently producing incomplete navigation.

## Reader controls

The current group starts expanded in native details disclosures. Other groups remain available through their summaries. The grouped directory marks the current document with aria-current.

Breadcrumbs lead from reception through the group's existing landing page when appropriate, omitting redundant landing entries and identifying the current page. They express editorial location, not browser visit history.

The footer provides previous and next links with the corresponding rel values. A missing neighbor is omitted. Seven component test cases cover the current group's state, current-page marking, reference breadcrumbs, landing-page deduplication, and the four reading-group endpoints.

Vincent confirms browser group toggles, breadcrumb navigation, previous/next boundary behavior, and direct-reference access and reload. These reported observations are distinct from DOM assertions and do not establish complete accessibility. The global visual redesign remains deferred.

## Generated reference and test workflow

The catalogue's source comments now state that groups and reading order live in documentNavigation, while declaration-order entries serve routing and inspection. Their generated reference page changes accordingly. The old comment wording is no longer a correct description of the reader.

Whole-directory freshness intentionally refuses these uncommitted generated changes until they join the implementation commit. Committed-state success must be verified after committing. New navigation modules are not silently added to the selected TypeDoc extraction surface.

Vitest's filesystem module cache is enabled explicitly. Vincent reports local execution falling from approximately sixteen to ten seconds. This is an observed comparison rather than a controlled benchmark or a guarantee for cold runs. Cached transforms do not replace test execution. The installed cache implementation has no identified hourly expiry; lockfile and relevant configuration/content changes can invalidate cached work.

## Verification status

Vincent confirms the requested checks pass after correcting a misspelled accessible-name expectation in the navigation test. The assistant inspects the intended group assignments and the two generated comment changes. The source-comment spelling is corrected and the reference is regenerated. Production build confirmation is reported as part of the requested checks; exact published-commit CI and Pages deployment are not yet established.

## Published implementation checkpoint

Implementation #122, `566c9a0ee47b2ef10b2d3c210196f2551ac1a799`, passed [CI run 40099617090 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40099617090). This establishes committed-reference freshness and supersedes earlier remote-pending status. Version alignment, aligned-state checks, and exact preparation-commit verification remain required before stable 4.8.1 publication.
