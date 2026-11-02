# Part VIII Roadmap — The Code Is Called to Explain Itself

**Planning baseline — October 25, 2026.** Vincent approves six work batches and delegates release planning to the assistant. Stable 4.9.0 is issued. Part VII is closed at wiki chapters 077–099; Part VIII continues source explanations and living guides. The documentation visual redesign is reserved for Part IX. This roadmap proposes work; it does not claim its implementation or verification.

## Working method

Work through a few related files at a time. Explain ownership, assumptions, inputs, callbacks, asynchronous boundaries, failures, and reasons for non-obvious choices. Vincent applies source comments and other code changes from conversation proposals. The assistant may maintain prose documents directly.

Comment density is not a completion metric. Existing substantive contracts, including the two main audio hooks, need review rather than automatic expansion. Short decorative components may need only one sentence. Document existing visual mechanisms without commissioning new design.

Choose TypeDoc entry points separately from source comments. Broader generated output must have deliberate ownership, routes, navigation, link inspection, and freshness checks. A comment does not automatically deserve a generated page.

## Six work batches

| Order | Scope | Completion evidence | Publication cadence |
| --- | --- | --- | --- |
| 1 — The Audio Counter Gives Its Reasons | AudioTestAccess, AudioTestPanel, AudioSettings, selectors, volume, playback, and status. | Explain state ownership, expected values, callback responsibilities, local verification limits, and failure reporting against actual callers. Review existing hook contracts for omissions. | Coherent comment/documentation commits; no automatic release. |
| 2 — The Furniture Explains Why It Moves | usePickerMotion, rotation and shadow calculations, CSS-variable bridges, color layers, and decorative structure. | A maintainer can trace the existing animation and styling mechanisms and distinguish decorative from interactive elements. | Coherent explanatory commits; no redesign or automatic release. |
| 3 — Shared Components Declare Their Jurisdiction | Theme switch, shared components, homepage composition, and layouts. | Explain scope, provider requirements, metadata responsibility, and non-obvious historical choices with proportionate detail. | Coherent explanatory commits; no automatic release. |
| 4 — The Ministry Explains Its Own Machinery | Navigation, headings, search, and documentation inspection scripts. | Retrace representative mechanisms together; complete useful contracts and deliberately review the generated reference selection. Add the reference-coverage gate described below. | Candidate 4.9.1 for the new verification capability, not for comment volume or new pages. |
| 5 — The Manuals Catch Up with the Building | Documentation reception, frontend guide, workshop, and operating instructions. | Living guides describe the current catalogue, routes, inspections, navigation, reference, and search. Historical release records remain historical. | Content commits; no automatic release. |
| 6 — The Department Can Train a Successor | End-to-end contribution tutorial, concise glossary, selected architectural decisions, and a consolidated documentation-check command. | Follow a document from source through registration, generation where relevant, navigation, search, validation, and publication. Demonstrate the consolidated checks and their failure status. | Candidate 4.9.2 for the checking workflow, not for the new prose. |

The sequence is a learning route, not a promise that each batch fits one commit. Explain the search pipeline again before extending its contracts if necessary. Tests establish behavior; applying code and seeing green checks do not by themselves establish understanding.

## Proposed capability release 4.9.1 — The Register Refuses an Unassigned Contract

Introduce an automated comparison between Markdown files generated in the owned reference output directory and the document catalogue's registered reference sources. The current freshness check detects changes against Git, while catalogue validation checks declarations that already exist. Neither inspected command currently establishes that every generated reference page has been assigned a reader route.

The gate should detect generated pages missing from the catalogue and registered generated-reference sources absent from the output. Existing catalogue and navigation validation retain responsibility for duplicate declarations and reading-group coverage. Keep the archived pilot and unrelated authored documents outside this owned-output comparison. Any intentional exclusion must be explicit and justified rather than silently ignored.

Exercise accepted inventory, an unregistered generated page, and a registered but absent output. Integrate the gate into the documentation checks and CI. Decide its command name and implementation with Vincent when reaching this batch. This is a proposed new validation capability; no checker or fixture is installed by this roadmap.

