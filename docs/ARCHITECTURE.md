# Directorate of Structural Disproportion

## Architecture — How the greeting obtained several rooms

[Documentation reception](README.md)

The architectural inquiry begins with a warning to the procurement committee: a directory is not a microservice, a hook is not an autonomous department, and a static page does not secretly employ a permanent server. PHW's ceremony is extensive enough without inventing infrastructure that the repository does not contain.

## Purpose

This project brings together an artistic return, practical learning, and a deliberately excessive approach to saying “Hello, World!”. Technical experiments should contribute to that experience or teach something worth exploring. Their value is not measured by the number of services required to render a sentence.

This document separates the implementation from the architectural ambitions. The imaginary procurement department may continue planning at full capacity.

## Current Implementation

| Component | Location | Actual behavior |
|-----------|----------|-----------------|
| Web greeting | `frontend/src/app/layout.tsx`, `page.tsx`, and `src/components/` | Next.js App Router with metadata, viewport, and two greeting components and an empty spacer centred in a flex column |
| Former terminal greeting | Git history of `backend/src/hello.py` | Removed in commit #33; no current terminal greeting command |
| Page tests | `frontend/src/app/page.test.tsx` | Four Vitest tests render the real page in jsdom and check content, semantics, and the decorative interval |
| CI | `.github/workflows/ci.yml` | Installs dependencies, checks with Biome and TypeScript, runs Vitest, and builds on pushes, pull requests, and manual runs |
| Publication | `.github/workflows/pages.yml` | Reusable workflow called by CI to deploy the verified Pages artifact on main; no second build |

The frontend uses Next.js 16.3.5, React 19.3.0, TypeScript 6.0.3, and Biome 2.5.13. There is no API, database, container setup, or active Python greeting. The CI workflow runs lint, format, type, application-test, and build checks; it does not measure coverage.

## Audio Annex and the 4.0.0 Milestone

The separate audio-test route composes a persistent header and a client-side access gate. After acceptance, the gate mounts the audio panel. Feature-local hooks separate asynchronous engine initialization from settings, volume, and playback orchestration. PHW consumes the vendored beep-engine 0.1.2 package, containing Rust-generated WebAssembly, browser playback code, and TypeScript declarations. Web Audio plays the generated samples through a shared gain node; the main greeting is unchanged.

The audio-page suite mocks the engine and substitutes the panel for the access gate. Its assertions concern audio integration behavior, not real sound output or password acceptance/refusal. The gate is client-side presentation on a static export. The [published 4.0.0 notes](RELEASE-4.0.0.md) summarize the design milestone; its annotated tag targets commit #79 (30eb0a0), whose CI and Pages deployment succeeded. The [release process](RELEASE-PROCESS.md) separates ongoing Pages deployment from named version releases.

## Documentation — One manuscript, more than one reading context

The first documentation milestone adds `frontend/src/app/doc/page.tsx` as a thin route with metadata. It delegates to `DocumentationPage` in `frontend/src/features/doc/components/`. That asynchronous component reads the explicitly selected `docs/README.md`, then renders it using react-markdown and remark-gfm. Tables become HTML rather than a photograph of a Markdown file.

The Markdown belongs to the repository; the route and its rendering belong to the frontend. Static HTML belongs to `frontend/out`. These are three responsibilities, not three competing sources of prose. The reading component uses the frontend working directory to locate the repository-level document during construction. It does not expose arbitrary filesystem paths to visitors.

The original implementation resolves relative source links to GitHub, preserving the ability to inspect the code behind the account. The next increment now adds a local architecture route at `/doc/architecture` and a two-page navigation. The reader uses an explicit document registry to select the Markdown file and recognize links between these two pages; those links use Next.js Link, while other repository links still lead to GitHub. Vincent confirms formatting and application checks, type checking, tests, production build, reciprocal navigation, and direct architecture-page reload. Inspection of both generated HTML pages confirms local links with the deployment base path and the current-page marker. These browser results are reported by Vincent; implementation commit #84 subsequently passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39529770689). Release 4.2.0 is in preparation; its final commit will need separate verification.

