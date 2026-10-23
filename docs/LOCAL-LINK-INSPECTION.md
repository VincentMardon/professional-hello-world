# Local Link Inspection — Contract and Implementation Record

**Published in stable 4.6.2 — October 23, 2026.** Implementation #110 and preparation #111 each passed their own CI and Pages deployment. Package and root lockfile versions are aligned to 4.6.2; its annotated tag targets #111. See [release notes](RELEASE-4.6.2.md). Earlier checkpoints below retain their historical verification boundaries.

## Inputs and ownership

Inspect the Markdown sources explicitly selected by the document catalogue, including the selected generated reference. Use the repository root, documentation root, catalogue slugs, and configured deployment base path as explicit resolution inputs. Do not scan reserved or unrelated documents merely because they have a Markdown extension.

The first version checks destinations that can be verified from local files and declared reader routes. It performs no network requests. A successful result does not claim that external sites are available, that fragments exist, or that a browser renders the content correctly.

## Parse Markdown rather than matching punctuation

Use a Markdown syntax tree to inspect inline links, image destinations, reference-style links, image references, and their definitions. Resolve reference identifiers using the parser's Markdown rules. A reference with a definition resolves through the parser's identifier rules. Undefined reference-like text is normally parsed as ordinary text, not a link; this initial checker does not promise to diagnose it. Detecting author intent in that plain text would need a separately designed lint rule.

Do not interpret apparent links inside fenced code, inline code, or examples of link syntax as actual destinations. Raw HTML links are outside the current reader's authored-content contract; do not announce raw-HTML support as a side effect of adding this check. Select parser dependencies and declare direct imports explicitly during implementation rather than relying on incidental transitive packages.

## Destination rules

| Destination | Proposed treatment |
| --- | --- |
| Relative file, such as `ARCHITECTURE.md` or `../frontend/src/app/page.tsx` | Resolve from the referring source file. Decode URL path escapes, separate query and fragment, and require the target to exist within the repository. |
| Relative directory | Accept an existing directory as a repository destination, matching the reader's source-browser fallback. |
| Relative Markdown source selected in the catalogue | Verify its source and catalogue-derived reader destination. |
| Relative Markdown source not selected in the catalogue | Accept an existing repository file; it remains a repository link rather than a reader page. |
| Reader path `/doc` or `/doc/...` | Compare its canonical path with the catalogue, allowing the configured trailing-slash convention. Reject undeclared destinations. |
| Base-path-prefixed reader path | Remove the configured `/professional-hello-world` prefix for comparison; do not prepend it twice. |
| Other root-relative application destination | Check against an explicit application-route allowlist established from the current app. Report an unknown route rather than guessing it is a filesystem path. |
| Absolute URL under this site's own documentation prefix | Check the local reader path when origin and configured site prefix match; do not mistake a different host for the local site. |
| External HTTP(S) URL or protocol-relative URL | Classify as external and skip availability checking. Report it as skipped in the summary rather than implying it was verified. |
| `mailto:` or another deliberately supported non-file destination | Classify separately under an explicit scheme policy consistent with the reader. Unsupported schemes must not silently receive local-file interpretation. |
| Fragment-only link | Record as deferred fragment validation. No heading-existence claim is made. |
| File or route with a fragment | Check the file or route and explicitly defer the fragment. |

Normalize destinations according to the reader's URL behavior. Percent-encoded paths, nested generated files, query strings, slash conventions, and malformed URL escapes need explicit tests. Resolve real filesystem destinations to avoid accepting repository links that actually leave the intended root through a symlink. File existence is not proof that an anchor exists.

Application-route validation here concerns the hyperlink target. It does not change how the reader renders an existing root-relative link or fix base-path behavior automatically. If checking exposes a mismatch between valid source links and actual rendered hrefs, scope and verify that reader correction explicitly.

## Diagnostics and command behavior

Propose a read-only command such as `npm run docs:links:check`, with its final name chosen at implementation. Report the source document ID, source path, line and column where available, original destination, resolved target, and the failed rule.

Aggregate independent failures so one run gives a usable repair list. Invalid configuration, an unreadable selected source, or malformed destinations should produce an error rather than an unexplained crash. A nonzero exit code blocks subsequent build and publication when connected to CI.

Summarize checked local targets and deliberately skipped external or fragment checks. A green badge must not imply the skipped categories passed an inspection that never happened.

## Acceptance cases

Use isolated fixtures for both valid and invalid inputs:

- Relative links between root-level authored guides and from nested generated documents.
- Existing source-code files and unregistered repository documents.
- Registered reader routes, prefixed routes, and permitted trailing slashes.
- Missing files, missing reader routes, and lexical or real-path repository escapes.
- Inline links, images, reference definitions, repeated references, and the explicit plain-text boundary for undefined reference-like syntax.
- Encoded filenames, queries, fragments, invalid encodings, and nested directories.
- External destinations skipped without fetching; apparent links in code ignored.

