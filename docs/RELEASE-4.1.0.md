# 4.1.0 — The Greeting Opens an Information Desk

**Published October 21, 2026 at 00:28:41 UTC (02:28:41 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.1.0). The annotated tag targets preparation commit #82, `7d213e7b5410b0cf43fe809d135f138e0219e7a1`; its [CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39517152564).

## The Directorate Accepts Its First Visitor

Professional Hello World acquires a documentation entrance. The greeting retains its two announcements while a small bottom-right Documentation link points to the new reading room. The institution can now offer an explanation before requiring the visitor to reconstruct its motives from the goldwork surrounding two noises.

The documentation uses the existing Next.js application. A thin `/doc` route delegates to a feature-local component, which reads the selected repository Markdown during construction. The resulting static page contains the overview; the published site does not need a permanent Markdown-reading server.

## Included scope

- Render `docs/README.md` with react-markdown and remark-gfm, including tables.
- Keep the same content readable directly from the repository, with relative links adapted to GitHub destinations in the web presentation.
- Add an ivory-and-gold reading surface, responsive headings, scrollable tables, and visible focus styling.
- Establish a documentation charter and delivery checkpoints covering architecture, practical guidance, reference, design, quality, and operations.
- Add the greeting's compact, fixed bottom-right entry link, with a scoped focus outline and no additional in-flow spacer.

Application commit #81 introduced the documentation foundation. Commit #82 adds navigation and release preparation. Annotated tag object `8af60327d4c577b7b2a828fa005effcabdb2c745` resolves to that exact preparation commit. The release is neither a draft nor a prerelease.

## Deliberately later work

Mermaid rendering, generated interface reference, full-text search, local multi-page navigation, and the proposed departmental expansion are not implemented by this milestone. The audio repertoire remains unchanged. This compatible addition is published as a minor release; no new BeepEngine version is implied.

## Verification record

For the foundation in commit #81, targeted Biome checks and fourteen existing tests passed locally. Vincent reported successful type checking and production build; generated HTML inspection found the overview, two tables, and rewritten links. The exact commit's CI succeeded: https://github.com/VincentMardon/professional-hello-world/actions/runs/39485722922.

On October 21, Vincent confirms completing Biome checks, type checking, tests, production build, and the requested keyboard, narrow-screen, and 200% zoom checks after the navigation corrections. Source inspection confirms the scoped focus selector and removal of the extra spacer. These manual checks are reported by Vincent, not an independent assistant browser audit. Existing tests do not cover the documentation route. Vincent confirms repeating the local checks after version alignment. The preparation commit subsequently passed CI and Pages deployment, as linked above.

The Directorate is opening one useful desk. Completion of every proposed ministry is not a departure requirement.