## Boundaries — Where each authority stops

| Boundary | Responsibility on the first side | Responsibility on the other side |
| --- | --- | --- |
| Route / feature | Select the page and its metadata | Compose content, presentation, and behavior |
| Audio panel / hooks | Connect controls to values and callbacks | Initialize the engine and coordinate interaction state |
| PHW / BeepEngine | Select a sound and sample rate; present volume and status | Provide the packaged generator and browser playback interface |
| Build / browser | Produce static pages and extracted styles | Run interactive client components and browser APIs |
| Repository Markdown / rendered documentation | Preserve authored explanations with source-relative links | Present them as readable website content |
| CI / release | Check and deploy an exact source state | Name a deliberately selected milestone through a tag and GitHub release |

These boundaries help locate a change. A different label usually belongs in a component. A different initialization policy belongs near the engine hook. A new explanation belongs in a document. A new public documentation page needs both selected content and a route. The Directorate recommends locating the responsibility before founding another office.

The audio panel is a client component because its hooks and interactions require browser execution. The documentation reader has no client directive: it can produce static content during the build. Both forms coexist inside the same application. “Server Component” describes its execution role in Next.js; it does not mean GitHub Pages must run a Node.js server after deployment.

## Reader exercise — Follow one responsibility

To understand the greeting, start with `frontend/src/app/page.tsx`, then follow its component imports and its Vanilla Extract stylesheet. The bottom-right documentation navigation is fixed outside normal flow; its presence should not be explained as another spacer in the centered greeting.

To understand playback, start with `AudioTestPanel.tsx`. Identify the values and callbacks obtained from `useAudioTest`, then follow that hook to `useBeepEngine`. Observe that loading an engine, selecting a sound, and drawing a Play button are separate tasks. The separation gives each explanation a manageable subject; it does not establish separate network services.

To understand publication, read `ci.yml` before `pages.yml`. Follow the artifact from the successful build to deployment. Then inspect the release process to see why successful publication of a website does not automatically create a named release.

No diagram renderer is required to perform this first investigation. A later diagram should clarify a question already expressed in the text rather than substitute an impressive collection of boxes for an explanation.

## Testing the Greeting

`frontend/vitest.config.ts` selects jsdom, discovers `src/**/*.test.{ts,tsx}`, and loads `vitest.setup.ts`. React and Vanilla Extract Vite plugins transform the component and style imports independently of the Next.js build configuration. The setup imports jest-dom's Vitest matchers and explicitly calls React Testing Library cleanup after each test.

The homepage suite renders `HomePage` without mocking its children. Four tests check the complete greeting and punctuation, the quoted greeting's strong importance, the coming-soon announcement's semantic emphasis, and the empty `aria-hidden` interval placed between the two lines. Text assertions normalize whitespace; they do not measure typography.

