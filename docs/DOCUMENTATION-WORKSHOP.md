# Documentation Workshop — How the Directorate Writes Its Own Manuals

[Documentation reception](README.md) · [Frontend field guide](FRONTEND-GUIDE.md) · [Operations](OPERATIONS.md)

## 1. Choose the kind of document

PHW keeps explanation, reference, operational instructions, historical records, and narrative chronicles distinct enough that each can be useful. The prose can remain extravagant. The reader should not need to decipher which sentences describe an implementation and which ones describe a committee that exists only for the joke.

| Reader need | Suitable source | Example |
| --- | --- | --- |
| Understand relationships and decisions | Authored explanatory Markdown | [Architecture](ARCHITECTURE.md) |
| Follow a mechanism | Prose with diagrams and source links | [Sound lifecycle](AUDIO-LIFECYCLE.md) |
| Inspect an interface contract | Source comment and generated reference | [useBeepEngine](generated/api-pilot/README.md) |
| Run and diagnose the project | Authored operating guide | [Operations](OPERATIONS.md) |
| Establish what a released version contained | Historical release record | [4.5.1](RELEASE-4.5.1.md) |
| Read the artistic and personal journey | Authorized narrative in the separate wiki | [Wiki reading guide](https://github.com/VincentMardon/professional-hello-world/wiki/Home) |

A new source comment is not a substitute for explaining the architecture. A witty wiki scene is not the only place an operator should learn how to run a check.

## 2. Write from evidence

Identify the implementation being described. Inspect its actual callers and failure paths before explaining what it guarantees. When a claim depends on a run, give the exact commit and relevant result. Keep the distinctions visible: configured workflow, locally observed behavior, reported manual test, successful remote run, and public release.

Use English for project documentation. Keep personal context within Vincent's explicit publication permission. Direct the humor at inflated software ceremony rather than making personal difficulty a measure of output.

Explain the real behavior first, then let an imaginary department overreact to it. A sentence such as “Ready exposes an initialized interface” can coexist with a licensing hearing for that interface. The hearing must not imply that browser audio was actually heard.

## 3. Add authored content without duplicating the reader

Create prose under `docs`, link it from the reception or a relevant guide, and keep its source links relative to that file's location. This immediately makes the material available from the repository.

For application presentation, add a document registry entry and a thin route wrapper selecting its ID. Reuse the shared reader, navigation, theme, and diagram handling. These are application-code changes for Vincent to apply, not permission for the assistant to edit the program.

Keep the registry and route in agreement. A registry entry with no route produces a destination that readers cannot visit; a route with an unknown ID does not select a valid document. Readability from GitHub and readability from the application are separate checks.

This workshop and the operations and frontend guides now have authored Markdown, registry entries, and route wrappers. Source inspection confirms the integration; Vincent confirms the integrated content works locally, while exact-commit remote verification remains pending. No new renderer is required just to publish another guide.

## 4. Use diagrams to answer a question

A useful diagram has a specific purpose: order of asynchronous operations, flow of data, or responsibility boundaries. The lifecycle guide uses sequence diagrams for calls and a flowchart for sample data versus audio-node connections. An arrow should have a meaning the surrounding prose can explain.

Mermaid fences are rendered in the browser. Their sources remain available through disclosure. Include a useful title and accessible description where the syntax supports them, and retain prose that explains the mechanism without requiring the graphic.

Check syntax, then check meaning against source, then inspect real browser behavior. These are different activities. A parser accepting a block does not establish that the diagram truthfully depicts the program. A screenshot does not establish keyboard behavior or fullscreen error handling.

Do not add a diagram merely to fill whitespace in the future design. The Directorate can manufacture ceremony on demand; it should be more selective about arrows.

## 5. Maintain generated reference at its source

The TypeDoc pilot selects one hook and writes its Markdown into `docs/generated/api-pilot`. Change the source comment or generator configuration, then regenerate. Do not repair generated prose by hand and leave the generator ready to overwrite the correction.

From `frontend`, `npm run docs:reference` generates the reference. `npm run docs:reference:check` generates it and compares the tracked README with HEAD. A difference is expected while an intentional source-and-reference change is waiting for a commit. CI checks the committed state before building.

That check does not cover arbitrary new output. Expanding the TypeDoc entry points or changing the output layout therefore requires reviewing reference routing, relative links, and freshness coverage together. Do not mistake a larger generator configuration for a completed publication strategy.

Read the [pilot record](REFERENCE-GENERATION.md) for the precise installed boundary, including moving `main` source links and the absence of obsolete-file cleanup.

## 6. Review by content type

| Content changed | Minimum useful review |
| --- | --- |
| Explanatory prose | Check factual claims, source links, terminology, and current-versus-proposed status |
| New web route | Check registry ID, import, metadata, navigation, direct access, and export |
| Source reference | Regenerate, review extracted contract and source link, then check committed freshness |
| Diagram | Parse, compare with implementation, read fallback prose, inspect interaction in a browser |
| Release record | Verify exact tag target, release status and date, and the relevant CI run |
| Personal chronicle | Obtain the current authorized account and preserve its limits |

Tests and build checks remain useful for application changes. They do not replace editorial review. Conversely, a prose-only correction should not acquire a fictional new audio test merely because the minutes look more impressive with a laboratory attached.

## 7. Design needs representative material

Before reviewing the overall documentation design, assemble enough real content to expose its pressures: long paragraphs, tables, numbered procedures, code, diagrams, generated headings, and navigation among several subjects. Judge hierarchy, width, density, and movement using those real pages.

The new guides deliberately provide that breadth. This breadth supplies material for a later global design review. Vincent explicitly keeps design deferred and chooses to discuss the nature of version 4.6 after committing this content lot and its wiki account. Functional obstacles can still be fixed immediately.

A routine guide or route alone does not trigger a documentation release under the current policy. Group coherent content work and reserve capability releases for actual reader or tooling behavior. Commit reviews and the authorized wiki ritual remain in place; reducing ceremony between edits does not silently transfer ownership of application commits.

The Directorate should eventually help the visitor understand PHW. If it can only explain its own appointment procedure, the workshop has more work to do.
