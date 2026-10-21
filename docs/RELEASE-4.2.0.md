# 4.2.0 — Two Reading Rooms Obtain a Corridor

**Release preparation — not published.** Vincent selected this minor milestone on October 21, 2026. Package and root lockfile metadata are aligned to 4.2.0. Vincent confirms completing the requested local checks, type checking, tests, and production build after alignment. The preparation commit, its exact CI and Pages result, and tag/release publication remain pending.

## The Directorate Authorizes Return Travel

PHW's documentation now offers two connected reading rooms. Reception introduces the project; the Directorate of Structural Disproportion explains its architecture. Visitors can move between them through shared navigation and links in the Markdown itself.

The institution has resisted duplicating the architecture manuscript merely to give it another address. The existing repository document becomes the source of the new web page. Two rooms, two manuscripts, one reader: the procurement committee is investigating this unexpectedly modest ratio.

## Included scope since 4.1.0

- Add `/doc/architecture`, with its own metadata and the shared documentation reader.
- Register the overview and architecture explicitly by title, source filename, and local route.
- Generate two-page navigation with a current-page marker and wrapping layout.
- Convert links between registered documents into local Next.js links while retaining GitHub destinations for other repository material.
- Expand the architecture account with the documentation pipeline, responsibility boundaries, and a guided source-reading exercise.
- Include the documentation-only publication-record follow-up from commit #83, identifying 4.1.0 as published without moving its tag.

Application commit #84, `60b44089df7bdc5b721ae856cea97175717e5392`, contains the new architecture capability. The eventual 4.2.0 tag must target the separately validated release-preparation commit that aligns versions and records this milestone.

## Verification and limits

Vincent confirmed local checks, type checking, tests, production build, reciprocal navigation through menu and text, and direct architecture-route reload. Targeted Biome checks passed for four documentation source files. Inspection of both generated HTML pages confirmed project-prefixed local links and the correct current-page markers.

Commit #84 subsequently passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39529770689). These results cover that implementation commit. The final release-preparation state needs its own checks, followed by verification of its exact published CI and deployment.

Reported browser checks are Vincent's verification, not an independent assistant browser audit. Existing automated suites do not establish coverage of the documentation routes or link resolver. The reader currently resolves document-relative links against the common `docs/` directory; nested content would require revisiting that assumption.

Mermaid rendering, generated reference, search, and further departments remain future work. No new dependency or audio capability is introduced by the two-page implementation.

## Publication procedure — preparation only

1. Package and root lockfile metadata are aligned to 4.2.0 without creating a tag.
2. Vincent confirms the requested local checks and production build after version alignment; navigation and direct route access were checked for the implementation increment.
3. Vincent reviews and publishes the preparation commit. Verify that exact commit's CI and Pages deployment.
4. Vincent creates an annotated v4.2.0 tag on that verified commit and publishes a stable GitHub release.
5. Replace this preparation status with the verified publication record. Remove preparation instructions from the public GitHub release body.

The corridor is a compatible new capability, making 4.2.0 a minor milestone. It is not necessary to complete the remaining palace before acknowledging that visitors can now reach a second room and find their way back.