The initial local run passed all four tests, Biome, and TypeScript with `--noEmit --incremental false`. No local production build or assistant browser inspection was performed during that initial check. The [GitHub run for commit #38](https://github.com/VincentMardon/professional-hello-world/actions/runs/35448593710) subsequently passed the tests, production build, artifact packaging, and deployment. jsdom does not calculate layout; generated metadata, production-export behavior, and visual rendering remain outside this suite. Coverage measurement, E2E, mutation testing, and multi-browser automation are deferred until relevant behavior justifies them.

The absent CSS, JavaScript, and font references are retained as JSX comments in the layout. Next.js generates the metadata and viewport tags from typed exports. Open Graph metadata points to the intended Pages URL and the coding cat image included in the publication artifact. These metadata changes do not implement styling, analytics, or custom fonts.

The Python example was removed in commit #33. Its historical implementation remains in Git; the latest published project release is [4.0.0 — The Great Apparent Standstill](RELEASE-4.0.0.md), tagged at commit #79 (`30eb0a0`) on October 20, 2026. The previous 3.0.0 milestone remains documented in its [historical release notes](RELEASE-3.0.0.md).

## Greeting Components

`ProfessionalHelloWorld.tsx` renders the first line with its existing strong emphasis. `ComingSoon.tsx` renders the italic announcement. Both use named exports and are composed by `page.tsx` inside the existing styled `div`, with `EmptyLine.tsx` between them. `EmptyLine` renders an empty `div` with `aria-hidden="true"`; it has no semantic separator role and carries no content. The first line no longer includes its former trailing colon. The components require no client directive, state, or additional dependencies.

The spacer is reusable between future sections. A statistics section between the two greeting lines is an intended direction, not an implemented component or data collection feature.

## Styling the Greeting

`frontend/src/app/page.css.ts` defines a Vanilla Extract class imported by `page.tsx`: `2rem` padding, `system-ui, sans-serif`, and a line height of `1.5`. This is inner spacing, not a margin declaration. The class also establishes a flex column, centres its children on both axes, and uses `minHeight: "100dvh"` with border-box sizing so padding is included in the minimum height. The container uses `gap: "0.5rem"` between consecutive children. `frontend/src/components/EmptyLine.css.ts` assigns the spacer `blockSize: "1rem"` and `flexShrink: 0`. Its height plus the two adjacent gaps yields `2rem` between the current text blocks; this is block spacing, not a measurement between visible glyphs. Text is centred and may wrap naturally. A global body rule removes the browser's default margin; no media-query breakpoints are defined.

`@vanilla-extract/css` supplies the styling API. The Next.js configuration uses `@vanilla-extract/next-plugin`, pinned to `2.5.2`, with `unstable_turbopack.mode: "auto"`. This explicitly enables the plugin's experimental Turbopack integration; see the [official documentation](https://vanilla-extract.style/documentation/integrations/next/). Styles are extracted into CSS during the build without adding a styling runtime. Next.js still produces its own JavaScript.

The project records version-specific npm install-script approvals for `@swc/core@1.16.2` and `esbuild@0.28.2`. Vincent successfully rebuilt both after approving their initially blocked scripts. Updated versions may require fresh approval under that npm policy.

Vincent confirmed passing local checks and the intended visual result. Inspection of the static export confirmed the CSS declarations. The static export configuration is retained; the initial integration deployed successfully for commit #31. Component extraction and centring were published in commit #34. For the spacer, local Biome checks and TypeScript checking with no emit or incremental output passed. Commit #36 subsequently completed the production build and deployment on GitHub; no assistant browser inspection is claimed.

## Running the Frontend

From `frontend`, use Node.js 24 and run `npm ci`, then `npm run dev`. The local route is `http://localhost:3000/professional-hello-world/`. The scripts in `package.json` also provide Biome checks and fixes, formatting, TypeScript checking, and a production build.

The terminal script was removed in commit #33, so its old command no longer works. No Django application or `manage.py` exists.

## Static Publication

`next.config.ts` sets `output: "export"`, `basePath: "/professional-hello-world"`, and `trailingSlash: true`. Next.js builds the public site in `frontend/out`. The coding cat is copied from `frontend/public/docs/assets/images/coding-cat.png`. These build settings are explicit and do not depend on outputs from `configure-pages`.

`.github/workflows/ci.yml` runs on pushes, pull requests, and manual dispatch. The `sanity` job checks out the source, sets up Node.js 24 with npm caching keyed from `frontend/package-lock.json`, installs with `npm ci`, runs Biome and TypeScript checks, executes the Vitest suite with `npm run test:run`, and builds the static export. Both workflows use `ubuntu-24.04`; checkout and Node setup use major version 7, whose action runtime is Node 24. The action runtime and the application's selected Node.js version are separate settings.

Only executions on `refs/heads/main` whose event is not `pull_request` upload the Pages artifact and enter the `publish` job. `needs: sanity` prevents publication after a failed prerequisite. The job calls the repository-local `pages.yml` at the same commit via `workflow_call`.

The reusable workflow configures Pages and deploys the artifact from the calling run. It has no checkout, dependency installation, or second build. Manual publication starts from CI with `main` selected. PRs and other branches receive checks and a build, without deployment.

CI defaults to `contents: read`. The calling publication job grants the permissions needed by the reusable workflow, whose deployment job requests `pages: write` and `id-token: write`. Deployment retains the `github-pages` environment, reported page URL, and `pages` concurrency group with `cancel-in-progress: false`. This serializes deployment jobs, not the preceding CI builds, and does not establish a guaranteed ordering of concurrent build completions.

There is one build per CI execution. Keeping both push and pull-request triggers can still produce two executions for a push to a repository branch with an open PR. The page tests run before the build. Coverage measurement and a Python server are not provided.

The earlier publication pipeline succeeded for the HTML greeting in #29, the Next.js migration in #30, the initial styles in #31, and the Python removal in #33. Component extraction and centring were published in #34. The spacer's [build and deployment succeeded for #36](https://github.com/VincentMardon/professional-hello-world/actions/runs/35374942348). The revised reusable-workflow arrangement passed its artifact handoff and deployment in [the run for commit #37](https://github.com/VincentMardon/professional-hello-world/actions/runs/35402940885). The run for #38 also passed with the added test step.

`frontend/src/hello.html` remains a historical reference. The generated export, `.next`, route declarations, and TypeScript build information are excluded from version control. The package lockfile is committed. Biome excludes generated content and the legacy HTML.

## Proposed Directions

The following ideas preserve the original architectural ambitions. They are not an installed stack or a commitment to implement every layer.

### Presentation

React/Next.js with TypeScript is now implemented for the static greeting; an API-driven interface remains a proposal. Vanilla Extract now provides the initial styles; elaborate visual treatments remain exploratory. A future WebGL experiment could become both an artistic medium and a learning exercise; its role will be discussed before implementation.

The experience should remain understandable without reading the artist's personal history. A small interaction can carry the return on its own.

### Greeting API

Django and Django REST Framework were proposed to expose `GET /api/greetings/{code}/`, with `default` as an example greeting code. Health checks, request logging, and a response-time target could provide practical exercises in operating a service.

No endpoint or performance guarantee exists yet. A greeting may eventually require a service-level agreement, but it has not signed one.

### Storage

SQLite for local development and PostgreSQL for a more elaborate deployment were proposed. A possible `greetings` table would contain `id`, `code`, `text`, and `language`.

The [Global Hello Session proposal](FEATURE-global-hello.md) would introduce sessions and responses if pursued. Its storage and participant rules remain to be designed.

### Shared Interaction

A visitor could initiate a greeting and watch other visitors answer during a short window. This would extend the individual “I am here again” into an encounter with others. The proposal describes a possible experience, not an existing feature.

### Operations and Observation

Biome checks, TypeScript checking, Vitest page tests, and Next.js builds are now part of the publication prerequisites. Further exercises could include broader tests, containers, and greeting metrics. Each should be introduced alongside the behavior it would verify or explain. Example metrics from the original plan include `hello_requests_total` and counts by language or client.

Any public service would also need appropriate access controls and consideration of rate limits. Instrumentation choices and public statistics should be specified before implementation; there is currently no analytics collection in the application code.

## Development Approach

Vincent implements the code as part of learning. The assistant presents code and explanations in the conversation and may edit prose documentation directly, as specified in [AGENTS.md](../AGENTS.md).

Choose the next experiment together. Keep documentation explicit about whether something exists, is proposed, or has been deferred. WebGL, dark mode, multilingual greetings, and other ambitious salutation infrastructure remain possible topics rather than release obligations.

The engineering ceremony can grow. The person doing the work must have room to grow with it.