Comments and deliberately selected generated-reference additions can accompany this milestone. New generated pages alone do not justify it. Do not broaden the TypeDoc surface indiscriminately to manufacture more output.

## Proposed capability release 4.9.2 — One Application to Inspect the Department

Provide a single contributor command, provisionally npm run docs:check, that runs the agreed documentation checks in dependency order and returns a nonzero exit status when a constituent inspection fails. Cover generated reference validation/freshness, catalogue/navigation, reference coverage, and local links/fragments. Confirm the order against the actual implementation: generated output must exist before checks that depend on it.

Preserve useful individual commands and diagnostics. Explain that intentional generated changes require review and committing before freshness can pass; do not quietly stage files, rewrite generated history, or weaken that check to make a convenience command green.

Use the same documented chain in CI without accidentally retaining redundant separate invocations. Lint, application type checking, application tests, and the production build retain their own responsibilities. The build's existing generation step may still run; this milestone does not promise to remove all repeated generation or optimize the build architecture.

Demonstrate normal success and propagation of a constituent failure. The release concerns a repeatable contributor workflow, not a new checking algorithm or a replacement for browser review.

## Release discipline

Both versions are candidates for useful tooling capabilities under PHW's artistic versioning. Do not release them for comments or pages alone. If one capability proves unnecessary or both belong in one coherent implementation, revise the plan before assigning versions rather than manufacturing an empty release. Do not promise a duration or reserve further increments in advance.

For each issued capability, align package and lockfile versions, record local checks, inspect exact preparation-commit CI and Pages deployment, then let Vincent create the fixed annotated tag and stable release. The assistant prepares prose and messages; main-repository commits, tags, and pushes remain Vincent-owned. Each published main commit receives its own wiki chronicle under the existing check-in rules.

## Exit review before Part IX

- Important existing mechanisms have useful source explanations and accurate limits.
- Generated-reference selection is deliberate and its reader coverage can be checked.
- Living guides describe the current software rather than superseded planning checkpoints.
- A practical tutorial, glossary, and selected decision records supply the missing contribution context.
- A maintainer can run the documented inspection workflow and understand a refusal.
- Remaining extensions are distinguished from work actually completed.

Review these outcomes with Vincent before closing Part VIII. Part IX is reserved for visual design; no opening, implementation, title, or release number is established by this plan.

## Local first-batch checkpoint — October 26, 2026

Vincent has applied explanatory comments to AudioTestAccess, AudioTestPanel, AudioSettings, SoundSelector, SampleRateSelector, VolumeControl, PlaybackControls, and StatusDisplay. The inspected diff contains comment additions without executable changes. The assistant's read-only Biome check passes before the final editorial spelling corrections; diff whitespace inspection also passes. No new test, build, browser run, generated reference expansion, or capability release is claimed. This batch and the roadmap await Vincent's main-repository commit and subsequent remote verification.

## Published first batch and local visual-mechanism checkpoint — October 27, 2026

First-batch commit #128, `c0b2d4fd7688b64a198217472a300bf888242cd7`, passed [CI run 40354855097 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40354855097). This supersedes its remote-pending notice above.

The second batch adds comments across nine hook and style files. It explains the existing picker event/CSS boundary, sampled shadow compensation, range-fill inheritance and thumb alignment, palette roles, frame composition, background layer order, and access-form layout. The inspected source diff contains comment additions only. The assistant's read-only Biome check passes before the final spelling corrections; no new local test, build, browser review, or generated-reference expansion is claimed. The standing technical chronicle direction is also recorded in AGENTS.md. These local changes await Vincent's commit and remote verification. Version remains 4.9.0; candidate tooling milestones remain proposed.

## Published visual batch and local shared-component checkpoint — October 28, 2026

Second-batch commit #129, `887e324e955f8a70392313e369de39e79fcefacc`, passed [CI run 40431396526 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40431396526). This supersedes its remote-pending notice above.

