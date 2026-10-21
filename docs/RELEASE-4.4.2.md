# 4.4.2 — The Projector Opens Its Auditorium

**Published October 21, 2026 at 17:13:13 UTC (19:13:13 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.2), neither a draft nor a prerelease. This documentation capability follows PHW lore-driven numbering; package and root lockfile versions are aligned to 4.4.2.

## Scope

- Extract diagram viewport behavior into useDiagramViewport, separating it from Mermaid rendering.
- Add Fit width, using ResizeObserver to track the available content width and recalculate the scale while adjustment mode is active.
- Leave automatic adjustment when a reader uses the slider, minus/plus, or the 100 percent reset.
- Extend zoom to 1–300 percent so large diagrams can fit narrow viewports; automatic fitting remains bounded by that range and rounds down to an integer percentage.
- Add native fullscreen presentation of the diagram reader and its controls.
- Track fullscreenchange so button state follows browser-managed exits, including Escape.
- Provide a visible top-right close button, plus the text exit command, with space reserved above the controls.
- Preserve theme colors, scrollable diagram content, and bounded source disclosure in fullscreen.
- Display a message if fullscreen is unavailable or a request fails.

Fit width concerns horizontal space, not fitting the complete diagram height on one screen. Fullscreen depends on the browser and embedding context; this milestone does not implement a separate simulated fullscreen fallback. The source provides refusal handling, but no deliberate denied-request test is claimed.

## Verification checkpoint

Source inspection confirms the shared hook, corrected fullscreen state name, the explicit Exit fullscreen label, and foreground/background theme colors. Targeted Biome previously passed for five documentation feature files. Vincent subsequently confirms the requested final corrections, local checks, type checking, tests, production build, and manual checks for fit after resizing, both themes, and closing through the cross and Escape.

These browser checks are Vincent's report, not an independent assistant audit. Dedicated automated ResizeObserver, fullscreen, and denied-request coverage is not established. Vincent confirms the checks and build for the version-aligned preparation state; preparation commit #94 passed its [exact CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39640802283).

## Verified publication

Annotated tag object `a6ef609daa675a436fbd5cee3668b46413bc1ab4` resolves to preparation commit #94, `9adaf76a7dd29c939a275070671b798ee104493c`. This documentation-only publication follow-up does not move the tag.

No new Markdown page or additional diagram is required to justify this milestone: the reader gains an adjustment mode and an auditorium. Audio generation and playback remain unchanged.
