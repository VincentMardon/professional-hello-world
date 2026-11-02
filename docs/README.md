# Welcome to the Directorate of Disproportionate Documentation

## Reception — What has actually been built here?

Professional Hello World is an artistic and technical learning project that grants an extremely small program an unreasonable amount of attention. Its public greeting says **Professional "Hello, World!"**, followed by *Coming soon ...*. Its audio annex offers two generated sounds inside a carefully furnished listening room. Both belong to the same project. Their ratio of machinery to immediate output is intentional.

The Directorate exists to make that machinery understandable. Visitors are entitled to learn what the project does, contributors need to know where behavior lives, and maintainers should be able to explain a decision without excavating every preceding ceremony. The paperwork is extravagant. The underlying explanations must earn their space.

**Current implementation — November 2, 2026:** twenty selected documents share the reader: eight authored guides and twelve generated reference pages. Catalogue-driven static routes, grouped navigation, breadcrumbs, group-local previous/next links, heading permalinks, an on-page contents list, static section search, the theme switch, and Mermaid zoom/fitting/fullscreen are implemented. [4.9.1](RELEASE-4.9.1.md) is the latest verified stable release and adds generated-reference coverage inspection. Historical release notes preserve their own publication evidence.

**Reading model:** the catalogue selects sources and metadata; a separate navigation declaration assigns every selected document to one reading group. Reception uses its explicit route, while the remaining selected paths use one static catch-all route. Adding a guide does not require another page wrapper. The visual redesign remains reserved for Part IX.

## 1. Choose your counter

Continue with the [Directorate of Structural Disproportion — architecture](ARCHITECTURE.md) to examine the responsibilities and boundaries behind the rooms.

