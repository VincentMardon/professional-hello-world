# The Directorate of Disproportionate Documentation

## Status and authority

**Planning document — October 20, 2026.** This charter proposes the documentation structure and teaching sequence requested by Vincent. It does not announce an implemented documentation route, renderer, generator, search engine, or documentation CI pipeline.

The Directorate has been commissioned to explain an institution whose principal entrance still says hello, while its audio annex dresses two noises for an international state reception. The explanation must be technically dependable and ceremonially excessive. The reader should leave understanding the machinery, even if the machinery has acquired a ministry during the explanation.

## Current checkpoint — October 22, 2026

The dated founding proposal above and its teaching sequence below preserve the starting mandate. Since then, the reader, navigation, shared theme switch, Mermaid diagram controls, TypeDoc pilot, and tracked-reference freshness gate have been implemented through stable 4.5.1. Statements below about selecting those initial mechanisms describe the planning stage rather than the present installation.

Vincent now prioritizes growing a representative body of content so the overall documentation design can be assessed. Group coherent content additions instead of stopping for a release decision after each routine page. Operations, frontend reading, and documentation authoring guides are authored in Markdown; their registry entries and route wrappers have been applied, and Vincent confirms the integrated guides work locally. Biome passes on 62 files; exact-commit remote verification remains pending. Existing code ownership, commit review, and wiki publication responsibilities are unchanged.

## 1. The mandate

Cover the current Professional Hello World repository: the greeting, the audio-test feature, shared utilities, styling, tests, static export, publication, dependencies, contribution practices, and release process. Explain the external BeepEngine package at its integration boundary; do not present its separately maintained Rust source as application source in this repository.

Documentation remains readable from the repository. Its proposed web presentation belongs to the existing frontend, with a thin route under `frontend/src/app/doc/` and feature implementation under `frontend/src/features/doc/`, following the audio-test organization.

The work proceeds in small, inspectable increments. The assistant writes English prose documentation directly. Vincent applies proposed application code, dependency, configuration, and workflow changes and executes application commits. This charter does not change those responsibilities.

## 2. Evidence at the starting point

The inspected repository contains:

- A Next.js App Router frontend with React, TypeScript, and Vanilla Extract.
- A greeting route composed from small components, with DOM tests.
- An audio-test route composing a header and a client-side access component.
- Feature-local audio components, three hooks, a sound type, fonts, material styles, and color definitions.
- An initialization hook, a settings/playback hook, and a picker-animation hook with distinct responsibilities.
- A vendored BeepEngine 0.1.2 package consumed by the frontend.
- CI running dependency installation, Biome checks, type checking, Vitest, and static production build; a reusable workflow deploys the resulting Pages artifact.
- Existing README, contribution guidance, architecture, changelog, release documents, administrative correspondence, and historical material.

The inspected Next.js configuration uses static export, the `/professional-hello-world` base path, and trailing slashes. Build output belongs in `frontend/out`; it is not authored application source. There is currently no `doc` route or documentation feature in the inspected source tree.

This inventory is based on reading files. No application build, test run, browser verification, or public deployment verification was performed for this planning step.

## 3. Sources, presentation, and generated output

| Location | Intended responsibility | Status |
| --- | --- | --- |
| `docs/` | Repository-readable Markdown, including the existing documents | Exists; proposed home for new explanatory content |
| `frontend/src/app/doc/` | Route composition and route-level concerns | Proposed; no files created |
| `frontend/src/features/doc/` | Documentation presentation, navigation, rendering, and later justified behavior | Proposed; no files created |
| `frontend/out/` | Generated static website, including documentation pages once implemented | Existing export destination; documentation not yet implemented |
| Separate wiki repository | Narrative history and commissioned chronicles | Existing; not the technical documentation source |

Author content once, then provide repository and website reading paths. How Markdown is loaded, how reference pages are generated, and how source links resolve must be decided before implementation. Do not duplicate the prose manually into React components or import private planning material through a broad filesystem scan.

The expression “generated documentation” covers two different operations: extracting reference material from code, and rendering source documents into a website. Each needs an explicit input, output location, and build step. Neither requires writing generated application source into `src/` by default.

## 4. Proposed public departments

These are proposed subject areas, not folders already created or promises that every page is immediately necessary. Practical subtitles remain visible alongside ceremonial names.

| Department | Practical scope | First useful subjects |
| --- | --- | --- |
| Reception of the Unreasonably Prepared Visitor | Overview and orientation | Purpose, current capabilities, repository map, reader routes, glossary |
| Academy of the First Authorized Greeting | Tutorials | Local setup, first run, first small contribution |
| Bureau of Precisely Requested Operations | Task guides | Run checks, diagnose a failed initialization, prepare a release |
| Directorate of Structural Disproportion | Architecture and explanations | Greeting composition, audio boundaries, state, sample playback, static export |
| Registry of Decisions That Could Have Been Smaller | Decision records | New significant choices, alternatives, consequences, and status |
| General Inventory of Callable Authorities | Technical reference | Components, hooks, types, shared helpers, package integration, configuration |
| Conservatory of Gold, Glass, and Two Sounds | Design system | Primitive and semantic colors, materials, typography, responsive behavior, interaction and accessibility |
| Inspectorate of Claims and Their Actual Evidence | Quality | Test boundaries, mocks, manual checks, known gaps, verification dates |
| Office of Public Departure and Orderly Return | Delivery and operations | CI, Pages artifact handoff, base path, deployment diagnosis, release procedure |
| Commission for Doors That Are Mostly Decorative | Security and dependencies | Client-side gate limits, browser trust boundary, vendored package provenance, updates |
| Secretariat of Future Authorized Complication | Contribution and evolution | Collaboration rules, proposals, compatibility, deprecation, documentary maintenance |

