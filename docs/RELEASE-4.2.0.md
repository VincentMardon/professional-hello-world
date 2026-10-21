# 4.2.0 — Two Reading Rooms Obtain a Corridor

**Published October 21, 2026 at 02:17:25 UTC (04:17:25 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.2.0), neither a draft nor a prerelease. Package and root lockfile metadata are aligned to 4.2.0.

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

Application commit #84, `60b44089df7bdc5b721ae856cea97175717e5392`, contains the new architecture capability. The annotated v4.2.0 tag object `e91b3875589e003fcfa7e1091dbdf5e750fc226a` resolves to release-preparation commit #85, `0832bb7c0a25a816094f365d21a59f857cf15d23`.

## Verification and limits

Vincent confirmed local checks, type checking, tests, production build, reciprocal navigation through menu and text, and direct architecture-route reload. Targeted Biome checks passed for four documentation source files. Inspection of both generated HTML pages confirmed project-prefixed local links and the correct current-page markers.

Commit #84 subsequently passed [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39529770689). These results cover that implementation commit. Release-preparation commit #85 subsequently passed its own [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39531756706), after Vincent confirmed the local checks and build following version alignment.

Reported browser checks are Vincent's verification, not an independent assistant browser audit. Existing automated suites do not establish coverage of the documentation routes or link resolver. The reader currently resolves document-relative links against the common `docs/` directory; nested content would require revisiting that assumption.

Mermaid rendering, generated reference, search, and further departments remain future work. No new dependency or audio capability is introduced by the two-page implementation.

The corridor is a compatible new capability, making 4.2.0 a minor milestone. It is not necessary to complete the remaining palace before acknowledging that visitors can now reach a second room and find their way back.
