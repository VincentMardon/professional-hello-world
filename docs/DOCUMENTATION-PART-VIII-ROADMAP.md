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
