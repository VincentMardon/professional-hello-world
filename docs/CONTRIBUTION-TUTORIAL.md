# Contribution Tutorial — Give One Explanation a Complete Address

[Reception](README.md) · [Workshop](DOCUMENTATION-WORKSHOP.md) · [Glossary](GLOSSARY.md) · [Architecture decisions](ARCHITECTURE-DECISIONS.md)

## 1. The exercise and its stopping point

This tutorial follows one authored guide from a repository file to a selected, searchable reader page. The example is a hypothetical `EXAMPLE-GUIDE.md`, internal identifier `exampleGuide`, and public slug `example-guide`. These names are teaching examples, not declarations that an example route is installed. Do not add an empty demonstration page merely to satisfy the tutorial.

The exercise is complete when a real explanation has an existing source, coherent metadata, one navigation-group assignment, a directly reloadable exported route, and working search and heading destinations. A new Markdown page using existing machinery is content work, not automatically a release.

During Vincent's collaboration with the assistant, the assistant may write prose directly. Vincent applies catalogue, navigation, configuration, and other code changes himself, and reviews and executes main-repository commits. Those ownership rules remain in force throughout this exercise.

The Directorate accepts modest contributions. It merely insists that they arrive with an address rather than wandering through the corridors holding a filename.

## 2. Start with an actual reader question

Choose a question the existing guides do not already answer adequately. If one paragraph in an existing page answers it, edit that page instead of opening a new department. Use the [frontend guide](FRONTEND-GUIDE.md) to find the responsible code and inspect its callers and failure behavior before explaining a guarantee.

For example, a useful explanation might distinguish an audio initialization result from audible playback. A less useful explanation would announce that all browser audio is verified because a mocked test passed.

Write English prose with a clear title, a short statement of purpose, and headings that reflect reader tasks. Keep fictional ceremony recognizable and factual behavior precise. Link to maintained source rather than copying its entire implementation. Use the [glossary](GLOSSARY.md) for shared terms and the [decisions](ARCHITECTURE-DECISIONS.md) for current tradeoffs.

## 3. Create the source before its declaration

Place the real guide under `docs`. Keep links relative to its own location: a root-level guide can link to `ARCHITECTURE.md` or `../frontend/src/app/page.tsx`. A nested source requires different relative paths.

At this point the document is repository-readable. It is not automatically a reader route or part of search. A repository link does not become confidential because it is omitted from the catalogue.

Do not place authored text in `docs/generated/reference`: TypeDoc owns and cleans that directory. A useful source comment belongs beside the actual code; generated reference changes at its source and is regenerated rather than edited manually.

## 4. Declare the reader identity

In [documents.ts](../frontend/src/features/doc/data/documents.ts), add the real entry to the `documents` object. The following illustrates the shape; replace the example with the actual document and do not paste placeholders into production metadata.

```ts
exampleGuide: {
  title: "Example guide",
  metadataTitle: "Example Guide — Professional Hello World",
  description: "Explain the actual mechanism covered by this guide.",
  file: "EXAMPLE-GUIDE.md",
  slug: ["example-guide"],
},
```

The object key is the internal document identifier. `file` is relative to `docs`. `slug` describes segments beneath `/doc`, without the deployment base path. Navigation title, browser metadata title, source filename, and public slug serve different purposes and need not be identical.

The empty slug is reserved for reception under the catalogue rules. A normal guide receives a unique valid path. Do not create a separate `page.tsx`: the existing catch-all route enumerates selected paths and supplies metadata from this declaration.

## 5. Assign exactly one reading group

Add the new internal identifier once to the appropriate ordered `documents` array in [documentNavigation.ts](../frontend/src/features/doc/data/documentNavigation.ts). For an authored explanation, this will usually be Guides. Its position determines its previous/next neighbors.

Catalogue declaration order does not determine editorial reading order. Groups do not create new routes. Their first existing document acts as the landing page, and pagination stops at group boundaries.

