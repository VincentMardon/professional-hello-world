# 4.7.0 — The Contracts Acquire a Public Register

**Published October 23, 2026 at 15:25:37 UTC (17:25:37 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.7.0), neither a draft nor a prerelease. Package and both root lockfile version fields are aligned to 4.7.0. Vincent confirms all requested aligned-state checks and production build. Implementation #113 and preparation #114 each passed their own CI and Pages deployment.

## Scope

- Expand meaningful source comments across audio, diagrams, documentation tooling, and shared behavior.
- Export supporting signature types for theme consumers and catalogue validation.
- Generate eleven explicitly selected modules and their index as twelve Markdown pages.
- Register the whole generated set in the catalogue, bringing the reader to twenty selected documents.
- Preserve /doc/reference/use-beep-engine and provide the reference index at /doc/reference without adding route wrappers.
- Generate through the existing docs:reference and prebuild commands.
- Clean the exclusively generated output directory and inspect whole-directory Git status for changes, staged output, deletions, and untracked pages.
- Update current guides and retain the original pilot as an archive for historical links.

The Public Register now has enough contracts to require an index. Its authority remains limited to the selected surface; the Ministry has not acquired universal knowledge of its own machinery.

## Implementation evidence

Implementation #113 is `af270528bca350c3c107b0ea207782cc2b7e9e5c`. Its [CI run 39971765002 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39971765002) succeeded. The working tree is clean after the reported refusal exercises.

Vincent confirms lint, type checking, the full test suite, catalogue and link inspections, production build, and reader navigation, including the index, module travel, and preserved initialization-hook address. Expanded generation succeeds after correcting an entry-point spelling and documenting exported supporting types.

The initial gate refuses twelve untracked pages. After committing, Vincent confirms freshness success; the exact implementation CI also succeeds. He then confirms a deliberate tracked README edit is refused by the inspection script, regeneration restores success, temporarily removing the errorMessage entry point produces a refused tracked deletion, and restoring it returns the full command to success with no remaining changes. The direct inspection test is distinct from regeneration, which repairs manual output edits before inspecting.

These are reported manual exercises and remote workflow evidence, not newly installed automated test cases for every script branch. Staged-output refusal follows the inspected status policy but has no separate reported probe here.

## Boundaries

Source links follow main rather than immutable release snapshots. Heading fragments remain deferred; external availability, prose truth, complete accessibility, and browser rendering are not established by freshness. The output policy requires a Git checkout and intended generated files visible to Git.

TypeDoc owns docs/generated/reference and cleans it before generation. Hand-authored content belongs elsewhere. The archived api-pilot output is outside the normal generation and freshness surface.

No audio or diagram runtime behavior is changed by the source comments. Exported supporting types expand the importable type surface. Navigation organization, design, and the planned 4.7.1 required-documentation gate remain separate work.

## Verified publication

Stable v4.7.0 was published on October 23, 2026 at 15:25:37 UTC (17:25:37 in Paris). Annotated tag object `c5c1135d1bcc51517def3a120c06aa82ebf49c6e` resolves to preparation #114, `23a11d14f22516bfb6b352c9a2a7f412bbe6b2f2`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39977265227) before publication. This documentary follow-up changes no application code, package version, generated output, or tag target and claims no new test or browser run.
