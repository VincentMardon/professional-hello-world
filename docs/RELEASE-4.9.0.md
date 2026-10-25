# 4.9.0 — The Bureau Answers Questions

**Prepared October 25, 2026; not yet published.** Implementation #125 passed its exact CI and Pages deployment. Package and both root lockfile version fields are aligned to 4.9.0. Vincent confirms all requested aligned-state checks and production build. The preparation commit and its own workflow, an annotated tag, and stable release publication remain outstanding.

## Scope

- Search the twenty selected documentation sources without an external search service or runtime search API.
- Extract sections with the reader's existing heading identifiers, preserving page introductions and duplicate-heading destinations.
- Include prose, tables, lists, image alternative text, and ordinary code; exclude surrounding navigation, Mermaid source, raw HTML markup, and link destinations.
- Match literal substrings while ignoring case and combining accents; require every distinct query term within an entry.
- Rank title, heading, description, and body matches with explicit weights and deterministic tie order.
- Add a collapsible search counter with section links, introductory excerpts, result counts, empty states, clearing, and batches of twenty results.
- Add twenty-two focused test cases across extraction, index building, matching, and reader interactions.

The Bureau of Searchable Explanations can now answer a question with a destination. It continues to award eight points to a title without asking whether the title has attended the appropriate committee.

## Verified implementation

Implementation #125 is `0762c63182fad62f0a688d8e137b1967ba8bf482`. Its [CI run 40195077047](https://github.com/VincentMardon/professional-hello-world/actions/runs/40195077047) completed successfully, including sanity and publish / deploy.

Vincent confirms local Biome, TypeScript, the full test run, catalogue/navigation inspection, generated-reference freshness, local-link inspection, and production build. He confirms the requested browser checks for cross-document search destinations, the deployment base path, heading positioning, clearing, further results, and keyboard operation. These checks describe implementation readiness, not the unverified future preparation commit.

A read-only measurement finds 393 entries, occupying 222,302 serialized JSON bytes or 43,124 bytes with local gzip. These are index measurements, not observed network transfer sizes or a performance guarantee.

## Boundaries and compatibility

Existing document routes and heading rules are retained. The selected TypeDoc extraction surface is unchanged. No new dependency, search backend, query telemetry, or versioned documentation archive is introduced by this implementation.

The complete index is embedded in every documentation page and rebuilt by each loader invocation. Repeated metadata may make several sections of one document match. Excerpts show the first 180 UTF-16 code units of section text, falling back to descriptions; they are not centered on matches. Fuzzy matching, stemming, highlighting, saved queries, and cross-page query persistence are not implemented.

The installed jsdom warns about the search HTML element during component tests; this is distinguished from assertion failures and is not suppressed. DOM tests and the reported browser checks do not establish comprehensive accessibility or multi-browser coverage. The final visual redesign remains deferred.

See the [search implementation record](STATIC-SEARCH.md) for responsibilities, extraction rules, ranking, evidence, and payload costs. PHW's artistic versioning identifies a reader capability milestone rather than promising strict SemVer interpretation.

## Publication checkpoint

No stable 4.9.0 tag or GitHub release is claimed. The eventual annotated tag must target the exact preparation commit after its own CI and Pages deployment succeed. Keep the issued source fixed when later publication records are committed.
