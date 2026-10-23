# Operations — The Bureau of Reproducible Greetings

[Documentation reception](README.md) · [Frontend field guide](FRONTEND-GUIDE.md) · [Documentation workshop](DOCUMENTATION-WORKSHOP.md)

## 1. What this bureau operates

PHW is a Next.js application exported as static files. The greeting, audio annex, and documentation reader share that application. GitHub Actions verifies a checkout, builds it, and can publish the resulting artifact to GitHub Pages. There is no persistent application server in this deployment and no database provisioning step hidden behind the reception desk.

This guide describes the checked-in scripts and workflows. It is an operating manual, not a certificate that a particular future run succeeded. Use the commit SHA and its actual Actions run when reporting verification.

## 2. Start from the right desk

Use Node.js 24 to match the configured CI major version. From the repository's `frontend` directory, install the locked dependency graph with `npm ci`, then start the development server with `npm run dev`. Installation replaces the installed dependency tree; it is not an ordinary command to run after every prose edit.

The configured application base path is `/professional-hello-world`. With the usual development port, begin at `http://localhost:3000/professional-hello-world/`. The documentation route is under `/professional-hello-world/doc/`, and the listening room under `/professional-hello-world/audio-test/`. If the server selects a different port, use the address reported in its output.

Run frontend commands from `frontend`: the documentation reader locates authored Markdown relative to that working directory. Starting an unrelated process at the repository root does not establish the same context.

The Bureau does not require a new dependency installation merely because a heading has developed an adjective.

## 3. The inspection instruments

| Command | Its actual responsibility | What it does not establish |
| --- | --- | --- |
| `npm run check` | Run Biome without applying fixes | Runtime behavior or browser layout |
| `npm run check:fix` | Apply Biome's configured safe fixes | That every suggested change was applied or is appropriate |
| `npm run typecheck` | Generate Next route types and run TypeScript without emitting application JavaScript | Audible output or correct visual design |
| `npm run test:run` | Execute the Vitest suite once | A complete browser journey |
| `npm run docs:reference` | Regenerate the selected TypeDoc Markdown | Agreement with the committed reference |
| `npm run docs:reference:check` | Regenerate the expanded reference and inspect whole-directory Git status | Truth of comments, ignored output, or fragment existence |
| `npm run build` | Regenerate reference through prebuild, then construct the static export | Successful deployment to Pages |

Formatting, route-type generation, and reference extraction can write local files. Review the diff before committing. A green command is evidence for its scope, not a diplomatic passport for every other concern.

## 4. What the existing tests actually test

The homepage suite renders the real page composition and checks its greeting, emphasis, and decorative interval. The audio-page suite mocks the BeepEngine factory and methods. It replaces the access component with the listening panel so it can exercise initialization, settings, playback dispatch, status, and failure behavior at that integration boundary.

That substitution means the suite does not test password acceptance or refusal. Mocking BeepEngine means it does not execute the real Wasm generator, verify browser audio permissions, or prove that a speaker produced sound. jsdom is not a visual layout engine. DOM assertions cannot approve mobile spacing, fullscreen rendering, or the aesthetic suitability of the institutional brasswork.

The test configuration uses React and Vanilla Extract Vite plugins, a jsdom environment, and cleanup after each test. Inspect the [configuration](../frontend/vitest.config.ts), [setup](../frontend/vitest.setup.ts), [homepage suite](../frontend/src/app/page.test.tsx), and [audio suite](../frontend/src/app/audio-test/page.test.tsx). Coverage measurement and end-to-end browser testing are not configured.

## 5. Follow one change through CI

The [CI workflow](../.github/workflows/ci.yml) runs on pushes, pull requests, and manual dispatch. Its sanity job checks out the source, prepares Node.js 24, installs dependencies, checks formatting rules and types, runs tests, checks reference freshness, and builds. A failing command prevents later normal steps from proceeding.

For `main` outside pull-request events, it uploads `frontend/out` as the Pages artifact. The dependent publication job calls the [reusable Pages workflow](../.github/workflows/pages.yml), which deploys that artifact rather than installing and building the application again. Pull-request verification does not publish the site.

This arrangement gives one production build per CI execution. A branch with an open pull request can still receive separate push and pull-request runs. Concurrency on the Pages deployment group serializes publication work; it does not turn every workflow into one global build queue.

## 6. Diagnose the failing boundary

| Observation | Inspect first | Appropriate next action |
| --- | --- | --- |
| Biome rejects a selector or semantic role | The reported source location | Correct the actual rule violation; review any fixes |
| Reference check shows a Markdown diff | Source comment, TypeDoc configuration, generated README | Review generation and commit intentional source/reference changes together |
| Types fail after a route addition | Import path, document ID, generated route types | Correct the source; do not treat a rendered dev page as proof of type correctness |
| Tests fail while the page looks right | Assertion, setup, mocks, current behavior | Determine whether the contract or implementation changed |
| Build fails | First failing build stage, including prebuild | Separate extraction failure from Next compilation or export failure |
| Workflow passes but expected release is absent | Tags and GitHub Releases separately | Check whether only the site was deployed |
| Play reports Started but nothing is heard | Browser output, volume, permissions, real engine path | Remember that Started is status, not an acoustic measurement |

Do not remove safeguards solely to turn the dashboard green. Equally, do not invent an infrastructure incident when a local import path explains the result.

## 7. Deployment and release are different operations

A successful main-branch run can update the public website without creating a version tag. An annotated tag identifies source history. A GitHub release adds a named public version record. The installed workflow does not automatically perform all three.

For releases, follow the [release process](RELEASE-PROCESS.md). Vincent owns application commits, tags, and pushes. Verify the exact preparation commit before tagging, and keep later publication-record commits separate from the tag target. The [delivery history](DOCUMENTATION-DELIVERY.md) preserves the evidence already established for earlier milestones.

For a browser review, use the real page: direct route reload, local navigation, keyboard focus, narrow-screen reading, theme changes, diagram controls, and explicit fullscreen exit where supported. Record what was actually exercised. The Bureau's strongest certificate is a precise account of a modest check.