The third batch adds or corrects comments in ten shared-component and application-entry files. It explains theme-provider delegation, accessible switch state and decorative styling, fixed homepage messages, spacing, page composition, deployment-prefix handling, root metadata, viewport declarations, and inactive head placeholders. The inspected source changes are comments only. The assistant's read-only Biome check passed before the final editorial corrections; diff whitespace checks pass. No new local test, production build, browser run, or TypeDoc output is claimed. The batch awaits Vincent's commit and remote verification. Package version remains 4.9.0; the proposed tooling releases remain unimplemented.

## Published shared batch and local reader-contract checkpoint — October 28, 2026

Third-batch commit #130, `2383ccf4048de3221491a1a811f1e1debac232ab`, passed [CI run 40713172212 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40713172212). This supersedes its remote-pending notice above.

The first documentation-machinery sub-batch adds or updates comments across eight data, component, Markdown, and route files. It explains navigation ownership, group-local reading order, breadcrumb meaning, shared heading IDs, rendering boundaries, relative URL transformation, and catalogue-driven route selection. The inspected changes contain comments and adjacent whitespace only. The assistant's read-only Biome check passes before final spelling corrections; no new local tests, build, browser run, reference-generation change, or tooling capability is claimed. Version remains 4.9.0. Search-contract review and the proposed reference-coverage gate remain subsequent work.

## Published reader batch and local search-contract checkpoint — October 29, 2026

Reader-contract commit #131, `13976857030a0b04ca282eaef20d8077ec766467`, passed [CI run 40768062744 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40768062744). Its local checkpoint is superseded by that published-state verification.

The search-contract sub-batch adds or refines comments in the extractor, index builder, source loader, matcher, and search component. It explains section boundaries, metadata-only entries, internal keys versus reader URLs, concurrent read ordering and failure, repeated metadata, normalization and scoring, display limits, component-memory state, and UTF-16 excerpt truncation. The inspected source diff contains comments and adjacent whitespace only. Biome passes during review before final spelling corrections; no new local tests, build, browser verification, generation, or performance measurements are claimed. Package remains 4.9.0. Verification-script review and the proposed reference-coverage capability remain subsequent work.

## Published search batch and local inspection-script checkpoint — October 30, 2026

Search-contract commit #132, `5c2d2c8cba7b8dc180a27928b6915004f96a1ee4`, passed [CI run 40959323038 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40959323038). This establishes remote verification for the earlier local checkpoint.

The inspection-script sub-batch adds comments to the catalogue/navigation runner, generated-reference status check, and local-link runner. The inspected diff contains comment additions only. It explains path resolution, delegated validation, exit status, the generation-versus-status distinction, two-pass heading indexing, occurrence counters, and deferred fragment checks. Biome passes during review before final spelling corrections. Vincent reports acceptance of twenty catalogue declarations, a clean generated-reference Git status, and link inspection with 156 local destinations, 52 external destinations not fetched, eighteen fragments checked, 45 deferred, zero rejected fragments, and zero errors. The standalone reference script did not regenerate files. No new test, build, browser run, or validation capability is claimed; version remains 4.9.0. The proposed reference-coverage gate is the next planned capability.

## Local reference-coverage checkpoint — November 2, 2026

The proposed 4.9.1 gate is now implemented in the working tree as `npm run docs:reference:coverage`, with a recursive Markdown inventory runner, a pure comparison validator, and six focused test cases. The inspected CI workflow invokes it after reference generation/freshness and before link inspection. Earlier statements describing the gate as unimplemented are historical checkpoints, superseded by this local state.

Vincent demonstrates acceptance of twelve generated reference pages, refusal of a temporary thirteenth page without a catalogue declaration, and renewed acceptance after removal. No remote execution of the new CI step is claimed. See the [4.9.1 preparation notes](RELEASE-4.9.1.md) for boundaries and outstanding release checks. Package alignment, final verification, preparation commit, tag, and stable publication remain pending. Living-guide updates and the proposed 4.9.2 consolidated command remain subsequent work; design remains reserved for Part IX.

## Aligned 4.9.1 local verification — November 2, 2026

Vincent supplies successful Biome, TypeScript, full-suite (104 tests across fifteen files), catalogue, generated-reference freshness, twelve-page coverage, local-link, and production-build results. All three package/root lockfile version fields are inspected at 4.9.1. The existing search-element test warning and Intel One Mono fallback warning accompany successful commands. This supersedes the pending local verification and alignment notices above; the main preparation commit, exact-commit remote CI, tag, and release publication remain pending.

