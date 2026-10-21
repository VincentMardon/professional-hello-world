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

- The audio test has an anthracite Art Deco background: a repeating inline SVG of arches, a fine vertical texture, and a dark vignette. Mirrored gold botanical ornaments frame the headings through an SVG mask. Header lettering responds to viewport width and height; reduced page padding and centered unlocked content replace the previous desktop top offset. The existing gold separator retains its styling. The outer housing and AudioSettings use 65% background opacity to reveal more of the patterned backdrop.

- The audio test now opens with a client-side password form beneath the existing header. Its recessed field reuses statusFrame, and its gold Oxanium label underlines password as a deliberate hint. Verification derives 256 bits with PBKDF2/SHA-256, a fixed feature-specific salt, and 210,000 iterations before comparing all bytes. The panel mounts only after acceptance; reloading closes access again. This static-page gate is a presentation mechanism, not server-enforced authentication. The engine-focused page tests substitute the panel for the access component; dedicated acceptance and refusal tests are not yet included.

- The volume fader now has fixed geometry. StatusDisplay owns its dedicated stylesheet and occupies a full-width row beneath the controls at viewport widths up to 600px. Settings labels stack at that breakpoint; the unlocked page uses a 1rem gap, centered content, and viewport-height-dependent padding.

- A decorative 4px gold divider has layered relief and extends beyond the panel. At widths up to 600px, two separate segments leave space around the full-width status row. A two-line Beep Engine mark and a small italic Intel One Mono signature finish the panel footer.

- Status messages use Intel One Mono in a full-column recessed display with a fading ivory perimeter and left-aligned, spaced lettering. Shared inner-housing reflections are subdued, and AudioSettings uses its own translucent dark base.

- The audio controls sit inside a darker glass-like outer housing with a faint ivory border. This darkGlassFrame variant composes the shared glass material; panel padding and spacing decrease below 30rem.

- The audio settings reuse the volume housing through a feature-local glassFrame style. Their selectors have a 12rem preferred width constrained by available space, matching anchored picker widths, raised resting surfaces and recessed open states. Supported picker arrows rotate clockwise on opening and closing, with reduced-motion handling.

- The volume control uses a dark glass-like housing around the fader and percentage readout, eleven ivory graduations with longer marks at 0, 50, and 100%, and a polished gold guide and permanently visible rectangular thumb. The underlying control remains a native vertical range input.

- The audio test header displays Beep Engine in Michroma and The Audio Test in Oxanium, with Space Grotesk for the remaining page text, configured through next/font/google. Gradient lettering, layered shadows, a subdued ivory backdrop halo, and a decorative gold rule give the header a logo-like treatment. The existing EmptyLine component separates it from the controls.

- The audio test page uses feature-local ivory, ebony, and gold colors. Play retains its 5rem circular button inside a separate 4px gold ring with an interior gap. Its 64px SVG uses ivory gradient lettering-like relief, fills ivory on hover, and turns dark gold when pressed. The panel has a thicker shadowed base, status has deeper inset shadows, and the volume fill is recessed. A decorative ivory volume triangle replaces the visible Vol. label below the fader; the native input retains its accessible name. Customizable selects use matching gold SVG arrows with rotation-compensated shadows, while retaining the existing supported picker behavior. The main greeting retains its existing styling.

- A Next.js App Router frontend, exported as a static site, displaying **Professional "Hello, World!"** followed by *Coming soon ...*, with a component for each line, a reusable `EmptyLine` spacer, and a layout centred horizontally and vertically.
- The former Python greeting was removed in commit #33; its implementation remains in Git history.
- A CI workflow that installs dependencies and runs Biome, TypeScript checks, the homepage and audio-page Vitest suites, and the Next.js build on pushes, pull requests, and manual dispatch. Coverage measurement is not configured.
- A reusable Pages workflow called by CI after successful checks on `main`, publishing the already built artifact. Its build-to-deployment path has succeeded on GitHub, including the tests introduced in commit #38.
- Documentation, historical release notes, and an [official coding cat](docs/assets/images/coding-cat.png).

