# Selected Contract Validation — The Registrar Demands an Explanation

**Local implementation — October 23, 2026. Not released.** The proposed 4.7.1 capability adds TypeDoc validation over the existing eleven selected modules. Package remains 4.7.0. Exact-commit remote validation and release preparation are pending.

## Rules and scope

The expanded TypeDoc configuration enables notDocumented, notExported, and invalidLink validation. Required reflection kinds are Function, TypeAlias, Interface, and Variable. Validation warnings become command failures through treatValidationWarningsAsErrors.

This is the extracted reference surface, not every source file in the repository. Properties are not required as a general category. Callable properties can nevertheless expose signatures inspected under the function rule. Five returned commands in useAudioTest and useDiagramViewport therefore receive comments at their public return properties; their implementation comments remain in place. No intentionallyNotDocumented exclusions are added.

The checks detect missing comments, referenced types omitted from the documentation, and unresolved TypeDoc symbolic links such as inline link tags. They do not establish explanation quality or prose truth. They do not require comments on every parameter, property, or CSS variable. Markdown destination checks remain the separate docs:links:check command; heading-fragment validation remains deferred.

## Integration

The existing docs:reference command uses this configuration. Its failure propagates through docs:reference:check before the Git-status inspection, and through prebuild before Next.js construction. The current CI already invokes these commands; this change adds no separate workflow step or dependency.

TypeDoc validation runs before output generation. A failed validation can therefore leave prior generated files present. Their continued existence does not establish that the latest generation succeeded; inspect the command exit code.

## Local evidence

Initial validation reports five undocumented callable return properties. Vincent adds their public comments and reports clean generation. The two affected generated module pages gain the corresponding explanations.

Vincent confirms two temporary refusal exercises: removing errorMessage's comment causes missing-documentation refusal with a nonzero exit code; restoring it and introducing a nonexistent symbolic link causes invalid-reference refusal with a nonzero exit code. He then removes the probe, restores normal generation, and confirms lint, type checking, the full test suite, catalogue validation, Markdown link inspection, and production build.

Source inspection finds the expected configuration and five public command comments, with no leftover symbolic-link probe. Diff whitespace checks pass. Freshness against the committed output must be checked after committing these intentional generated changes. Exact implementation-commit CI and Pages deployment remain pending.

These are manual refusal exercises rather than newly installed automated fixtures. A separate notExported failure exercise is not claimed. Stable 4.7.0 publication records remain historical; no 4.7.1 tag or release is created by this implementation.
