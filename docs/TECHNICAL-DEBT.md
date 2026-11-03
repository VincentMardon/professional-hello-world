# Technical Debt — The Register of Work Left Owing

**Initial documentation-work checkpoint — November 3, 2026.** This is a repository maintenance record, not a new reader page, release promise, exhaustive audit, or instruction to fix every item immediately. It records observed tradeoffs and verification gaps from the documentation chantier after stable 4.9.2.

[Architecture](ARCHITECTURE.md) · [Architecture decisions](ARCHITECTURE-DECISIONS.md) · [Operations](OPERATIONS.md) · [Part VIII roadmap](DOCUMENTATION-PART-VIII-ROADMAP.md)

## 1. How this ledger is maintained

Use stable identifiers when discussing work. Record the affected boundary, practical cost, evidence, and a closure condition. Keep resolved entries with their resolving commit rather than silently deleting history. Status is **open** until a verified change or an explicit documented decision closes the item.

Priorities below mean when to investigate, not a severity rating or promised schedule:

- **Measure before extending:** inspect before materially increasing content or complexity.
- **Next relevant change:** address when the affected mechanism or environment is touched.
- **Ongoing maintenance:** review as content and responsibilities evolve.

A known tradeoff is not automatically a defect. An optional feature is not automatically debt. A limitation in evidence must not be inflated into a confirmed runtime failure. The Registrar may enjoy a long ledger; the project should prefer a useful one.

## 2. Observed implementation tradeoffs

| ID / Status | Item and source | Practical cost or risk | Next action and closure evidence | Investigation timing |
| --- | --- | --- | --- | --- |
| TD-001 / Open | Repeated search-index construction and delivery. [Loader](../frontend/src/features/doc/search/loadSearchIndex.ts) and [reader](../frontend/src/features/doc/components/DocumentationPage.tsx) rebuild the full selected-source index per invocation and embed it in each page. | Content growth repeats build work and page payload. No current unacceptable latency is established by this record. | Measure current export payload, generation cost, and query responsiveness on representative devices. If warranted, choose index reuse or delivery changes, verify content updates and failure behavior, and compare measurements. A documented acceptance based on measured cost can also close this item. | Measure before extending |
| TD-002 / Open | Repeated TypeDoc generation. [Scripts](../frontend/package.json) generate through docs:check and again through build's prebuild. | Repeated extraction consumes time; it currently preserves standalone build behavior. | Measure the cost. If reorganized, demonstrate standalone build generation, fresh inspection input, correct failure propagation, and no stale generated output. Do not remove the prerequisite solely to shorten a command. | Measure before extending |
| TD-003 / Open | Heuristic repository link typing. [Reader URL resolver](../frontend/src/features/doc/components/DocumentationPage.tsx) treats a final segment without a dot as a tree destination. | Extensionless files or dotted directories can be assigned the wrong GitHub destination kind. This records a heuristic limitation, not a demonstrated broken current link. | Exercise representative counterexamples, then choose explicit typing or a trusted build-time inventory if needed. Verify registered-reader links, queries, fragments, and repository fallbacks. | Next relevant change |
| TD-004 / Open | Heading-derived public addresses. [Shared indexer](../frontend/src/features/doc/markdown/documentHeadings.ts) derives IDs from current text and duplicate order. | Editorial changes can break incoming fragments even though every local mechanism agrees on the new IDs. | Define stability requirements before choosing explicit IDs or aliases. Demonstrate old-address compatibility where promised and agreement among rendering, search, contents, and inspection. Otherwise record the accepted compatibility policy. | Next relevant change |
| TD-005 / Open | Source extraction and reference may drift in meaning even when generation is fresh. [Workshop](DOCUMENTATION-WORKSHOP.md) and [TypeDoc selection](../frontend/typedoc.reference.json). | Freshness verifies generated agreement, not truth. Newly changed behavior can retain misleading contracts or guide prose. | Review affected callers, contracts, guides, and selected reference in behavior-changing work. Extend useful source explanations where an actual maintenance question reveals a gap. Do not require a comment on every line. | Ongoing maintenance |

## 3. Verification and environment gaps

