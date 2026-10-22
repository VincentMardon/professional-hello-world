# Catalogue Validation — The Registrar's Inspection Rules

**Local implementation — October 22, 2026.** Vincent has applied the validation command, tests, TypeScript import configuration, and CI step planned for 4.6.1. Package version remains 4.6.0. Implementation commit #107 passed its exact CI and Pages deployment. Stable 4.6.1 is now published on preparation commit #108.

## Purpose and invocation

From `frontend`, run `npm run docs:catalogue:check`. The Node.js script imports the maintained catalogue, resolves the documentation directory from its own location, and reports either the number of accepted declarations or a list of errors with document IDs. Failures set a nonzero process exit code.

The command is read-only: it does not generate reference, rewrite metadata, fix declarations, or stage files. It validates publication inputs rather than reader appearance. It is distinct from `docs:reference:check`, which regenerates a reference and compares it with HEAD.

## What is inspected

- An overview entry exists; its slug is empty, and only overview may occupy the documentation root.
- Navigation title, metadata title, and description are nonempty after trimming.
- Slug segments contain lowercase words or digits separated by hyphens.
- Public routes are unique; a conflict names the earlier owner as well as the rejected document.
- Source declarations use portable relative paths and a Markdown extension.
- Lexically resolved source paths stay within the documentation root.
- Real source paths also stay within that root, preventing an external symlink destination from being accepted.
- Each source exists, can be inspected, and is a regular file rather than a directory.

The validator collects entry-level errors rather than stopping at the first invalid declaration. If the documentation root itself cannot be inspected, the command reports that inspection failure and exits unsuccessfully.

## Execution and configuration

The runner uses Node.js 24's support for erasable TypeScript syntax. Its runtime imports include `.ts` extensions. `allowImportingTsExtensions` is enabled alongside the existing `noEmit` configuration so TypeScript can check those imports. Next's module resolution is not a substitute for Node's explicit runtime paths.

The CI step is placed after Biome and before route-type generation and TypeScript checking. A catalogue failure therefore stops the job before subsequent type checks, tests, construction, and publication. This describes the configured order; the exact run for #107 subsequently completed successfully, including Pages deployment.

## Verification record

Vincent reports the initial requested checks and tests passed after fixing runtime import extensions. Source review then found `orverview` in the overview-slug rule: an untested branch could accept a misplaced reception despite the initial suite passing. Vincent corrected the spelling and added a regression case for an overview assigned a nonempty slug.

The test suite uses isolated temporary Markdown files and directories. It covers valid nested publication, duplicate routes, a missing source, invalid slug variants, source escape, a directory presented as a Markdown file, an empty description, and the relocated-overview regression. Passing tests do not establish exhaustive branch coverage; no dedicated real-symlink fixture or CLI process-failure test is claimed.

The assistant's read-only Biome run passes on 61 files. The assistant also ran the targeted post-correction test file: all 11 tests passed. This includes the relocated-overview regression. No new whole-suite or production-build run by the assistant is claimed.

## Boundaries

The catalogue is a typed maintained project input, not arbitrary untrusted JSON. This validator does not replace runtime schema validation for a future external input format. It does not read Markdown links, validate fragments, inspect external URLs, measure reference completeness, or approve editorial truth.

Local-link inspection remains the 4.6.2 checkpoint. A catalogue can correctly identify a document whose prose still contains a broken link. Likewise, valid nonempty metadata can still describe the wrong subject; editorial review remains necessary.

The Registrar rejects defective accommodation applications. It does not certify the quality of every book placed in an accepted room.

## Verified implementation publication

Commit #107, `43f7b1362dd6c16102151d53621df95e1b8df1fc`, passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39798059142), verified on October 22, 2026 after the queued jobs completed. This result covers the implementation, not a later version-aligned preparation commit. See [draft 4.6.1 notes](RELEASE-4.6.1.md) for the remaining release gate.

## Version-aligned release preparation

Package and root lockfile metadata are now 4.6.1. Vincent confirms lint, catalogue inspection, type checks, the full test suite, reference freshness, and production build after alignment. Preparation commit #108 passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39802888752). The annotated v4.6.1 tag targets that commit, and the stable release was published on October 22, 2026.
