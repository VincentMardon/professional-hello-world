# Registry of Callable Authorities — First Extraction Pilot

**Implementation published — October 21, 2026.** The first generated-reference pilot covers `useBeepEngine`. Vincent has installed the generator, generated its Markdown, connected the reference to the documentation reader, and confirmed that a build runs generation before Next.js. Commit #97 passed CI and Pages deployment. Stable release 4.5.0 is published on verified preparation commit #98.

## One callable authority, several administrative obligations

TypeDoc reads the hook's TypeScript signature and English documentation comment. typedoc-plugin-markdown writes the reference to [the generated entry document](generated/api-pilot/README.md). The comment explains asynchronous initialization, readiness, status updates, and the cleanup guard. The pilot adds documentation to the hook without changing its implementation.

The distinction matters: a ready playback interface does not establish that an AudioContext exists or that sound has been heard. Likewise, preventing a late state update does not cancel initialization or dispose of engine resources. Generated signatures need authored explanations of these contracts.

## Ownership and locations

- Authored API description: the documentation comment beside `useBeepEngine` in its source file.
- Generator configuration: `frontend/typedoc.json`, with one explicit entry point and module-oriented Markdown output.
- Generated reference: `docs/generated/api-pilot/README.md`. Update its source comment or generator configuration and regenerate; do not manually correct generated prose.
- Website reader: `/doc/reference/use-beep-engine`, registered alongside the authored documents and using their shared navigation and theme.
- Explanation and learning notes: this document and the architecture and sound-lifecycle guides.

The generated entry filename is intentionally `README.md`. The `readme: none` option prevents an existing project README from being imported as introductory content; it does not rename the generator's entry document.

## Generation and construction

Run `npm run docs:reference` from `frontend` for explicit generation. The `prebuild` script invokes that command before `npm run build` reaches Next.js. Vincent confirmed this execution order locally. The existing CI build command therefore uses the same lifecycle; no workflow file was changed for this integration, and implementation commit #97 subsequently passed its exact remote run.

Keep the generated Markdown in the repository so the reference remains readable without running the website. The build regenerates it from the checked-out source. Build-time regeneration alone is not a freshness check. The local follow-up described below adds a dedicated comparison before the CI build; its remote execution remains to be verified.

The output directory uses `cleanOutputDir: false`. This pilot does not erase that directory before generation or guarantee removal of obsolete generated files. Keep authored documents outside it, and revisit output cleanup when the extraction scope grows.

## Links and provenance

The shared reader now resolves relative Markdown links against the source document's own location. Registered documents map to their website routes; other relative destinations use the repository fallback. This accommodates the nested generated directory as well as the existing root-level guides. Heading-anchor support and a general multi-file reference graph are not added by this pilot.

TypeDoc uses `gitRevision: main` for source links. Vincent regenerated the reference and confirmed the expected branch URL. These links follow a moving branch rather than an immutable release snapshot. Until the source changes are published, the branch may still show older content at the generated line number; after future changes, an older generated reference may again drift from that branch. Version-pinned provenance remains a separate improvement.

## Verification and remaining boundaries

The assistant ran the read-only Biome check successfully on the initial reader integration: 59 files checked, no fixes applied. Vincent subsequently confirmed the expected source-link URL and the build lifecycle order after adding `prebuild`. These local observations are distinct from the subsequently verified CI and Pages deployment for commit #97; neither establishes an independent browser accessibility audit.

The pilot demonstrates a new documentation capability: source comments and inferred types become repository-readable Markdown and a page in the existing reader. Its release significance comes from this generation pipeline, not from adding another routine Next.js route. Broader API extraction, anchor handling, and immutable source references remain future work. A local freshness-control follow-up is described below; it is not part of the published 4.5.0 tag.

The Registry has admitted one callable authority. It has not yet received a warrant to inventory every function in the institution.

Vincent subsequently confirmed that the local Biome, TypeScript, and test commands all pass. This is a reported local verification result, not a claim of a new remote CI run.

## Published implementation and release

Commit #97 (`23e51be63e4fd2306cdc049521ab4b1616c668c0`) passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39662104965). The pilot is included in [stable release 4.5.0](RELEASE-4.5.0.md). Vincent confirms local checks and build after alignment to 4.5.0. Preparation commit #98 (`9505a7a806aaaeeae0734fce009f07b5d466c7a7`) passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39665481830). The annotated v4.5.0 tag targets that commit; the stable release was published on October 21, 2026.

## Freshness control — local follow-up

Vincent has added `npm run docs:reference:check`. It first regenerates the pilot Markdown, then runs `git diff --exit-code HEAD -- ../docs/generated/api-pilot/README.md` from `frontend`. The comparison is against the latest commit, including staged and unstaged changes to the tracked reference. A difference produces a nonzero exit code and displays the diff; generation errors also stop the command.

The command writes the generated file as part of checking it. It does not reset, stage, or commit changes. After an intentional source-comment change, regenerate and commit the source and reference together. Until that commit exists, a difference from HEAD is expected even if the working reference is up to date with the working source.

The workflow invokes the command after tests and before the production build. If it fails, the subsequent build and artifact publication cannot proceed through that job. The workflow's configured order is inspected locally; successful remote execution remains to be verified after publication.

This check targets the single tracked pilot README. It is not a general detector for new untracked output, obsolete files, or the factual correctness of a source comment. Expanding extraction requires revisiting this boundary. The assistant's read-only Biome check passes on the current local files; Vincent confirms the deliberate local probe: the initial check succeeds, a temporary source-comment change causes regeneration to display a difference and fail, and removing that change restores success. Source inspection confirms that neither the hook nor generated README retains the temporary probe.
