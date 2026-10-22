# Welcome to the Directorate of Disproportionate Documentation

## Reception — What has actually been built here?

Professional Hello World is an artistic and technical learning project that grants an extremely small program an unreasonable amount of attention. Its public greeting says **Professional "Hello, World!"**, followed by *Coming soon ...*. Its audio annex offers two generated sounds inside a carefully furnished listening room. Both belong to the same project. Their ratio of machinery to immediate output is intentional.

The Directorate exists to make that machinery understandable. Visitors are entitled to learn what the project does, contributors need to know where behavior lives, and maintainers should be able to explain a decision without excavating every preceding ceremony. The paperwork is extravagant. The underlying explanations must earn their space.

**Current implementation:** the shared Markdown reader, document navigation, dark/light switch, Mermaid rendering, diagram zoom/fitting/fullscreen, and one generated hook reference are implemented. [4.5.1](RELEASE-4.5.1.md) is the latest verified stable release in this record and adds the reference freshness gate. Historical release notes preserve their own publication evidence.

**Content expansion:** the operations, frontend field guide, and documentation workshop below are now authored and readable from the repository. Vincent has added their registry entries and route wrappers at `/doc/operations`, `/doc/frontend`, and `/doc/workshop`. Vincent confirms the integrated guides work locally. Biome passes on 62 files; exact-commit remote verification remains pending. Design review will use this broader content rather than an almost empty reading room.
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
| What does the initialization hook expose? | [Generated hook reference](generated/api-pilot/README.md) |
| What does the access form actually protect? | [Trust boundaries](TRUST-BOUNDARIES.md) |
| Which machinery belongs to PHW and which comes from packages? | [Dependencies](DEPENDENCIES.md) |
| How should I contribute? | [Contribution process](../CONTRIBUTING.md) |
| What changed in the latest verified milestone? | [4.5.1 release notes](RELEASE-4.5.1.md) and [changelog](../CHANGELOG.md) |
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
| [`frontend/src/shared/`](../frontend/src/shared) | Shared application utilities | Error-message conversion currently used by the audio hooks |
| [`frontend/vendor/`](../frontend/vendor) | Vendored dependency archives | The package consumed by the frontend, distinct from its upstream source |
| [`frontend/public/`](../frontend/public) | Static public assets | Material copied into the site export |
| [`.github/workflows/`](../.github/workflows) | Verification and deployment automation | CI followed by publication of its built artifact |
| [`docs/`](.) | Technical explanations, plans, and historical documents | Status notices distinguishing implemented behavior from proposals |
| [`records/`](../records/README.md) | Issued administrative correspondence | Preserved satirical records with their own presentation rules |

The new `frontend/src/app/doc/` and `frontend/src/features/doc/` directories follow the route/feature separation already used by the audio annex. The route delegates to an asynchronous documentation component that reads this file; relative source links are adapted to GitHub destinations. Generated website output belongs in `frontend/out/` under the current export configuration.

## 4. Follow a sound through the institution

Read the [Bureau of Audible Transit — sound lifecycle](AUDIO-LIFECYCLE.md) for the detailed sequence, package boundary, completion semantics, and test limits. The Markdown is available in the repository and registered at `/doc/audio-lifecycle` in the local documentation navigation. Vincent confirms the page is displayed and the local checks and build are complete. Export inspection confirms the new page; exact-commit CI and deployment remain pending publication.

The audio interaction has several distinguishable stages.

1. The page presents its header and access ceremony. The panel is mounted after acceptance.
2. The panel's audio logic invokes an initialization hook. That hook requests a BeepEngine instance asynchronously and maintains a loading, ready, or failure message. Its cleanup prevents a later completion from updating the state of an abandoned hook instance; it does not establish cancellation or disposal of the external engine.
3. The interaction hook maintains the selected sound, sample rate, and volume. Its initial choices are startup beep, 48,000 Hz, and 100 percent.
4. A volume change updates React state and, when an engine is present, converts the percentage to the engine's normalized volume scale.
5. Playback applies the current volume and calls the selected generator through the engine interface. Success updates the status to report that playback started; failure produces a readable error message. This status is not a measurement proving that a listener heard the output.

The relevant starting points are [useBeepEngine](../frontend/src/features/audio-test/hooks/useBeepEngine.ts), [useAudioTest](../frontend/src/features/audio-test/hooks/useAudioTest.ts), and [errorMessage](../frontend/src/shared/errors/errorMessage.ts). The [sound-lifecycle guide](AUDIO-LIFECYCLE.md) supplies the detailed explanation and diagrams, including rejection paths and the distinction between data and audio connections.

The distinction between these responsibilities matters more than the number of files. It lets us ask separate questions about loading, state, playback, rendering, and styling instead of granting one component permanent custody of every possible concern.

## 5. What the inspections can establish

The repository contains homepage and audio-page tests. The homepage suite renders the real greeting composition. The audio suite mocks the engine and replaces the access component with the panel, concentrating on integration behavior. Those boundaries matter: they do not independently verify audible sound or password acceptance and refusal.

The current CI installs the recorded dependencies, runs Biome, checks TypeScript, runs Vitest, verifies the tracked generated reference, and creates the static production export. Successful main-branch runs can then publish the built artifact through the reusable Pages workflow. A new implementation must be checked on its own commit; an earlier successful run is historical evidence for that earlier state.

Reading the workflow establishes what it is configured to do. It does not prove that the latest remote execution passed. The first overview was prepared through source inspection. For the later homepage entry, Vincent confirms the local checks, production build, and requested manual navigation checks. This is not an independent assistant browser audit; release-preparation commit #82 subsequently passed its own CI and Pages deployment.

The Inspectorate of Evidence is particularly strict about certificates that merely look expensive.

## 6. Read across the departments

Architecture explains responsibility boundaries. The frontend guide follows those boundaries through actual files. The lifecycle guide examines asynchronous audio behavior. Operations explains what the commands and workflows establish. The documentation workshop explains how to maintain these accounts and the generated reference.

These guides are deliberately different shapes: explanatory prose, route and responsibility tables, diagnostic procedures, diagrams, generated signatures, and source links. Their combined volume provides material for a useful design review. Content breadth is not evidence that every future documentation capability has already been built.

The [charter](DOCUMENTATION-CHARTER.md) retains the original mandate with an updated current checkpoint. The [delivery history](DOCUMENTATION-DELIVERY.md) records the implementation and release journey. The wiki preserves the artistic narrative; these manuals should stand on their own for readers who simply want to understand the system.

## 7. What remains outside the current rooms

General search, multi-version documentation, broader generated API coverage, a complete anchor system, and additional automated documentation checks are not installed merely because this reception mentions them. Expand them when they answer a concrete need.

Vincent confirms the combined content works locally. The next discussion concerns the nature of version 4.6; design remains deferred until later. This is grouped content work, not a reason to release once per page.

**The Directorate has enough material to begin looking like a documentation system. Its furniture may now be judged in the presence of actual books.**

## 4.6 work in progress

The trust-boundary and dependency guides are authored and repository-readable. Their catalogue entries and generic routes are applied. All nine destinations are present in the inspected local export. Vincent confirms the checks pass after refreshing stale Next route types; exact-commit remote verification remains pending. This section does not announce a published 4.6 release. Source comment completion follows this release work; design remains deferred.