| Your immediate question | Read next |
| --- | --- |
| What is this project, and how do I run it? | [Project README](../README.md#getting-started) |
| How is the application organized? | [Architecture](ARCHITECTURE.md) and the repository map below |
| How do I run, check, diagnose, and publish the application? | [Operations](OPERATIONS.md) |
| How do I find a responsibility in the frontend? | [Frontend field guide](FRONTEND-GUIDE.md) |
| How do I write, generate, and publish documentation? | [Documentation workshop](DOCUMENTATION-WORKSHOP.md) |
| What happens between pressing Play and browser output? | [Sound lifecycle](AUDIO-LIFECYCLE.md) |
| Which technical contracts are extracted from source? | [Generated reference index](generated/reference/README.md) and [initialization hook](generated/reference/features/audio-test/hooks/useBeepEngine.md) |
| What does the access form actually protect? | [Trust boundaries](TRUST-BOUNDARIES.md) |
| Which machinery belongs to PHW and which comes from packages? | [Dependencies](DEPENDENCIES.md) |
| How should I contribute? | [Contribution process](../CONTRIBUTING.md) |
| What changed in the latest verified milestone? | [4.9.1 release notes](RELEASE-4.9.1.md) and [changelog](../CHANGELOG.md) |
| How does work become a release? | [Release process](RELEASE-PROCESS.md) |
| What documentation are we building? | [Documentation charter](DOCUMENTATION-CHARTER.md) |
| Where is the historical institutional spectacle? | [The separate project wiki](https://github.com/VincentMardon/professional-hello-world/wiki) |

These routes lead to existing material. The Directorate has declined to populate its reception desk with links to imaginary finished departments.

## 2. One greeting, one unusually furnished annex

### The greeting

The main page is a small composition: a greeting component, a decorative spacer, and a coming-soon component. The layout and styles give those elements their presentation. This separation makes composition, semantic markup, and visual rules independently inspectable, even when their combined responsibility remains two short lines of text.

Start with [the homepage composition](../frontend/src/app/page.tsx), then examine [its components](../frontend/src/components) and [its stylesheet](../frontend/src/app/page.css.ts). The [shared application layout](../frontend/src/app/layout.tsx) establishes document-level concerns.

### The audio annex

The [audio-test page](../frontend/src/app/audio-test/page.tsx) composes a persistent header and an access component. After acceptance, the access component mounts the listening panel. Its password ceremony is client-side presentation on a static site; it is not server-enforced authentication and must not be described as protection for confidential resources.

Inside the [audio feature](../frontend/src/features/audio-test), components organize settings, playback, volume, status, and visual presentation. Hooks separate engine initialization, audio interaction, and picker-animation tracking. Feature-local styles supply typography, colors, glass-like surfaces, and Art Deco ornamentation. The furnishings are considerably more ambitious than the repertoire.

PHW consumes a vendored BeepEngine 0.1.2 package. The independently developed engine supplies Rust-generated WebAssembly and browser integration. PHW's responsibility here is consuming the package and presenting the interaction, not pretending that the external Rust project resides inside this repository.

## 3. A guided tour of the machinery

| Location | Responsibility | What to look for |
| --- | --- | --- |
| [`frontend/src/app/`](../frontend/src/app) | Application routes and page composition | How a URL reaches a composed view |
| [`frontend/src/components/`](../frontend/src/components) | Greeting and spacer components | Small semantic building blocks |
| [`frontend/src/features/audio-test/`](../frontend/src/features/audio-test) | Audio-test behavior and presentation | Components, hooks, feature styles, and sound types |
| [`frontend/src/shared/`](../frontend/src/shared) | Shared application behavior | Theme context and error-message conversion |
| [`frontend/vendor/`](../frontend/vendor) | Vendored dependency archives | The package consumed by the frontend, distinct from its upstream source |
| [`frontend/public/`](../frontend/public) | Static public assets | Material copied into the site export |
| [`.github/workflows/`](../.github/workflows) | Verification and deployment automation | CI followed by publication of its built artifact |
| [`docs/`](.) | Technical explanations, plans, and historical documents | Status notices distinguishing implemented behavior from proposals |
| [`records/`](../records/README.md) | Issued administrative correspondence | Preserved satirical records with their own presentation rules |

The `frontend/src/app/doc/` and `frontend/src/features/doc/` directories follow the route/feature separation already used by the audio annex. Routes delegate to the shared asynchronous reader. Relative links to selected documents become reader destinations; other relative source links use GitHub fallbacks. Generated website output belongs in `frontend/out/` under the current export configuration.

## 4. Follow a sound through the institution

Read the [Bureau of Audible Transit — sound lifecycle](AUDIO-LIFECYCLE.md) for the detailed sequence, package boundary, completion semantics, and test limits. The Markdown is available in the repository and registered at `/doc/audio-lifecycle` in the documentation navigation.

The audio interaction has several distinguishable stages.

1. The page presents its header and access ceremony. The panel is mounted after acceptance.
2. The panel's audio logic invokes an initialization hook. That hook requests a BeepEngine instance asynchronously and maintains a loading, ready, or failure message. Its cleanup prevents a later completion from updating the state of an abandoned hook instance; it does not establish cancellation or disposal of the external engine.
3. The interaction hook maintains the selected sound, sample rate, and volume. Its initial choices are startup beep, 48,000 Hz, and 100 percent.
4. A volume change updates React state and, when an engine is present, converts the percentage to the engine's normalized volume scale.
5. Playback applies the current volume and calls the selected generator through the engine interface. Success updates the status to report that playback started; failure produces a readable error message. This status is not a measurement proving that a listener heard the output.

The relevant starting points are [useBeepEngine](../frontend/src/features/audio-test/hooks/useBeepEngine.ts), [useAudioTest](../frontend/src/features/audio-test/hooks/useAudioTest.ts), and [errorMessage](../frontend/src/shared/errors/errorMessage.ts). The [sound-lifecycle guide](AUDIO-LIFECYCLE.md) supplies the detailed explanation and diagrams, including rejection paths and the distinction between data and audio connections.

The distinction between these responsibilities matters more than the number of files. It lets us ask separate questions about loading, state, playback, rendering, and styling instead of granting one component permanent custody of every possible concern.

## 5. What the inspections can establish

The repository contains homepage, audio-page, documentation navigation, search, heading, and validation tests. The homepage suite renders the real greeting composition. The audio suite mocks the engine and replaces the access component with the panel, concentrating on integration behavior. Those boundaries matter: they do not independently verify audible sound or password acceptance and refusal.

The current CI installs the recorded dependencies, runs Biome, checks catalogue/navigation declarations and TypeScript, runs Vitest, regenerates and checks reference freshness, checks reference coverage and local links/fragments, and creates the static production export. Successful main-branch runs can then publish the built artifact through the reusable Pages workflow. A new implementation must be checked on its own commit; an earlier successful run is historical evidence for that earlier state.

Reading the workflow establishes its configuration rather than the outcome of a future run. The [4.9.1 record](RELEASE-4.9.1.md) identifies its exact verified preparation commit and deployment. These living-guide corrections are a separate content change and claim no new browser audit.

The Inspectorate of Evidence is particularly strict about certificates that merely look expensive.

## 6. Read across the departments

Architecture explains responsibility boundaries. The frontend guide follows those boundaries through actual files. The lifecycle guide examines asynchronous audio behavior. Operations explains what the commands and workflows establish. The documentation workshop explains how to maintain these accounts and the generated reference.

These guides are deliberately different shapes: explanatory prose, route and responsibility tables, diagnostic procedures, diagrams, generated signatures, and source links. Their combined volume provides material for a useful design review. Content breadth is not evidence that every future documentation capability has already been built.

The [charter](DOCUMENTATION-CHARTER.md) retains the original mandate with an updated current checkpoint. The [delivery history](DOCUMENTATION-DELIVERY.md) records the implementation and release journey. The wiki preserves the artistic narrative; these manuals should stand on their own for readers who simply want to understand the system.

## 7. Search the selected rooms

Open **Search documentation**, enter words, and follow a result to its document or heading. Matching ignores case and combining accents and requires every distinct query term within the same indexed entry. Results initially appear in batches of twenty; **Show more results** reveals another batch. Clearing the query clears the results. Search state is held in the mounted component, not saved in the URL.

The index is built from selected sources during page generation and embedded in each reader page. Queries run in the browser without a search service. Repository-only documents and the separate wiki are outside this index. A newly edited guide becomes searchable in the deployed site after a new export and deployment, not merely after saving its Markdown in GitHub.

## 8. What remains outside the current rooms

Multi-version documentation, fuzzy search, result highlighting, and indiscriminate API extraction are not implemented. Existing source comments do not automatically expand the selected TypeDoc surface. The [Part VIII roadmap](DOCUMENTATION-PART-VIII-ROADMAP.md) distinguishes the remaining contribution material and proposed consolidated check command from the issued 4.9.1 capability.

The Directorate now has routes, books, an index, and inspectors. Its visual redesign remains a later undertaking; the manuals must already be useful before the furniture committee returns.
