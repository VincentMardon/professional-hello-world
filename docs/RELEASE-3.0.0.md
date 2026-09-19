# 3.0.0 — The Great Invisible Reconstruction

*Published September 19, 2026 as [v3.0.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v3.0.0). The annotated tag targets release-preparation commit #39, `a14a2cd00e3ef27d4e37f6944e044f9987ddcb9a`.*

## The Same Greeting, Under Entirely New Management

Professional Hello World has undergone a reconstruction of considerable institutional ambition. It continues to say hello and to announce that something is coming soon.

Vincent describes a week of intensive work culminating in the first test suite. The result is a new technical foundation behind an intentionally familiar public experience. The greeting has acquired a framework, typed components, extracted styles, a repeatable build, a publication chain, and four occasions on which it must explain itself.

The Ministry of Visible Progress has requested a demonstration. The demonstration contains two familiar lines and a formally constituted interval.

This is version 3.0.0.

## What Actually Changes for Visitors

The page now uses a centred flex column, system typography, padding, and a minimum height of `100dvh`. The two text blocks are separated by the reusable `EmptyLine` component and its surrounding gaps. The greeting's former trailing colon has been removed.

The spacer contributes a non-shrinking `1rem` block size, with a `0.5rem` gap on each side: `2rem` of space between the text blocks. It is empty and carries `aria-hidden="true"` because it is decorative.

The familiar greeting and italic promise remain. This continuity is the artistic premise; the layout is not claimed to be identical to version 2.1.2.

The Department of Emotionally Significant Emptiness considers the interval its flagship achievement. No content has been added to substantiate this assessment.

## What Has Been Rebuilt

- **Frontend:** Next.js App Router, React, and TypeScript replace the standalone HTML as the source of the published site. The old HTML remains a historical reference.
- **Composition:** `ProfessionalHelloWorld`, `ComingSoon`, and `EmptyLine` are real components assembled by the homepage.
- **Styles:** Vanilla Extract provides build-time CSS extraction, page layout, and the spacer's dimensions.
- **Document:** Typed metadata and viewport exports describe the site; Open Graph addresses point to the intended public site and included coding-cat image. Inactive resource placeholders remain comments.
- **Checks:** Biome checks formatting and code, TypeScript checks types, and Vitest runs the first behavioral suite.
- **Publication:** CI installs locked dependencies, checks, tests, and builds. Eligible runs on `main` pass the resulting artifact to a reusable Pages workflow, which deploys it without rebuilding.
- **Practice:** English documentation, explicit collaboration rules, a maintained wiki, and precise verification records accompany the implementation.

These changes have already been delivered through the commits since `v2.1.2`. The release gathers them into one milestone; it does not pretend that the final release-preparation commit implements them all again.

## Four Tests Close the First Reconstruction

The suite uses Vitest, React Testing Library, jest-dom, and jsdom. It renders the real homepage and checks:

1. The complete greeting and its punctuation.
2. The quoted greeting's strong semantic importance.
3. The coming-soon announcement and its semantic emphasis.
4. The empty decorative interval's attribute and position between the lines.

The suite names are deliberately poetic. The assertions have practical responsibilities. Tests are cleaned up after each execution, and React and Vanilla Extract imports are transformed through their Vite plugins.

`npm test` supports watch mode. `npm run test:run` executes the suite once and is required by CI before building.

The tribunal has opened with four hearings. It has not issued a certificate of universal correctness.

## Compatibility and the Major Version

The old `python backend/src/hello.py` command is removed, along with its standalone terminal greeting implementation. Its source remains in Git history. This is a concrete compatibility break for anyone using that command.

Development and publication now use Node.js 24, npm, and the Next.js build. The standalone HTML is no longer the publication entry point. Run the frontend commands from `frontend`; the local route includes `/professional-hello-world/`.

The major version records this change of technical generation and the terminal command's retirement. It does not imply a new public API, a database, or a larger vocabulary for the greeting.

The private frontend package and its lockfile now identify version `3.0.0`, aligned with the project milestone. This metadata change adds no runtime behavior and does not publish an npm package.

## Verification and Remaining Boundaries

The [CI run for application commit #38](https://github.com/VincentMardon/professional-hello-world/actions/runs/35448593710) passed dependency installation, Biome, TypeScript, the test suite, the production build, artifact packaging, and deployment. The initial local verification also passed all four tests, Biome, and TypeScript checking without emit or incremental output.

The [CI run for release-preparation commit #39](https://github.com/VincentMardon/professional-hello-world/actions/runs/35449649488) also passed the checks, tests, build, artifact packaging, and deployment. The annotated `v3.0.0` tag targets that exact commit; the GitHub release was published after this verification.

jsdom does not calculate visual layout. These tests do not verify centring, zoom, narrow-screen rendering, generated metadata, or the production export as experienced in a browser. No new assistant browser inspection is claimed here.

Coverage measurement, E2E testing, mutation testing, and multi-browser automation are not installed. They will be introduced when real behavior warrants them. WebGL, statistics, an API, and shared greeting sessions remain future directions rather than contents of this release.

## The Institutional Result

The greeting's purpose remains small enough to understand immediately. The work behind it has become more explicit, testable, and repeatable.

The first suite marks the end of this reconstruction's opening phase. Future work can build on a foundation that now checks something about the page it publishes.

The words remain familiar.

Their supporting paperwork has entered a new major version.
