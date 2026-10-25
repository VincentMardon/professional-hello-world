# Static Search — The Bureau Answers Questions

**Local implementation checkpoint — October 25, 2026.** The proposed 4.9.0 search capability is implemented locally. Vincent confirms the focused search and component tests pass, followed by the requested production build and browser checks. Package version remains 4.8.1. This record does not announce a commit, remote deployment, or stable 4.9.0 publication.

## Admission to the searchable register

The maintained document catalogue selects the sources. The loader reads those files during page generation; it does not discover documents by scanning directories. Both authored guides and selected generated reference participate. Navigation controls and other surrounding interface text do not enter the index.

The extractor uses the reader's heading identifiers and divides each document at every heading level. A nonempty introduction becomes a page-level entry. Heading sections retain their own fragment destinations, including duplicate-heading numbering. An empty document still receives a metadata entry.

Paragraphs, lists, table cells, inline code, image alternative text, and ordinary fenced code contribute searchable text. Mermaid source, raw HTML markup, and link destinations are excluded. Searchability follows extracted Markdown content, not a crawl of the rendered website.

## From source files to a static reader

loadSearchIndex performs filesystem work during page generation. buildSearchIndex produces serializable entries containing document identity, title, description, section heading, reader URL, and extracted text. Full source Markdown and filesystem paths are absent from those entries.

DocumentationPage supplies the complete index to DocumentSearch. The client component imports the matching function and an erased entry type, not the filesystem loader. Queries remain in component memory; no search API or external search service is involved. They are not placed in the URL or retained across a full reload.

Canonical result paths omit the deployment prefix. Next Link applies the configured base path when rendering the links. Heading fragments retain the reader's identifiers and are URL-encoded.

## Matching and ranking

The matcher lowercases text, applies canonical decomposition, removes combining marks, splits the query on whitespace, and deduplicates terms. All terms must match within the same entry, but may occur in different fields. Matching uses literal substrings; punctuation is not interpreted as a regular expression or query language.

For each distinct term, matching the document title earns eight points, the section heading four, the description two, and body text one. A term can earn points from several fields. Repetition within a field does not add points. Results sort by descending score, preserving index order for ties.

This is deterministic text matching, not fuzzy spelling correction, linguistic stemming, or semantic retrieval. Repeated document metadata can legitimately make several sections of one document match.

## The public enquiry counter

A native disclosure opens Search documentation. Its labelled search input offers instructions, a Clear button, and a polite result-count announcement. Results are ordinary section links followed by excerpts from the first 180 UTF-16 code units of body text, falling back to the description. Excerpts are not centered on query matches and do not highlight them.

The first twenty matches appear initially. Show more results reveals another twenty in ranked order. Editing the query or clearing it resets that allowance. Empty queries show instructions; unmatched queries show an explicit empty state. The visual redesign remains deferred.

The Bureau has acquired a counter, a filing system, and a remarkably precise method of awarding eight points to a title. It has not thereby acquired omniscience.

## Local evidence and payload measurement

The focused tests comprise six extraction cases, five index-building cases, seven matching cases, and four component cases. Vincent confirms they pass after correcting misspelled test expectations. The component tests cover initial state, section links and excerpts, missing results and clearing, additional batches, and reset on query changes. The installed jsdom emits a warning about the search HTML element; that warning is separate from the corrected assertions and is not suppressed.

Vincent also confirms the requested build and browser checks: cross-document results, the deployment prefix and heading destination, clearing, and additional results including keyboard operation. These reported checks do not constitute a comprehensive accessibility audit. The assistant inspects two local exported HTML files and confirms they contain the search disclosure.

A read-only invocation of the current loader measures 20 documents and 393 entries. Their serialized JSON occupies 222,302 bytes; local gzip compression produces 43,124 bytes. These are index measurements, not measured network transfer sizes. HTML, React serialization, JavaScript, and hosting compression have their own costs. The inspected reception HTML occupies 307,320 bytes and the theme reference HTML 274,996 bytes, before transfer compression.

The current implementation embeds the complete index in every documentation page and rebuilds it for each loader invocation. This keeps deployment simple but repeats data and generation work. A shared downloadable index, lazy loading, and prepared matching fields remain possible optimizations if measurements justify them; none is claimed as implemented here.

Full pre-release checks, committed-reference freshness, exact-commit CI, Pages deployment, version alignment, tagging, and stable publication remain separate checkpoints.

## Consolidated local verification

Vincent subsequently confirms Biome checking, TypeScript checking, the full test run, catalogue/navigation validation, generated-reference freshness, and local-link checks all pass. The production build and requested browser checks were confirmed earlier. These reports establish the local checkpoint; no new remote CI or publication result is inferred. Generated-reference freshness must also pass against the eventual committed state.
