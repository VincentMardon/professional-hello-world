# Professional Hello World!

[![CI](https://github.com/VincentMardon/professional-hello-world/actions/workflows/ci.yml/badge.svg)](https://github.com/VincentMardon/professional-hello-world/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange)](CONTRIBUTING.md)

A greeting with release notes, architectural ambitions, and something to come back from.

## A Disproportionate Undertaking

**Professional Hello World** is an artistic and programming project by Vincent Mardon. It marks a return to public artistic life while providing a place to learn, experiment, and give an extremely small program an unreasonable amount of ceremony.

Behind the greeting is a difficult year of rebuilding a life and an independent practice. Returning to this work has come at a considerable personal cost. That history gives the title its weight; the greeting itself remains open to anyone, without requiring the backstory.

The project takes software rituals very seriously for someone whose principal deliverable is saying hello. A bold word can have a release. An italic phrase can have a manifesto. The learning is real, and the excessive paperwork is part of the work.

## What Exists Today

- A Next.js App Router frontend, exported as a static site, displaying **Professional "Hello, World!"** followed by *Coming soon ...*, with a component for each line, a reusable `EmptyLine` spacer, and a layout centred horizontally and vertically.
- The former Python greeting was removed in commit #33; its implementation remains in Git history.
- A CI workflow that installs dependencies and runs Biome, TypeScript checks, four Vitest page tests, and the Next.js build on pushes, pull requests, and manual dispatch. Coverage measurement is not configured.
- A reusable Pages workflow called by CI after successful checks on `main`, publishing the already built artifact. Its build-to-deployment path has succeeded on GitHub, including the tests introduced in commit #38.
- Documentation, historical release notes, and an [official coding cat](docs/assets/images/coding-cat.png).

The latest published release is [**3.0.0 — The Great Invisible Reconstruction**](https://github.com/VincentMardon/professional-hello-world/releases/tag/v3.0.0), released on September 19, 2026: the familiar greeting, now supported by a rebuilt frontend, real checks, and four behavioral tests. Read the [release notes](docs/RELEASE-3.0.0.md) and [changelog](CHANGELOG.md).

## Getting Started

Use Node.js 24 and npm. From `frontend`, run `npm ci` to install the recorded dependencies, then `npm run dev` to start the development server. On Windows, use `npm.cmd` if the PowerShell npm launcher fails.

Open [localhost:3000/professional-hello-world/](http://localhost:3000/professional-hello-world/). The project prefix applies locally as well as on GitHub Pages; the bare localhost root is not the greeting route.

The web page is split between `src/app/layout.tsx` (document structure, metadata, and viewport) and `src/app/page.tsx` (composition of `ProfessionalHelloWorld`, `EmptyLine`, and `ComingSoon`, defined in `src/components`). The original `src/hello.html` remains a historical reference and is not used by the new publication workflow. Legacy resource placeholders remain inactive comments. Active styles live in `src/app/page.css.ts`: Vanilla Extract generates a class providing `2rem` of padding, a system sans-serif font, and a line height of `1.5`. The class now uses a flex column centred on both axes with a minimum height of `100dvh`, border-box sizing, and centred text. The container provides a `0.5rem` gap between children. `EmptyLine.css.ts` gives the empty, accessibility-hidden spacer a non-shrinking `1rem` block size; with a gap on either side, the two text blocks are separated by `2rem`. A global body rule removes the default margin. Text can wrap on narrow screens; no breakpoint-specific layout is introduced.

### Checks and Formatting

Run these commands from `frontend`:

- `npm run check`: Biome lint and formatting checks without edits.
- `npm run check:fix`: apply Biome's safe automatic fixes and formatting.
- `npm run format`: format supported project files.
- `npm test`: run Vitest in watch mode during development.
- `npm run test:run`: run the test suite once, as CI does.
- `npm run typecheck`: generate Next.js route types and check TypeScript.
- `npm run build`: create the production static export in `out`.

Biome handles code checks and formatting; TypeScript checks types. Neither can determine whether a correctly formed URL names the right repository.

The first test suite renders `HomePage` with its real components using Vitest, React Testing Library, jest-dom, and jsdom. Four tests check the greeting and punctuation, strong importance, the coming-soon announcement and its emphasis, and the empty decorative interval between the two lines. The test configuration transforms React and Vanilla Extract imports through their Vite plugins and cleans up the DOM after each test.

These are DOM tests, not a rendered-layout inspection. Check centring, spacing, narrow screens, and zoom in a browser. The suite does not verify Next.js-generated metadata or the production export. Coverage measurement, E2E tests, mutation testing, and automated multi-browser checks are not configured; heavier layers will be introduced when they have real behavior to verify. See the [testing conventions](CONTRIBUTING.md#testing-conventions).

The former `python backend/src/hello.py` command is no longer available following the script's removal in commit #33.

## Publishing the Greeting

CI in `.github/workflows/ci.yml` is the entry point for pushes, pull requests, and manual runs. It uses Ubuntu 24.04, `actions/checkout@v7`, `actions/setup-node@v7`, and Node.js 24. Its `sanity` job runs `npm ci`, `npm run check`, `npm run typecheck`, `npm run test:run`, and `npm run build` from `frontend`. A failing test prevents the subsequent build, artifact upload, and publication. The test step succeeded in the [CI run for commit #38](https://github.com/VincentMardon/professional-hello-world/actions/runs/35448593710), followed by the build and deployment.

For a push or manual run on `main`, CI packages `frontend/out` as a Pages artifact. The `publish` job requires `sanity` to succeed, then calls `.github/workflows/pages.yml` through `workflow_call`. That workflow configures Pages and deploys the artifact from the same run without installing dependencies or building again. Pull requests and other branches run the checks and build without publishing.

To publish manually, select **CI**, choose **Run workflow**, and select `main`. The reusable Pages workflow has no independent push or manual trigger. Publication uses the `github-pages` environment and grants `pages: write` and `id-token: write` to the deployment job. The `pages` concurrency group serializes deployment jobs; CI builds can still run concurrently.

There is one build per CI execution. A push to a repository branch with an open pull request can still trigger both push and pull-request executions. The removed duplication is the separate CI and publication builds for a push to `main`.

The repository's Pages publishing source remains GitHub Actions. Files from `frontend/public` are included in the export, including the coding cat at `docs/assets/images/coding-cat.png`. The public address is [vincentmardon.github.io/professional-hello-world/](https://vincentmardon.github.io/professional-hello-world/).

The original HTML deployment succeeded for commit #29, the Next.js migration for #30, and the initial Vanilla Extract integration for #31. The publication workflow also succeeded after the Python removal in #33. Component extraction and centring were published in #34. The spacer was published in #36, with [its production build and deployment successful](https://github.com/VincentMardon/professional-hello-world/actions/runs/35374942348). These results belong to the previous workflow arrangement. The new CI-to-Pages handoff succeeded for [commit #37](https://github.com/VincentMardon/professional-hello-world/actions/runs/35402940885), and [commit #38](https://github.com/VincentMardon/professional-hello-world/actions/runs/35448593710) subsequently passed the added tests, built, and deployed successfully.

## Possible Next Greetings

The [architecture document](docs/ARCHITECTURE.md) records the current implementation and possible technical directions. The [Global Hello Session proposal](docs/FEATURE-global-hello.md) imagines one person saying hello and others answering together.

Visual experiments, including WebGL, may become part of the learning process when their turn comes. These are directions to explore, with no promised delivery date or requirement to build everything at once.

## Further Reading

- [Contributing](CONTRIBUTING.md): tone, working practices, and documentation conventions.
- [Correspondence registry](records/README.md): issued administrative satire and the standing format for future letters, beginning with the refusal of pull request No. 1.
- [Changelog](CHANGELOG.md): an unusually eventful history of very small changes.
- [Recovery addendum](docs/postmortem-unsaved-guideline.md#recovery-addendum--the-maintainer-was-also-unsaved): the more personal context, for those who want it.
- [Collaboration rules](AGENTS.md): Vincent writes the code; the assistant explains proposals and may edit documentation.

All project documentation is written in English, in recognition of our greeting's considerable international responsibilities.

## License

Released under the [MIT License](LICENSE). You may fork the absurdity, modify the overengineering, and redistribute the inefficiency, provided you retain the required copyright and permission notice.
