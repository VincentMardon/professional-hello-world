# Professional Hello World — Architecture

## Purpose

This project brings together an artistic return, practical learning, and a deliberately excessive approach to saying “Hello, World!”. Technical experiments should contribute to that experience or teach something worth exploring. Their value is not measured by the number of services required to render a sentence.

This document separates the implementation from the architectural ambitions. The imaginary procurement department may continue planning at full capacity.

## Current Implementation

| Component | Location | Actual behavior |
|-----------|----------|-----------------|
| Web greeting | `frontend/src/app/layout.tsx` and `page.tsx` | Next.js App Router with metadata, viewport, and the existing greeting |
| Terminal greeting | `backend/src/hello.py` | Prints a greeting; provides a function accepting an optional target |
| CI | `.github/workflows/ci.yml` | Checks out the repository and prints a message on pushes and pull requests |
| Publication | `.github/workflows/pages.yml` | Checks and builds the Next.js frontend, then publishes `frontend/out`; migration deployed for commit #30 |

The two examples are independent. The frontend uses Next.js 16.3.5, React 19.3.0, TypeScript 6.0.3, and Biome 2.5.13. There is no API, database, container setup, or connection to the Python example. The Pages workflow runs lint, format, type, and build checks; it does not run application tests or measure coverage.

The absent CSS, JavaScript, and font references are retained as JSX comments in the layout. Next.js generates the metadata and viewport tags from typed exports. Open Graph metadata points to the intended Pages URL and the coding cat image included in the publication artifact. These metadata changes do not implement styling, analytics, or custom fonts.

The Python script prepares a timestamp and a logging payload but prints only the greeting. Its internal version remains `0.0.1-dev`; the historical project release recorded in the changelog is `2.1.2`.

## Styling the Greeting

`frontend/src/app/page.css.ts` defines a Vanilla Extract class imported by `page.tsx`: `2rem` padding, `system-ui, sans-serif`, and a line height of `1.5`. This is inner spacing, not a margin declaration. The department of visual dignity currently administers three declarations.

`@vanilla-extract/css` supplies the styling API. The Next.js configuration uses `@vanilla-extract/next-plugin`, pinned to `2.5.2`, with `unstable_turbopack.mode: "auto"`. This explicitly enables the plugin's experimental Turbopack integration; see the [official documentation](https://vanilla-extract.style/documentation/integrations/next/). Styles are extracted into CSS during the build without adding a styling runtime. Next.js still produces its own JavaScript.

The project records version-specific npm install-script approvals for `@swc/core@1.16.2` and `esbuild@0.28.2`. Vincent successfully rebuilt both after approving their initially blocked scripts. Updated versions may require fresh approval under that npm policy.

Vincent confirmed passing local checks and the intended visual result. Inspection of the static export confirmed the CSS declarations. The existing static export configuration and Pages workflow are retained; remote deployment of this integration remains pending.

## Running the Existing Examples

From `frontend`, use Node.js 24 and run `npm ci`, then `npm run dev`. The local route is `http://localhost:3000/professional-hello-world/`. The scripts in `package.json` also provide Biome checks and fixes, formatting, TypeScript checking, and a production build.

The terminal example remains `python backend/src/hello.py`, run from the repository root with Python 3.11 or newer. No Django application or `manage.py` exists.

## Static Publication

`next.config.ts` sets `output: "export"`, `basePath: "/professional-hello-world"`, and `trailingSlash: true`. Next.js builds the public site in `frontend/out`. The coding cat is copied into the export from `frontend/public/docs/assets/images/coding-cat.png`.

The Pages workflow installs the lockfile's dependencies with `npm ci`, runs Biome and TypeScript checks, builds Next.js, and uploads `frontend/out`. It runs on pushes to `main` or manual dispatch with the `github-pages` environment and the existing publication permissions. The Python example is not deployed as a server.

The previous HTML publication succeeded for commit #29. Vincent reported the Next.js version working locally; inspection of the generated export confirmed the homepage, corrected Open Graph URLs, and image file. The Next.js deployment subsequently succeeded for commit #30. The newer styling integration awaits its own remote deployment.

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

Biome checks and Next.js builds are now part of publication. Further exercises could include application tests, containers, and greeting metrics. Each should be introduced alongside the behavior it would verify or explain. Example metrics from the original plan include `hello_requests_total` and counts by language or client.

Any public service would also need appropriate access controls and consideration of rate limits. Instrumentation choices and public statistics should be specified before implementation; there is currently no analytics collection in the application code.

## Development Approach

Vincent implements the code as part of learning. The assistant presents code and explanations in the conversation and may edit prose documentation directly, as specified in [AGENTS.md](../AGENTS.md).

Choose the next experiment together. Keep documentation explicit about whether something exists, is proposed, or has been deferred. WebGL, dark mode, multilingual greetings, and other ambitious salutation infrastructure remain possible topics rather than release obligations.

The engineering ceremony can grow. The person doing the work must have room to grow with it.