The latest published release is [**4.4.2 — The Projector Opens Its Auditorium**](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.2), released on October 21, 2026. It adds automatic fit-to-width, native fullscreen with a visible close cross, and 1–300 percent diagram zoom. Read the [release notes](docs/RELEASE-4.4.2.md) and [changelog](CHANGELOG.md). [Version 4.4.1](docs/RELEASE-4.4.1.md) introduced the zoom controls.

Version 4.0.0 directly succeeds 3.0.0, with no intermediate 3.x release. The [release process](docs/RELEASE-PROCESS.md) sets out smaller future patch/minor milestones independently of wiki-part closures; release automation remains a proposal.

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

Version **4.1.0 — The Greeting Opens an Information Desk** is [published](docs/RELEASE-4.1.0.md). Its annotated tag targets commit #82 (7d213e7), with successful CI and Pages deployment.

Version **4.2.0 — Two Reading Rooms Obtain a Corridor** is [published](docs/RELEASE-4.2.0.md). Its annotated tag targets verified preparation commit #85 (0832bb7).

## Documentation Directorate

Start with the [documentation overview](docs/README.md) for a guided map of the current project. It is readable from the repository and supplies the new `/doc` route; the generated documentation HTML has been inspected locally, and Vincent confirms local checks and manual navigation checks for the new bottom-right homepage link. The exact release-preparation commit passed CI and Pages deployment. The [documentation delivery plan](docs/DOCUMENTATION-DELIVERY.md) sets small release checkpoints, with the first in-application entrance delivered in 4.1.0.

## Further Reading

- [Contributing](CONTRIBUTING.md): tone, working practices, and documentation conventions.
- [Correspondence registry](records/README.md): issued administrative satire and the standing format for future letters, beginning with the refusal of pull request No. 1.
- [Changelog](CHANGELOG.md): an unusually eventful history of very small changes.
- [Recovery addendum](docs/postmortem-unsaved-guideline.md#recovery-addendum--the-maintainer-was-also-unsaved): the more personal context, for those who want it.
- [Collaboration rules](AGENTS.md): Vincent writes the code; the assistant explains proposals and may edit documentation.

All project documentation is written in English, in recognition of our greeting's considerable international responsibilities.

## License

Released under the [MIT License](LICENSE). You may fork the absurdity, modify the overengineering, and redistribute the inefficiency, provided you retain the required copyright and permission notice.

## Generated Source Reference

The Registry of Callable Authorities extracts the `useBeepEngine` signature and documentation comment with TypeDoc and typedoc-plugin-markdown. Read the [generated reference](docs/generated/api-pilot/README.md) in the repository or select **Engine reference** in the documentation reader at `/doc/reference/use-beep-engine`.

From `frontend`, run `npm run docs:reference` to regenerate it explicitly. `npm run build` also runs generation through `prebuild` before Next.js. Update the source comment rather than editing generated prose. Source links follow `main`; they are not immutable release snapshots. See the [pilot and verification record](docs/REFERENCE-GENERATION.md) for scope and remaining boundaries. Implementation commit #97 passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39662104965).

Version **4.5.0 — The Registry Opens Its Source Office** is [published](docs/RELEASE-4.5.0.md). Its scope is generated source reference and build integration. Package and root lockfile versions are aligned to 4.5.0, and Vincent confirms the local checks and build. Its annotated tag targets preparation commit #98 (`9505a7a`), whose [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39665481830). The stable release was published on October 21, 2026.

Commit #100 adds `npm run docs:reference:check`: regenerate the pilot reference and compare its tracked README with HEAD. CI invokes this before the build to reject stale committed output. The check updates the working generated file and can fail for intentional changes awaiting a commit. The freshness step and [CI and Pages deployment for commit #100 succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39675056415); see the pilot record for its single-file scope.

Version **4.5.1 — The Registry Checks Its Own Memory** is [in preparation](docs/RELEASE-4.5.1.md). Package and root lockfile metadata are aligned to 4.5.1, and Vincent confirms local checks and build; exact preparation-commit CI remains pending; no new tag or release is claimed.