Link the new guide from reception or a relevant existing guide so the reader can discover its purpose as well as its title. A complete registry does not replace an editorial introduction.

## 6. Run the inspections and understand their refusals

Run frontend commands from `frontend`. Generate reference if necessary before inspecting inventory-dependent output. For the current individual workflow:

```sh
npm run docs:reference
npm run docs:catalogue:check
npm run docs:reference:coverage
npm run docs:links:check
npm run typecheck
```

These commands write generated reference or Next route types where stated; review their output and the resulting diff. A catalogue edit can change extracted reference because the catalogue module is a selected TypeDoc entry point. Do not hand-edit that generated account to conceal the change.

| Refusal | What to examine |
| --- | --- |
| Missing source | The declared path relative to `docs`, including spelling and case |
| Duplicate public route | Both catalogue owners named by the diagnostic |
| Missing or duplicate navigation assignment | The identifier and all group arrays |
| Generated page without a declaration | Actual TypeDoc output versus intended catalogue reference sources |
| Missing heading fragment | The target's rendered heading identifier and the maintained link |
| Type error after changing routes | The declaration, consumers, and refreshed Next route types |

The commands have separate jurisdictions. Link inspection does not fetch external pages; deferred fragments are not verified fragments. Coverage compares inventories, not test execution. Use `npm run docs:check` for the consolidated workflow once intentional generated changes have been committed. It regenerates/checks freshness before catalogue/navigation, coverage, and links, so it deliberately stops early while reviewed generated changes remain uncommitted. The individual sequence above lets contributors inspect those changes before that boundary is satisfied.

## 7. Read the page and follow its search result

Start the development server with `npm run dev`, then open the new path under the configured `/professional-hello-world` base path. With the example slug and usual port, that would be `http://localhost:3000/professional-hello-world/doc/example-guide/` after the example had actually been implemented.

Check the title, prose, tables or diagrams where relevant, current-page navigation, group-local neighbors, and direct reload. Open **On this page** and follow a section. Copy a heading permalink and confirm its destination. Do not infer heading IDs from visible punctuation when the rendered link can provide the actual address.

Use **Search documentation**, not the browser's Ctrl+F finder, to search for a distinctive phrase in the new source. Follow the corresponding result to its document or heading. The browser finder establishes that text is on the current page; the integrated search tests the generated index and destination.

Search is built from selected sources during page rendering. In a deployed static site, saving Markdown alone does not refresh the exported index. A new build and deployment supply the updated content. Query text is matched locally and is not persisted in the URL.

Finally, run `npm run build` to verify the static export. Relevant automated tests remain required for behavior changes; a prose contribution does not require inventing a new test that merely repeats its wording.

## 8. Review generated changes before the freshness certificate

Run `npm run docs:reference:check` to regenerate and compare the owned reference tree with Git. Intentional generated additions, changes, or deletions fail while uncommitted, including when staged. That is an expected review boundary, not a reason to remove the check.

Inspect the source and generated diffs together. Vincent commits the intended changes with the next verified project sequence number using the full [contribution message format](../CONTRIBUTING.md). After the intended reference output is committed, run freshness again; an unexplained remaining difference needs investigation before publication. Do not discard unrelated work to make it pass.

A prose edit to an existing selected guide need not change generated reference at all. Verify actual output rather than assuming every contribution requires a generated diff.

## 9. Publish the change without manufacturing a release

Vincent pushes the reviewed commit. Verify that exact commit's CI and Pages deployment rather than borrowing an earlier green result. A successful Pages deployment updates the website; it does not create an annotated version tag or GitHub release.

The assistant then chronicles the published main-repository commit in the separate wiki under the standing technical direction. Wiki maintenance is delegated separately and does not recursively create another application chronicle.

A new guide or routine registration alone does not trigger a documentation capability release. If the work actually changes the reader or tooling, use the [release process](RELEASE-PROCESS.md) and describe that capability accurately.

The final deliverable is one explanation a successor can find, read, and maintain. The number of forms involved remains an artistic matter.
