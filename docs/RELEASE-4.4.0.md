# 4.4.0 — The Bureau Receives Its Diagram Projector

**Published October 21, 2026 at 05:50:45 UTC (07:50:45 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.0), neither a draft nor a prerelease. Package and root lockfile versions are aligned to 4.4.0.

## An itinerary becomes a projection

The Bureau of Audible Transit now has an authored sound-lifecycle guide, its own documentation route, and two Mermaid sequence diagrams: engine readiness and one playback request. The explanation distinguishes Wasm initialization from lazy browser-audio creation, and a Started message from completion of the sound.

## Scope since 4.3.0

- Include the sound-lifecycle guide and `/doc/audio-lifecycle` route introduced in commit #89.
- Add two diagram sources with accessible titles and descriptions to the same repository-readable Markdown.
- Recognize Mermaid code blocks in the existing Markdown reader; ordinary code blocks keep their existing rendering.
- Load Mermaid dynamically in the browser and render SVG after the page is mounted.
- Regenerate diagrams for the selected light or dark theme, serializing configuration and rendering operations.
- Ignore results from obsolete effect instances after navigation or a theme change.
- Preserve a source disclosure and explanatory prose when rendering is unavailable.
- Provide a horizontally scrollable, keyboard-focusable diagram region with scoped focus styling.
- Include the documentation-only record of stable 4.3.0 from commit #88.

The dependency is recorded as Mermaid ^12.2.0 with the lockfile. The renderer uses strict mode and no click bindings. The tabIndex lint exception is attached directly to the focusable region's attribute and explains its keyboard-scrolling purpose.

## Static export and limits

The export contains the page, explanations, and Mermaid source disclosures. SVG generation happens in the browser and needs JavaScript. This milestone does not generate diagram images during the build or add automatic image export.

The fallback does not diagnose every possible failure. The queue prevents simultaneous initialization/render operations in this module, and the active-instance guard avoids replacing current content with obsolete results. No automated concurrency, theme-race, or diagram-rendering coverage is claimed at preparation.

## Evidence checkpoint

Commit #89, `f65e7012a928863d3d904c13b1f66bbd39484406`, passed its [CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39544451489) for the prose-and-route foundation. Those results predate the Mermaid integration.

Targeted Biome checks now pass for four documentation feature files, including the corrected attribute-level suppression. Diff whitespace checks pass. Vincent confirms successful local checks, type checking, tests, production build, and the requested browser checks for both diagrams, themes, repeated theme switching, navigation, keyboard scrolling, and source disclosure. These are his reported results, not an independent assistant browser audit.

The source implements an error fallback, but no dedicated malformed-input execution or automated renderer coverage is claimed here. A successful static build alone does not establish working SVG rendering in the browser; the requested manual rendering checks were separately confirmed by Vincent.

## Verified publication

Annotated tag object `d7bfa28aedc071a55d0ee42e08ae7e7cb19a126e` resolves to preparation commit #90, `3bf2472c7b158bd2a0c396d769c5fc9932148379`. Its [exact CI and Pages deployment succeeded](https://github.com/VincentMardon/professional-hello-world/actions/runs/39551230411). This documentation-only follow-up does not move the published tag.

The Bureau can release its first working projector without adding generated interface reference, search, persistent theme preferences, or another sound.
