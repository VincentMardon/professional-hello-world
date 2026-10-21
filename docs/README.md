# Welcome to the Directorate of Disproportionate Documentation

## Reception — What has actually been built here?

Professional Hello World is an artistic and technical learning project that grants an extremely small program an unreasonable amount of attention. Its public greeting says **Professional "Hello, World!"**, followed by *Coming soon ...*. Its audio annex offers two generated sounds inside a carefully furnished listening room. Both belong to the same project. Their ratio of machinery to immediate output is intentional.

The Directorate exists to make that machinery understandable. Visitors are entitled to learn what the project does, contributors need to know where behavior lives, and maintainers should be able to explain a decision without excavating every preceding ceremony. The paperwork is extravagant. The underlying explanations must earn their space.

**Implementation status:** this overview is readable from the repository and is now the selected Markdown source for the local `/doc` route. Vincent has added the route and its feature component using react-markdown and remark-gfm. The generated documentation HTML has been inspected locally. Vincent confirms local checks and manual keyboard, narrow-screen, and 200% zoom checks for the new homepage entry. Release 4.1.0 is published on commit #82, whose CI and Pages deployment succeeded; generated API reference and Mermaid rendering are not implemented.

The second room and reciprocal navigation are delivered in [4.2.0 — Two Reading Rooms Obtain a Corridor](RELEASE-4.2.0.md), published on October 21, 2026. Its annotated tag targets preparation commit #85, with successful exact-commit CI and Pages deployment.

## 1. Choose your counter

Continue with the [Directorate of Structural Disproportion — architecture](ARCHITECTURE.md) to examine the responsibilities and boundaries behind the rooms.

| Your immediate question | Read next |
| --- | --- |
| What is this project, and how do I run it? | [Project README](../README.md#getting-started) |
| How is the application organized? | [Architecture](ARCHITECTURE.md) and the repository map below |
| How should I contribute? | [Contribution process](../CONTRIBUTING.md) |
| What changed in the latest named milestone? | [4.0.0 release notes](RELEASE-4.0.0.md) and [changelog](../CHANGELOG.md) |
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

The audio interaction has several distinguishable stages.

1. The page presents its header and access ceremony. The panel is mounted after acceptance.
2. The panel's audio logic invokes an initialization hook. That hook requests a BeepEngine instance asynchronously and maintains a loading, ready, or failure message. Its cleanup prevents a later completion from updating the state of an abandoned hook instance; it does not establish cancellation or disposal of the external engine.
3. The interaction hook maintains the selected sound, sample rate, and volume. Its initial choices are startup beep, 48,000 Hz, and 100 percent.
4. A volume change updates React state and, when an engine is present, converts the percentage to the engine's normalized volume scale.
5. Playback applies the current volume and calls the selected generator through the engine interface. Success updates the status to report that playback started; failure produces a readable error message. This status is not a measurement proving that a listener heard the output.

The relevant starting points are [useBeepEngine](../frontend/src/features/audio-test/hooks/useBeepEngine.ts), [useAudioTest](../frontend/src/features/audio-test/hooks/useAudioTest.ts), and [errorMessage](../frontend/src/shared/errors/errorMessage.ts). A later dedicated explanation can add a sequence diagram and investigate the integration in greater detail.

The distinction between these responsibilities matters more than the number of files. It lets us ask separate questions about loading, state, playback, rendering, and styling instead of granting one component permanent custody of every possible concern.

## 5. What the inspections can establish

The repository contains homepage and audio-page tests. The homepage suite renders the real greeting composition. The audio suite mocks the engine and replaces the access component with the panel, concentrating on integration behavior. Those boundaries matter: they do not independently verify audible sound or password acceptance and refusal.

The current CI installs the recorded dependencies, runs Biome, checks TypeScript, runs Vitest, and creates the static production export. Successful main-branch runs can then publish the built artifact through the reusable Pages workflow. A new implementation must be checked on its own commit; an earlier successful run is historical evidence for that earlier state.

Reading the workflow establishes what it is configured to do. It does not prove that the latest remote execution passed. The first overview was prepared through source inspection. For the later homepage entry, Vincent confirms the local checks, production build, and requested manual navigation checks. This is not an independent assistant browser audit; release-preparation commit #82 subsequently passed its own CI and Pages deployment.

The Inspectorate of Evidence is particularly strict about certificates that merely look expensive.

## 6. How the documentation will grow

The first objective is a readable page, first from the repository and then through the existing application. The next increments will address navigation, an explanation supported by a diagram, a small generated-reference pilot, and appropriate automated checks. The [charter](DOCUMENTATION-CHARTER.md) records the proposed sequence and editorial departments.

Each increment should produce something inspectable before adding the next mechanism. Automatic reference generation will describe selected interfaces from source comments; authored prose will explain their relationships and the reasons behind them. Mermaid is an intended documentation capability, not an installed feature of the current frontend.

The wiki preserves the journey. Technical documentation explains the system sufficiently to use and change it. Historical release notes remain historical, and proposals retain their labels until implementation establishes otherwise.

## 7. Departures are now scheduled by usefulness

The documentation project must not repeat the long unnamed interval between releases 3.0.0 and 4.0.0. Its first application milestone is the published [**4.1.0 — The Greeting Opens an Information Desk**](RELEASE-4.1.0.md), delivering a useful documentation entrance inside PHW.

This first minor release delivers the documentation route, useful overview content, a homepage entry, and repository source links. Additional departments, generated reference, search, and diagram rendering remain future work. Subsequent useful additions and corrections should receive their own release-readiness decisions.

Read the [documentation delivery milestones](DOCUMENTATION-DELIVERY.md) for the preparation history and verified publication checkpoint. Later capabilities will receive their own release-readiness decisions.

**Reception now has an application route as well as a repository desk. The export contains this page, and Vincent has checked the new entrance locally. Release 4.1.0 has now been published after successful exact-commit CI and deployment checks.**