## Stable 4.9.1 publication — November 2, 2026

Stable v4.9.1 was published at 20:47:55 UTC (21:47:55 in Paris), neither draft nor prerelease. Annotated tag object `0eb0b23a359b48f71e1a1068b9fd0531e531ba81` resolves to preparation #134, `dd95197d838587b01c97fae7f7c1b2cf41f0a5ef`. [CI run 41514463300](https://github.com/VincentMardon/professional-hello-world/actions/runs/41514463300) succeeded, including the new coverage inspection and Pages deployment. This supersedes earlier preparation-pending notices; no additional local tests or application changes are claimed by this prose follow-up. Living-guide updates and the proposed 4.9.2 contributor workflow remain subsequent work.


## Living-guide refresh — November 2, 2026

The local content batch refreshes reception, architecture, the frontend guide, workshop, operations, trust boundaries, and dependencies against inspected implementation. It replaces superseded current-state notices with the twenty-document catalogue, grouped navigation, heading addresses, static section search, expanded reference, and the separate catalogue/navigation, freshness, coverage, and link/fragment gates. The frontend guide traces search from source loading through extraction, indexing, matching, and client interaction. Historical release notes remain unchanged.

Read-only catalogue validation accepts twenty declarations and reference coverage accepts twelve pages. Final local-link inspection accepts 168 local destinations across twenty selected documents: eighteen fragments checked, 45 deferred, zero rejected, and zero errors. Fifty external destinations are not fetched. Vincent completes the production build, which runs reference generation through prebuild. He confirms the new frontend-guide sections render and that searching for pipeline through PHW's integrated search reaches the intended section. These targeted browser checks are attributed to Vincent; no additional full test suite, code change, or version increment is claimed. The contribution tutorial, glossary, selected decision records, and proposed 4.9.2 consolidated command remain planned. This content batch awaits Vincent's commit and exact-commit remote verification.


## Contribution material drafted — November 2, 2026

Living-guide commit #136, `70b0f8dcac09f965be2ea0940ec3c47cadadcb22`, passed [CI run 41524777379 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/41524777379). This supersedes its earlier remote-pending notice.

Three repository-readable documents now supply the contribution tutorial, glossary, and five retrospective architecture decisions. The tutorial follows a hypothetical authored guide through source creation, catalogue and navigation, generation where relevant, inspection, search/browser checks, review, and publication. Decision records describe inspected choices and analytical tradeoffs without inventing historical deliberations. Reception and the workshop link this material. Application registration is proposed to Vincent and remains unapplied at this checkpoint; no new reader routes, expanded selected inventory, generated reference, test execution, or production build are claimed. The proposed 4.9.2 consolidated command and Part VIII exit review remain subsequent work. Version remains 4.9.1; design remains reserved for Part IX.


## Contribution material registered locally — November 2, 2026

Vincent applies the three catalogue entries and their Guides membership. Catalogue/navigation inspection accepts twenty-three declarations: eleven authored guides and twelve generated reference pages. The living guides now reflect that selected inventory. This supersedes the earlier registration-pending checkpoint. Reference regeneration, final tests, export and browser review remain pending. The navigation boundary fixture must move from the workshop to architecture decisions because the workshop is no longer the group's last document; this is an expected fixture update to the changed editorial sequence, not a pagination implementation change.

## Contribution material verification checkpoint — November 2, 2026

Vincent confirms the requested formatting, reference generation, reference coverage, local-link inspection, type checking, test run, and production build pass. Inspection finds the expected generated catalogue-reference additions and source-line shifts, with no expanded TypeDoc entry-point selection. The navigation fixture now checks architecture decisions as the last Guides document with Glossary as its predecessor. These observations supersede the pending local command checks above. Vincent also confirms direct access and reload for all three new pages, the Workshop-to-decisions reading sequence with no next link at its end, and the integrated ADR-005 search destination. Browser observations are attributed to him. Committed-state reference freshness and exact-commit remote verification remain pending; no new release is claimed.