Test the resolver and parser integration with real fixtures; avoid a suite that merely repeats one regular expression. Keep the true catalogue valid while exercising failures.

## Integration sequence

1. Agree the classification rules and the current non-documentation route allowlist.
2. Implement the parser and resolver as reusable logic, then add the command and refusal tests.
3. Run against all selected documents and inspect actual findings. Repair inaccurate links without rewriting historical claims.
4. Place the gate after catalogue validation and before production construction. Run the existing checks and verify the exact published CI before preparing 4.6.2.

Stable heading IDs and fragment checking belong to the later section-addressing milestone. External crawling, rendered-browser crawling, public-content autodiscovery, and broader TypeDoc extraction are not included.

The Inspectorate of Corridors may verify that a door leads somewhere declared. It is not yet authorized to certify every plaque inside the room.

## Original extraction slice

Begin with a reusable Markdown extractor using the same CommonMark/GFM parsing family as the reader. Return actual link/image destinations with source positions and resolve defined references; ignore code and raw HTML. Test extraction before adding filesystem or route validation. This paragraph records the initial proposed slice; the implementation checkpoint below supersedes its pending status. No version change or 4.6.2 release is claimed.

## Extraction checkpoint

Source inspection confirms the unified / remark-parse / remark-gfm tree and definition lookup. The extractor records actual link and image destinations with their usage positions, including defined references, while leaving code examples, raw HTML, unused definitions, and undefined reference-like text outside the inspected set. Vincent confirms the seven tests and requested checks pass. Destination resolution and the aggregate runner are now applied locally, as recorded below; remote execution remains pending.

## Integrated local checkpoint — October 23, 2026

The command `npm run docs:links:check` validates the catalogue, reads its nine selected sources, extracts actual Markdown links/images, and inspects destinations with per-document positions. It checks repository file and directory targets, declared reader/application routes, the deployment prefix, and matching absolute site URLs. Root-relative image sources are checked against frontend/public. External destinations and supported non-file schemes are skipped without network requests; fragments are reported as deferred.

The runner reports failures and sets a nonzero exit code. CI now invokes it after generated-reference freshness and before construction. Application routes outside the reader are explicitly limited to the homepage and audio-test route. The configured site URL matches the actual github.io origin; the earlier transcription error was corrected before this checkpoint.

The first real run found engine[selectedSound](sampleRate) in prose being parsed as a link to a file called sampleRate. Enclosing that expression in inline code fixed its Markdown meaning rather than weakening the checker. The assistant reran inspection: nine documents, 117 local destinations checked, nine external destinations not fetched, zero non-file destinations skipped, two fragments deferred, and zero errors.

Malformed local-route encoding is awaited inside the resolver's try/catch so it becomes a diagnostic instead of an escaped rejected promise. Tests cover both relative-file encoding and root-relative/absolute local-route encoding. Source review confirms the updated awaits and regression cases. This checkpoint does not establish dedicated symlink fixtures, a CLI process-level failure test, or a browser audit.

Vincent supplies a successful production build with all static routes generated. It reports a warning that fallback-font override values were unavailable for Intel One Mono; compilation, TypeScript, and export complete. The displayed Next.js upgrade prompt is not evidence of an installed upgrade. Package version remains 4.6.1 and exact-commit CI for this link gate remains pending.

The assistant reran all three documentation-validation test files after integration: 32 tests passed across catalogue validation, extraction, and destination inspection. This targeted run is distinct from the earlier full-suite output. The locked Next.js package remains 16.4.0. Biome passed on 66 files before this documentary update.

## Remote checkpoint — October 23, 2026

Implementation commit #110, `6a994486120d9e3ce2c4216faf5235a7219aeea4`, passed [CI run 39924728591 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39924728591), including the local-link gate. This supersedes the earlier remote-pending status. Package and root lockfile versions are now aligned to 4.6.2. Vincent confirms lint, catalogue inspection, type checking, the full test suite, reference freshness, link inspection, and production build pass after alignment. Exact preparation-commit CI and deployment remain required before publishing 4.6.2.

## Stable publication — October 23, 2026

Stable v4.6.2 was published at 09:04:20 UTC (11:04:20 in Paris). Annotated tag object `f8ce06f091c63dd32ffe2fe93f4311d329cc679d` resolves to preparation #111, `353b3e874814ef5109c8c2c1e5f83318ba2ec318`, whose [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39927269722). This supersedes the preparation-pending status above. The publication-record follow-up changes no implementation or tag target and claims no new verification run.
