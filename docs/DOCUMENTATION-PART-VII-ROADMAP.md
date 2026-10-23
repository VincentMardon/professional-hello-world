# Part VII Release Roadmap — Building the Documentation Department

**Planning baseline — October 22, 2026.** This roadmap translates the authorized Part VII direction into potential capability releases. It is not a publication record or a claim that the proposed features already exist. PHW uses artistic versioning; small new capabilities may advance the third number. Ordinary pages, comments, and documentary follow-ups do not each require a release.

## Starting point

Stable 4.6.0 is now published, as recorded in the current checkpoint below. The remainder of this starting-point paragraph preserves the pre-release planning state. Published application commit #104 (`670b98326aa657570ce443229c9e10af49c2bd35`) implements the 4.6.0 catalogue foundation and passed its exact CI and Pages deployment. Nine documents are selected. No 4.6 tag or release is claimed. Manual navigation and direct-reload confirmation remain outstanding in the recorded evidence before release preparation.

## Planned sequence

| Candidate release | Capability | What completes the checkpoint |
| --- | --- | --- |
| 4.6.0 — The Catalogue Allocates the Rooms | Central document declarations, generic static routing, catalogue-driven metadata and navigation. | Confirm browser navigation and nested reload, align the version, verify the exact preparation commit, and publish. Existing URLs remain stable and all nine selected documents export. |
| 4.6.1 — The Registrar Rejects Invalid Applications | A catalogue validation command connected to CI. | Duplicate paths, missing sources, invalid slugs, and paths escaping the intended root are rejected with useful diagnostics. Valid declarations pass and invalid fixtures demonstrate rejection. |
| 4.6.2 — The Corridors Undergo Inspection | Markdown-aware checking of relative file links and registered local reader destinations. | Known broken destinations are rejected; source-code links and unregistered repository documents remain distinguishable from reader routes. Fragments remain outside this checkpoint. |
| 4.7.0 — The Contracts Acquire a Public Register | Expand meaningful source comments and publish organized generated reference beyond one hook. | Cover the agreed audio, documentation, and shared contracts; support generated output routes and cross-links; extend freshness checks to the actual output set, including additions and obsolete output. |
| 4.7.1 — The Registrar Demands an Explanation | Enforce documented contracts and valid reference links over the selected extraction surface. | Missing required documentation and broken reference targets produce actionable failures in CI. Intentional exclusions are explicit. The check does not pretend to validate prose truth or require comments on every CSS variable. |
| 4.8.0 — Every Paragraph Receives an Address | Define stable heading anchors, section links, and per-page contents. | Repeated headings and generated-reference headings receive deterministic handling; section navigation works, and local fragment validation can join the link checks. |
| 4.8.1 — The Reading Rooms Acquire a Directory | Structured catalogue groups, reading order, breadcrumbs, and previous/next navigation where appropriate. | Readers can identify their domain and position; generated reference is distinguishable from authored guidance. Responsive and keyboard behavior work without commissioning the final visual redesign. |
| 4.9.0 — The Bureau Answers Questions | Static-site full-text search across selected documentation. | Index the intended published content; support useful excerpts, keyboard access, empty results, and the deployment base path. Exclude unrelated pages and avoid letting repeated navigation dominate results. |

These eight candidates are checkpoints, not a requirement to manufacture eight releases regardless of implementation. A coherent pair may be merged, a discovered defect may justify an intervening release, and a later item may be reconsidered with Vincent. Preserve published versions rather than renumbering history.

## Comment and reference work

Start source comments after the 4.6 release work. Group by contracts rather than making one release per function:

1. Audio initialization and interaction: readiness, selection, sample rates, volume, promises, failures, and cleanup.
2. Documentation and diagram behavior: catalogue identity, path resolution, generation, zoom, automatic fitting, fullscreen, and effect cleanup.
3. Shared behavior: theme scope, error conversion, reusable component properties, and caller constraints where they need explanation.

