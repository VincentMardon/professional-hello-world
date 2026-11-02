# Glossary — The Bureau of Terms with Assigned Meanings

[Reception](README.md) · [Contribution tutorial](CONTRIBUTION-TUTORIAL.md) · [Architecture decisions](ARCHITECTURE-DECISIONS.md)

## 1. How to use this register

These definitions describe PHW's current implementation and working vocabulary. They are deliberately local: a word used differently elsewhere is not obliged to apply to the Bureau for permission. Follow the linked guides for mechanisms and limits rather than treating a short definition as a complete contract.

## 2. Documents and reader addresses

| Term | Meaning in PHW | Common confusion to avoid |
| --- | --- | --- |
| Authored guide | Maintained explanatory Markdown under `docs` | It is not generated from a function signature |
| Catalogue | Explicit source, identity, metadata, and slug declarations in `documents.ts` | A Markdown file on disk is not automatically selected |
| Document ID | Internal catalogue key used by the reader and navigation | It is not necessarily the filename or public slug |
| Source path | Markdown location relative to the documentation directory | It does not include the deployment base path |
| Slug | Ordered URL segments beneath `/doc` | It is not an arbitrary filesystem path |
| Base path | `/professional-hello-world`, the configured application prefix | A route helper returning `/doc` has not added that prefix itself |
| Catch-all route | The shared `/doc/[...slug]` entry that selects registered paths | It does not publish arbitrary files or install a persistent server |
| Reading group | Explicit ordered membership used for navigation context and neighbors | URL nesting does not determine the group |
| Heading ID | Deterministic identifier assigned to a Markdown heading | Renaming or reordering duplicate headings can change it |
| Fragment | The destination after `#` in a URL, often addressing a heading | Not every fragment encountered by the inspector is supported or checked |
| Permalink | Heading link using its current generated ID | It is not a promise that future editorial changes preserve that address |
| Contents | The **On this page** list of heading levels two and three | It does not mark the active section during scrolling |

## 3. Generation and inspections

| Term | Meaning in PHW | Common confusion to avoid |
| --- | --- | --- |
| TypeDoc entry point | A deliberately selected source module for reference extraction | Adding a comment does not automatically select its module |
| Generated reference | TypeDoc Markdown in the owned `docs/generated/reference` tree | It must be regenerated from source, not repaired by hand |
| Archived pilot | Earlier generated reference outside the current owned output comparison | It is not automatically part of current reader coverage |
| Freshness | Agreement of regenerated reference with Git's committed record | Staging intentional changes does not make freshness pass |
| Reference coverage | Agreement between generated Markdown inventory and registered reference source paths | It is not measured test coverage |
| Catalogue validation | Inspection of declarations, routes, source rules, and containment | Valid declarations alone do not prove every generated page is declared |
| Navigation validation | Inspection of groups and complete, unique selected-document membership | It does not invent an editorial order for missing entries |
| Link inspection | Examination of extracted local destinations and supported fragments | External destinations are not fetched |
| Deferred fragment | Fragment whose target or kind is outside supported inspection | Deferred does not mean verified or rejected |
| Diagnostic | A reported defect with its relevant identity or occurrence | One green command does not certify another command's jurisdiction |

The practical command map is in [Operations](OPERATIONS.md). The consolidated `npm run docs:check` command runs those documentation inspections in order and stops at the first failure; it does not replace application checks or browser review.

## 4. Search and rendering

| Term | Meaning in PHW | Common confusion to avoid |
| --- | --- | --- |
| Static export | HTML and assets produced for static hosting | Browser interaction can still require JavaScript |
| Server Component | A component executed in the rendering environment | The deployed Pages site does not therefore employ a Node.js server |
| Search index | Serializable metadata and section text built from selected sources | It is not a database queried over a runtime search API |
| Search entry | One searchable introduction or heading section with document context | One document can produce several matching entries |
| Normalization | Lowercasing and canonical decomposition with combining-mark removal | It is not spelling correction or general transliteration |
| Query term | A distinct normalized whitespace-separated part of the query | Query text is not executed as a regular expression |
| Score | Sum of existing field weights for matching terms | Repetition within one field does not keep increasing the score |
| Result batch | Twenty additional results revealed by the client interface | Hidden later results are not excluded from the supplied index |
| Excerpt | Beginning of section text, falling back to description | It is not centered on the matched word |
| Mermaid | The browser diagram renderer used for selected code fences | Accepting syntax does not establish factual correctness |

See the [frontend guide](FRONTEND-GUIDE.md) for the search pipeline and [workshop](DOCUMENTATION-WORKSHOP.md) for heading and diagram maintenance.

## 5. Audio, evidence, and publication

| Term | Meaning in PHW | Common confusion to avoid |
| --- | --- | --- |
| Ready | The initialization hook exposes an engine interface | It does not prove a sound has been heard |
| Started | A successful playback-request status | It is not the sound's completion event |
| Access ceremony | Browser-side password verification controlling panel mounting | It is not server-enforced authorization |
| Mock | A test substitute for a dependency or component | A mocked engine does not verify real Wasm output |
| CI | Automated checks for a particular commit | A previous green run does not certify a later SHA |
| Pages deployment | Publication of the workflow's static artifact | It does not create a named GitHub release |
| Annotated tag | A named tag object identifying a chosen commit | The tag object hash and target commit hash are different identifiers |
| Stable release | A published GitHub release, neither draft nor prerelease | A version bump or site deployment alone is insufficient |
| Project commit number | Sequential `Refs: #N` in the main commit message | It is independent of wiki chapter and wiki commit numbering |
| Chronicle | AI-authored technical account in the separate wiki under delegation | It is not a substitute for operational instructions or independent testing |

The [sound lifecycle](AUDIO-LIFECYCLE.md), [trust boundaries](TRUST-BOUNDARIES.md), and [release process](RELEASE-PROCESS.md) supply the longer accounts. The Bureau defines the word; the mechanism remains obliged to explain itself.
