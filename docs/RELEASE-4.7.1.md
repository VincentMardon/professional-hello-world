# 4.7.1 — The Registrar Demands an Explanation

**Published October 23, 2026 at 16:04:31 UTC (18:04:31 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.7.1), neither a draft nor a prerelease. Package and both root lockfile version fields are aligned to 4.7.1. Vincent confirms all requested aligned-state checks and production build. Implementation #116 and preparation #117 each passed their own CI and Pages deployment.

## Scope

- Enable TypeDoc notDocumented, notExported, and invalidLink validation over the existing selected extraction surface.
- Require comments for Function, TypeAlias, Interface, and Variable reflections.
- Treat validation warnings as command failures.
- Document five callable return properties in useAudioTest and useDiagramViewport and regenerate their two module pages.
- Propagate failures through the existing reference-freshness and prebuild commands without adding dependencies or a workflow step.

The Registrar now refuses an unexplained selected contract or an unresolved symbolic reference. Its authority does not extend to believing everything written in the explanation.

## Verified implementation

Implementation #116 is `f6620e7628c4a82cfc96cd13b3286d1404d5bce2`. Its [CI run 39981505679 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39981505679) succeeded, including strict generation and committed-output freshness.

Vincent confirms missing-comment and invalid-symbolic-link refusal with nonzero exit codes, restoration of the source, clean generation, lint, type checking, the full test suite, catalogue validation, local-link inspection, and production build. Source inspection finds no leftover probe; whitespace checks pass.

The refusal exercises are manual, not newly installed automated fixtures. A separate notExported failure probe is not claimed. No intentionallyNotDocumented exclusions are added.

## Boundaries

The rule applies to the selected extracted modules, not every file in the repository. Properties are not required as a general category, but callable properties can expose signatures subject to function validation. The five new comments document those public command access points.

Comment presence does not establish explanation quality or factual accuracy. TypeDoc symbolic links and ordinary Markdown destinations have separate checks. Heading fragments, external availability, and complete browser accessibility remain outside this milestone.

Validation occurs before generation: old output may remain after failure. A readable existing generated file does not establish a successful latest generation. Inspect the exit code.

Package metadata is the only intended version-alignment change. No application runtime behavior or dependency version changes are introduced by this preparation. See [the validation record](SELECTED-CONTRACT-VALIDATION.md) for details.

## Verified publication

Stable v4.7.1 was published on October 23, 2026 at 16:04:31 UTC (18:04:31 in Paris). Annotated tag object `48ad7cb9634ce9b8e89aa91c722d2e90e2644201` resolves to preparation #117, `ea0ce3e628bd45a56582384a6385c486ea30b0bb`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39982954319) before publication. This documentary follow-up changes no application code, package version, generated output, or tag target and claims no new test or browser run.
