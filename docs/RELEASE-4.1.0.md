# 4.1.0 — The Greeting Opens an Information Desk

**Release draft — not published.** Prepared on October 21, 2026. Package and root lockfile metadata are aligned to 4.1.0. Vincent confirms the navigation corrections, local checks, production build, and manual navigation checks. Vincent also confirms repeating the local checks after version alignment. The preparation commit, its CI and Pages result, and the annotated tag remain pending.

## The Directorate Accepts Its First Visitor

Professional Hello World acquires a documentation entrance. The greeting retains its two announcements while a small bottom-right Documentation link points to the new reading room. The institution can now offer an explanation before requiring the visitor to reconstruct its motives from the goldwork surrounding two noises.

The documentation uses the existing Next.js application. A thin `/doc` route delegates to a feature-local component, which reads the selected repository Markdown during construction. The resulting static page contains the overview; the published site does not need a permanent Markdown-reading server.

## Included scope

- Render `docs/README.md` with react-markdown and remark-gfm, including tables.
- Keep the same content readable directly from the repository, with relative links adapted to GitHub destinations in the web presentation.
- Add an ivory-and-gold reading surface, responsive headings, scrollable tables, and visible focus styling.
- Establish a documentation charter and delivery checkpoints covering architecture, practical guidance, reference, design, quality, and operations.
- Add the greeting's compact, fixed bottom-right entry link, with a scoped focus outline and no additional in-flow spacer.

Application commit #81 introduced the documentation foundation. This release will also include the subsequent navigation and preparation changes once completed. The intended annotated tag must identify the exact validated release-preparation commit, not simply whichever commit main reaches later.

## Deliberately later work

Mermaid rendering, generated interface reference, full-text search, local multi-page navigation, and the proposed departmental expansion are not implemented by this milestone. The audio repertoire remains unchanged. This compatible addition is proposed as a minor release; no new BeepEngine version is implied.

## Verification record

For the foundation in commit #81, targeted Biome checks and fourteen existing tests passed locally. Vincent reported successful type checking and production build; generated HTML inspection found the overview, two tables, and rewritten links. The exact commit's CI succeeded: https://github.com/VincentMardon/professional-hello-world/actions/runs/39485722922.

On October 21, Vincent confirms completing Biome checks, type checking, tests, production build, and the requested keyboard, narrow-screen, and 200% zoom checks after the navigation corrections. Source inspection confirms the scoped focus selector and removal of the extra spacer. These manual checks are reported by Vincent, not an independent assistant browser audit. Existing tests do not cover the documentation route. Vincent confirms repeating the local checks after version alignment. Exact-commit CI and Pages verification remain required for publication.

## Publication checklist — remove from the public release body

1. Navigation corrections and requested local checks are complete, as confirmed by Vincent.
2. Review the updated documentation status and prepared changelog; preserve historical checkpoint records.
3. Package and root lockfile versions are aligned to 4.1.0 without creating a tag.
4. Local checks are confirmed by Vincent; review the prepared changelog and final documentation status before committing.
5. Vincent reviews, commits, and publishes the preparation; verify CI and Pages for that exact commit.
6. Vincent creates the annotated version tag and publishes the GitHub release. Replace this draft status with verified commit, date, and CI details; remove this checklist from the published body.

The Directorate is opening one useful desk. Completion of every proposed ministry is not a departure requirement.
