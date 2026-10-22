# Documentation Delivery — The Bureau of Departures Before Completion of the Palace

**Planning status — October 20, 2026.** This document sets release checkpoints for the documentation work. It does not announce a published release or change package metadata.

## Current planning rule — capabilities before page counts

On October 21, 2026, Vincent specifies that documentation releases mark capabilities of the reader and tooling. Adding a Markdown page, registering a routine Next.js documentation route, or adding another diagram with the existing renderer is content maintenance, not a standalone release trigger. Content may be committed and deployed between capability milestones.

PHW intentionally uses version increments for its lore rather than promising strict SemVer classification. The proposed 4.4.1 adds zoom controls; fitting and fullscreen are later capability slices. Previously suggested releases devoted solely to one more error-path or signal-flow diagram are withdrawn as release triggers; those diagrams remain possible content additions. This rule does not constrain artistic release decisions for the real PHW homepage in the same way.

Earlier checkpoint entries below preserve decisions made before this clarification. Existing tags and release notes remain historical. See the [current release policy](RELEASE-PROCESS.md#current-phw-release-policy--october-21-2026) for the authoritative distinction.
## Current increment: repository foundation and first documentation route

The documentation charter establishes responsibilities and scope. The new documentation overview gives readers a useful first entry into the existing project and links to current sources. Vincent has now added the `/doc` route, its feature component and stylesheet, and the Markdown dependencies. The component reads only `docs/README.md` and resolves relative document links to GitHub. The initial repository foundation remains identifiable within this increment.

A completed increment prompts a release decision; it does not automatically require a new application version. If Vincent chooses to publish this documentation-only foundation independently, consider a patch release under the established release process. Otherwise include it transparently in the first documentation minor milestone. Do not leave its status ambiguous or present it as an implemented website.

## Proposed first application milestone: 4.1.0

**Working title: The Greeting Opens an Information Desk.** The version is a proposed next compatible capability after 4.0.0, not a reservation that overrides intervening releases or changes in scope.

### Minimum useful scope

- A real documentation entry under `frontend/src/app/doc/`, supported by `frontend/src/features/doc/`.
- The substantial overview readable in the application, with a defined source-of-truth strategy for its repository-readable Markdown.
- An explicit selection of publishable documents; no automatic publication of every file in `docs/`.
- An understandable entry link from the repository README and an intentional decision about navigation from the public application.
- Links that work in their intended reading context, including the existing deployment base path.
- Readable headings, keyboard-accessible links, and a usable narrow-screen layout.
- Release notes accurately distinguishing implemented documentation capabilities from later proposals.

### Verification before release

Run the existing checks on the release-preparation state, inspect the static export and the rendered documentation page, and verify the exact preparation commit's CI and Pages deployment. Include behavior-focused tests for new nontrivial logic where appropriate. Document remaining gaps rather than implying that a build proves accessibility or that DOM tests prove visual layout.

Follow the [existing release process](RELEASE-PROCESS.md) for aligned package metadata, human-executed commits, an annotated tag, and publication. Replace the historical 4.0.0 example version with the selected version when preparing exact instructions. No new release automation is installed by this plan.

### Deliberately later capabilities

Mermaid rendering, generated interface reference, full-text search, multiple documentation versions, and expanded departments can arrive as independent increments. Their implementation is not a condition for the first useful documentation entrance.

## Release checkpoint at each increment

Record what is finished, what a reader can now do, what was actually checked, and whether it warrants a release now. Review changes since the last published tag. Use patch releases for suitable corrections and minor releases for useful compatible additions; determine the actual number from the then-current release history.

Maintain Unreleased entries as work progresses. Prepare versioned notes when the scope is known, not speculative release files for every imagined department. Do not wait for the end of a wiki part, and do not manufacture retrospective releases.

The Bureau accepts small departures. It no longer requires the passenger to bring an entire architectural era.

## Local verification checkpoint — October 20, 2026

- Targeted Biome checks passed for the three documentation source files; the 14 existing tests passed. These tests do not cover the documentation route.
- Vincent reports completing type checking and the production build. The assistant subsequently inspected the generated rontend/out/doc/index.html: it contains the overview heading, rendered tables, and rewritten GitHub links.
- Inspection of the generated file does not establish browser appearance, keyboard usability, external-link availability, or public deployment success. Those checks remain pending, as does exact-commit CI verification for release preparation.

## Navigation checkpoint — October 21, 2026

The homepage now has a small fixed bottom-right documentation link. Source review confirms scoped focus styling and removal of the extra decorative spacer. Vincent confirms Biome checks, type checking, tests, production build, and the requested keyboard, narrow-screen, and 200% zoom checks. These are his reported manual results; no independent assistant browser audit is claimed.

Release 4.1.0 notes and the changelog are prepared. Vincent subsequently aligned the package and root lockfile versions to 4.1.0 and confirms repeating the local checks. His preparation commit and exact-commit CI and deployment verification remain pending. The release remains unpublished.

## Published milestone — October 21, 2026

[Stable v4.1.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.1.0) was published at 00:28:41 UTC (02:28:41 in Paris). Annotated tag object `8af60327d4c577b7b2a828fa005effcabdb2c745` resolves to preparation commit #82, `7d213e7b5410b0cf43fe809d135f138e0219e7a1`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39517152564). The release is neither a draft nor a prerelease.

The earlier checkpoint descriptions above preserve the sequence of preparation; their pending steps are now completed for this milestone. This publication-record follow-up changes documentation only and does not move the published tag. Later documentation capabilities remain separate increments.

## Second reading room — October 21, 2026

The architecture document now has a proposed-to-publish implementation at `/doc/architecture`, sharing the existing documentation reader. An explicit two-document registry supplies file selection and navigation; Markdown links between the registered documents become local Next.js links. Other source links retain their GitHub destinations. Current-page markers distinguish the selected room.

Vincent confirms local formatting and application checks, type checking, tests, build, reciprocal navigation through the menu and text, and direct architecture-route reload. Assistant inspection of both exported HTML pages confirms base-path-prefixed local links and the appropriate `aria-current` marker. No independent assistant browser audit is claimed. Exact-commit CI and deployment must be verified after publication.

This compatible addition triggers a release-readiness checkpoint. The package remains 4.1.0; no new tag or release is prepared by this increment. Decide the next minor milestone from the completed published scope before adding another department, rather than silently accumulating an indefinite documentation overhaul.

## Selected next milestone — 4.2.0

Vincent selects **4.2.0 — Two Reading Rooms Obtain a Corridor** for the compatible architecture-page and navigation addition. Implementation commit #84, `60b44089df7bdc5b721ae856cea97175717e5392`, passed its [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39529770689).

The [4.2.0 release notes](RELEASE-4.2.0.md) are prepared. Package and root lockfile versions are now aligned to 4.2.0, and Vincent confirms the requested local checks and production build. The preparation commit still requires its own published CI and deployment verification; the new tag must point to that verified commit. The earlier 4.1.0 release remains the latest published milestone at this checkpoint. No additional department is required to complete this scope.

## Published second milestone — October 21, 2026

[Stable v4.2.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.2.0) was published at 02:17:25 UTC (04:17:25 in Paris). Annotated tag object `e91b3875589e003fcfa7e1091dbdf5e750fc226a` resolves to release-preparation commit #85, `0832bb7c0a25a816094f365d21a59f857cf15d23`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39531756706). The release is neither a draft nor a prerelease.

Earlier pending steps above preserve preparation history and are completed for this milestone. This documentation-only publication follow-up does not move the tag. The architecture room and local navigation now have their own minor release; further departments remain separate increments.

## Lighting detour — 4.3.0 in preparation

Vincent requests a dark-mode switch before the sound-lifecycle and Mermaid work. The [4.3.0 release draft](RELEASE-4.3.0.md) bounds this compatible addition: shared provider and reusable switch, documentation palettes, and a root-level body margin reset. Final corrections and validation remain pending. After publication, resume the sound explanation before adding its diagram renderer.

### Lighting preparation validation

Vincent confirms completing the requested corrections, local application checks, type checking, tests, build, and manual theme verification. Package and root lockfile versions are aligned to 4.3.0. The root stylesheet is named `layout.css.ts`; targeted Biome checks pass for nine source files. Diff whitespace checks pass. The preparation commit still needs its exact published CI and Pages verification before tagging; no release is announced as published here.

## Published lighting milestone — October 21, 2026

[Stable v4.3.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.3.0) was published at 04:04:41 UTC (06:04:41 in Paris). Annotated tag object `08967d51fd1d47a98cd8457dcdc9eaf14b2d3f46` resolves to commit #87, `96be7ab18c375b489a01ddafe43a9c911e040ae3`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39540840023). It is neither a draft nor a prerelease.

Earlier pending descriptions preserve preparation history. This documentation-only update does not move the published tag. Resume the sound-lifecycle explanation and then its Mermaid rendering as separate steps; the lighting milestone includes neither capability.

## Diagram projector — 4.4.0 in preparation

The [4.4.0 release draft](RELEASE-4.4.0.md) groups the sound-lifecycle guide and route from published commit #89 with the locally implemented Mermaid renderer and its two sequence diagrams. The browser renderer follows the shared theme and retains source disclosures. Attribute-level suppression documents the keyboard-focus exception for a horizontally scrollable region.

Targeted Biome and whitespace checks pass. Final version alignment, local checks, production build, browser rendering checks, and exact preparation-commit CI remain pending. A production export does not itself execute the browser's diagram renderer. Publish this bounded capability before expanding into another documentation subsystem.

### Projector preparation validation

Package and root lockfile versions are aligned to 4.4.0. Vincent confirms the requested local checks, production build, and browser checks for both diagrams, both themes, repeated switching, navigation, keyboard scrolling, and source disclosure. These are his reported results; no independent assistant browser audit or dedicated malformed-input execution is claimed. The preparation commit, its exact CI and deployment, and tag/release publication remain pending.

## Published projector milestone — October 21, 2026

[Stable v4.4.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.0) was published at 05:50:45 UTC (07:50:45 in Paris). Annotated tag object `d7bfa28aedc071a55d0ee42e08ae7e7cb19a126e` resolves to preparation commit #90, `3bf2472c7b158bd2a0c396d769c5fc9932148379`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39551230411). The release is neither a draft nor a prerelease.

Earlier checkpoints retain their preparation history. This documentation-only publication update does not move the tag. Dedicated renderer tests, malformed-input verification, generated interface reference, search, and persistent theme preferences remain outside the completed milestone.

## Zoom checkpoint — 4.4.1 preparation

The diagram reader now provides independent 25–300 percent zoom, minus/plus buttons, a slider, percentage output, and a 100 percent reset based on the SVG reference width. Zoom changes CSS sizing without regenerating Mermaid. A named fieldset and compact five-column layout organize the controls; default figure side margins are removed.

Source review confirms the final compact layout and package/root lockfile versions aligned to 4.4.1. Vincent confirms the requested corrections, local checks, type checking, tests, and production build. Whitespace checks pass. Exact preparation-commit CI and deployment, tag, and release publication remain pending. Fitting and fullscreen remain separate later capabilities.

## Published zoom milestone — October 21, 2026

[Stable v4.4.1](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.1) was published at 10:41:58 UTC (12:41:58 in Paris). Annotated tag object `89425db77e10c19fd6d0b9acbdd67095ddb4e747` resolves to preparation commit #92, `65357a731bfac26b26d82957feeb66be20f29af0`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39585783752). It is neither a draft nor a prerelease.

Earlier pending descriptions retain preparation history. This documentation-only follow-up does not move the tag. Fitting and fullscreen remain later tooling capabilities; new pages or diagrams alone remain content work under the clarified PHW policy.

## Auditorium checkpoint — 4.4.2 preparation

The [4.4.2 draft](RELEASE-4.4.2.md) groups fit-to-width and native fullscreen as documentation-reader capabilities. The viewport hook observes available width, coordinates manual and automatic scale, and follows browser fullscreen state. A top-right close cross complements Escape and the text exit command. Zoom spans 1–300 percent; fitting concerns width and stays within those limits.

Vincent confirms the requested corrections, local checks, production build, and manual fit/fullscreen checks in both themes. Source review confirms corrected state naming, close label, and fullscreen palette. Package and root lockfile metadata are aligned to 4.4.2, and Vincent confirms the final checks and build. Exact preparation-commit CI and deployment remain pending publication. No independent assistant browser audit or dedicated automated fullscreen coverage is claimed.

## Published auditorium milestone — October 21, 2026

[Stable v4.4.2](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.2) was published at 17:13:13 UTC (19:13:13 in Paris). Annotated tag object `a6ef609daa675a436fbd5cee3668b46413bc1ab4` resolves to preparation commit #94, `9adaf76a7dd29c939a275070671b798ee104493c`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39640802283). It is neither a draft nor a prerelease.

Earlier pending descriptions preserve preparation history. This documentation-only update does not move the tag or claim new runtime verification. Automatic fitting and native fullscreen are now published capabilities; dedicated automated fullscreen and denied-request coverage remain unestablished.

## Source-reference milestone — 4.5.0 in preparation

Implementation commit #97 adds TypeDoc extraction of `useBeepEngine`, repository-readable Markdown, its shared-reader route, source-relative links, and prebuild generation. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39662104965). This is a tooling capability rather than a release justified by an extra page.

[4.5.0 — The Registry Opens Its Source Office](RELEASE-4.5.0.md) is now in preparation. Package and root lockfile versions are aligned to 4.5.0, and Vincent confirms local lint, type checks, tests, and build for that state. An exact preparation-commit CI result is still required before tagging. No 4.5.0 tag or GitHub release is claimed. The single-hook pilot, moving source links, and absence of stale-output enforcement remain explicit boundaries.

## Published source-reference milestone — October 21, 2026

[Stable v4.5.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.5.0) was published at 20:35:49 UTC (22:35:49 in Paris), neither a draft nor a prerelease. Annotated tag object `ec610a04d951f8bf889ca953d50a8691ba5676a3` resolves to preparation commit #98, `9505a7a806aaaeeae0734fce009f07b5d466c7a7`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39665481830).

The earlier preparation entry remains historical. The single-hook reference-generation capability is now released; its recorded limitations remain. This publication-record follow-up changes neither code nor tag target and claims no new runtime verification.

## Reference freshness — 4.5.1 in preparation

Commit #100 adds generation followed by a comparison of the tracked pilot README with HEAD. Vincent confirms the local success/rejection/restored-success probe. Its [exact CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39675056415), including the new step before the build.

[4.5.1 — The Registry Checks Its Own Memory](RELEASE-4.5.1.md) is prepared for this narrow tooling capability. Package and root lockfile metadata are aligned to 4.5.1, and Vincent confirms the freshness check, lint, type checks, tests, and build after alignment. Exact preparation-commit CI remains pending; no new tag or release is claimed. The gate does not yet cover arbitrary new output or obsolete-file cleanup.

## Published freshness milestone — October 22, 2026

[Stable v4.5.1](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.5.1) was published at 03:28:24 UTC (05:28:24 in Paris), neither a draft nor a prerelease. Annotated tag object `3eace1695e16ada802211affad67f974ab0b6696` resolves to preparation commit #101, `669c94f0e11a5d56f03205cde93466606d750e21`. Its [CI, freshness gate, and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39682375280).

The earlier preparation entry remains historical. The single-file freshness gate is now released with its recorded limitations. This documentary follow-up changes neither application code nor tag target and claims no new runtime verification.