| ID / Status | Known boundary | What remains unproved | Next action and closure evidence | Investigation timing |
| --- | --- | --- | --- | --- |
| TD-006 / Open | Targeted manual browser checks and jsdom component tests; no configured E2E browser suite. | Complete deployed journeys, mobile layout, native fullscreen behavior, and broad browser/accessibility compatibility are not established by DOM tests. | Define a small real-browser matrix around direct routes, base-path navigation, heading/search destinations, theme, and diagram entry/exit. Preserve manual review for visual meaning and accessibility needs beyond automated assertions. | Next relevant change; include design review |
| TD-007 / Open | No measured test coverage; audio tests mock the engine and replace the access component with the panel. | Branch coverage, password acceptance/refusal, real Wasm integration, and audible output are not certified by the existing suite. | Identify risk-based missing assertions and real-integration checks. Consider coverage measurement as diagnostic evidence before imposing thresholds. A passing mocked request remains distinct from heard audio. | Next relevant change |
| TD-008 / Open | [Link inspection](../frontend/scripts/check-document-links.ts) checks selected local scope and supported fragments. | External destinations are not fetched; image fragments, unselected targets, and browser directives may be deferred. Repository-only guides are outside the selected-source scan. | Choose which additional category warrants support and supply fixtures and explicit failure/transient-network policy. Preserve separate deferred counters rather than reclassifying them as successful checks. Existing commands remain valid within their stated scope. | Ongoing maintenance |
| TD-009 / Open | Search-element recognition warning observed during DocumentSearch component tests. [Test configuration](../frontend/vitest.config.ts) and [component](../frontend/src/features/doc/components/DocumentSearch.tsx). | The warning's exact tool-level cause has not been independently isolated in this record. Tests pass; no corresponding deployed-reader failure is established. | Reproduce against the actual React/jsdom stack, identify the compatibility boundary, and verify an appropriate resolution. Retain meaningful semantic HTML and avoid blanket console suppression. | Next relevant environment change |
| TD-010 / Open | Intel One Mono fallback-override warning in successful production builds. | A visible fallback/layout defect has not been demonstrated by the warning alone. | Inspect the [font configuration](../frontend/src/features/audio-test/styles/fonts.ts), generated output, and loading/fallback layout in a browser. Resolve or document the chosen fallback behavior with evidence. | Next relevant typography/design change |
| TD-011 / Open | Test duration varies between runs; filesystem module caching is enabled. [Vitest configuration](../frontend/vitest.config.ts). | A permanent cause of historically slow cold runs has not been established. A roughly ten-second successful run is evidence for that run, not a latency guarantee. | Measure cold/warm wall time and phase costs before changing pools or environments. Preserve test isolation and meaningful assertions; do not disable isolation merely to obtain a smaller number. | If delays recur |

### Editorial maintenance follow-up

**TD-012 / Open — historical checkpoints in the main README.** The [project README](../README.md) still contains older local-preparation paragraphs followed by later publication notices. Their chronology is preserved, but a reader can encounter a stale pending statement before reaching its superseding record. Review whether current orientation and dated history should be separated more clearly. Closure requires clear current status and preserved historical facts, with working release links; do not rewrite issued release notes to pretend earlier uncertainty never existed. Timing: ongoing maintenance or the principal-page project handoff.

## 4. Deliberate limits that are not automatically debt

The following remain useful future choices, not hidden obligations attached to this ledger:

- The generated API surface is explicitly selected; it is not a promise to extract every module or the upstream engine's full API.
- Search uses literal matching without fuzzy search, stemming, filters, or highlighting. Excerpts are introductory and use UTF-16 truncation; query state is local rather than stored in the URL. These become work when a defined reader need justifies it.
- The selected search corpus excludes repository-only material and the separate wiki. Broader indexing needs explicit publication and destination ownership.
- Theme choice starts dark, remains in memory, and does not synchronize with system preferences. Persistence requires its own precedence and initial-render decisions.
- Current guides and source fallbacks do not provide versioned documentation for every release. Maintaining an archive is a product and hosting decision.
- Rich traceability, interactive examples, a health dashboard, and relationship maps are potential capabilities rather than missing pieces of the issued 4.9.2 contract.
- The client-side access ceremony is explicitly presentation, not trusted authorization. Confidential delivery would require a separate design, not a cosmetic strengthening of the current form.

## 5. Design handoff and the principal PHW page

Documentation visual design remains reserved for Part IX. Review the actual guides and generated reference for hierarchy, reading width, dense tables and signatures, code, navigation, search, diagrams, narrow screens, focus visibility, and contrast. This is planned design work; this ledger does not claim a completed accessibility audit or prescribe a visual solution.

Vincent's stated next direction is to return to PHW's principal page after documentation design, with an artistic target of **5.0.0 before the end of 2026**, signalling the direction for 2027. This is an objective to scope, not a guaranteed date, an issued version, a strict SemVer assertion, or a settled feature list. Decide the homepage experience and release criteria before implementation. No WebGL or other technology is selected by this statement.

Do not make optional documentation expansion a prerequisite for that return. Fix a genuine blocker where it matters, keep accepted tradeoffs visible, and carry the rest forward with evidence. The greeting should eventually benefit from the institution built to explain it.

## 6. Resolution log

No item is resolved by creating this ledger. For each resolution, record its ID, decision, exact commit, relevant checks, and any remaining scope. Review the ledger before changing the affected boundary; do not treat its initial ordering as a permanent roadmap.
