# Architecture Decisions — The Office of Recorded Tradeoffs

[Reception](README.md) · [Architecture](ARCHITECTURE.md) · [Contribution tutorial](CONTRIBUTION-TUTORIAL.md) · [Glossary](GLOSSARY.md)

## 1. Status and scope of this record

**Retrospective implementation record — November 2, 2026.** These entries describe choices visible in the inspected repository. Their rationale is a present-day explanation of the tradeoffs, not a claim that a formal historical architecture meeting recorded these exact arguments when the code was written. Alternatives are analytical comparisons, not claims of discarded prototypes.

Each entry identifies current behavior, useful consequences, costs, and reasons to revisit it. A future proposal needs its own status and evidence; editing this page alone does not change implementation. Historical release notes retain their issued facts.

The Office has permission to explain a decision. It has not acquired permission to rewrite the past so that every import appears to have originated in a unanimous committee vote.

## 2. ADR-001 — Keep maintained Markdown and select its reader surface explicitly

**Status:** implemented; recorded retrospectively.

**Context:** explanations should remain readable from the repository while selected material also appears in the application. Release records and planning files share the documentation directory without all being reader destinations.

**Current decision:** maintained Markdown supplies content. The [catalogue](../frontend/src/features/doc/data/documents.ts) selects source files, IDs, metadata, and slug segments. Reception uses an explicit route; other selected destinations share the [catch-all route](../frontend/src/app/doc/%5B...slug%5D/page.tsx). Navigation groups are declared separately.

**Consequences:** the same source supports repository and reader contexts, and another selected guide requires declarations rather than another page wrapper. Group order can express an editorial reading sequence independently of catalogue order or URL nesting. Relative destinations require deliberate adaptation between reader and repository contexts.

**Costs:** maintainers must keep source paths, metadata, slugs, and navigation membership coherent. Selection is not secrecy: public repository material remains public without a reader route.

**Alternative considered analytically:** automatic publication of every Markdown file would reduce registration work but erase this explicit selection boundary. Handwritten wrappers would retain route-level flexibility while repeating shared composition.

**Revisit when:** documents require substantially different rendering contracts, a new content source, or access control enforced beyond the current static application.

## 3. ADR-002 — Export static pages and keep browser interaction at its actual boundary

**Status:** implemented; recorded retrospectively.

**Context:** the public greeting, audio annex, and documentation reader share a Next.js application deployed to GitHub Pages.

**Current decision:** [Next configuration](../frontend/next.config.ts) uses static export, a deployment base path, and trailing slashes. Build-time rendering reads selected Markdown. Browser components handle theme interaction, audio requests, diagram controls, and search matching. CI hands the built artifact to the reusable Pages deployment workflow.

**Consequences:** the deployed application does not require a persistent application server or runtime filesystem reader. A Server Component can participate in construction without implying a server process on Pages. Client behavior still requires JavaScript and relevant browser APIs.

**Costs:** published content and search inventory refresh through a new export and deployment. The client-side audio access ceremony cannot become server authorization through stronger wording or a more elaborate password derivation.

**Alternative considered analytically:** a server deployment could support per-request data or trusted authorization, with different hosting, operational, and trust responsibilities.

**Revisit when:** requirements actually include private content, accounts, per-request server data, or another capability that static publication cannot supply.

## 4. ADR-003 — Extract selected contracts and inspect reference in separate stages

**Status:** implemented; recorded retrospectively.

**Context:** source signatures benefit from explanations beside implementation, but exporting every module would broaden reader ownership and maintenance obligations.

**Current decision:** [TypeDoc selection](../frontend/typedoc.reference.json) explicitly names modules and owns the cleaned `docs/generated/reference` tree. Source comments supply contract meaning. Separate checks inspect catalogue/navigation, generated freshness, reference coverage, and local links/fragments.

**Consequences:** generated reference is reviewed output rather than a second manually edited source. Freshness catches uncommitted output changes; coverage catches generated pages without declarations and declared reference sources without output. Link inspection adds local destination and supported fragment checks without pretending to fetch external sites.

**Costs:** new TypeDoc output needs deliberate registration. Intentional generated changes fail freshness until committed, including when staged. A successful check establishes its own scope, not factual correctness of every sentence. The build's prebuild generation can repeat earlier extraction.

**Alternative considered analytically:** broad automatic extraction reduces selection effort but can overwhelm the reader and expose poorly explained internal contracts. Untracked generated output would avoid committed freshness review but remove the current repository-readable reference record.

**Revisit when:** the selected API surface or output volume changes enough to justify another publication model. The consolidated `docs:check` command orchestrates these existing inspections; it does not replace their algorithms or weaken freshness.

## 5. ADR-004 — Share heading addresses across reader mechanisms

**Status:** implemented; recorded retrospectively.

**Context:** rendered headings, contents links, search destinations, and fragment inspection must agree on the same address. Separate ad hoc slug rules would create links that look plausible but fail at their destination.

**Current decision:** [documentHeadings](../frontend/src/features/doc/markdown/documentHeadings.ts) indexes Markdown headings using a per-document slugger. Duplicate tracking and empty-slug fallback belong to that shared rule. Rendering, contents, search extraction, and fragment inspection consume it.

**Consequences:** those mechanisms agree without each maintaining its own punctuation and duplicate-numbering policy. The contents list exposes levels two and three while search can use section headings beyond that subset.

**Costs:** determinism is not permanence. Renaming headings or reordering duplicates can change IDs and break existing incoming fragments. Raw HTML headings are not part of this Markdown index. Supported local fragment inspection does not validate every external anchor.

**Alternative considered analytically:** explicit stable authored IDs could preserve selected addresses but would require an authoring convention and corresponding renderer and inspection support.

**Revisit when:** public address stability needs stronger guarantees than the present heading-derived rule provides. Do not claim explicit-ID support before implementation.

## 6. ADR-005 — Build a selected-source index and match locally

**Status:** implemented; recorded retrospectively.

**Context:** readers need to find explanations across selected guides and generated reference without depending on an external search service.

**Current decision:** the [loader](../frontend/src/features/doc/search/loadSearchIndex.ts) reads selected sources during rendering. Section extraction and index building supply serializable entries; the client matcher applies literal substring rules and weighted ranking. The interface reveals batches of twenty results. The full index is embedded in each reader page and rebuilt by each loader invocation without a loader cache.

**Consequences:** query matching does not require a runtime search API. The shared heading rule supplies result destinations. Extraction, ranking, and interaction are independently inspectable. Repository-only documents and the separate wiki are outside the selected inventory.

**Costs:** more selected content increases repeated page payload and index-construction work. The matcher scans supplied entries on each invocation. Repeated document metadata can make several sections of one page match. Excerpts are not match-centered, and query state is not persisted in the URL. Hidden result batches do not withhold index data from the browser.

**Alternative considered analytically:** a separately loaded index or search service could alter payload and performance tradeoffs but would introduce new loading, deployment, failure, or service responsibilities.

**Revisit when:** measured build or reader costs justify a different design, or a concrete need calls for fuzzy search, highlighting, persistence, or a broader corpus. No such extension is installed by this record.

## 7. How to revise a decision

Identify the changed requirement, inspect the affected code and callers, describe alternatives and measurable consequences, and propose implementation separately. Preserve historical release facts. Once a replacement is implemented and verified, mark the old decision superseded and point to its successor rather than silently erasing why the earlier implementation existed.

The Office's preferred outcome is a maintainer who can explain the tradeoff. A larger count of numbered records is not, by itself, an architectural improvement.
