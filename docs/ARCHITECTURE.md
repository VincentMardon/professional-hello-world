# Professional Hello World — Architecture

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

## Testing the Greeting

`frontend/vitest.config.ts` selects jsdom, discovers `src/**/*.test.{ts,tsx}`, and loads `vitest.setup.ts`. React and Vanilla Extract Vite plugins transform the component and style imports independently of the Next.js build configuration. The setup imports jest-dom's Vitest matchers and explicitly calls React Testing Library cleanup after each test.

The single page suite renders `HomePage` without mocking its children. Four tests check the complete greeting and punctuation, the quoted greeting's strong importance, the coming-soon announcement's semantic emphasis, and the empty `aria-hidden` interval placed between the two lines. Text assertions normalize whitespace; they do not measure typography.

The initial local run passed all four tests, Biome, and TypeScript with `--noEmit --incremental false`. No production build or browser inspection was performed for this introduction, and the new CI test step awaits execution on GitHub. jsdom does not calculate layout; generated metadata, production-export behavior, and visual rendering remain outside this suite. Coverage measurement, E2E, mutation testing, and multi-browser automation are deferred until relevant behavior justifies them.

The absent CSS, JavaScript, and font references are retained as JSX comments in the layout. Next.js generates the metadata and viewport tags from typed exports. Open Graph metadata points to the intended Pages URL and the coding cat image included in the publication artifact. These metadata changes do not implement styling, analytics, or custom fonts.

The Python example was removed in commit #33. Its historical implementation remains in Git; the latest recorded project release is still `2.1.2`.

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

The earlier publication pipeline succeeded for the HTML greeting in #29, the Next.js migration in #30, the initial styles in #31, and the Python removal in #33. Component extraction and centring were published in #34. The spacer's [build and deployment succeeded for #36](https://github.com/VincentMardon/professional-hello-world/actions/runs/35374942348). The revised reusable-workflow arrangement is implemented in the working tree; its artifact handoff and deployment have not yet been verified by a GitHub run.

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
