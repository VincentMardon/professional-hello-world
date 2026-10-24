# 4.8.0 — Every Paragraph Receives an Address

**Release preparation — October 24, 2026. Not published.** Implementation #119 is published and has passed its own CI and Pages deployment. Package and both root lockfile version fields are aligned to 4.8.0. Vincent confirms lint, type checking, the full test suite, catalogue inspection, reference freshness, link inspection, and production build pass after alignment. Exact preparation-commit CI and Pages deployment remain required before tagging.

## Scope

- Assign Markdown heading IDs through a shared indexing policy used by rendering, contents, and fragment inspection.
- Handle formatted headings, Unicode text, duplicate collisions, and punctuation-only fallbacks.
- Add visible section permalinks to all six heading levels.
- Add a native On this page disclosure listing h2/h3 headings in document order.
- Validate decoded fragments for current, selected-file, and selected-reader-route destinations.
- Report checked, deferred, and rejected fragments independently of destination checks.
- Add heading, Markdown-rendering, and fragment tests and record a command-level missing-fragment refusal.
- Declare heading utilities and update Next.js to 16.4.1 and Vitest to 5.0.3 following audit findings on existing dependencies.

The Office of Paragraph Addresses now supplies plaques, directions, and an inspector working from the same address book. Its title remains more ambitious than its scope: Markdown headings receive addresses, not arbitrary paragraphs.

## Verified implementation

Implementation #119 is `c490105791b4434cfc09b5af40bbcf5bdaa3c271`. Its [CI run 40042864211 and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/40042864211) succeeded.

Vincent confirms local checks, reference freshness, production build, keyboard opening of contents, navigation from its entries, visible heading permalinks, and generated Theme and ThemeContextValue links reaching their intended sections.

The assistant verifies twenty selected documents with 156 local destinations checked, 52 external destinations not fetched, zero non-file destinations skipped, eighteen fragments checked, 45 deferred, zero rejected, and zero errors. A temporary missing fragment produces a positioned diagnostic and exit code 1; the original source bytes are restored and the command succeeds again. This is a manual CLI exercise, distinct from the installed tests.

The subsequent npm audit reports zero vulnerabilities at inspection time. This is point-in-time advisory evidence, not a universal security guarantee. The dependency corrections are part of implementation #119; preparation should not introduce unrelated updates.

## Boundaries

IDs are deterministic for the current document, not immutable across heading renames or reordered duplicates. Contents lists h2/h3 only; deeper headings retain their links. Raw HTML headings and custom anchor elements are outside the inventory.

Fragment validation covers selected reader documents. Images, unselected targets, external destinations, and browser fragment directives remain deferred. A passing file check does not imply that its fragment passed, and a passing fragment does not establish prose truth or complete accessibility.

The established selected TypeDoc surface remains unchanged. No individual route wrappers or global visual redesign are added. Navigation organization remains planned 4.8.1 work.

See [the section-addressing record](SECTION-ADDRESSING.md) for implementation details and verification limits.

## Remaining publication steps

Version alignment and requested local checks are complete. Publish the reviewed preparation commit. Verify its exact CI and Pages deployment before creating an annotated tag on that SHA and publishing a stable release. Record the actual publication time afterward without moving the tag.
