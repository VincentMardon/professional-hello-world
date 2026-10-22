# Proposed 4.6 Roadmap — One Catalogue, Many Reading Rooms

**Proposal — October 22, 2026.** This roadmap is for discussion. No 4.6 capability, package version, tag, or release is implemented or published by this document. Numbers are potential checkpoints under PHW's artistic versioning policy, not a commitment to release every item separately.

## Objective

Make a new authored documentation page require its Markdown source and one catalogue entry, rather than another copied Next.js route component. Preserve the existing public URLs, static export, metadata, navigation, theme, and diagram behavior. Design remains deferred.

## Potential releases

| Milestone | Observable capability | Completion evidence |
| --- | --- | --- |
| 4.6.0 — The Catalogue Allocates the Rooms | An extracted, typed catalogue drives document selection, navigation, metadata, and static route enumeration. A generic catch-all route replaces repetitive wrappers; the reception route remains explicit. | All seven existing destinations export at their current URLs, including the nested hook reference. Their titles, descriptions, selected navigation entries, and document links remain coherent. Adding an existing eligible Markdown source to the catalogue requires no new page component. |
| 4.6.1 — The Registrar Rejects Invalid Applications | A dedicated catalogue check rejects duplicate public paths, missing source files, invalid slugs, and source paths escaping the documentation directory. | Deliberately invalid fixtures are rejected with actionable messages; the real catalogue passes. The check is connected to CI and its exact published run is verified. |
| 4.6.2 — The Corridors Undergo Inspection | A focused link check detects broken relative Markdown destinations and links into unregistered local documentation routes across the published catalogue. | Known broken file and local-route links are rejected; the real document set passes. The rule distinguishes repository source links from reader routes and reports the originating document. |

These are capabilities of the authoring and verification system, not rewards for creating individual pages. Basic typing, unknown-route handling, and a valid existing catalogue are part of 4.6.0; 4.6.1 is the additional systematic validation gate, not permission to ship a knowingly broken foundation.

## 4.6.0 — Keep the migration coherent

Move the catalogue out of DocumentationPage. Keep the document ID as its key, navigation title as a label, metadata title and description as publication data, and slug segments as the URL definition. Derive the route from the slug rather than maintaining two independent path strings.

Use a generic route with build-time static parameter enumeration and metadata derived from the same entry. No generator of repetitive page.tsx files and no standalone watcher are required for this approach. Development uses the existing Next.js server; the public static site receives changes through a build and deployment.

Migrate the current wrappers as a coherent unit. Keep source-document identity separate from public URL identity, because the generated reference lives deeper in docs than several authored guides. Preserve all current URLs and the configured deployment base path.

Validation should include a real production export, direct access to a nested route, reciprocal links, metadata, and current-page navigation. Existing theme and Mermaid checks should establish that moving route selection did not change the reader's responsibilities. No visual redesign is included.

## 4.6.1 — Validate declarations before publication

Treat catalogue entries as publication declarations. A duplicate path must name both conflicting entries; a missing source must name its document and expected path. Resolve paths against the intended documentation root before accepting them.

Keep validations meaningful and test invalid inputs without corrupting the real catalogue. The gate should make an invalid declaration understandable, not bury it in a failed page build. How the command is organized will be chosen during implementation rather than adding a script merely to satisfy a diagram of proposed scripts.

## 4.6.2 — State the link check's boundary

Begin with destinations that can be checked from repository files and the catalogue. Use Markdown-aware parsing rather than assuming every link fits one regular expression. Preserve the distinction between registered documents, repository code links, local application paths, and external addresses.

Fragment-anchor validation is excluded until heading IDs have a defined contract in the reader. Internet availability checks, rendered-browser crawling, and a complete generated multi-file reference graph are also outside this checkpoint. These can be considered later if they address an actual failure mode.

## Optional follow-up, without a reserved version

A command that assists with creating a catalogue entry or Markdown starter may be useful after the generic route has been tried on real additions. Its value must be demonstrated: removing copied route components may already solve the repetitive work. Do not build a watcher or generator only to replace a copy operation that no longer exists.

Search, redesign, multi-version publication, automatic discovery of every Markdown file, and broader TypeDoc extraction are not included in 4.6 by default. Explicit selection remains the publication boundary.

## Cadence and decision point

Review this proposal with Vincent before implementation. Each checkpoint should have one coherent code-and-documentation review, suitable local checks, and exact-commit CI before release. Ordinary content changes may continue between capability milestones. If a later checkpoint no longer provides enough value, stop rather than manufacture a version.

The intended exit condition is practical: readers keep their addresses, authors stop copying route components, and invalid catalogue entries or broken local corridors are easier to diagnose. The crisis cell may then adjourn without publishing a manual about the adjournment button.

## Scope accepted for implementation — October 22, 2026

Vincent authorizes starting the 4.6 work and completing the authored pages judged necessary at the repository's current stage. The remaining explanatory subjects are grouped into trust boundaries and dependency ownership, rather than one page per library or component. Their Markdown sources are authored; their catalogue and generic-route integration are now applied locally. After this release work, the next planned topic is completing source comments. Design stays deferred.

## 4.6.0 local implementation checkpoint

The catalogue and generic static route are applied. Six repetitive wrappers are removed; reception reads its metadata from the catalogue. Trust-boundary and dependency guides bring the selected documents to nine. Export inspection finds all nine paths, including the nested hook reference. Biome passes on 58 files. Vincent confirms the requested checks pass after running route-type generation before TypeDoc; stale Next validators had referenced deleted wrappers. Metadata wording is corrected; manual browser confirmation remains to be settled before release preparation. Package version remains 4.5.1; no 4.6 tag or release is claimed.
