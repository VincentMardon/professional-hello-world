# 4.6.1 — The Registrar Rejects Invalid Applications

**Published October 22, 2026 at 15:18:46 UTC (17:18:46 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.6.1), neither a draft nor a prerelease. Implementation commit #107 is published. Its exact CI run, including catalogue validation, and Pages deployment have succeeded. Package and both root lockfile version fields are aligned to 4.6.1. Vincent confirms lint, catalogue inspection, type checks, the full test suite, reference freshness, and production build after alignment. Preparation commit #108 passed its own CI and Pages deployment before publication.

## Scope

- Add the read-only `npm run docs:catalogue:check` command and reusable validator.
- Require overview at the documentation root and nonempty navigation and metadata text.
- Reject invalid slug segments and duplicate public paths with document-specific diagnostics.
- Require portable relative Markdown source paths and existing regular files.
- Check both lexical paths and real filesystem destinations against the documentation root.
- Run catalogue inspection after Biome and before route-type generation and TypeScript checking in CI.
- Use explicit .ts runtime imports with Node.js 24 and the corresponding TypeScript noEmit configuration.

The command reports entry errors without rewriting declarations. It is separate from generated-reference freshness and from the planned link inspector.

## Evidence currently available

Vincent reports the requested initial local checks and tests passed after correcting runtime import extensions. Source review then identified the misspelled overview branch. Vincent corrected it and added a test for overview assigned a nonempty slug.

The assistant's post-correction targeted run passes all 11 validator tests. Its read-only Biome check passes on 61 files, and diff whitespace checks pass. The fixture cases cover valid nested publication, duplicate routes, missing files, invalid slug variants, lexical escape, a directory used as a source, empty metadata, and the relocated-overview regression.

The implementation SHA is `43f7b1362dd6c16102151d53621df95e1b8df1fc`. [CI run 39798059142](https://github.com/VincentMardon/professional-hello-world/actions/runs/39798059142) exists for that exact commit. On October 22, 2026, both the sanity job and publish / deploy job are verified successful. The earlier queue did not establish a validator failure.

## Boundaries

The input is a typed maintained catalogue, not arbitrary external JSON. The gate does not validate Markdown links, fragments, external sites, or the factual accuracy of nonempty prose. Dedicated real-symlink fixtures and CLI process-failure coverage are not established. Filesystem inspection failures are reported, but this is not a claim of a complete security audit.

Existing reader and audio behavior are unchanged. No dependency is installed for the validator. Local-link inspection remains the separate 4.6.2 capability; visual design remains outside this part.

## Verified publication

Annotated tag object `dff459275fd963d99623ad1a816f05f276bca8be` resolves to preparation commit #108, `2e65229dc7f25ab3afbd3081c18178f3485dd010`. Its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39802888752) before the stable release was published at the time above.

The accompanying link-inspection contract remains proposed 4.6.2 work. No extractor code or parser dependency is installed by this publication-record follow-up. Application code, package versions, and tag targets remain unchanged; no new test or browser inspection is claimed.

The Registrar has learned to refuse an impossible room. Its implementation has passed remote inspection; its versioned appointment is now published.
