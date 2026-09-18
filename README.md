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
- A GitHub Actions workflow that checks out the repository and prints a ceremonial message. It does not yet run tests, measure coverage, or build the project.
- A separate Pages workflow that installs dependencies, checks code with Biome and TypeScript, builds Next.js, and publishes the static export. The Next.js migration was successfully deployed for commit #30. The initial Vanilla Extract integration was deployed for commit #31; component extraction and centring were published in commit #34. The new `EmptyLine` spacing awaits publication.
- Documentation, historical release notes, and an [official coding cat](docs/assets/images/coding-cat.png).

The latest recorded release is **2.1.2 — The Italic Rebellion**. Current changes are listed under [Unreleased](CHANGELOG.md#unreleased).

## Getting Started

Use Node.js 24 and npm. From `frontend`, run `npm ci` to install the recorded dependencies, then `npm run dev` to start the development server. On Windows, use `npm.cmd` if the PowerShell npm launcher fails.

Open [localhost:3000/professional-hello-world/](http://localhost:3000/professional-hello-world/). The project prefix applies locally as well as on GitHub Pages; the bare localhost root is not the greeting route.

The web page is split between `src/app/layout.tsx` (document structure, metadata, and viewport) and `src/app/page.tsx` (composition of `ProfessionalHelloWorld`, `EmptyLine`, and `ComingSoon`, defined in `src/components`). The original `src/hello.html` remains a historical reference and is not used by the new publication workflow. Legacy resource placeholders remain inactive comments. Active styles live in `src/app/page.css.ts`: Vanilla Extract generates a class providing `2rem` of padding, a system sans-serif font, and a line height of `1.5`. The class now uses a flex column centred on both axes with a minimum height of `100dvh`, border-box sizing, and centred text. The container provides a `0.5rem` gap between children. `EmptyLine.css.ts` gives the empty, accessibility-hidden spacer a non-shrinking `1rem` block size; with a gap on either side, the two text blocks are separated by `2rem`. A global body rule removes the default margin. Text can wrap on narrow screens; no breakpoint-specific layout is introduced.

### Checks and Formatting

Run these commands from `frontend`:

- `npm run check`: Biome lint and formatting checks without edits.
- `npm run check:fix`: apply Biome's safe automatic fixes and formatting.
- `npm run format`: format supported project files.
- `npm run typecheck`: generate Next.js route types and check TypeScript.
- `npm run build`: create the production static export in `out`.

Biome handles code checks and formatting; TypeScript checks types. Neither can determine whether a correctly formed URL names the right repository. No automated application test suite or coverage measurement is provided yet.

The former `python backend/src/hello.py` command is no longer available following the script's removal in commit #33.

## Publishing the Greeting

The workflow in `.github/workflows/pages.yml` runs on pushes to `main` and supports manual dispatch. The repository's Pages publishing source is GitHub Actions.

The workflow uses Node.js 24 and `npm ci` inside `frontend`, then runs Biome checks, TypeScript checks, and the Next.js build. It uploads `frontend/out` and deploys that artifact. Files from `frontend/public` are included in the export, including the coding cat at `docs/assets/images/coding-cat.png`.

The public address is [vincentmardon.github.io/professional-hello-world/](https://vincentmardon.github.io/professional-hello-world/). The original HTML deployment succeeded for commit #29. The Next.js deployment succeeded for commit #30. The Vanilla Extract integration deployed successfully for commit #31, and the publication workflow also succeeded after the Python removal in commit #33. Component extraction and centring were published in commit #34. The new spacer has not yet been published or verified in a production build by the assistant.
## Possible Next Greetings

The [architecture document](docs/ARCHITECTURE.md) records the current implementation and possible technical directions. The [Global Hello Session proposal](docs/FEATURE-global-hello.md) imagines one person saying hello and others answering together.

Visual experiments, including WebGL, may become part of the learning process when their turn comes. These are directions to explore, with no promised delivery date or requirement to build everything at once.

## Further Reading

- [Contributing](CONTRIBUTING.md): tone, working practices, and documentation conventions.
- [Changelog](CHANGELOG.md): an unusually eventful history of very small changes.
- [Recovery addendum](docs/postmortem-unsaved-guideline.md#recovery-addendum--the-maintainer-was-also-unsaved): the more personal context, for those who want it.
- [Collaboration rules](AGENTS.md): Vincent writes the code; the assistant explains proposals and may edit documentation.

All project documentation is written in English, in recognition of our greeting's considerable international responsibilities.

## License

Released under the [MIT License](LICENSE). You may fork the absurdity, modify the overengineering, and redistribute the inefficiency, provided you retain the required copyright and permission notice.
