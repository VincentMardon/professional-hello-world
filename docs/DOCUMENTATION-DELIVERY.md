# Documentation Delivery — The Bureau of Departures Before Completion of the Palace

**Planning status — October 20, 2026.** This document sets release checkpoints for the documentation work. It does not announce a published release or change package metadata.

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
