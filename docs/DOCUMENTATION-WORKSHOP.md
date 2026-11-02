# Documentation Workshop — How the Directorate Writes Its Own Manuals

[Documentation reception](README.md) · [Frontend field guide](FRONTEND-GUIDE.md) · [Operations](OPERATIONS.md)

## 1. Choose the kind of document

PHW keeps explanation, reference, operational instructions, historical records, and narrative chronicles distinct enough that each can be useful. The prose can remain extravagant. The reader should not need to decipher which sentences describe an implementation and which ones describe a committee that exists only for the joke.

| Reader need | Suitable source | Example |
| --- | --- | --- |
| Understand relationships and decisions | Authored explanatory Markdown | [Architecture](ARCHITECTURE.md) |
| Follow a mechanism | Prose with diagrams and source links | [Sound lifecycle](AUDIO-LIFECYCLE.md) |
| Inspect an interface contract | Source comment and generated reference | [useBeepEngine](generated/reference/features/audio-test/hooks/useBeepEngine.md) |
| Run and diagnose the project | Authored operating guide | [Operations](OPERATIONS.md) |
| Establish what a released version contained | Historical release record | [4.5.1](RELEASE-4.5.1.md) |
| Read the artistic and personal journey | Authorized narrative in the separate wiki | [Wiki reading guide](https://github.com/VincentMardon/professional-hello-world/wiki/Home) |

A new source comment is not a substitute for explaining the architecture. A witty wiki scene is not the only place an operator should learn how to run a check.

For a complete worked contribution path, use the [contribution tutorial](CONTRIBUTION-TUTORIAL.md). The [glossary](GLOSSARY.md) defines the working vocabulary; the [architecture decisions](ARCHITECTURE-DECISIONS.md) explain current tradeoffs and conditions for revisiting them.

## 2. Write from evidence

Identify the implementation being described. Inspect its actual callers and failure paths before explaining what it guarantees. When a claim depends on a run, give the exact commit and relevant result. Keep the distinctions visible: configured workflow, locally observed behavior, reported manual test, successful remote run, and public release.

Use English for project documentation. Keep personal context within Vincent's explicit publication permission. Direct the humor at inflated software ceremony rather than making personal difficulty a measure of output.

Explain the real behavior first, then let an imaginary department overreact to it. A sentence such as “Ready exposes an initialized interface” can coexist with a licensing hearing for that interface. The hearing must not imply that browser audio was actually heard.

## 3. Add authored content without duplicating the reader

Create prose under `docs`, link it from the reception or a relevant guide, and keep its source links relative to that file's location. This immediately makes the material available from the repository.

For application presentation, add an entry to `frontend/src/features/doc/data/documents.ts`, then place its identifier once in the appropriate group in `frontend/src/features/doc/data/documentNavigation.ts`. The shared generic route selects the ID, supplies metadata, and enumerates static paths. Do not create another page wrapper. Reuse the shared reader, navigation, theme, and diagram handling. These are application-code changes for Vincent to apply, not permission for the assistant to edit the program.

Keep the catalogue entry coherent: the source must exist, its slug must identify the intended public path, and its metadata must describe that document. Run `npm run docs:catalogue:check` to inspect catalogue declarations and complete, unique group membership. Readability from GitHub and readability from the application are separate checks.

The catalogue currently selects eleven authored guides and twelve generated reference pages. The reception remains explicit; the remaining paths share the catch-all route. No new renderer is required just to publish another guide. A registered source also enters the static search inventory when pages are generated.

## 4. Use diagrams to answer a question

A useful diagram has a specific purpose: order of asynchronous operations, flow of data, or responsibility boundaries. The lifecycle guide uses sequence diagrams for calls and a flowchart for sample data versus audio-node connections. An arrow should have a meaning the surrounding prose can explain.

Mermaid fences are rendered in the browser. Their sources remain available through disclosure. Include a useful title and accessible description where the syntax supports them, and retain prose that explains the mechanism without requiring the graphic.

Check syntax, then check meaning against source, then inspect real browser behavior. These are different activities. A parser accepting a block does not establish that the diagram truthfully depicts the program. A screenshot does not establish keyboard behavior or fullscreen error handling.

Do not add a diagram merely to fill whitespace in the future design. The Directorate can manufacture ceremony on demand; it should be more selective about arrows.

## 5. Maintain generated reference at its source

The expanded TypeDoc configuration selects eleven modules and produces twelve Markdown pages under docs/generated/reference. Change the source comment or generator configuration, then regenerate; never repair generated prose by hand.

From frontend, npm run docs:reference generates the selected reference. npm run docs:reference:check regenerates it and inspects Git status for the whole output directory, including staged changes, deletions, and untracked files. Intentional changes fail until committed. TypeDoc cleans this exclusively generated directory before writing it.

All generated pages are explicitly registered in the catalogue so relative module links can use reader routes. The old initialization-hook address is preserved. Source links follow main. `npm run docs:links:check` inspects local destinations and heading fragments targeting selected reader documents, using the same heading-ID rule as rendering. External targets are not fetched; image fragments, unselected targets, and browser fragment directives can be deferred. Read the [expanded reference record](EXPANDED-REFERENCE.md) for ownership, the archived pilot, and actual verification boundaries.

Run `npm run docs:reference:coverage` after generation to compare the twelve-page output with registered reference sources. It rejects an unregistered generated page, a registered source missing from output, and an empty inventory. It does not replace freshness, catalogue/navigation validation, or link inspection. Adding a TypeDoc entry point may produce several pages: review the actual output and register its intended reader destinations deliberately.

For an authored edit, the current individual checks are catalogue/navigation, reference generation/freshness, reference coverage, and local links/fragments. See [Operations](OPERATIONS.md) for their boundaries. Use `npm run docs:check` for the complete ordered documentation chain; it generates/checks freshness first, then catalogue/navigation, coverage, and links, stopping at the first failure. Individual commands remain available. Intentional generated changes still need review and committing before freshness can pass.

### Maintain heading destinations

Markdown headings receive deterministic reader IDs and permalink links. The contents disclosure exposes levels two and three. Use the rendered heading permalink when checking an address rather than guessing punctuation or duplicate numbering. Renaming a heading can break incoming links; update maintained references and run local-link inspection. Its success covers selected targets, not arbitrary anchors throughout GitHub.

The search index is rebuilt from registered Markdown during page generation, so authored prose changes can change search results without changing search code. Check a representative query and its destination when the text or heading structure changes.

## 6. Review by content type

| Content changed | Minimum useful review |
| --- | --- |
| Explanatory prose | Check factual claims, source links, terminology, and current-versus-proposed status |
| Newly selected reader document | Check source, catalogue identity, slug, metadata, group membership, search destination, direct reload, and export |
| Source reference | Regenerate, review extracted contracts, register generated pages, check coverage and links, then check freshness after committing intentional output |
| Diagram | Parse, compare with implementation, read fallback prose, inspect interaction in a browser |
| Release record | Verify exact tag target, release status and date, and the relevant CI run |
| Personal chronicle | Obtain the current authorized account and preserve its limits |

Tests and build checks remain useful for application changes. They do not replace editorial review. Conversely, a prose-only correction should not acquire a fictional new audio test merely because the minutes look more impressive with a laboratory attached.

## 7. Design needs representative material

Before reviewing the overall documentation design, assemble enough real content to expose its pressures: long paragraphs, tables, numbered procedures, code, diagrams, generated headings, and navigation among several subjects. Judge hierarchy, width, density, and movement using those real pages.

The new guides deliberately provide that breadth. This breadth supplies material for a later global design review. The Part VIII roadmap keeps the visual redesign reserved for Part IX. Functional obstacles can still be fixed immediately.

A routine guide or route alone does not trigger a documentation release under the current policy. Group coherent content work and reserve capability releases for actual reader or tooling behavior. Commit reviews and the authorized wiki ritual remain in place; reducing ceremony between edits does not silently transfer ownership of application commits.

The Directorate should eventually help the visitor understand PHW. If it can only explain its own appointment procedure, the workshop has more work to do.