Document reasons and contracts, not a paraphrase of every assignment. Choose an extraction surface deliberately. Expanding entry points must be accompanied by output ownership, reader routing, relative-link handling, and freshness coverage. The present one-file gate cannot stand in for a multi-file reference policy.

## Content developed alongside capabilities

Complete or improve the existing guides as implementation changes. Add a practical end-to-end contribution tutorial, a concise glossary, and short architectural decision records for meaningful choices. These may be grouped into normal commits and deployed between releases. They do not automatically receive versions just because another Markdown file appears.

Do not reserve one page per component or library. Use generated reference for selected interface detail and authored guides for relationships and reasoning. Link rather than duplicate explanations. Source comments and code examples remain Vincent-applied code changes under the collaboration rules.

## Functional work versus design

Part VII includes the behavior needed to navigate, address, search, and verify documents. It does not include a visual identity overhaul, polished page composition, decorative redesign, or final aesthetic approval. Those belong to the following part.

New controls must still be usable, keyboard-accessible, and functional on narrow screens. Deferring design does not defer fixing an obstruction to reading or interaction. Use the existing presentation conventions as a baseline rather than repeatedly reopening visual decisions.

## Validation and release cadence

For each capability, agree a bounded scope, apply its code and prose changes, and run meaningful checks for its risks. Exercise both accepted and deliberately invalid cases for validation gates. Browser-dependent behavior needs actual browser review; source inspection and DOM tests have narrower authority.

Align package and root lockfile versions during preparation. Verify CI and Pages deployment for the exact preparation commit, then tag that SHA and publish the stable release with ready-to-paste notes. Later publication-record commits do not move the tag. Vincent reviews and executes application commits and releases; wiki chronicles follow the authorized publication ritual.

Avoid a separate commit or release solely to record each successful command. Group the evidence into the capability's preparation where practical. Do not promise a number of days or chapters.

## Part VII exit condition

The intended architecture lets a maintainer add a selected document without copying route code, document a selected source contract without hand-maintaining its generated counterpart, and receive useful diagnostics when declarations, references, or local links become inconsistent.

A reader can locate a subject, move through the document structure, link to a section, and search the published material. The important current contracts are documented, and instructions state what the automated checks do and do not establish.

Review those outcomes with Vincent rather than using page count or the last proposed version as proof of completion. Part VII hopes to complete at least the department's architecture; this remains an aim rather than a guaranteed deadline. Broader extensions remain separate planning material. The following part can then address design using the actual functioning department.

## Current checkpoint — October 22, 2026

4.6.0 is published on verified preparation commit #105. Its manual checks, version alignment, exact-commit CI, annotated tag, and stable release are recorded in [the release notes](RELEASE-4.6.0.md). The next capability is 4.6.1 catalogue validation. Subsequent milestones in the table remain plans rather than installed gates.

## Current checkpoint — October 23, 2026

Stable 4.6.1 is published. Implementation #110 adds the 4.6.2 local-link inspector and has passed its exact CI and Pages deployment. Stable [4.6.2 is published](RELEASE-4.6.2.md) on October 23, 2026. Package and root lockfile versions are aligned, Vincent confirms all requested local release checks, and preparation #111 passed its own CI and Pages deployment before its annotated tag and stable publication. The next capability after this release is the planned 4.7.0 expansion of useful source comments and generated reference. Design remains deferred to the following part.

## Expanded reference preparation — October 23, 2026

Implementation #113 publishes the selected-contract reference and passes exact-commit CI and Pages deployment. Vincent confirms freshness success on committed output, changed-output refusal, obsolete-output refusal, and restored success with a clean tree. [4.7.0 preparation](RELEASE-4.7.0.md) is open; version alignment, aligned-state checks, and preparation-commit CI remain required. The next proposed capability is the 4.7.1 selected-contract documentation gate, not a design milestone.

Version alignment to 4.7.0 and requested aligned-state local checks are now confirmed. The preparation commit still requires its own successful CI and Pages deployment before tagging and stable publication.