Historical material and issued correspondence keep their existing identities. The personal recovery account remains in its established addendum, with only brief contextual links where appropriate. Reserved local research is excluded from public content selection. No existing document is moved or rewritten as part of this charter.

## 5. Editorial constitution

The Directorate permits long explanations. It refuses unexplained length.

Every substantial technical page should establish its reader, practical question, scope, and present status early. Its body may then develop the mechanics in depth, with examples, diagrams, tradeoffs, limitations, and carefully framed institutional absurdity. Finish with useful related reading when it exists.

- Keep the underlying facts precise. An imaginary certificate cannot establish a passing test or an implemented feature.
- Use ceremonial titles with plain-language subtitles so navigation remains usable.
- Explain the purpose and collaboration of a component or hook rather than merely translating its filename into a sentence.
- Distinguish current behavior, a proposed direction, and historical behavior.
- Include evidence and verification limits where the claim needs them; avoid invented “last verified” dates.
- Use one clear satirical frame rather than repeatedly interrupting every paragraph with fiction disclaimers.
- Preserve enough direct explanation for a reader unfamiliar with PHW's chronicles.
- Keep reference pages predictable; give expansive reasoning its own explanation pages.

Automatically extracted comments can describe an interface, but architecture and decision reasoning require authored explanations. No tool is selected by this document. Comment conventions and extraction coverage will be discussed using a real existing symbol before expanding across the repository.

Mermaid diagrams are an intended capability, not yet an installed renderer. Each diagram should answer a stated question, use terminology consistent with the text, and retain a textual explanation for readers who cannot view it.

## 6. Small steps through a large institution

| Step | Concrete deliverable | What Vincent can inspect or learn |
| --- | --- | --- |
| 1 — Establish the mandate | This charter and a repository-grounded subject map | Content sources versus route code versus generated website |
| 2 — Admit one reader | One substantial overview page in Markdown, with source links | How a complete PHW documentation page is written and read on GitHub |
| 3 — Open one web room | Proposed minimal `/doc` route and feature composition displaying that first content | How repository content reaches the existing static application |
| 4 — Add the corridor | A second page and explicit navigation | How document identity, links, base path, and static routes fit together |
| 5 — Explain one mechanism | An authored audio lifecycle explanation and a Mermaid sequence | How prose and diagrams complement each other; rendering tradeoffs |
| 6 — Register one interface | A small generated reference pilot using an existing hook or type | What extraction produces, what comments must supply, and what remains handwritten |
| 7 — Establish inspection | Proposed documentation checks in the existing CI | Which failures can be detected automatically and which require human review |
| 8 — Extend by department | Expand the verified subject areas incrementally | How the same conventions scale without losing traceability |

At each step, explain the change, the files affected, the expected visible result, and the evidence actually checked. Keep the next implementation slice small even when the overall editorial ambition is enormous. Search, multiple published versions, advanced indexing, and elaborate navigation can be considered when their purpose and costs are understood.

The sequence can be adjusted together. It is a teaching route, not an order to build every proposed department before a single useful page can be read.

## 7. Decisions still to make

Before the first rendering implementation, settle the Markdown-to-page approach, document routing, public content selection, and the expected relationship between repository links and web links. Before extraction, settle the reference tooling, authored-comment conventions, and the public API surface to document. Before Mermaid rendering, settle build-time versus browser rendering and its implications for the static export.

The Directorate has opened the project. It has not mistaken this opening for the construction of its entire headquarters.

## 8. Design review deferred until the essential content exists

On October 21, 2026, Vincent notes that the documentation design needs further consideration but deliberately defers that work until the essential documentation is built. The broader view should inform what changes, whether it needs to change, and how. Continue content and essential capability work without treating the current presentation as a final visual approval or opening a redesign now. Concrete functional defects can still be addressed when they obstruct use.

## Next discussion — the nature of 4.6

Vincent chooses one content commit and its wiki account for the three-guide expansion, without a new release. The next conversation will define the nature and scope of version 4.6. No 4.6 capability is agreed or implemented by this statement. Design remains deferred until later; growing representative content does not itself open a redesign.

## Proposed 4.6 roadmap — October 22, 2026

The [4.6 roadmap proposal](DOCUMENTATION-4.6-ROADMAP.md) separates catalogue-driven static routing, systematic declaration validation, and local link inspection into potential capability milestones. It remains a discussion document; no implementation or release is announced. Design remains deferred.
