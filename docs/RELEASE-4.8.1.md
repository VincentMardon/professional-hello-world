# 4.8.1 — The Reading Rooms Acquire a Directory

**Published October 24, 2026 at 14:27:11 UTC (16:27:11 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.8.1), neither a draft nor a prerelease. Package and both root lockfile version fields are aligned to 4.8.1. Vincent confirms all requested aligned-state checks and production build. Implementation #122 and preparation #123 each passed their own CI and Pages deployment.

## Scope

- Separate navigation groups and explicit reading order from catalogue source identity and public URLs.
- Organize the existing twenty documents into Guides and Technical reference using their existing landing pages.
- Add grouped native disclosures, current-page marking, breadcrumb trails, and within-group previous/next links.
- Reject missing or unknown documents, repeated assignments, invalid or duplicate group IDs, blank titles, and empty groups through the existing catalogue command.
- Add eight navigation-validator cases and seven component cases, including the four group endpoints.
- Update catalogue comments and their generated reference.
- Enable Vitest filesystem module caching to reuse transformed modules across runs.

The Directory of Reading Rooms now distinguishes a map, a location marker, and an itinerary. It does not claim that the final interior design has been commissioned.

## Verified implementation

Implementation #122 is `566c9a0ee47b2ef10b2d3c210196f2551ac1a799`. Its [CI run 40099617090 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40099617090) succeeded, including committed-reference freshness.

Vincent confirms requested local checks and production build, group toggles, breadcrumbs, reading-sequence boundaries, and direct-reference access and reload. Source review confirms complete group coverage and the corrected generated comments. A missing group member, wrong duplicate-group diagnostic, and misspelled test expectation were corrected during implementation.

Vincent reports local test execution improving from approximately sixteen to ten seconds after enabling the cache. This is an observed comparison, not a controlled benchmark or a guarantee about cold starts. Cached transforms do not replace test execution. No isolation settings are weakened.

## Boundaries

Previous/next navigation does not wrap or cross group boundaries. Breadcrumbs describe editorial location rather than browser history. Existing document URLs and route ownership remain unchanged. The group landing document is its first selected entry; no new group route is invented.

Navigation validation checks structure and coverage, not the usefulness of the editorial order. Reader confirmations and DOM assertions do not establish complete accessibility or multi-browser behavior. Existing heading identifiers and fragment rules retain their own limits.

The selected TypeDoc surface remains explicit; the new navigation modules are not automatically additional entry points. The filesystem cache has configuration and content invalidation boundaries, and does not promise that occasional long startup waits are resolved. Global visual design remains deferred. Static search remains the next planned capability.

See [the orientation record](CATALOGUE-ORIENTATION.md) for details.

## Verified publication

Stable v4.8.1 was published on October 24, 2026 at 14:27:11 UTC (16:27:11 in Paris). Annotated tag object `e125b82cbeebeb7597d756be1f7115a499a04821` resolves to preparation #123, `34d067371980ab73f23f435463a6d5a1c44eed89`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/40101393199) before publication. This documentary follow-up changes no application code, package version, generated output, or tag target and claims no new test or browser run.
